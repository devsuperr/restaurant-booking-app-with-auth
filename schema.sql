-- RestauBook Database Schema
-- Run this in your Supabase SQL editor

-- ─── Extensions ───────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─── Profiles table (auto-created on signup) ──────────────────
CREATE TABLE IF NOT EXISTS public.profiles (
  id            UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email         TEXT NOT NULL,
  full_name     TEXT,
  phone         TEXT,
  avatar_url    TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;

CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT USING (id = auth.uid());
CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE USING (id = auth.uid());
CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT WITH CHECK (id = auth.uid());

-- ─── Auto-create profile on signup trigger ────────────────────
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1))
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- ─── Restaurants ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.restaurants (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name           TEXT NOT NULL,
  description    TEXT NOT NULL,
  cuisine        TEXT NOT NULL,
  address        TEXT NOT NULL,
  city           TEXT NOT NULL,
  phone          TEXT NOT NULL DEFAULT '',
  email          TEXT NOT NULL DEFAULT '',
  image_url      TEXT NOT NULL DEFAULT '',
  cover_url      TEXT NOT NULL DEFAULT '',
  rating         NUMERIC(3,2) NOT NULL DEFAULT 4.5,
  review_count   INT NOT NULL DEFAULT 0,
  price_range    INT NOT NULL DEFAULT 2 CHECK (price_range BETWEEN 1 AND 4),
  opening_time   TEXT NOT NULL DEFAULT '11:00',
  closing_time   TEXT NOT NULL DEFAULT '22:00',
  max_party_size INT NOT NULL DEFAULT 8,
  is_active      BOOLEAN NOT NULL DEFAULT true,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.restaurants ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can view active restaurants" ON public.restaurants;
CREATE POLICY "Anyone can view active restaurants"
  ON public.restaurants FOR SELECT USING (is_active = true);

-- ─── Bookings ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.bookings (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  restaurant_id     UUID NOT NULL REFERENCES public.restaurants(id) ON DELETE CASCADE,
  booking_date      DATE NOT NULL,
  booking_time      TEXT NOT NULL,
  party_size        INT NOT NULL CHECK (party_size > 0),
  status            TEXT NOT NULL DEFAULT 'confirmed' CHECK (status IN ('pending','confirmed','cancelled','completed')),
  special_requests  TEXT,
  confirmation_code TEXT NOT NULL DEFAULT ('RB' || upper(substring(gen_random_uuid()::text, 1, 6))),
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own bookings" ON public.bookings;
DROP POLICY IF EXISTS "Users can insert own bookings" ON public.bookings;
DROP POLICY IF EXISTS "Users can update own bookings" ON public.bookings;

CREATE POLICY "Users can view own bookings"
  ON public.bookings FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can insert own bookings"
  ON public.bookings FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users can update own bookings"
  ON public.bookings FOR UPDATE USING (user_id = auth.uid());

-- ─── Favorites ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.favorites (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  restaurant_id UUID NOT NULL REFERENCES public.restaurants(id) ON DELETE CASCADE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, restaurant_id)
);

ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage own favorites" ON public.favorites;
CREATE POLICY "Users can manage own favorites"
  ON public.favorites FOR ALL USING (user_id = auth.uid());

-- ─── Reviews ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.reviews (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  restaurant_id UUID NOT NULL REFERENCES public.restaurants(id) ON DELETE CASCADE,
  booking_id    UUID REFERENCES public.bookings(id),
  rating        INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment       TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can view reviews" ON public.reviews;
DROP POLICY IF EXISTS "Users can insert own reviews" ON public.reviews;

CREATE POLICY "Anyone can view reviews"
  ON public.reviews FOR SELECT USING (true);
CREATE POLICY "Users can insert own reviews"
  ON public.reviews FOR INSERT WITH CHECK (user_id = auth.uid());

-- ─── Seed restaurants ─────────────────────────────────────────
INSERT INTO public.restaurants (name, description, cuisine, address, city, phone, image_url, cover_url, rating, review_count, price_range, opening_time, closing_time) VALUES
  ('Osteria Barolo',      'Handmade pasta and wood-fired dishes from Northern Italy, with an exceptional wine cellar.',            'Italian',       '142 Mulberry St',        'New York',   '+1 212-555-0101', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80', 4.8, 1247, 3, '12:00', '23:00'),
  ('Sakura Omakase',      'Intimate 12-seat omakase experience with fresh-flown Tsukiji market fish.',                            'Japanese',      '88 East 52nd St',        'New York',   '+1 212-555-0202', 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=1200&q=80', 4.9, 892,  4, '18:00', '22:30'),
  ('Le Jardin Brasserie', 'Classic French brasserie with a sun-drenched garden terrace and seasonal prix-fixe menus.',            'French',        '24 Rue Lafayette',       'Chicago',    '+1 312-555-0303', 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80', 4.7, 2103, 3, '11:30', '22:00'),
  ('The Hearth & Grill',  'Open-fire American cooking: dry-aged steaks, smoked brisket, and craft cocktails.',                  'American',      '505 W Kinzie St',        'Chicago',    '+1 312-555-0404', 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80', 4.6, 3418, 3, '12:00', '23:30'),
  ('Amalfi Coast Kitchen','Sun-soaked flavours of southern Italy: fresh seafood, house-made limoncello, and sea views.',         'Italian',       '1901 Ocean Dr',          'Miami',      '+1 305-555-0505', 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80', 4.7, 1876, 3, '12:00', '23:00'),
  ('Nobu West',           'Signature black cod, wagyu, and new-style sashimi in a sleek Hollywood setting.',                    'Japanese',      '903 N La Cienega Blvd',  'Los Angeles','+1 310-555-0606', 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200&q=80', 4.8, 2654, 4, '18:00', '00:00'),
  ('Casa Oaxaca',         'Modern Mexican cuisine celebrating mole, mezcal, and ancestral recipes from Oaxaca.',                'Mexican',       '215 S Beverly Dr',       'Los Angeles','+1 310-555-0707', 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80', 4.6, 1432, 2, '11:00', '22:00'),
  ('Spice Route',         'A journey through India: clay-pot curries, tandoor breads, and rare single-origin teas.',            'Indian',        '301 Lexington Ave',      'New York',   '+1 212-555-0808', 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80', 4.7, 988,  2, '11:30', '22:30'),
  ('The Blue Anchor',     'Upscale New England seafood: whole lobster, chowder, and an oyster bar on the harbour.',             'Seafood',       '77 Harbour Dr',          'Miami',      '+1 305-555-0909', 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80', 4.8, 1654, 4, '12:00', '22:00'),
  ('Méditerranée',        'Wood-fired whole fish, mezze platters, and Lebanese wine on a breezy terrace.',                     'Mediterranean', '618 N Michigan Ave',     'Chicago',    '+1 312-555-1010', 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80', 4.6, 742,  3, '11:30', '22:00')
ON CONFLICT DO NOTHING;
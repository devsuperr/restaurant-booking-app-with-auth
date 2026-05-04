import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Falls back to a no-op stub during pre-backend phases so the app still renders.
export const supabase =
  url && anonKey
    ? createClient(url, anonKey)
    : (null as unknown as ReturnType<typeof createClient>);

export const isSupabaseReady = Boolean(url && anonKey);
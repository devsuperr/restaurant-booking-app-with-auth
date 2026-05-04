import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// When env vars are configured (Phase 2), this client talks to your Supabase project.
// Until then, the app uses the localStorage-backed store in src/lib/store.ts which
// mirrors the schema in schema.sql 1:1 — so swapping is a drop-in replacement.
export const supabase = createClient(url ?? 'https://placeholder.supabase.co', anonKey ?? 'placeholder');

export const isSupabaseConfigured = Boolean(url && anonKey && !url.includes('placeholder'));
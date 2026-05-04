import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

/** True only when both env vars are set — gate backend calls on this. */
export const isSupabaseReady: boolean = Boolean(url && anonKey);

/** Lazy client. Returns null if env not set, so the app renders fine pre-backend. */
let _client: SupabaseClient | null = null;
export function getSupabase(): SupabaseClient | null {
  if (!isSupabaseReady) return null;
  if (!_client) _client = createClient(url as string, anonKey as string);
  return _client;
}
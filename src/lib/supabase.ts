import { createClient } from '@supabase/supabase-js';

const url = 'https://flizmxoouctgvrjxrbhm.supabase.co';
const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsaXpteG9vdWN0Z3ZyanhyYmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4MzUxNDYsImV4cCI6MjA5MzQxMTE0Nn0.3m2gumJPbRFnqd6yDetAiawPfP12cpcU_TTCu3mi_RY';

export const supabase = createClient(url, anonKey);
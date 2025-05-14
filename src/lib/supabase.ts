import { createClient } from '@supabase/supabase-js';

// Default to empty strings to check if they're available
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if credentials are available and log warnings if not
if (!supabaseUrl) {
  console.error('Missing VITE_SUPABASE_URL environment variable');
}

if (!supabaseAnonKey) {
  console.error('Missing VITE_SUPABASE_ANON_KEY environment variable');
}


const supabase = createClient(
  supabaseUrl ,
  supabaseAnonKey 
);

export default supabase;

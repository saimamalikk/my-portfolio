import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-supabase-url.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

export const isSupabaseConfigured = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return (
    !!url &&
    url !== "https://placeholder-supabase-url.supabase.co" &&
    !!key &&
    key !== "placeholder-anon-key" &&
    key !== "YOUR_SUPABASE_ANON_KEY_HERE"
  );
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

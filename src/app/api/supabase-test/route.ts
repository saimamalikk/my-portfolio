import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";

export async function GET() {
  const isConfigured = isSupabaseConfigured();

  if (!isConfigured) {
    return NextResponse.json({
      status: "CONFIG_PENDING",
      message: "🟡 Supabase URL is set, but NEXT_PUBLIC_SUPABASE_ANON_KEY is still waiting in .env.local",
      projectUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      instructions: "Paste your Supabase 'anon' 'public' key inside .env.local file.",
    });
  }

  try {
    // Attempt a quick test query on contact_messages table
    const { data, error } = await supabase.from("contact_messages").select("id").limit(1);

    if (error) {
      return NextResponse.json({
        status: "TABLE_NOT_FOUND_OR_ERROR",
        message: `🔴 Connected to Supabase URL, but database table query error: ${error.message}`,
        solution: "Make sure you ran the SQL table creation query in Supabase SQL Editor.",
        errorDetail: error,
      });
    }

    return NextResponse.json({
      status: "LIVE_CONNECTED",
      message: "🟢 CONGRATULATIONS! Supabase Database is 100% Live & Connected Working Perfectly!",
      projectUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      table: "contact_messages",
      testRecordsFound: data ? data.length : 0,
    });
  } catch (err: any) {
    return NextResponse.json({
      status: "CONNECTION_ERROR",
      message: "🔴 Failed to connect to Supabase backend.",
      error: err.message,
    });
  }
}

import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message fields are required." },
        { status: 400 }
      );
    }

    const submissionData = {
      name,
      email,
      subject: subject || "Portfolio Contact Form Inquiry",
      message,
      created_at: new Date().toISOString(),
    };

    if (isSupabaseConfigured()) {
      const { data, error } = await supabase
        .from("contact_messages")
        .insert([submissionData]);

      if (error) {
        console.error("Supabase insert error details:", error);
        
        let userFriendlyError = "Failed to store message in database.";
        if (error.message?.includes('relation "public.contact_messages" does not exist') || error.code === '42P01') {
          userFriendlyError = "Supabase Table 'contact_messages' not created yet! Please run the SQL table script in Supabase SQL Editor.";
        } else if (error.message?.includes('row-level security') || error.code === '42501') {
          userFriendlyError = "Supabase RLS Policy missing! Please run the SQL policy script in Supabase SQL Editor.";
        } else if (error.message) {
          userFriendlyError = `Supabase Error: ${error.message}`;
        }

        return NextResponse.json(
          { error: userFriendlyError, detail: error },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, data });
    }

    // Fallback mode when keys are not configured
    return NextResponse.json({
      success: true,
      message: "Message received successfully!",
      data: submissionData,
    });
  } catch (error) {
    console.error("Contact API exception:", error);
    return NextResponse.json(
      { error: "Internal server error while processing message." },
      { status: 500 }
    );
  }
}

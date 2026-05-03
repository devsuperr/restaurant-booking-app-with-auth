import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
};

function generateCode(): string {
  return "RB" + Math.random().toString(36).substring(2, 8).toUpperCase();
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("Missing authorization");

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } }
    );

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    if (req.method === "GET") {
      const { data, error } = await supabase
        .from("bookings")
        .select("*, restaurants(*)")
        .eq("user_id", user.id)
        .order("booking_date", { ascending: false });
      if (error) throw error;
      return new Response(JSON.stringify({ bookings: data }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (req.method === "POST") {
      const body = await req.json();
      const { data, error } = await supabase
        .from("bookings")
        .insert({
          user_id: user.id,
          restaurant_id: body.restaurant_id,
          booking_date: body.booking_date,
          booking_time: body.booking_time,
          party_size: body.party_size,
          special_requests: body.special_requests ?? null,
          confirmation_code: generateCode(),
          status: "confirmed",
        })
        .select()
        .single();
      if (error) throw error;

      // Send confirmation email via Resend if configured
      const resendKey = Deno.env.get("RESEND_API_KEY");
      if (resendKey && user.email) {
        try {
          await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${resendKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "RestauBook <bookings@restaubook.app>",
              to: user.email,
              subject: `Booking confirmed — ${data.confirmation_code}`,
              html: `<h2>Your table is reserved</h2><p>Confirmation: <strong>${data.confirmation_code}</strong></p><p>Date: ${data.booking_date} at ${data.booking_time}</p><p>Party size: ${data.party_size}</p>`,
            }),
          });
        } catch (_e) {
          // Email failure shouldn't block the booking
        }
      }

      return new Response(JSON.stringify({ booking: data }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (req.method === "PATCH") {
      const body = await req.json();
      const { data, error } = await supabase
        .from("bookings")
        .update({ status: body.status, updated_at: new Date().toISOString() })
        .eq("id", body.id)
        .eq("user_id", user.id)
        .select()
        .single();
      if (error) throw error;
      return new Response(JSON.stringify({ booking: data }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
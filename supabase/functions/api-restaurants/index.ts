import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const url = new URL(req.url);
    const cuisine = url.searchParams.get("cuisine");
    const city = url.searchParams.get("city");
    const search = url.searchParams.get("search");

    let query = supabase.from("restaurants").select("*").eq("is_active", true);
    if (cuisine && cuisine !== "All") query = query.eq("cuisine", cuisine);
    if (city && city !== "All") query = query.eq("city", city);
    if (search) query = query.ilike("name", `%${search}%`);

    const { data, error } = await query.order("rating", { ascending: false });
    if (error) throw error;

    return new Response(JSON.stringify({ restaurants: data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
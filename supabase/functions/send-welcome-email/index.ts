// RestauBook — Welcome Email
// Sends a branded welcome email via Resend after a new user signs up.
// Triggered from the frontend right after supabase.auth.signUp succeeds.
//
// Env vars required (set in Supabase project secrets):
//   RESEND_API_KEY        — your Resend API key
//   RESEND_FROM_EMAIL     — verified sender, e.g. "RestauBook <hello@yourdomain.com>"
//                           (defaults to "RestauBook <onboarding@resend.dev>" if unset)

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface WelcomePayload {
  email: string;
  full_name?: string | null;
}

function buildHtml(name: string): string {
  const safeName = name.replace(/[<>&"']/g, (c) => (
    { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;" }[c] as string
  ));
  return `<!doctype html>
<html><head><meta charset="utf-8"><title>Welcome to RestauBook</title></head>
<body style="margin:0;padding:0;background:#faf7f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#2a1f15">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#faf7f2;padding:40px 20px">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e8dcc7">
        <!-- Hero -->
        <tr><td style="background:#c25e3f;padding:40px 40px 32px;text-align:center">
          <div style="display:inline-block;width:56px;height:56px;background:#ffffff;color:#c25e3f;border-radius:16px;font-family:Georgia,serif;font-weight:bold;font-size:28px;line-height:56px;margin-bottom:16px">R</div>
          <h1 style="margin:0;color:#ffffff;font-family:Georgia,serif;font-size:28px;font-weight:bold">Welcome to RestauBook!</h1>
          <p style="margin:8px 0 0;color:#fae8d8;font-size:14px">Your seat at every great table.</p>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:40px">
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6">Hi ${safeName || "there"},</p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#5a4a3c">Thanks for joining RestauBook — we're thrilled to have you. You can now discover and reserve tables at over 1,200 of the city's best restaurants in seconds.</p>
          <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#5a4a3c"><strong style="color:#2a1f15">One last step:</strong> please check your inbox for a separate verification email and click the confirmation link to activate your account.</p>
          <!-- Steps -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#faf7f2;border-radius:12px;border:1px solid #e8dcc7;margin:0 0 24px">
            <tr><td style="padding:20px 24px">
              <p style="margin:0 0 12px;font-size:13px;font-weight:bold;color:#2a1f15;text-transform:uppercase;letter-spacing:1px">What's next</p>
              <p style="margin:0 0 8px;font-size:14px;color:#5a4a3c">🔍 <strong>Browse</strong> restaurants by cuisine, city, or vibe</p>
              <p style="margin:0 0 8px;font-size:14px;color:#5a4a3c">📅 <strong>Reserve</strong> in under 60 seconds</p>
              <p style="margin:0;font-size:14px;color:#5a4a3c">⭐ <strong>Save</strong> your favourite tables for later</p>
            </td></tr>
          </table>
          <!-- CTA -->
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto"><tr><td>
            <a href="https://restaubook.app" style="display:inline-block;background:#c25e3f;color:#ffffff;font-weight:600;font-size:15px;padding:14px 28px;border-radius:12px;text-decoration:none">Start exploring restaurants</a>
          </td></tr></table>
          <p style="margin:32px 0 0;font-size:13px;color:#a8907c;line-height:1.6">If you didn't sign up for RestauBook, you can safely ignore this email — no account will be created.</p>
        </td></tr>
        <!-- Footer -->
        <tr><td style="background:#faf7f2;padding:24px 40px;border-top:1px solid #e8dcc7;text-align:center">
          <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:16px;font-weight:bold;color:#2a1f15">RestauBook</p>
          <p style="margin:0;font-size:12px;color:#a8907c">Discover · Reserve · Savour</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const { email, full_name }: WelcomePayload = await req.json();

    if (!email || typeof email !== "string") {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const FROM = Deno.env.get("RESEND_FROM_EMAIL") || "RestauBook <onboarding@resend.dev>";

    if (!RESEND_API_KEY) {
      // No API key configured — return success silently so signup flow doesn't break.
      // The user still gets Supabase's auto-verification email.
      console.warn("RESEND_API_KEY not configured — skipping welcome email");
      return new Response(JSON.stringify({ ok: true, skipped: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const html = buildHtml(full_name || "");

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [email],
        subject: "Welcome to RestauBook 🍽️",
        html,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error("Resend API error:", resendRes.status, errBody);
      return new Response(JSON.stringify({ ok: false, error: "Email send failed", detail: errBody }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const result = await resendRes.json();
    return new Response(JSON.stringify({ ok: true, id: result.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-welcome-email error:", err);
    return new Response(JSON.stringify({ ok: false, error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
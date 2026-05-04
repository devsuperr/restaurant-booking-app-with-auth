/**
 * Mock AI follow-up generator.
 *
 * Generates realistic email drafts based on lead state + chosen tone.
 * Swap this with a real call (OpenAI / Claude / your edge function) by replacing
 * the body of `generateFollowUp` — the signature is stable.
 */
import type { Lead, Tone } from './types';

const greetings: Record<Tone, (name: string) => string> = {
  Professional: (n) => `Dear ${n.split(' ')[0]},`,
  Friendly: (n) => `Hi ${n.split(' ')[0]} 👋`,
  Sales: (n) => `Hi ${n.split(' ')[0]},`,
  Short: (n) => `Hey ${n.split(' ')[0]},`,
};

const closings: Record<Tone, string> = {
  Professional: 'Best regards,\nAlex Rivera\nNorthwind Studio',
  Friendly: 'Cheers!\nAlex',
  Sales: 'Looking forward,\nAlex Rivera',
  Short: '— Alex',
};

function bodyFor(lead: Lead, tone: Tone): string {
  const note = (lead.notes || '').slice(0, 140);
  const ref = note ? ` (Last note on file: "${note.replace(/\s+/g, ' ').trim()}")` : '';

  const variants: Record<Lead['status'], Record<Tone, string>> = {
    New: {
      Professional: `Thank you for your interest in working with us. I'd love to learn more about ${lead.company} and how our team can help you achieve your goals. Would you have 20 minutes this week for an introductory call?`,
      Friendly: `Thanks for reaching out — I'm genuinely excited to learn more about ${lead.company}! Got a few minutes this week to hop on a quick call so I can hear what you're up to?`,
      Sales: `Companies like ${lead.company} typically see a 3× increase in qualified pipeline within 60 days of starting with us. I'd love to show you exactly how — got 15 minutes this week?`,
      Short: `Quick question — got 15 minutes this week to chat about ${lead.company}'s lead workflow?`,
    },
    Contacted: {
      Professional: `I wanted to follow up on my previous note. I understand you're busy, so I'll keep this brief — happy to share a tailored overview whenever the timing is right.${ref}`,
      Friendly: `Just circling back! Inboxes are wild — totally get it. Want to grab a coffee chat (virtual works too) sometime this week?`,
      Sales: `Don't want this to slip — we've got a couple of slots left for Q2 onboarding and ${lead.company} would be a great fit. Want to lock in time?`,
      Short: `Bumping this in case it got buried — still keen to chat?`,
    },
    Qualified: {
      Professional: `Thank you for the engaging conversations to date. Based on what you've shared about ${lead.company}'s needs, I'm confident we're a strong fit. I'd like to propose a tailored walkthrough with your team — when works best?`,
      Friendly: `Loved chatting last time! I think we'd be a great match for ${lead.company}. Want to set up a deeper dive with your team?`,
      Sales: `You're a perfect fit for our Growth tier — and right now we're offering priority onboarding for new accounts this quarter. Ready to pull the trigger?`,
      Short: `Ready for a deeper dive with your team? Let's lock in a time.`,
    },
    'Proposal Sent': {
      Professional: `I hope you've had an opportunity to review the proposal I sent for ${lead.company}. I'm following up to address any questions about scope, pricing, or timeline. Please don't hesitate to reach out.${ref}`,
      Friendly: `Hey! Just checking in to make sure the proposal landed okay. Anything you'd like me to clarify?`,
      Sales: `That proposal lays out exactly how ${lead.company} can hit its growth targets in 90 days. Ready to move forward, or want to jump on a call to walk through it?`,
      Short: `Got a chance to review the proposal? Happy to clarify anything.`,
    },
    Won: {
      Professional: `On behalf of the entire team, welcome aboard! We're thrilled to partner with ${lead.company} and committed to a smooth onboarding. Your dedicated account manager will reach out within 24 hours.`,
      Friendly: `Welcome to the family! 🎉 We're so excited to have ${lead.company} on board. Your success manager will be in touch ASAP.`,
      Sales: `Welcome to LeadPilot! You made the right call — ${lead.company} is going to see results fast. Onboarding kicks off shortly.`,
      Short: `Welcome aboard! Onboarding starts this week.`,
    },
    Lost: {
      Professional: `I appreciate you taking the time to evaluate us. I respect your decision and wish ${lead.company} continued success. If anything changes, please know we're here.`,
      Friendly: `Totally get it — no hard feelings! Hope the path you've chosen works out great. Door's always open if things change.`,
      Sales: `Many of our best customers came back after initially going a different direction. Mind if I check in 90 days from now?`,
      Short: `Understood — best of luck! I'll check back in a few months.`,
    },
  };

  return variants[lead.status][tone];
}

function subjectFor(lead: Lead, tone: Tone): string {
  const subjects: Record<Lead['status'], Record<Tone, string>> = {
    New: {
      Professional: `Introduction — LeadPilot AI for ${lead.company}`,
      Friendly: `Quick hello from LeadPilot 👋`,
      Sales: `How ${lead.company} can 3× pipeline in 60 days`,
      Short: `Quick question about ${lead.company}`,
    },
    Contacted: {
      Professional: `Following up — ${lead.company}`,
      Friendly: `Bumping this up 🙂`,
      Sales: `Q2 onboarding slots — ${lead.company}`,
      Short: `Re: our chat`,
    },
    Qualified: {
      Professional: `Next steps for ${lead.company}`,
      Friendly: `Ready for a deeper dive?`,
      Sales: `Priority onboarding — ${lead.company}`,
      Short: `Team walkthrough?`,
    },
    'Proposal Sent': {
      Professional: `Re: Proposal for ${lead.company}`,
      Friendly: `Did the proposal land okay?`,
      Sales: `Ready to move forward, ${lead.name.split(' ')[0]}?`,
      Short: `Proposal — any questions?`,
    },
    Won: {
      Professional: `Welcome to LeadPilot, ${lead.name.split(' ')[0]}`,
      Friendly: `🎉 Welcome aboard!`,
      Sales: `Welcome — let's get ${lead.company} live fast`,
      Short: `Welcome aboard!`,
    },
    Lost: {
      Professional: `Thank you, ${lead.name.split(' ')[0]}`,
      Friendly: `All the best!`,
      Sales: `Keeping in touch — ${lead.company}`,
      Short: `All the best!`,
    },
  };
  return subjects[lead.status][tone];
}

export interface GeneratedMessage {
  subject: string;
  body: string;
}

export async function generateFollowUp(lead: Lead, tone: Tone): Promise<GeneratedMessage> {
  // Simulate latency so the loading state feels real.
  await new Promise((r) => setTimeout(r, 900 + Math.random() * 600));

  const subject = subjectFor(lead, tone);
  const body = `${greetings[tone](lead.name)}\n\n${bodyFor(lead, tone)}\n\n${closings[tone]}`;
  return { subject, body };
}

/* ─── Future: real LLM ─────────────────────────────────────────────────────────
import { supabase } from './supabase';
export async function generateFollowUpWithLLM(lead: Lead, tone: Tone): Promise<GeneratedMessage> {
  const { data, error } = await supabase.functions.invoke('ai-followup', {
    body: { lead, tone },
  });
  if (error) throw error;
  return data as GeneratedMessage;
}
─────────────────────────────────────────────────────────────────────────────── */
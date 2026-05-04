import { Lead, ToneType } from './types';

// Mock AI generator — generates realistic follow-up emails based on lead data.
// To connect a real API (OpenAI / Claude), replace the generateMessage function
// below with a call to your edge function or AI provider.

const toneInstructions: Record<ToneType, string> = {
  Professional: 'formal, polished, business-appropriate',
  Friendly: 'warm, casual, conversational',
  Sales: 'persuasive, value-focused, action-oriented',
  Short: 'brief, direct, respectful of their time',
};

const statusContext: Record<string, string> = {
  New: 'This is a first contact — introduce yourself and your product.',
  Contacted: 'You've already reached out once. Follow up without being pushy.',
  Qualified: 'They've shown serious interest. Reinforce value and next steps.',
  'Proposal Sent': 'A proposal was sent. Check in on their decision timeline.',
  Won: 'They're a client now. Onboarding or check-in message.',
  Lost: 'They went another direction. Keep the relationship warm for the future.',
};

function pickGreeting(tone: ToneType, name: string): string {
  const first = name.split(' ')[0];
  if (tone === 'Friendly') return `Hey ${first}!`;
  if (tone === 'Short') return `Hi ${first},`;
  return `Dear ${first},`;
}

function pickClosing(tone: ToneType): string {
  if (tone === 'Friendly') return 'Cheers,\n[Your Name]';
  if (tone === 'Sales') return 'Looking forward to moving forward together,\n[Your Name]';
  if (tone === 'Short') return 'Best,\n[Your Name]';
  return 'Kind regards,\n[Your Name]';
}

function buildBody(lead: Lead, tone: ToneType): string {
  const context = statusContext[lead.status] ?? '';
  const noteSnippet = lead.notes ? `\n\nContext from notes: "${lead.notes}"` : '';

  const bodyVariants: Record<string, Record<string, string>> = {
    New: {
      Professional: `I'm reaching out because I believe ${lead.company} could benefit from LeadPilot AI — our platform helps service businesses like yours streamline lead management and automate follow-ups, saving your team hours each week.\n\nWould you be open to a 15-minute call to explore if it's a good fit?`,
      Friendly: `I came across ${lead.company} and thought there might be a great fit with what we're building at LeadPilot. We help businesses like yours manage leads and automate follow-ups without the chaos.\n\nWould love to chat if you're open to it!`,
      Sales: `Businesses like ${lead.company} using LeadPilot AI report a 3x increase in lead conversion within the first 60 days. Our platform eliminates the manual follow-up work so your team can focus on closing.\n\nReady to see it in action? I can walk you through a quick demo this week.`,
      Short: `I'd love to show you how LeadPilot AI can help ${lead.company} close more deals with less effort. Would a 15-minute call work for you?`,
    },
    Contacted: {
      Professional: `I wanted to follow up on my previous message regarding LeadPilot AI. I understand your time is valuable, and I'll keep this brief — we've helped teams similar to ${lead.company} reduce their sales cycle by an average of 28%.\n\nIf you'd like to revisit the conversation, I'm happy to connect at your convenience.`,
      Friendly: `Just circling back on my last message! I know inboxes get wild — totally understand. I just wanted to make sure my note didn't get lost in the shuffle.\n\nWould this week work for a quick chat?`,
      Sales: `You expressed some interest earlier, and I don't want you to miss the window to lock in our current pricing before our next update. ${lead.company} could be fully onboarded and generating results within 2 weeks.\n\nShall we get 20 minutes on the calendar?`,
      Short: `Just a gentle follow-up — did you get a chance to look at my last message? Happy to chat anytime this week.`,
    },
    Qualified: {
      Professional: `Thank you for the engaging conversations we've had. Based on what you've shared about ${lead.company}'s needs, I'm confident our platform is the right fit.\n\nI'd like to propose a formal next step — would you be available for a tailored product walkthrough with your team?`,
      Friendly: `It's been great getting to know more about what you're building at ${lead.company}! I think we're a really solid match.\n\nLet's lock in a time to take things to the next step — what does your schedule look like this week?`,
      Sales: `You've qualified for our dedicated account setup, which means your team gets priority onboarding and a dedicated success manager. This offer is available to a limited number of accounts this quarter.\n\nShall I send over the agreement for your review?`,
      Short: `Ready to move forward? I can have everything set up for ${lead.company} within a week. Let's talk.`,
    },
    'Proposal Sent': {
      Professional: `I hope you've had the opportunity to review the proposal I sent for ${lead.company}. I'm following up to address any questions or concerns you may have about the scope, pricing, or implementation timeline.\n\nPlease don't hesitate to reach out — I'm here to help make this decision as easy as possible.`,
      Friendly: `Hey! Just checking in to see if you got a chance to look over the proposal I sent. No rush at all — just wanted to make sure it landed and that everything looks good.\n\nAny questions? I'm happy to jump on a quick call!`,
      Sales: `The proposal I sent outlines exactly how ${lead.company} can achieve [Key Goal] within 30 days of going live. I've seen similar businesses generate ROI in the first month.\n\nAre you ready to move forward? I'd love to get you started.`,
      Short: `Did you get a chance to review the proposal? Happy to answer any questions or adjust anything for ${lead.company}.`,
    },
    Won: {
      Professional: `On behalf of the LeadPilot team, I'd like to formally welcome ${lead.company} as our newest client. We're excited to partner with you and fully committed to ensuring a smooth onboarding experience.\n\nYour dedicated account manager will be in touch within 24 hours.`,
      Friendly: `Welcome to the LeadPilot family, ${lead.name.split(' ')[0]}! 🎉 We're so excited to have ${lead.company} on board. Our team is ready and pumped to help you hit your goals.\n\nExpect a message from your success manager very soon!`,
      Sales: `Congratulations on making a decision that will accelerate ${lead.company}'s growth. You made the right call — we're committed to delivering results that exceed your expectations.`,
      Short: `Welcome aboard! Your account is being set up now. We'll have you fully onboarded within 48 hours.`,
    },
    Lost: {
      Professional: `I want to respect your decision and wish ${lead.company} continued success. If your needs or situation change in the future, please know that LeadPilot AI will be here.\n\nI would also appreciate any feedback on how we can improve our offering.`,
      Friendly: `Totally understand — no hard feelings at all! I hope the path you've chosen works out great for ${lead.company}.\n\nIf you ever want to revisit, the door's always open. Would love to stay in touch!`,
      Sales: `While I'm sorry we won't be working together right now, I respect your decision. Many of our best clients came back after initially choosing a different direction. We'll be here when the time is right.\n\nMind if I check in with you in 90 days?`,
      Short: `Understood — hope things go well for ${lead.company}! Feel free to reach out if anything changes.`,
    },
  };

  const body = bodyVariants[lead.status]?.[tone] ?? context;
  return body + (noteSnippet && tone !== 'Short' ? '' : '');
}

export async function generateFollowUpEmail(lead: Lead, tone: ToneType): Promise<string> {
  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 1200));

  const greeting = pickGreeting(tone, lead.name);
  const body = buildBody(lead, tone);
  const closing = pickClosing(tone);

  return `${greeting}\n\n${body}\n\n${closing}`;
}

// Future: Replace generateFollowUpEmail with this when API key is available:
// export async function generateFollowUpEmailWithOpenAI(lead: Lead, tone: ToneType): Promise<string> {
//   const response = await fetch('/api/ai-generate', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ lead, tone }),
//   });
//   const data = await response.json();
//   return data.message;
// }
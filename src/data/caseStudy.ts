import type { Storyline } from "./storylines";

// Real winning conversation from production data (anonymized).
// Customer name + dealer location changed for the case study.
export const caseStudyConversation: Storyline = {
  id: "real-win",
  title: "Cold Lead → Showroom Visit in 13 Minutes",
  subtitle: "A real conversation, captured from an active rooftop",
  dealerName: "I 40 Autos",
  customerName: "Cooper",
  vehicle: "Ford F-250 Super Duty",
  icon: "✓",
  touchpoints: [
    {
      day: 1,
      label: "Day 1 — Discover timeline",
      strategy: "Open with a low-pressure timeline question",
      messages: [
        {
          author: "ai",
          body: "Thinking about your next ride — are you looking to find something soon or just exploring for now? Knowing your timeline helps me make this easy and quick for you!\n\nReply STOP to opt out.",
        },
        {
          author: "human",
          body: "I looked at your F-250s and F-350s online. I plan to come by your I-40 location this afternoon.",
        },
        {
          author: "ai",
          body: "Perfect — we're at 7962 National Service Road, Greensboro, NC 27409. We've got Ford Super Duty trucks in stock (F-250SD and F-350SD); what time this afternoon are you thinking?",
        },
        {
          author: "human",
          body: "Approximately 2:30",
        },
        {
          author: "ai",
          body: "2:30 today works — we're open until 7. Want me to set a 2:30 visit for you under your name, Cooper?",
        },
        {
          author: "human",
          body: "That sounds great",
        },
        {
          author: "ai",
          body: "All set — you're scheduled for today at 2:30 at I 40 Autos. When you get here, just let us know you're here to see the F-250 / F-350 Super Duty trucks.",
        },
      ],
    },
  ],
};

export type CadenceDay = {
  day: number;
  label: string;
  purpose: string;
  example: string;
};

// 14-day, 8-touchpoint cadence per the MVP scope doc.
export const cadence: CadenceDay[] = [
  {
    day: 1,
    label: "Immediate",
    purpose: "Fire within 5 minutes of lead creation. Capture intent.",
    example: "Quick question: are you looking to lease or finance?",
  },
  {
    day: 2,
    label: "Trade-In Angle",
    purpose: "Introduce trade-in value before the showroom conversation.",
    example: "I can pull an estimated value on your current vehicle before you even come in.",
  },
  {
    day: 3,
    label: "Feature Highlight",
    purpose: "Reference a specific feature on the lead's vehicle. First appointment ask.",
    example: "I have openings tomorrow at 10 AM or 2 PM for a test drive — which works better?",
  },
  {
    day: 4,
    label: "The Pivot",
    purpose: "If the original vehicle is sold or no engagement, offer an alternate match.",
    example: "The Tucson just moved, but I found a Sportage at $2k less. Worth a conversation?",
  },
  {
    day: 6,
    label: "Reduce Friction",
    purpose: "Acknowledge overwhelm. Reference prior conversation.",
    example: "Based on what we talked about, I can pull a simple comparison so you're not stuck researching.",
  },
  {
    day: 8,
    label: "Inventory Freshness",
    purpose: "Surface new arrivals. Keep the lead warm.",
    example: "A few new SUVs arrived this week that match what you were looking at.",
  },
  {
    day: 12,
    label: "Address the Hesitation",
    purpose: "If a specific objection was logged earlier, address it directly.",
    example: "I know the price was a sticking point. Is that still the main thing holding you back?",
  },
  {
    day: 14,
    label: "Close the File",
    purpose: "Leave the door open without over-committing to future outreach.",
    example: "Should I keep an eye out for a specific vehicle, or did you end up purchasing somewhere?",
  },
];

export type SourceResult = {
  source: string;
  responseRate: number; // %
  appointmentRate: number; // %
};

export const sourceResults: SourceResult[] = [
  { source: "AutoBytel", responseRate: 40.0, appointmentRate: 3.3 },
  { source: "AutoTrader", responseRate: 36.2, appointmentRate: 4.4 },
  { source: "CarGurus", responseRate: 35.4, appointmentRate: 3.4 },
  { source: "CarFax", responseRate: 35.3, appointmentRate: 2.8 },
  { source: "Capital One", responseRate: 34.8, appointmentRate: 4.9 },
  { source: "Edmunds", responseRate: 34.0, appointmentRate: 3.0 },
  { source: "Cars.com", responseRate: 31.6, appointmentRate: 2.6 },
];

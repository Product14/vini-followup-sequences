export type Message = {
  author: "ai" | "human";
  body: string;
};

export type TouchPoint = {
  day: number;
  label: string;
  strategy: string;
  messages: Message[];
  hasReply?: boolean;
};

export type Storyline = {
  id: string;
  title: string;
  subtitle: string;
  dealerName: string;
  customerName: string;
  vehicle: string;
  icon: string;
  touchpoints: TouchPoint[];
};

export const storylines: Storyline[] = [
  {
    id: "slow-burn",
    title: "The Slow Burn",
    subtitle: "9 days of varied angles, a reply on Day 9, test drive booked for Saturday",
    dealerName: "Greenfield Motors",
    customerName: "Sarah",
    vehicle: "2023 Hyundai Tucson Limited",
    icon: "🔥",
    touchpoints: [
      {
        day: 2,
        label: "Design & First Impression",
        strategy: "Lead with visual appeal and invite for a test drive",
        messages: [
          {
            author: "ai",
            body: "Hi Sarah, the 2023 Hyundai Tucson Limited in red stands out with its sleek design and premium features that you really have to see up close.\n\nHow about stopping by this week for a personalized tour and test drive? I can hold it just for you!\n\nReply STOP to opt out.",
          },
        ],
      },
      {
        day: 3,
        label: "Driving Experience",
        strategy: "Shift angle to the ride quality and tech",
        messages: [
          {
            author: "ai",
            body: "Hey Sarah, the red 2023 Hyundai Tucson Limited delivers an impressively smooth ride with advanced tech that you need to experience firsthand.\n\nWhen would be a good time this week to come by and take it for a spin? I'll make sure it's ready for you.\n\nReply STOP to opt out.",
          },
        ],
      },
      {
        day: 4,
        label: "Safety Technology",
        strategy: "Highlight safety features for family-oriented buyers",
        messages: [
          {
            author: "ai",
            body: "Hi Sarah, the 2023 Hyundai Tucson Limited's SmartSense safety suite offers cutting-edge driver aids you'll want to experience firsthand.\n\nWhen can I set aside time this week for you to explore its features and take it for a test drive?\n\nReply STOP to opt out.",
          },
        ],
      },
      {
        day: 6,
        label: "Interior Comfort",
        strategy: "Appeal to daily driving comfort and luxury feel",
        messages: [
          {
            author: "ai",
            body: "Hey Sarah, the 2023 Hyundai Tucson Limited's refined cabin offers luxurious seating and intuitive controls that elevate every drive.\n\nReady to feel the comfort and tech firsthand? Let me know when you'd like to visit: I'll have it waiting for you.\n\nReply STOP to opt out.",
          },
        ],
      },
      {
        day: 8,
        label: "Urgency Nudge",
        strategy: "Create urgency without being pushy",
        messages: [
          {
            author: "ai",
            body: "Hi Sarah, the red 2023 Hyundai Tucson Limited you want is still available but moving fast.\n\nTo guarantee it's here when you visit, let's lock in your test drive time this week at Greenfield Motors. What day works best for you?\n\nReply STOP to opt out.",
          },
        ],
      },
      {
        day: 9,
        label: "Reply → Test Drive Booked",
        strategy: "Customer re-engages: agent qualifies in two messages and books a hard time",
        hasReply: true,
        messages: [
          {
            author: "ai",
            body: "Hey Sarah, the 2023 Hyundai Tucson Limited's cutting-edge infotainment system makes every drive more connected and enjoyable.\n\nWant to experience its intuitive controls and premium sound in person? Let's lock in a time this week for your test drive.\n\nReply STOP to opt out.",
          },
          {
            author: "human",
            body: "Do you have Tucson available?",
          },
          {
            author: "ai",
            body: "Yep — we've got 8 used Tucsons in stock, including a Calypso Red Pearl '23 Limited with 18k miles (the one you'd been eyeing).\n\nI can hold it for a 30-min test drive. Saturday 10am or Sunday 1pm?",
          },
          {
            author: "human",
            body: "saturday 10 works",
          },
          {
            author: "ai",
            body: "Locked in — Sat 10am, Calypso Red Tucson Limited ready to drive. I'll text you Friday with directions and my cell in case you're running behind.",
          },
        ],
      },
    ],
  },
  {
    id: "ghost-recovery",
    title: "The 97-Day Ghost",
    subtitle: "Dead 3-month lead — opener, rate pivot, equity hook, Thursday 6pm booked",
    dealerName: "Hillcrest Ford",
    customerName: "Marcus",
    vehicle: "2022 Ford F-150 XLT",
    icon: "👻",
    touchpoints: [
      {
        day: 97,
        label: "Reactivation → Equity Hook → Appointment",
        strategy: "Open with a curious, no-ask question. Pivot to rate softening. Use trade equity to make payment tangible. Book a hard time.",
        hasReply: true,
        messages: [
          {
            author: "ai",
            body: "Hey Marcus, it's Jenna over at Hillcrest Ford. You looked at a '22 F-150 XLT with me back in February — never wanted to leave you hanging.\n\nStill driving the Silverado, or did something change?",
          },
          {
            author: "human",
            body: "still got it. been busy",
          },
          {
            author: "ai",
            body: "Totally get it. Quick one — payment was the main thing holding you up last time, right?\n\nRates actually softened a bit since Feb. Want me to pull what your number would look like today, no commitment?",
          },
          {
            author: "human",
            body: "what kinda number we talking",
          },
          {
            author: "ai",
            body: "If you can shoot me a ballpark on your Silverado's miles, I'll have something real for you in 10 min instead of guessing.\n\nRoughly?",
          },
          {
            author: "human",
            body: "like 78k",
          },
          {
            author: "ai",
            body: "Perfect. Based on trade comps this week you're sitting around $24-26k of equity. That moves your payment more than you'd think.\n\nI've got 4:30 or 6:00 Thursday — which works better to run actual numbers?",
          },
          {
            author: "human",
            body: "6 works",
          },
          {
            author: "ai",
            body: "Locked — Thursday 6pm. I'll have the F-150 XLT pulled up front and your Silverado pre-appraised so we're not guessing at the desk.",
          },
        ],
      },
    ],
  },
  {
    id: "credit-shy",
    title: "The Credit-Shy Lead",
    subtitle: "Customer self-disqualifies on credit — soft pull, Saturday 11am booked",
    dealerName: "Coastal Nissan",
    customerName: "Tony",
    vehicle: "Nissan Rogue",
    icon: "💳",
    touchpoints: [
      {
        day: 110,
        label: "Soft Pull → In-Person Appointment",
        strategy: "Own the dropped follow-up. Normalize sub-prime with a real stat. Offer a no-impact soft pull. Capture the payment ceiling. Book the in-person.",
        hasReply: true,
        messages: [
          {
            author: "ai",
            body: "Hey Tony, it's Maya from Coastal Nissan. You filled out a finance pre-qual on the Rogue in January — I never got back to you and that's on me.\n\nStill in the market or did life happen?",
          },
          {
            author: "human",
            body: "my credit ain't great, didn't wanna waste yall time",
          },
          {
            author: "ai",
            body: "Appreciate you being straight with me. Truth is about 1 in 3 deals we close are sub-650 — we work with 14 lenders specifically for that.\n\nNothing changes on your credit if I just have one of them take a soft look. You good with me running it that way?",
          },
          {
            author: "human",
            body: "soft pull only?",
          },
          {
            author: "ai",
            body: "Soft only. No score impact, no commitment, no salesperson calling you 6x.\n\nIf a number comes back you like, you come in. If not, I'll tell you exactly what to fix to get there in 90 days.",
          },
          {
            author: "human",
            body: "aight do it",
          },
          {
            author: "ai",
            body: "On it. What's the most you'd want your payment to be if everything lined up?",
          },
          {
            author: "human",
            body: "like 450 tops",
          },
          {
            author: "ai",
            body: "Got it. Soft pull will be back tomorrow morning.\n\nIf your number lands at or under $450, can you swing by Saturday 11am to actually see the Rogue? Pearl White SV, 18k miles — I'll have your offer printed before you sit down.",
          },
          {
            author: "human",
            body: "yeah 11 works",
          },
          {
            author: "ai",
            body: "Locked — Sat 11am. I'll text you tomorrow with your soft-pull number first so you walk in already knowing where we're at.",
          },
        ],
      },
    ],
  },
  {
    id: "service-reactivation",
    title: "The Declined Repair Recall",
    subtitle: "Customer declined brakes in Sept — Saturday 8:30am service booked",
    dealerName: "Bayview Toyota Service",
    customerName: "Ms. Alvarez",
    vehicle: "Toyota Camry",
    icon: "🔧",
    touchpoints: [
      {
        day: 240,
        label: "Safety Reactivation → Saturday RO",
        strategy: "Lead with safety, not the upsell. Translate the warning ('squeak = wear indicator') into a real future cost ('rotor job doubles the bill'). Close with a Saturday slot and a loaner.",
        hasReply: true,
        messages: [
          {
            author: "ai",
            body: "Hi Ms. Alvarez, it's Robin over at Bayview Toyota service. Your Camry was in for an oil change in Sept and the tech flagged front brakes at 3mm — you held off.\n\nJust want to make sure you're still safe out there. How are they feeling?",
          },
          {
            author: "human",
            body: "they squeak a little when its cold but otherwise ok",
          },
          {
            author: "ai",
            body: "That squeak is usually the wear indicator doing its job — means we're close to metal-on-metal, which is when rotors get involved and the bill doubles.\n\nWe've got a brake special this month: pads + inspection $189, normally $260. Want me to grab you a Saturday slot before it turns into a rotor job?",
          },
          {
            author: "human",
            body: "how long does it take",
          },
          {
            author: "ai",
            body: "90 min, free loaner if you don't want to wait.\n\nI have 8:30 or 11:00 this Sat — which?",
          },
          {
            author: "human",
            body: "830",
          },
          {
            author: "ai",
            body: "Booked — Sat 8:30am, brake special + free loaner. I'll text you Friday with the service advisor's name.",
          },
        ],
      },
    ],
  },
  {
    id: "sunday-lead",
    title: "The Sunday Night Save",
    subtitle: "After-hours inquiry — agent beats Monday morning, Monday 6pm booked",
    dealerName: "Mountain Chevy",
    customerName: "Jordan",
    vehicle: "2024 Chevy Tahoe Z71",
    icon: "🌙",
    touchpoints: [
      {
        day: 1,
        label: "Beat Monday Morning → Monday 6pm",
        strategy: "Reply Sunday night so the lead doesn't shop competitors by 10am Monday. Pre-appraise the trade. Walk the customer into a vehicle pulled up front, numbers already run.",
        hasReply: true,
        messages: [
          {
            author: "ai",
            body: "Hey Jordan! Saw you just inquired on the '24 Tahoe Z71 — Alex from Mountain Chevy.\n\nWe're closed tonight but I didn't want you wondering till morning. That one's still on the lot.\n\nAre you looking to be in something by next weekend, or more like next month?",
          },
          {
            author: "human",
            body: "next weekend ideally, wifes lease is up",
          },
          {
            author: "ai",
            body: "Got it — that's tight but very doable. Two things help me have everything ready when you walk in:\n\n1. What's she driving now + roughly what's the buyout?\n\n2. Any chance you want to take the Tahoe home Monday vs test driving 3 things?",
          },
          {
            author: "human",
            body: "22 telluride sx, buyout is like 31. and yeah just the tahoe is fine",
          },
          {
            author: "ai",
            body: "Perfect. I'll have the Telluride appraised pre-arrival, Tahoe pulled up front, and your numbers run before you sit down.\n\nMonday 6pm or Tuesday 6pm?",
          },
          {
            author: "human",
            body: "monday",
          },
          {
            author: "ai",
            body: "Locked — Mon 6pm. I'll text you Monday morning with your trade range so there are no surprises.",
          },
        ],
      },
    ],
  },
  {
    id: "trade-in-tease",
    title: "The Trade-In Tease",
    subtitle: "Customer didn't know they had equity — agent books appraisal + test drive Wednesday",
    dealerName: "Riverside Mazda",
    customerName: "Casey",
    vehicle: "2024 Mazda CX-5",
    icon: "💵",
    touchpoints: [
      {
        day: 22,
        label: "Equity Wake-Up → Wednesday 6pm",
        strategy: "Reframe payment math through trade equity, not rates. Walk the lead to a real ACV in two messages. Book trade walkaround + test drive same week.",
        hasReply: true,
        messages: [
          {
            author: "ai",
            body: "Hey Casey, Maya at Riverside Mazda. You'd looked at the CX-5 a few weeks back.\n\nQuick Q — what are you driving now? If your trade has equity, your CX-5 number might look totally different than you think.",
          },
          {
            author: "human",
            body: "2020 forester, owe like 18k",
          },
          {
            author: "ai",
            body: "Foresters with average miles are trading around $22-24k right now. If yours falls there, you'd be looking at $4-6k toward the down.\n\nWorth me running it tight? What's the mileage?",
          },
          {
            author: "human",
            body: "65k miles",
          },
          {
            author: "ai",
            body: "Solid. That puts you at ~$23,400 ACV — meaning ~$5,400 of positive equity. Changes the CX-5 payment more than rates would.\n\nI have Wednesday 6pm or Saturday 11am for trade walkaround + test drive. Which works?",
          },
          {
            author: "human",
            body: "wed 6 works",
          },
          {
            author: "ai",
            body: "Booked — Wed 6pm. I'll have a Soul Red CX-5 Premium pulled up and your Forester pre-appraised so we're not starting from zero.",
          },
        ],
      },
    ],
  },
];

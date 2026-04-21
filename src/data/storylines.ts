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
    subtitle: "Persistent, varied outreach that finally gets a reply on Day 9",
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
        label: "Customer Replies",
        strategy: "Customer re-engages: agent pivots to real-time sales conversation",
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
            body: "Yep: we've got used Hyundai Tucsons available right now (8 total).\n\nAny color preference (gray, blue, red, or white)?",
          },
        ],
      },
    ],
  },
  {
    id: "luxury-touch",
    title: "The Luxury Touch",
    subtitle: "Agent adapts tone for high-end inventory",
    dealerName: "Coastal Auto Gallery",
    customerName: "David",
    vehicle: "2016 Bentley Continental GT",
    icon: "✨",
    touchpoints: [
      {
        day: 2,
        label: "Premium Introduction",
        strategy: "Set an exclusive, luxury tone from the first message",
        messages: [
          {
            author: "ai",
            body: "Good afternoon David, I just spotted a stunning 2016 Bentley Continental GT with premium leather interior and advanced navigation ready for a test drive.\n\nSeeing it in person truly reveals its luxury: can I help you book a time to experience this masterpiece at the showroom?\n\nReply STOP to opt out.",
          },
        ],
      },
      {
        day: 3,
        label: "Exclusivity & Rarity",
        strategy: "Emphasize scarcity and condition at the buyer's budget",
        messages: [
          {
            author: "ai",
            body: "Hi David, just found an exclusive 2016 Bentley Continental GT in superb condition: rare to see one this well-maintained near your budget.\n\nSeeing it live is the best way to appreciate its true value. When can I reserve a time for you at the showroom?\n\nReply STOP to opt out.",
          },
        ],
      },
      {
        day: 5,
        label: "Craftsmanship Focus",
        strategy: "Shift to bespoke details that differentiate from mass-market",
        messages: [
          {
            author: "ai",
            body: "David, I noticed a Bentley Continental with exquisite handcrafted details and a commanding presence that photos don't capture.\n\nExperiencing its luxury in person is truly unique: shall I arrange a private viewing at our showroom this week?\n\nReply STOP to opt out.",
          },
        ],
      },
      {
        day: 8,
        label: "Driving Experience",
        strategy: "Appeal to the visceral experience of driving a GT",
        messages: [
          {
            author: "ai",
            body: "Hi David, I just experienced the Bentley Continental's effortless power and smooth ride: nothing compares to feeling it firsthand.\n\nThis kind of driving thrill can't be captured in photos. When's a good time this week to reserve your personal test drive?\n\nReply STOP to opt out.",
          },
        ],
      },
      {
        day: 11,
        label: "Timeless Appeal",
        strategy: "Position as a timeless investment, not a depreciating purchase",
        messages: [
          {
            author: "ai",
            body: "David, the Bentley Continental's classic design and impeccable craftsmanship never go out of style: seeing it live reveals details photos miss.\n\nI can arrange a private viewing this week so you can experience its true luxury. When works best for you?\n\nReply STOP to opt out.",
          },
        ],
      },
    ],
  },
  {
    id: "price-drop",
    title: "The Price Drop Win",
    subtitle: "Agent catches a price reduction and reaches out proactively",
    dealerName: "Summit Subaru",
    customerName: "Emily",
    vehicle: "2024 Subaru Forester Limited",
    icon: "💰",
    touchpoints: [
      {
        day: 2,
        label: "Initial Outreach",
        strategy: "Lead with low mileage and premium audio as hooks",
        messages: [
          {
            author: "ai",
            body: "Hi Emily, the 2024 Subaru Forester Limited we have features only 11,850 miles and premium Harman/Kardon audio for a truly immersive drive.\n\nWould you like to schedule a time to experience it firsthand at our showroom?\n\nReply STOP to opt out.",
          },
        ],
      },
      {
        day: 4,
        label: "Price Drop Alert",
        strategy: "Price reduction detected on the lead's tracked VIN: agent reaches out with urgency",
        messages: [
          {
            author: "ai",
            body: "Hey Emily, great news: the 2024 Subaru Forester Limited you're exploring just got a $7,000 price drop!\n\nPlus it boasts heated seats, a sunroof, and premium Harman/Kardon sound. Want to stop by and see how it feels firsthand?\n\nReply STOP to opt out.",
          },
        ],
      },
      {
        day: 6,
        label: "Value Reinforcement",
        strategy: "Broaden appeal with practical features at a great value",
        messages: [
          {
            author: "ai",
            body: "Hi Emily, the 2019 Subaru Forester Premium we have stands out with heated seats, Apple CarPlay, and AWD: all at a great value.\n\nWould you like to stop by to experience its comfort and tech in person?\n\nReply STOP to opt out.",
          },
        ],
      },
    ],
  },
  {
    id: "re-engagement",
    title: "The Re-Engagement",
    subtitle: "A cold 'hi' becomes a real sales conversation",
    dealerName: "Greenfield Motors",
    customerName: "James",
    vehicle: "2023 Hyundai Tucson Limited",
    icon: "💬",
    touchpoints: [
      {
        day: 2,
        label: "Personalized Outreach",
        strategy: "Reserve-it-for-you framing to create personal connection",
        messages: [
          {
            author: "ai",
            body: "Hi James, the red 2023 Tucson Limited is a rare find and I'd love to personally reserve it just for you.\n\nLet me know your best day and time this week to experience its premium features firsthand at Greenfield Motors.\n\nReply STOP to opt out.",
          },
        ],
      },
      {
        day: 4,
        label: "Customer Says 'Hi'",
        strategy: "Any reply is gold: agent immediately qualifies the lead",
        hasReply: true,
        messages: [
          {
            author: "human",
            body: "hi",
          },
          {
            author: "ai",
            body: "Hi there James: this is the team at Greenfield Motors.\n\nWhat kind of vehicle are you shopping for right now (SUV, sedan, or truck)?",
          },
        ],
      },
    ],
  },
];

"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Full Sequence Visibility",
    description:
      "See every touchpoint, every lead, and every suppression reason in your console. Complete transparency on what your AI agent is doing.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="22" height="18" rx="3" />
        <path d="M3 10h22" />
        <circle cx="7" cy="7.5" r="1" fill="currentColor" />
        <circle cx="10.5" cy="7.5" r="1" fill="currentColor" />
        <path d="M7 15h6M7 19h10" strokeLinecap="round" />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Personalized Video Messages",
    description:
      "AI-generated walkaround videos of the exact vehicle, sent via SMS. Your lead sees their car before they visit.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="6" width="18" height="16" rx="3" />
        <path d="M20 10l6-3v14l-6-3V10z" strokeLinejoin="round" />
      </svg>
    ),
    color: "purple",
  },
  {
    title: "Instant Price Drop Alerts",
    description:
      "Real-time notifications when a tracked VIN gets a price reduction. Your lead knows before they check AutoTrader.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 4v20M8 14l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 8h16" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    badge: "Upgrade: daily \u2192 real-time",
    color: "green",
  },
  {
    title: "Vehicle Sold Alert + Similar Cars",
    description:
      "Original car sold? The agent automatically pivots to the closest inventory match by year, make, model, and price.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 14h8l3-10 3 20 3-10h3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "orange",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-600" },
  purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-600" },
  green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-600" },
  orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-600" },
};

export default function ComingSoon() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-600 rounded-full border border-blue-200 mb-4">
            Coming Soon
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            And we&apos;re just getting started
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            These features are in development and shipping in the coming weeks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((f, i) => {
            const c = colorMap[f.color];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-6 rounded-2xl border ${c.border} ${c.bg}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 ${c.text}`}>{f.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-semibold text-gray-900">
                        {f.title}
                      </h3>
                      {f.badge && (
                        <span className="px-2 py-0.5 text-[10px] font-semibold bg-green-100 text-green-700 rounded-full border border-green-200">
                          {f.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

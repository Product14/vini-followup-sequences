"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-600 rounded-full border border-blue-200">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Live Feature Demo
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          Your leads go cold.{" "}
          <span className="gradient-text">We follow up.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          8 personalized touchpoints over 14 days. Every message reads your CRM,
          checks live inventory, and picks up right where the last conversation
          left off.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-14"
        >
          <Stat value="~$50" label="holding cost per car per day" />
          <div className="hidden md:block w-px h-10 bg-gray-200" />
          <Stat value="$2-4K" label="gross margin at risk per lead" />
          <div className="hidden md:block w-px h-10 bg-gray-200" />
          <Stat value="14 days" label="automated follow-up window" />
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <span className="text-sm text-gray-400 flex items-center justify-center gap-2">
            See it in action
            <motion.svg
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M8 3v8m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </motion.svg>
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-gray-900">{value}</div>
      <div className="text-xs md:text-sm text-gray-400 mt-1">{label}</div>
    </div>
  );
}

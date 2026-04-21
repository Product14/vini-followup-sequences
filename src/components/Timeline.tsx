"use client";

import { motion } from "framer-motion";
import type { TouchPoint } from "@/data/storylines";

export default function Timeline({
  touchpoints,
  activeIndex,
  onSelect,
}: {
  touchpoints: TouchPoint[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="relative">
      {/* Vertical connector line */}
      <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-400/60 via-blue-300/30 to-blue-200/10" />

      <div className="space-y-1">
        {touchpoints.map((tp, i) => {
          const isActive = i === activeIndex;
          const isPast = i < activeIndex;

          return (
            <motion.button
              key={tp.day}
              onClick={() => onSelect(i)}
              whileHover={{ x: 4 }}
              className={`relative flex items-start gap-4 w-full text-left px-3 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-blue-50 border border-blue-200"
                  : "hover:bg-gray-50 border border-transparent"
              }`}
            >
              {/* Day circle */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-blue-500 text-white glow-blue"
                      : isPast
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  D{tp.day}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 pt-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-sm font-medium truncate ${
                      isActive ? "text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {tp.label}
                  </span>
                  {tp.hasReply && (
                    <span className="flex-shrink-0 px-2 py-0.5 text-[10px] font-semibold bg-green-50 text-green-600 rounded-full border border-green-200">
                      REPLY
                    </span>
                  )}
                </div>
                <p
                  className={`text-xs mt-0.5 line-clamp-2 ${
                    isActive ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {tp.strategy}
                </p>
              </div>

              {/* Active indicator arrow */}
              {isActive && (
                <motion.div
                  layoutId="active-arrow"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

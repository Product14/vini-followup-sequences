"use client";

import { motion } from "framer-motion";
import type { Storyline } from "@/data/storylines";

export default function StorylineSelector({
  storylines,
  activeId,
  onSelect,
}: {
  storylines: Storyline[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 px-2 snap-x snap-mandatory md:flex-wrap md:justify-center md:overflow-visible md:pb-0 md:px-0">
      {storylines.map((s) => {
        const isActive = s.id === activeId;
        return (
          <motion.button
            key={s.id}
            onClick={() => onSelect(s.id)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`relative px-5 py-3 rounded-xl text-left transition-all duration-200 border flex-shrink-0 snap-start ${
              isActive
                ? "bg-blue-50 border-blue-200 shadow-sm"
                : "bg-white border-gray-200 hover:border-gray-300"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="storyline-active"
                className="absolute inset-0 rounded-xl bg-blue-50 border border-blue-200"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <div className="relative flex items-center gap-3">
              <span className="text-xl">{s.icon}</span>
              <div>
                <div
                  className={`text-sm font-semibold ${
                    isActive ? "text-gray-900" : "text-gray-700"
                  }`}
                >
                  {s.title}
                </div>
                <div className="text-xs text-gray-400 max-w-[200px] truncate">
                  {s.vehicle}
                </div>
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import type { Message, TouchPoint } from "@/data/storylines";

function DateSeparator({ day }: { day: number }) {
  return (
    <div className="flex items-center gap-3 my-4 first:mt-0">
      <div className="flex-1 h-px bg-gray-200" />
      <span className="text-[11px] font-semibold text-gray-400 tracking-wide uppercase px-1">
        Day {day}
      </span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isAi = message.author === "ai";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className={`flex ${isAi ? "justify-start" : "justify-end"} mb-3`}
    >
      <div
        className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
          isAi
            ? "bg-gray-100 text-gray-800 rounded-2xl rounded-bl-md"
            : "bg-blue-500 text-white rounded-2xl rounded-br-md"
        }`}
      >
        {message.body}
      </div>
    </motion.div>
  );
}

export default function PhoneSimulator({
  touchpoints,
  activeTouchpointIndex,
  customerName,
}: {
  touchpoints: TouchPoint[];
  activeTouchpointIndex: number;
  customerName: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Scroll to the active day's section when timeline selection changes
  useEffect(() => {
    const section = sectionRefs.current[activeTouchpointIndex];
    const container = scrollRef.current;
    if (section && container) {
      const sectionTop = section.offsetTop - container.offsetTop;
      container.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  }, [activeTouchpointIndex]);

  return (
    <div className="phone-frame w-[340px] h-[680px] flex flex-col overflow-hidden mx-auto">
      {/* Dynamic Island / Notch */}
      <div className="flex justify-center pt-3 pb-1">
        <div className="w-[120px] h-[28px] bg-gray-900 rounded-full" />
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-6 pb-1 text-xs text-gray-500">
        <span className="font-medium">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
            <rect x="0" y="8" width="3" height="4" rx="0.5" opacity="0.2" />
            <rect x="4.5" y="5" width="3" height="7" rx="0.5" opacity="0.35" />
            <rect x="9" y="2" width="3" height="10" rx="0.5" opacity="0.55" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="0.8" />
          </svg>
          <svg width="24" height="12" viewBox="0 0 24 12" fill="currentColor">
            <rect x="0" y="1" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.25" />
            <rect x="1.5" y="2.5" width="14" height="7" rx="1" fill="currentColor" opacity="0.4" />
            <rect x="21" y="4" width="2" height="4" rx="0.5" opacity="0.3" />
          </svg>
        </div>
      </div>

      {/* Contact header */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-200">
        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-blue-600 text-sm font-semibold">
            {customerName.charAt(0)}
          </span>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-900">{customerName}</div>
          <div className="text-xs text-gray-400">SMS</div>
        </div>
      </div>

      {/* Messages: all touchpoints in one scrollable view */}
      <div ref={scrollRef} className="phone-messages flex-1 overflow-y-auto px-4 py-4 bg-white">
        {touchpoints.map((tp, tpIndex) => (
          <div
            key={tp.day}
            ref={(el) => {
              sectionRefs.current[tpIndex] = el;
            }}
          >
            <DateSeparator day={tp.day} />
            {tp.messages.map((msg, msgIndex) => (
              <MessageBubble
                key={`${tp.day}-${msgIndex}`}
                message={msg}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="px-4 pb-6 pt-2 bg-white">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2.5">
          <span className="text-gray-400 text-sm flex-1">Text Message</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-blue-500"
          >
            <path
              d="M10 18a8 8 0 100-16 8 8 0 000 16z"
              fill="currentColor"
              opacity="0.2"
            />
            <path d="M8 7l4 3-4 3V7z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { storylines } from "@/data/storylines";
import StorylineSelector from "@/components/StorylineSelector";
import Timeline from "@/components/Timeline";
import PhoneSimulator from "@/components/PhoneSimulator";
import ComingSoon from "@/components/ComingSoon";
import { motion } from "framer-motion";

export default function Home() {
  const [activeStoryId, setActiveStoryId] = useState(storylines[0].id);
  const [activeTouchpointIndex, setActiveTouchpointIndex] = useState(0);

  const activeStory = storylines.find((s) => s.id === activeStoryId)!;

  const handleStoryChange = (id: string) => {
    setActiveStoryId(id);
    setActiveTouchpointIndex(0);
  };

  return (
    <main className="flex-1">
      {/* Header */}
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image src="/spyne-logo.webp" alt="Spyne" width={120} height={36} className="h-8 w-auto" />
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-500">Follow-Up Sequences</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Sample follow-up sequence conversations
          </h1>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            These are real messages sent by Spyne&apos;s AI agent to test leads.
            Each conversation shows how the agent follows up over multiple days:
            personalized to the vehicle, aware of the full conversation history,
            and ready to sell when the customer replies.
          </p>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Storyline selector */}
          <div className="mb-10">
            <StorylineSelector
              storylines={storylines}
              activeId={activeStoryId}
              onSelect={handleStoryChange}
            />
          </div>

          {/* Storyline description */}
          <motion.div
            key={activeStory.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200">
              <span className="text-base">{activeStory.icon}</span>
              <span className="text-sm text-gray-600 font-medium">
                {activeStory.subtitle}
              </span>
            </div>
            <div className="mt-2 text-xs text-gray-400">
              {activeStory.dealerName} &middot; {activeStory.vehicle}
            </div>
          </motion.div>

          {/* Timeline + Phone layout */}
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
            {/* Timeline */}
            <div className="w-full lg:w-[380px] lg:sticky lg:top-8">
              <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-4 px-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-blue-500"
                  >
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Follow-Up Timeline
                  </span>
                </div>
                <Timeline
                  touchpoints={activeStory.touchpoints}
                  activeIndex={activeTouchpointIndex}
                  onSelect={setActiveTouchpointIndex}
                />
              </div>
            </div>

            {/* Phone */}
            <div className="flex-shrink-0">
              <PhoneSimulator
                key={activeStory.id}
                touchpoints={activeStory.touchpoints}
                activeTouchpointIndex={activeTouchpointIndex}
                customerName={activeStory.customerName}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Different callout */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              This is not a drip campaign
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Differentiator
                title="Context-aware"
                description="Every message reads CRM data, inventory, and the full 15-day conversation history before sending."
              />
              <Differentiator
                title="Never repeats itself"
                description="The agent tracks which angles it's used (design, safety, comfort, urgency) and picks a new one each time."
              />
              <Differentiator
                title="Adapts to the vehicle"
                description="A Bentley gets luxury language. A Forester gets practical family language. Automatically."
              />
              <Differentiator
                title="Handles real conversations"
                description="When a lead replies, the agent doesn't just acknowledge: it qualifies, answers questions, and books appointments."
              />
              <Differentiator
                title="Price drop detection"
                description="Agent checks for price reductions daily and proactively reaches out when it spots a deal for your lead."
              />
              <Differentiator
                title="TCPA compliant"
                description="Carrier-level STOP handling, DNC list integration, and contact hour enforcement are built in."
              />
            </div>
          </div>
        </div>
      </section>

      <ComingSoon />

      {/* Footer */}
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center border-t border-gray-200 pt-8">
          <div className="flex items-center justify-center gap-2">
            <Image src="/spyne-logo.png" alt="Spyne" width={28} height={28} />
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-500">
              AI Agents for Auto Dealerships
            </span>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            All conversations shown are from real test interactions with Spyne&apos;s AI agent.
          </p>
        </div>
      </div>
    </main>
  );
}

function Differentiator({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="text-blue-600"
        >
          <path
            d="M2 6l3 3 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <div className="text-sm font-semibold text-gray-900">{title}</div>
        <div className="text-sm text-gray-500 mt-0.5">{description}</div>
      </div>
    </div>
  );
}

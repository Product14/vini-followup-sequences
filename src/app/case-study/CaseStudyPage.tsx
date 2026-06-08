"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PhoneSimulator from "@/components/PhoneSimulator";
import { caseStudyConversation, cadence, sourceResults } from "@/data/caseStudy";

export default function CaseStudyPage() {
  return (
    <main className="flex-1 bg-white case-study-root">
      <PrintStyles />
      <Header />
      <Hero />
      <ResultsBlock />
      <IncrementalSection />
      <CadenceSection />
      <RealConversation />
      <SourceBlock />
      <DifferentSection />
    </main>
  );
}

/* ------------------------------- Header ------------------------------- */
function Header() {
  return (
    <section className="pt-12 pb-6 px-6">
      <div className="max-w-5xl mx-auto flex items-center gap-3">
        <Image
          src="/spyne-logo.webp"
          alt="Spyne"
          width={120}
          height={36}
          className="h-8 w-auto"
        />
        <span className="text-gray-300">|</span>
        <span className="text-sm font-medium text-gray-500 tracking-wide">
          Vini AI — Dealer Case Study
        </span>
        <div className="flex-1" />
        <a
          href="/case-study/print"
          target="_blank"
          rel="noopener noreferrer"
          className="no-print inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold shadow-sm hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
          title="Opens the print-optimized version — your browser's Save as PDF dialog will appear"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1v8m0 0l-3-3m3 3l3-3M2 11h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Download PDF
        </a>
      </div>
    </section>
  );
}

/* ------------------------- Print-specific styles ----------------------- */
function PrintStyles() {
  return (
    <style jsx global>{`
      /* Hide non-essential UI when printing */
      @media print {
        @page {
          size: Letter;
          margin: 0.5in 0.4in;
        }

        html,
        body {
          background: white !important;
          color: #111 !important;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .no-print {
          display: none !important;
        }

        /* Force visibility of motion-animated elements (Framer Motion sets opacity:0 initially) */
        .case-study-root * {
          opacity: 1 !important;
          transform: none !important;
        }

        /* Keep section blocks intact across page breaks where possible */
        section {
          break-inside: avoid;
          page-break-inside: avoid;
        }

        /* The bar chart row should not split */
        .grid {
          break-inside: avoid;
          page-break-inside: avoid;
        }

        /* Tighten vertical rhythm so the doc paginates well */
        section {
          padding-top: 24px !important;
          padding-bottom: 24px !important;
        }

        /* Make sure dark backgrounds print as expected */
        .bg-gray-50 {
          background-color: #f9fafb !important;
        }
        .bg-blue-600,
        .bg-blue-500,
        .bg-green-500 {
          /* Bars and badges: print as their visible color */
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }

        /* Hide the iPhone status bar / Dynamic Island in the simulator;
           keeps the conversation card cleaner on paper */
        .phone-frame {
          border: 1px solid #e5e7eb !important;
          box-shadow: none !important;
        }
      }
    `}</style>
  );
}

/* -------------------------------- Hero -------------------------------- */
function Hero() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-medium text-blue-700 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          Real production data — 1-month window, 1 active rooftop
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight"
        >
          Nearly 1 in 3 dormant internet leads
          <br />
          <span className="text-blue-600">comes back to life.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          Vini follows up with every inbound internet lead over 14 days — 8
          context-aware SMS touches that read your CRM, your inventory, and the
          full conversation history before every send. Not a drip campaign. A
          conversation.
        </motion.p>
      </div>
    </section>
  );
}

/* -------------------------- Results KPI block -------------------------- */
function ResultsBlock() {
  const kpis = [
    {
      value: "1,672",
      label: "leads followed up",
      caption: "Internet leads received in a 1-month window",
    },
    {
      value: "31.9%",
      label: "response rate",
      caption: "Came back into a live SMS conversation",
    },
    {
      value: "9.2%",
      label: "responder → appointment",
      caption: "Of those who replied, booked a showroom visit",
    },
    {
      value: "49",
      label: "incremental appointments",
      caption: "From leads that would have otherwise gone cold",
    },
  ];

  return (
    <section className="px-6 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 tabular-nums">
                {k.value}
              </div>
              <div className="mt-1 text-sm font-medium text-blue-600">
                {k.label}
              </div>
              <div className="mt-2 text-xs text-gray-500 leading-relaxed">
                {k.caption}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-400 max-w-2xl mx-auto">
          Every one of these 49 appointments is a customer your BDC team would
          have stopped following up on. Vini is the layer that catches the ones
          your people don&apos;t have time to chase.
        </p>
      </div>
    </section>
  );
}

/* --------------------- "Beyond day 3" incremental block ------------------ */
function IncrementalSection() {
  return (
    <section className="px-6 pb-16 pt-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/70 via-white to-white p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="md:w-1/3 flex flex-col">
              <div className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                Added on top
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-7xl md:text-8xl font-bold text-blue-600 tabular-nums leading-none">
                  28
                </span>
                <span className="text-gray-400 text-xl font-medium">/ 49</span>
              </div>
              <div className="mt-2 text-sm font-medium text-gray-700">
                appointments booked <span className="text-gray-900 font-semibold">after day 3</span>
              </div>
              <div className="mt-1 text-xs text-gray-500">
                57% of all wins in this window
              </div>
            </div>

            <div className="md:flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
                Wins past the standard followup window.
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                A typical BDC playbook covers the first 3 days really well —
                that&apos;s where the highest-intent buyers respond, and your team is
                already doing that work. Vini handles the longer tail: 14 days
                of context-aware followup running in the background, qualifying
                and booking replies as they come in. The appointments past day 3
                are extra wins on top of what your team is already producing.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-6 max-w-sm">
                <BeyondStat number="3 days" label="Typical BDC followup window" />
                <BeyondStat number="14 days" label="Vini followup window" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BeyondStat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-base font-bold text-gray-900 tabular-nums leading-tight">
        {number}
      </div>
      <div className="mt-1 text-xs text-gray-500 leading-snug">{label}</div>
    </div>
  );
}

/* --------------------------- Cadence Timeline -------------------------- */
function CadenceSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            8 touches. 14 days. Every one different.
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Each message reads your CRM, your inventory, and the last 15 days of
            conversation history before it sends. No two touches reuse the same
            angle.
          </p>
        </div>

        {/* Horizontal timeline rail (desktop only) */}
        <div className="relative">
          <div className="hidden md:flex items-center justify-between px-4 mb-6">
            {[1, 2, 3, 4, 6, 8, 12, 14].map((d) => (
              <div
                key={d}
                className="flex flex-col items-center text-xs font-semibold text-gray-400 tracking-wide"
              >
                <span className="uppercase">Day</span>
                <span className="text-base text-gray-900 mt-0.5">{d}</span>
              </div>
            ))}
          </div>
          <div className="hidden md:block h-px bg-gray-200 mb-8 mx-2" />

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cadence.map((c, i) => (
              <motion.div
                key={c.day}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm h-full"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 tabular-nums">
                    {c.day}
                  </div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    {c.label}
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {c.purpose}
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100 text-xs italic text-gray-500 leading-relaxed">
                  &ldquo;{c.example}&rdquo;
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="text-blue-500"
            >
              <path
                d="M3 7l3 3 5-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs text-gray-600 font-medium">
              The sequence stops automatically the moment the lead books, opts
              out, or gets sold a vehicle.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------- Real conversation showcase ----------------------- */
function RealConversation() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-xs font-medium text-green-700 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Real conversation captured 15 May 2026
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Cold lead. 13 minutes. Showroom appointment.
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Cooper had been sitting in the lead inbox for days. Vini reached
            out, he answered, and within 7 messages he had a 2:30 PM
            appointment to see a Ford F-250.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 justify-center">
          {/* Analysis */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 lg:max-w-md lg:sticky lg:top-8"
          >
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              What Vini did
            </h3>
            <div className="space-y-5">
              <ConversationStep
                num={1}
                title="Opened with intent, not pitch"
                detail="No vehicle pitch upfront. A simple timeline question that gives Cooper a low-stakes way to engage."
              />
              <ConversationStep
                num={2}
                title="Heard the buying signal instantly"
                detail="Cooper mentioned F-250s and F-350s. Vini pivoted from cold outreach to qualified-buyer mode in one message."
              />
              <ConversationStep
                num={3}
                title="Confirmed location and inventory"
                detail="Vini named the exact address and confirmed both truck models are in stock. No vague 'we have lots of trucks.'"
              />
              <ConversationStep
                num={4}
                title="Closed for a specific time"
                detail="When Cooper said 'approximately 2:30,' Vini locked it down to a real appointment instead of leaving it vague."
              />
              <ConversationStep
                num={5}
                title="Handed off cleanly to the floor"
                detail="Final message gives Cooper exactly what to say when he walks in — your sales team is ready, not surprised."
              />
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <PhoneSimulator
              touchpoints={caseStudyConversation.touchpoints}
              activeTouchpointIndex={0}
              customerName={caseStudyConversation.customerName}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ConversationStep({
  num,
  title,
  detail,
}: {
  num: number;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold tabular-nums">
        {num}
      </div>
      <div>
        <div className="text-sm font-semibold text-gray-900">{title}</div>
        <div className="text-sm text-gray-500 mt-1 leading-relaxed">
          {detail}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- Sources ------------------------------- */
function SourceBlock() {
  const sorted = [...sourceResults].sort(
    (a, b) => b.responseRate - a.responseRate
  );
  const maxResp = Math.max(...sorted.map((s) => s.responseRate));
  const maxAppt = Math.max(...sorted.map((s) => s.appointmentRate));

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Works across every lead source.
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Whether the lead came from a marketplace, a credit application, or
            a third-party referral — Vini engages and qualifies them the same
            way.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-12 gap-3 text-xs font-semibold text-gray-400 uppercase tracking-wide pb-3 border-b border-gray-200">
            <div className="col-span-4">Source</div>
            <div className="col-span-4">Response rate</div>
            <div className="col-span-4">Appointment rate</div>
          </div>

          {sorted.map((s, i) => (
            <motion.div
              key={s.source}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="grid grid-cols-12 gap-3 items-center py-4 border-b border-gray-100 last:border-0"
            >
              <div className="col-span-4 text-sm font-medium text-gray-900">
                {s.source}
              </div>
              <div className="col-span-4">
                <Bar value={s.responseRate} max={maxResp} color="blue" />
              </div>
              <div className="col-span-4">
                <Bar value={s.appointmentRate} max={maxAppt} color="green" />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Source data from a single rooftop, 1-month window, US dealership
          (Sales inbound). Indicative; results vary by traffic mix.
        </p>
      </div>
    </section>
  );
}

function Bar({
  value,
  max,
  color,
}: {
  value: number;
  max: number;
  color: "blue" | "green";
}) {
  const pct = max ? Math.max(2, (value / max) * 100) : 0;
  const fill = color === "blue" ? "bg-blue-500" : "bg-green-500";
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`h-full ${fill} rounded-full`}
        />
      </div>
      <span className="text-sm font-semibold text-gray-700 tabular-nums w-14 text-right">
        {value}%
      </span>
    </div>
  );
}

/* ------------------------- "What's Different" ------------------------- */
function DifferentSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            This is not a drip campaign.
          </h2>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <Differentiator
              title="Context-aware on every send"
              description="Reads CRM, live inventory, and full 15-day conversation history before each message."
            />
            <Differentiator
              title="Never repeats itself"
              description="Tracks which angles have been used — design, safety, payments, urgency — and picks a fresh one each touch."
            />
            <Differentiator
              title="Adapts to the vehicle"
              description="A Bentley gets luxury language. A Forester gets practical family language. Automatically."
            />
            <Differentiator
              title="Closes the appointment"
              description="When a lead replies, the agent qualifies and books. It doesn't punt to a human or send a generic 'thanks for your interest.'"
            />
            <Differentiator
              title="Stops when it should"
              description="Appointment booked, opt-out, lead sold, or CRM marks the lead Lost — the sequence halts instantly. No spam, no duplicate touches."
            />
            <Differentiator
              title="TCPA compliant by default"
              description="Carrier-level STOP handling, DNC list integration, and dealer contact-hour enforcement are built in."
            />
          </div>
        </div>
      </div>
    </section>
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
        <div className="text-sm text-gray-500 mt-0.5 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
}


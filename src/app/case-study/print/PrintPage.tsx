"use client";

import { useEffect } from "react";
import Image from "next/image";
import { caseStudyConversation, cadence, sourceResults } from "@/data/caseStudy";

/**
 * Print-optimized case study layout.
 *
 * Each <Page> is a fixed 8.5" × 11" letter-sized container. No Framer Motion.
 * Designed to render identically on screen and on paper — the same pixel
 * grid is used both ways. Auto-triggers window.print() on mount so the
 * "Download PDF" button on the parent page just opens this route.
 */
export default function PrintPage() {
  useEffect(() => {
    // Slight delay so fonts/images settle before the print dialog opens
    const t = setTimeout(() => {
      if (typeof window !== "undefined") {
        window.print();
      }
    }, 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <PrintStyles />
      <div className="print-shell">
        <PrintToolbar />
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
        <PageFive />
      </div>
    </>
  );
}

/* =====================================================================
 * Toolbar (screen only — hidden on print)
 * ===================================================================== */
function PrintToolbar() {
  return (
    <div className="print-toolbar no-print">
      <div>
        <strong>PDF preview</strong>
        <span className="muted">
          {" "}— if the print dialog didn&apos;t open automatically, press ⌘P / Ctrl+P. Choose &ldquo;Save as PDF&rdquo;. Uncheck headers &amp; footers for a clean export.
        </span>
      </div>
      <button
        type="button"
        onClick={() => window.print()}
        className="print-btn"
      >
        Open print dialog
      </button>
    </div>
  );
}

/* =====================================================================
 * Page 1 — Cover
 * ===================================================================== */
function PageOne() {
  return (
    <Page>
      <header className="page-header">
        <Image
          src="/spyne-logo.webp"
          alt="Spyne"
          width={120}
          height={36}
          className="logo"
        />
        <span className="eyebrow">Vini AI · Dealer Case Study</span>
      </header>

      <div className="cover-body">
        <span className="cover-badge">
          <span className="dot" /> Real production data · 1-month window · 1 active rooftop
        </span>

        <h1 className="cover-title">
          Nearly 1 in 3 dormant internet leads<br />
          <span className="accent">comes back to life.</span>
        </h1>

        <p className="cover-lede">
          Vini follows up with every inbound internet lead over 14 days &mdash; 8
          context-aware SMS touches that read your CRM, your inventory, and
          the full conversation history before every send.
        </p>

        <div className="kpi-grid">
          <Kpi value="1,672" label="leads followed up" caption="Internet leads received in the window" />
          <Kpi value="31.9%" label="response rate" caption="Came back into a live SMS conversation" />
          <Kpi value="9.2%" label="responder → appointment" caption="Of those who replied, booked a visit" />
          <Kpi value="49" label="incremental appointments" caption="Customers your team would have lost" />
        </div>

        <div className="beyond-banner">
          <div className="beyond-num">
            <span className="beyond-num-big">28</span>
            <span className="beyond-num-of">/ 49</span>
          </div>
          <div className="beyond-copy">
            <div className="beyond-title">
              appointments booked <strong>after day 3</strong> &mdash; added on top.
            </div>
            <div className="beyond-sub">
              A typical BDC playbook covers the first 3 days really well. Vini
              handles the longer tail &mdash; 14 days of context-aware followup
              running in the background. 57% of the wins in this window came from
              that stretch.
            </div>
          </div>
        </div>

        <div className="contrast-block">
          <div className="contrast-header">
            <span className="contrast-eyebrow">What Vini is &mdash; and what it isn&apos;t</span>
          </div>
          <div className="contrast-grid">
            <div className="contrast-col contrast-is">
              <div className="contrast-col-title">
                <span className="contrast-col-mark contrast-mark-is">✓</span>
                It is
              </div>
              <ul className="contrast-list">
                <li>
                  <strong>A real conversation</strong> &mdash; reads your CRM,
                  live inventory, and the full reply history before every send.
                </li>
                <li>
                  <strong>A closer</strong> &mdash; when a lead replies, Vini
                  qualifies and books the appointment.
                </li>
                <li>
                  <strong>Adaptive</strong> &mdash; a Bentley gets luxury
                  language. A Forester gets practical family language.
                  Automatically.
                </li>
              </ul>
            </div>
            <div className="contrast-col contrast-isnt">
              <div className="contrast-col-title">
                <span className="contrast-col-mark contrast-mark-isnt">×</span>
                It is not
              </div>
              <ul className="contrast-list">
                <li>
                  <strong>A drip campaign</strong> &mdash; no scheduled blasts,
                  no copy-paste templates, no repeating itself.
                </li>
                <li>
                  <strong>A handoff bot</strong> &mdash; doesn&apos;t punt every
                  reply to your team with &ldquo;thanks for your interest.&rdquo;
                </li>
                <li>
                  <strong>A spam machine</strong> &mdash; sequence halts the
                  moment the lead books, opts out, or your CRM marks them sold.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <PageFooter num={1} total={5} caption="The headline outcome · What Vini is" />
    </Page>
  );
}

function Kpi({
  value,
  label,
  caption,
}: {
  value: string;
  label: string;
  caption: string;
}) {
  return (
    <div className="kpi">
      <div className="kpi-value">{value}</div>
      <div className="kpi-label">{label}</div>
      <div className="kpi-caption">{caption}</div>
    </div>
  );
}

/* =====================================================================
 * Page 2 — Cadence
 * ===================================================================== */
function PageTwo() {
  return (
    <Page>
      <PageHeading
        kicker="The Sequence"
        title="8 touches. 14 days. Every one different."
        sub="Each message reads your CRM, your inventory, and the last 15 days of conversation history before it sends. No two touches reuse the same angle."
      />

      <div className="cadence-grid">
        {cadence.map((c) => (
          <div className="cadence-card" key={c.day}>
            <div className="cadence-head">
              <span className="cadence-day">Day {c.day}</span>
              <span className="cadence-label">{c.label}</span>
            </div>
            <p className="cadence-purpose">{c.purpose}</p>
            <p className="cadence-example">&ldquo;{c.example}&rdquo;</p>
          </div>
        ))}
      </div>

      <div className="rule-note">
        The sequence stops automatically the moment the lead books, opts out,
        or gets sold a vehicle.
      </div>

      <PageFooter num={2} total={5} caption="The 14-day cadence" />
    </Page>
  );
}

/* =====================================================================
 * Page 3 — Real conversation
 * ===================================================================== */
function PageThree() {
  const tp = caseStudyConversation.touchpoints[0];
  return (
    <Page>
      <PageHeading
        kicker="A real win"
        title="Cold lead. 13 minutes. Showroom appointment."
        sub={`Captured 15 May 2026. Customer name changed; conversation otherwise unedited.`}
      />

      <div className="story-grid">
        <div className="story-left">
          <h3 className="story-h3">What Vini did</h3>
          <ol className="story-steps">
            <li>
              <strong>Opened with intent, not pitch.</strong> No vehicle pitch
              upfront. A simple timeline question that gave Cooper a low-stakes
              way to engage.
            </li>
            <li>
              <strong>Heard the buying signal instantly.</strong> Cooper
              mentioned F-250s and F-350s. Vini pivoted from cold outreach to
              qualified-buyer mode in one message.
            </li>
            <li>
              <strong>Confirmed location and inventory.</strong> Named the
              exact address and confirmed both truck models in stock.
            </li>
            <li>
              <strong>Closed for a specific time.</strong> When Cooper said
              &ldquo;approximately 2:30,&rdquo; Vini locked it down to a real
              appointment slot.
            </li>
            <li>
              <strong>Handed off cleanly.</strong> Final message tells Cooper
              exactly what to say when he walks in &mdash; floor is ready.
            </li>
          </ol>

          <div className="story-stat">
            <div className="story-stat-num">7</div>
            <div className="story-stat-label">messages from cold-open to confirmed appointment</div>
          </div>
        </div>

        <div className="story-right">
          <div className="transcript">
            <div className="transcript-header">
              <span className="transcript-name">Cooper</span>
              <span className="transcript-meta">SMS · {caseStudyConversation.dealerName}</span>
            </div>
            <div className="transcript-body">
              {tp.messages.map((m, i) => (
                <div
                  className={`bubble ${m.author === "ai" ? "bubble-ai" : "bubble-cust"}`}
                  key={i}
                >
                  {m.body}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PageFooter num={3} total={5} caption="One real conversation" />
    </Page>
  );
}

/* =====================================================================
 * Page 4 — Source performance
 * ===================================================================== */
function PageFour() {
  const sorted = [...sourceResults].sort((a, b) => b.responseRate - a.responseRate);
  const maxResp = Math.max(...sorted.map((s) => s.responseRate));
  const maxAppt = Math.max(...sorted.map((s) => s.appointmentRate));
  return (
    <Page>
      <PageHeading
        kicker="Across every channel"
        title="Works across every lead source."
        sub="Marketplace, credit application, or third-party referral &mdash; Vini engages and qualifies the same way."
      />

      <table className="src-table">
        <thead>
          <tr>
            <th className="src-col-name">Source</th>
            <th className="src-col-resp">Response rate</th>
            <th className="src-col-appt">Appointment rate</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((s) => (
            <tr key={s.source}>
              <td className="src-name">{s.source}</td>
              <td>
                <Bar value={s.responseRate} max={maxResp} color="blue" />
              </td>
              <td>
                <Bar value={s.appointmentRate} max={maxAppt} color="green" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="src-caveat">
        Source data from a single rooftop, 1-month window, US dealership (Sales
        Inbound). Indicative; results vary by traffic mix.
      </p>

      <div className="story-stat src-stat">
        <div>
          <div className="story-stat-num">1.3x</div>
          <div className="story-stat-label">
            difference between the highest- and lowest-response source &mdash;
            every channel performs in a narrow band, because the agent reads
            each channel&apos;s context and adapts
          </div>
        </div>
      </div>

      <PageFooter num={4} total={5} caption="Performance by channel" />
    </Page>
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
  return (
    <div className="bar-row">
      <div className="bar-track">
        <div
          className={`bar-fill bar-${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="bar-num">{value}%</span>
    </div>
  );
}

/* =====================================================================
 * Page 5 — Differentiators + CTA + Methodology
 * ===================================================================== */
function PageFive() {
  return (
    <Page>
      <PageHeading
        kicker="Under the hood"
        title="How it actually works."
        sub="The mechanics behind the conversation &mdash; what Vini reads, what it tracks, and where it stops."
      />

      <div className="diff-grid">
        <Diff
          title="Context-aware on every send"
          body="Reads CRM, live inventory, and full 15-day conversation history before each message."
        />
        <Diff
          title="Never repeats itself"
          body="Tracks angles already used (design, payments, safety, urgency) and picks a fresh one each touch."
        />
        <Diff
          title="Adapts to the vehicle"
          body="A Bentley gets luxury language. A Forester gets practical family language. Automatically."
        />
        <Diff
          title="Closes the appointment"
          body="When a lead replies, Vini qualifies and books. It doesn't punt to a human or send generic acknowledgments."
        />
        <Diff
          title="Stops when it should"
          body="Appointment booked, opt-out, sold, or CRM marks the lead Lost &mdash; sequence halts instantly. No spam."
        />
        <Diff
          title="TCPA compliant by default"
          body="Carrier-level STOP, DNC list integration, and dealer contact-hour enforcement built in."
        />
      </div>

      <div className="method-block">
        <strong>Methodology.</strong> All numbers come from production data on
        a single active dealership rooftop (I 40 Autos, Greensboro NC),
        May 6 &ndash; Jun 5, 2026. Sample messages are real conversations from
        live customers; names and identifying details have been changed.
      </div>

      <PageFooter num={5} total={5} caption="How it works · Methodology" />
    </Page>
  );
}

function Diff({ title, body }: { title: string; body: string }) {
  return (
    <div className="diff-card">
      <div className="diff-check">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M3 7l3 3 5-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <div className="diff-title">{title}</div>
        <div className="diff-body">{body}</div>
      </div>
    </div>
  );
}

/* =====================================================================
 * Shared page chrome
 * ===================================================================== */
function Page({ children }: { children: React.ReactNode }) {
  return <section className="page">{children}</section>;
}

function PageHeading({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: string;
  sub?: string;
}) {
  return (
    <header className="ph">
      <div className="ph-kicker">{kicker}</div>
      <h2 className="ph-title">{title}</h2>
      {sub && <p className="ph-sub">{sub}</p>}
    </header>
  );
}

function PageFooter({
  num,
  total,
  caption,
}: {
  num: number;
  total: number;
  caption: string;
}) {
  return (
    <footer className="page-footer">
      <span className="pf-caption">{caption}</span>
      <span className="pf-brand">Spyne · Vini AI Followup</span>
      <span className="pf-num">{num} / {total}</span>
    </footer>
  );
}

/* =====================================================================
 * Styles — print-first, screen mirrors them
 * ===================================================================== */
function PrintStyles() {
  return (
    <style jsx global>{`
      :root {
        --ink: #111827;
        --ink-mid: #374151;
        --ink-soft: #6b7280;
        --ink-faint: #9ca3af;
        --line: #e5e7eb;
        --surface: #f9fafb;
        --brand: #2563eb;
        --brand-soft: #eff6ff;
        --brand-ink: #1d4ed8;
        --success: #10b981;
        --paper-w: 8.5in;
        --paper-h: 11in;
        --paper-pad: 0.55in;
      }

      @page {
        size: Letter;
        margin: 0;
      }

      html,
      body {
        background: #e7e9ee; /* screen-only — grey "table" behind the pages */
        margin: 0;
        padding: 0;
        font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        color: var(--ink);
        font-size: 11pt;
        line-height: 1.45;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }

      .print-shell {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25in;
        padding: 32px 0 64px;
      }

      .print-toolbar {
        position: sticky;
        top: 16px;
        z-index: 10;
        display: flex;
        align-items: center;
        gap: 16px;
        background: white;
        border: 1px solid var(--line);
        border-radius: 999px;
        padding: 8px 12px 8px 18px;
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.06);
        font-size: 13px;
        color: var(--ink-mid);
        max-width: var(--paper-w);
        margin: 0 auto;
      }
      .print-toolbar .muted {
        color: var(--ink-soft);
      }
      .print-btn {
        margin-left: auto;
        background: var(--brand);
        color: white;
        font-weight: 600;
        font-size: 12px;
        padding: 8px 14px;
        border: 0;
        border-radius: 999px;
        cursor: pointer;
      }

      .page {
        position: relative;
        width: var(--paper-w);
        height: var(--paper-h);
        background: white;
        padding: var(--paper-pad);
        box-sizing: border-box;
        overflow: hidden;
        page-break-after: always;
        break-after: page;
        /* On screen, give pages a subtle elevation so they read as paper */
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06), 0 6px 20px rgba(0, 0, 0, 0.06);
        display: flex;
        flex-direction: column;
      }
      .page:last-child {
        page-break-after: auto;
        break-after: auto;
      }

      /* ---------------- Page header (top of cover) ---------------- */
      .page-header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding-bottom: 14px;
        border-bottom: 1px solid var(--line);
        margin-bottom: 22px;
      }
      .page-header .logo {
        height: 24px;
        width: auto;
      }
      .page-header .eyebrow {
        font-size: 10pt;
        font-weight: 600;
        color: var(--ink-soft);
        letter-spacing: 0.04em;
        text-transform: uppercase;
        margin-left: 6px;
      }

      /* ---------------- Cover ---------------- */
      .cover-body {
        display: flex;
        flex-direction: column;
        gap: 14px;
        flex: 1;
      }
      .cover-badge {
        display: inline-flex;
        align-self: flex-start;
        align-items: center;
        gap: 6px;
        background: var(--brand-soft);
        color: var(--brand-ink);
        font-size: 9pt;
        font-weight: 600;
        padding: 5px 10px;
        border-radius: 999px;
        letter-spacing: 0.02em;
      }
      .cover-badge .dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--brand);
        display: inline-block;
      }
      .cover-title {
        font-size: 34pt;
        line-height: 1.05;
        font-weight: 800;
        margin: 0;
        letter-spacing: -0.01em;
      }
      .cover-title .accent {
        color: var(--brand);
      }
      .cover-lede {
        font-size: 12pt;
        line-height: 1.5;
        color: var(--ink-mid);
        margin: 0;
        max-width: 6.5in;
      }
      .kpi-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 12px;
        margin-top: 8px;
      }
      .kpi {
        border: 1px solid var(--line);
        border-radius: 10px;
        padding: 14px 14px 16px;
        background: white;
        display: flex;
        flex-direction: column;
        gap: 4px;
        break-inside: avoid;
      }
      .kpi-value {
        font-size: 26pt;
        font-weight: 800;
        color: var(--ink);
        line-height: 1;
        font-variant-numeric: tabular-nums;
      }
      .kpi-label {
        font-size: 9pt;
        font-weight: 600;
        color: var(--brand);
        margin-top: 4px;
      }
      .kpi-caption {
        font-size: 8.5pt;
        line-height: 1.35;
        color: var(--ink-soft);
        margin-top: 4px;
      }
      .cover-footnote {
        margin-top: auto;
        font-size: 10pt;
        color: var(--ink-soft);
        font-style: italic;
        max-width: 6.5in;
      }

      /* ---------------- "Beyond day 3" banner (cover) ---------------- */
      .beyond-banner {
        margin-top: 4px;
        display: flex;
        align-items: center;
        gap: 18px;
        border: 1px solid var(--brand);
        background: var(--brand-soft);
        border-radius: 12px;
        padding: 12px 18px;
        break-inside: avoid;
      }
      .beyond-num {
        display: flex;
        align-items: baseline;
        gap: 4px;
        flex-shrink: 0;
        color: var(--brand-ink);
        font-variant-numeric: tabular-nums;
      }
      .beyond-num-big {
        font-size: 32pt;
        font-weight: 800;
        line-height: 1;
      }
      .beyond-num-of {
        font-size: 12pt;
        font-weight: 600;
        opacity: 0.7;
      }
      .beyond-copy {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .beyond-title {
        font-size: 11pt;
        line-height: 1.35;
        color: var(--ink);
      }
      .beyond-title strong {
        color: var(--brand-ink);
        font-weight: 700;
      }
      .beyond-sub {
        font-size: 9pt;
        line-height: 1.4;
        color: var(--ink-mid);
      }

      /* ---------------- Cover contrast block ---------------- */
      .contrast-block {
        margin-top: auto;
        border: 1px solid var(--line);
        border-radius: 12px;
        background: var(--surface);
        padding: 14px 18px 16px;
        break-inside: avoid;
      }
      .contrast-header {
        display: flex;
        justify-content: center;
        margin-bottom: 12px;
      }
      .contrast-eyebrow {
        font-size: 8.5pt;
        font-weight: 700;
        color: var(--ink-soft);
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }
      .contrast-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 28px;
      }
      .contrast-col {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .contrast-col-title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 11pt;
        font-weight: 700;
        color: var(--ink);
      }
      .contrast-col-mark {
        flex-shrink: 0;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 11pt;
        font-weight: 700;
        line-height: 1;
        color: white;
      }
      .contrast-mark-is {
        background: var(--success);
      }
      .contrast-mark-isnt {
        background: #ef4444;
      }
      .contrast-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .contrast-list li {
        font-size: 9.5pt;
        line-height: 1.45;
        color: var(--ink-mid);
        padding-left: 14px;
        position: relative;
        margin-bottom: 7px;
      }
      .contrast-list li:last-child {
        margin-bottom: 0;
      }
      .contrast-list li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 6px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: var(--ink-faint);
      }
      .contrast-list li strong {
        color: var(--ink);
        font-weight: 700;
      }

      /* ---------------- Section heading (pages 2-5) ---------------- */
      .ph {
        margin-bottom: 20px;
        padding-bottom: 14px;
        border-bottom: 1px solid var(--line);
      }
      .ph-kicker {
        font-size: 9pt;
        font-weight: 700;
        color: var(--brand);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin-bottom: 8px;
      }
      .ph-title {
        font-size: 24pt;
        line-height: 1.15;
        font-weight: 800;
        margin: 0 0 8px;
        letter-spacing: -0.005em;
      }
      .ph-sub {
        margin: 0;
        font-size: 11pt;
        color: var(--ink-mid);
        max-width: 6.5in;
      }

      /* ---------------- Cadence (page 2) ---------------- */
      .cadence-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      .cadence-card {
        border: 1px solid var(--line);
        border-radius: 10px;
        padding: 12px 14px;
        background: white;
        break-inside: avoid;
      }
      .cadence-head {
        display: flex;
        align-items: baseline;
        gap: 10px;
        margin-bottom: 6px;
      }
      .cadence-day {
        background: var(--brand-soft);
        color: var(--brand-ink);
        font-size: 8.5pt;
        font-weight: 700;
        padding: 3px 8px;
        border-radius: 6px;
        letter-spacing: 0.02em;
      }
      .cadence-label {
        font-size: 10.5pt;
        font-weight: 700;
        color: var(--ink);
      }
      .cadence-purpose {
        margin: 0 0 8px;
        font-size: 10pt;
        line-height: 1.45;
        color: var(--ink-mid);
      }
      .cadence-example {
        margin: 0;
        font-size: 9.5pt;
        font-style: italic;
        color: var(--ink-soft);
        border-top: 1px dashed var(--line);
        padding-top: 8px;
      }
      .rule-note {
        margin-top: 18px;
        padding: 10px 14px;
        background: var(--surface);
        border-left: 3px solid var(--brand);
        font-size: 10pt;
        color: var(--ink-mid);
      }

      /* ---------------- Story (page 3) ---------------- */
      .story-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        flex: 1;
      }
      .story-h3 {
        font-size: 11pt;
        font-weight: 700;
        color: var(--ink-soft);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin: 0 0 10px;
      }
      .story-steps {
        list-style: decimal;
        padding-left: 1.1em;
        margin: 0 0 18px;
        font-size: 10.5pt;
        line-height: 1.5;
        color: var(--ink-mid);
      }
      .story-steps li {
        margin-bottom: 9px;
      }
      .story-steps li strong {
        color: var(--ink);
        font-weight: 700;
      }
      .story-stat {
        margin-top: auto;
        background: var(--surface);
        border-left: 3px solid var(--brand);
        padding: 12px 14px;
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .story-stat-num {
        font-size: 28pt;
        font-weight: 800;
        color: var(--brand);
        line-height: 1;
        font-variant-numeric: tabular-nums;
      }
      .story-stat-label {
        font-size: 9.5pt;
        line-height: 1.4;
        color: var(--ink-mid);
        max-width: 3.4in;
      }

      .transcript {
        border: 1px solid var(--line);
        border-radius: 12px;
        background: white;
        overflow: hidden;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      .transcript-header {
        padding: 10px 14px;
        background: var(--surface);
        border-bottom: 1px solid var(--line);
        display: flex;
        flex-direction: column;
        gap: 1px;
      }
      .transcript-name {
        font-weight: 700;
        font-size: 10.5pt;
        color: var(--ink);
      }
      .transcript-meta {
        font-size: 8.5pt;
        color: var(--ink-soft);
      }
      .transcript-body {
        padding: 12px 12px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .bubble {
        padding: 7px 11px;
        border-radius: 12px;
        max-width: 88%;
        font-size: 9.5pt;
        line-height: 1.4;
      }
      .bubble-ai {
        background: var(--surface);
        color: var(--ink);
        align-self: flex-start;
        border-bottom-left-radius: 4px;
      }
      .bubble-cust {
        background: var(--brand);
        color: white;
        align-self: flex-end;
        border-bottom-right-radius: 4px;
      }

      /* ---------------- Source table (page 4) ---------------- */
      .src-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 11pt;
      }
      .src-table th {
        font-size: 8.5pt;
        font-weight: 700;
        color: var(--ink-soft);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        text-align: left;
        padding: 8px 8px 10px;
        border-bottom: 2px solid var(--line);
      }
      .src-table .src-col-name {
        width: 28%;
      }
      .src-table .src-col-resp,
      .src-table .src-col-appt {
        width: 36%;
      }
      .src-table td {
        padding: 12px 8px;
        border-bottom: 1px solid var(--line);
        vertical-align: middle;
      }
      .src-table tr:last-child td {
        border-bottom: 0;
      }
      .src-name {
        font-weight: 600;
      }
      .bar-row {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .bar-track {
        flex: 1;
        height: 8px;
        background: var(--line);
        border-radius: 6px;
        overflow: hidden;
      }
      .bar-fill {
        height: 100%;
        border-radius: 6px;
      }
      .bar-blue {
        background: var(--brand);
      }
      .bar-green {
        background: var(--success);
      }
      .bar-num {
        font-size: 10pt;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        width: 44px;
        text-align: right;
        color: var(--ink-mid);
      }
      .src-caveat {
        font-size: 9pt;
        color: var(--ink-soft);
        margin: 14px 0 0;
        font-style: italic;
      }
      .src-stat {
        margin-top: 24px;
      }

      /* ---------------- Differentiators + CTA (page 5) ---------------- */
      .diff-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px 22px;
        margin-bottom: 26px;
      }
      .diff-card {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        break-inside: avoid;
      }
      .diff-check {
        flex-shrink: 0;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: var(--brand);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1px;
      }
      .diff-title {
        font-size: 10.5pt;
        font-weight: 700;
        color: var(--ink);
        margin-bottom: 2px;
      }
      .diff-body {
        font-size: 9.5pt;
        color: var(--ink-mid);
        line-height: 1.45;
      }

      .cta-block {
        background: var(--brand);
        color: white;
        border-radius: 12px;
        padding: 22px 26px;
        margin-bottom: 18px;
        break-inside: avoid;
      }
      .cta-title {
        font-size: 20pt;
        font-weight: 800;
        line-height: 1.15;
        margin-bottom: 6px;
        letter-spacing: -0.005em;
      }
      .cta-body {
        font-size: 10.5pt;
        line-height: 1.45;
        opacity: 0.92;
        margin-bottom: 14px;
      }
      .cta-actions {
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .cta-pill {
        background: white;
        color: var(--brand-ink);
        font-weight: 700;
        font-size: 10pt;
        padding: 8px 14px;
        border-radius: 999px;
      }
      .cta-email {
        font-size: 10pt;
        font-weight: 600;
        opacity: 0.9;
      }

      .method-block {
        font-size: 8.5pt;
        line-height: 1.45;
        color: var(--ink-soft);
        border-top: 1px solid var(--line);
        padding-top: 12px;
      }
      .method-block strong {
        color: var(--ink-mid);
      }

      /* ---------------- Page footer ---------------- */
      .page-footer {
        position: absolute;
        left: var(--paper-pad);
        right: var(--paper-pad);
        bottom: 0.35in;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 8pt;
        color: var(--ink-faint);
        letter-spacing: 0.02em;
      }
      .page-footer .pf-brand {
        font-weight: 600;
      }
      .page-footer .pf-num {
        font-variant-numeric: tabular-nums;
      }

      /* =====================================================================
       * Print-only overrides
       * ===================================================================== */
      @media print {
        html,
        body {
          background: white;
        }
        .print-shell {
          gap: 0;
          padding: 0;
        }
        .no-print {
          display: none !important;
        }
        .page {
          width: var(--paper-w);
          height: var(--paper-h);
          box-shadow: none;
          margin: 0;
        }
      }
    `}</style>
  );
}

import type { Metadata } from "next";
import PrintPage from "./PrintPage";

export const metadata: Metadata = {
  title: "Vini AI Followup — Dealer Case Study (PDF)",
  description: "Print-optimized version of the Vini AI followup case study.",
};

export default function Page() {
  return <PrintPage />;
}

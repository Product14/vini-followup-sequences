import type { Metadata } from "next";
import CaseStudyPage from "./CaseStudyPage";

export const metadata: Metadata = {
  title: "Vini AI Followup — Case Study | Spyne",
  description:
    "How an automotive dealership turned 1 in 5 dormant internet leads into a fresh conversation — and a third of those into showroom visits.",
};

export default function Page() {
  return <CaseStudyPage />;
}

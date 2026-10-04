import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <ComingSoon title="About" />;
}

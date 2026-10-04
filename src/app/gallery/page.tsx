import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return <ComingSoon title="Gallery" />;
}

import type { Metadata } from "next";
import { Archivo, League_Spartan } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "855 4 Carpet | Flooring Installers",
    template: "%s | 855 4 Carpet",
  },
  description:
    "Carpet, LVP, and tile installers serving homes and commercial properties across the Southeast USA.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${leagueSpartan.variable}`}>
      <body>
        <SiteHeader />
        <div className="site-main">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}

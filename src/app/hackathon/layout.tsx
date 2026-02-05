import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import type { ReactNode } from "react";
import "./hackathon.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-hackathon-display",
  weight: ["500", "700", "800"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-hackathon-body",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Hackathon Browsergames | Dr. Silas Aslan",
    template: "%s | Hackathon",
  },
  description: "Hackathons, Workshops und Browsergames von Kindern mit ChatGPT.",
  openGraph: {
    title: "Hackathon Browsergames | Dr. Silas Aslan",
    description: "Spiele, Kunstwerke und Highlights aus Hackathons und Workshops für Kinder.",
    type: "website",
    locale: "de_DE",
  },
};

export default function HackathonLayout({ children }: { children: ReactNode }) {
  return <div className={`${baloo.variable} ${nunito.variable} hackathon-root`}>{children}</div>;
}

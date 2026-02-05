import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import CookieBanner from "@/components/CookieBanner";
import Expertise from "@/components/Expertise";
import HackathonCTA from "@/components/HackathonCTA";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Now from "@/components/Now";
import Otongo from "@/components/Otongo";
import Patents from "@/components/Patents";
import Speaking from "@/components/Speaking";
import Workstyle from "@/components/Workstyle";

describe("Core components", () => {
  it("renders the about section", () => {
    render(<About />);

    expect(screen.getByText("Über mich")).toBeInTheDocument();
    expect(screen.getAllByText("Aktuell").length).toBeGreaterThan(0);
  });

  it("renders the career section", () => {
    render(<Career />);

    expect(screen.getByText("Karriere & Bildung")).toBeInTheDocument();
  });

  it("renders the contact section", () => {
    render(<Contact />);

    expect(screen.getByText("Austausch statt Pitch")).toBeInTheDocument();
  });

  it("renders the cookie banner content", () => {
    localStorage.removeItem("cookie-consent");
    render(<CookieBanner />);

    expect(screen.getByText("Cookie-Einstellungen")).toBeInTheDocument();
  });

  it("renders the expertise section", () => {
    render(<Expertise />);

    expect(screen.getByText("Fokusgebiete")).toBeInTheDocument();
  });

  it("renders the hackathon CTA", () => {
    render(<HackathonCTA />);

    expect(screen.getByText("Hackathon Browsergames von Kindern")).toBeInTheDocument();
    expect(screen.getByText("Zu den Hackathons")).toBeInTheDocument();
  });

  it("renders the header navigation", () => {
    render(<Header />);

    expect(screen.getByText("Dr. Silas Aslan")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Hackathon" }).length).toBeGreaterThan(0);
  });

  it("renders the hero section", () => {
    render(<Hero />);

    expect(screen.getByText("Humans. Creativity. Innovation.")).toBeInTheDocument();
  });

  it("renders the now section", () => {
    render(<Now />);

    expect(screen.getAllByText("Aktuell").length).toBeGreaterThan(0);
    expect(screen.getByText("Log")).toBeInTheDocument();
  });

  it("renders the otongo section", () => {
    render(<Otongo />);

    expect(screen.getByText("KI-natives Experiment")).toBeInTheDocument();
    expect(screen.getByText("Zum Experiment")).toBeInTheDocument();
  });

  it("renders the patents section", () => {
    render(<Patents />);

    expect(screen.getByText("Patente & Publikationen")).toBeInTheDocument();
  });

  it("renders the speaking section", () => {
    render(<Speaking />);

    expect(screen.getByText("Vorträge & Events")).toBeInTheDocument();
  });

  it("renders the workstyle section", () => {
    render(<Workstyle />);

    expect(screen.getByText("So treffe ich Entscheidungen")).toBeInTheDocument();
  });
});

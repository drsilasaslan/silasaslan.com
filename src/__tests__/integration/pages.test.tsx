import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Datenschutz from "@/app/datenschutz/page";
import HackathonDatenschutz from "@/app/hackathon/datenschutz/page";
import HackathonImpressum from "@/app/hackathon/impressum/page";
import HackathonNutzungsbedingungen from "@/app/hackathon/nutzungsbedingungen/page";
import HackathonPage from "@/app/hackathon/page";
import Impressum from "@/app/impressum/page";

describe("Static pages", () => {
  it("renders the main legal pages", () => {
    render(<Datenschutz />);
    expect(screen.getByText("Datenschutzerklärung")).toBeInTheDocument();

    render(<Impressum />);
    expect(screen.getByText("Impressum")).toBeInTheDocument();
  });

  it("renders the hackathon landing page", () => {
    render(<HackathonPage />);

    expect(screen.getByText("Workshops + Hackathons")).toBeInTheDocument();
    expect(screen.getByText("Hackathons ansehen")).toBeInTheDocument();
  });

  it("renders the hackathon legal pages", () => {
    const hackathonDatenschutz = render(<HackathonDatenschutz />);
    expect(screen.getAllByRole("heading", { name: "Datenschutzerklärung" }).length).toBeGreaterThan(
      0,
    );
    hackathonDatenschutz.unmount();

    const hackathonImpressum = render(<HackathonImpressum />);
    expect(screen.getAllByRole("heading", { name: "Impressum" }).length).toBeGreaterThan(0);
    hackathonImpressum.unmount();

    render(<HackathonNutzungsbedingungen />);
    expect(screen.getAllByRole("heading", { name: "Nutzungsbedingungen" }).length).toBeGreaterThan(
      0,
    );
  });
});

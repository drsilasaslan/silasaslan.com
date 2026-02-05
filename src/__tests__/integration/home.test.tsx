import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the main sections", () => {
    render(<Home />);

    expect(screen.getByText("Fokusgebiete")).toBeInTheDocument();
    expect(screen.getByText("Karriere & Bildung")).toBeInTheDocument();
    expect(screen.getByText("Patente & Publikationen")).toBeInTheDocument();
    expect(screen.getByText("Austausch statt Pitch")).toBeInTheDocument();
  });

  it("shows the primary navigation", () => {
    render(<Home />);

    expect(screen.getAllByRole("link", { name: "Über mich" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Hackathon" }).length).toBeGreaterThan(0);
  });
});

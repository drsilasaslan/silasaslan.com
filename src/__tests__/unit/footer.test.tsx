import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "@/components/Footer";

const taglinePattern = /Innovation AI\.chemist – Chemie trifft Alltag\./i;

describe("Footer", () => {
  it("renders the tagline", () => {
    render(<Footer />);

    expect(screen.getByText(taglinePattern)).toBeInTheDocument();
  });
});

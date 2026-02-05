import "@testing-library/jest-dom/vitest";
import React, { type ReactNode } from "react";
import { vi } from "vitest";

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin = "";
  readonly thresholds: readonly number[] = [];

  disconnect() {
    return undefined;
  }

  observe(_target: Element) {
    return undefined;
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  unobserve(_target: Element) {
    return undefined;
  }
}

globalThis.IntersectionObserver = MockIntersectionObserver;

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string | { src: string };
  alt: string;
  fill?: boolean;
  priority?: boolean;
};

vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: LinkProps) =>
    React.createElement("a", { href, ...rest }, children),
}));

vi.mock("next/image", () => ({
  default: ({ src, alt, fill, priority, ...rest }: ImageProps) => {
    const resolvedSrc = typeof src === "string" ? src : src.src;
    return React.createElement("img", { src: resolvedSrc, alt, ...rest });
  },
}));

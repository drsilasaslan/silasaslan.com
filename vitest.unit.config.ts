import { mergeConfig } from "vitest/config";
import baseConfig from "./vitest.config";

export default mergeConfig(baseConfig, {
  test: {
    include: ["src/__tests__/unit/**/*.test.tsx"],
  },
  coverage: {
    all: true,
    provider: "v8",
    reportsDirectory: "coverage/unit",
    reporter: ["text", "html", "lcov"],
    include: ["src/components/**/*.{ts,tsx}"],
    exclude: ["src/__tests__/**", "src/setupTests.ts"],
    thresholds: {
      lines: 60,
      branches: 60,
      functions: 60,
      statements: 60,
    },
  },
});

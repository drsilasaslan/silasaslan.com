import { mergeConfig } from "vitest/config";
import baseConfig from "./vitest.config";

export default mergeConfig(baseConfig, {
  test: {
    include: ["src/__tests__/integration/**/*.test.tsx"],
  },
  coverage: {
    all: true,
    provider: "v8",
    reportsDirectory: "coverage/integration",
    reporter: ["text", "html", "lcov"],
    include: ["src/app/**/page.tsx"],
    exclude: ["src/__tests__/**", "src/setupTests.ts"],
    thresholds: {
      lines: 60,
      branches: 60,
      functions: 60,
      statements: 60,
    },
  },
});

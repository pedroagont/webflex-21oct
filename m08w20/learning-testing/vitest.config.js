import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      provider: "webdriverio",
      instances: [{ browser: "chrome" }],
    },
    coverage: {
      provider: "istanbul",
    },
  },
});

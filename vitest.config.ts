import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // @ts-ignore - Vitest types are not compatible with Rolldown Vite
  plugins: [react()],
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: "./tests/setup.ts",
  },
});

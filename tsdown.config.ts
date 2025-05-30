import { defineConfig } from "tsdown";

export default defineConfig([
  // Rolldown will generate renamed exports in `d.ts` files
  // Tracking: https://github.com/rolldown/rolldown/issues/4698
  // Tracking: https://github.com/rolldown/tsdown/issues/269
  // This is a workaround to avoid generating renamed exports.
  {
    entry: ["./src/index.ts"],
    platform: "neutral",
    dts: {
      emitDtsOnly: true,
    },
    unbundle: true,
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
  {
    entry: ["./src/index.ts"],
    platform: "neutral",
    unbundle: true,
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
]);

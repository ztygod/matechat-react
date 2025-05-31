import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  build: {
    lib: {
      name: "index",
      entry: "./src/index.ts",
      formats: ["es"],
      fileName: (format, name) => `${name}.${format === "es" ? "mjs" : "cjs"}`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "clsx",
        "tailwind-merge",
        "class-variance-authority",
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
  },
  plugins: [react(), tailwindcss(), dts(), libInjectCss()],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so assets resolve from the folder and on GitHub Pages
// (user site or project pages) without leading-slash URLs.
export default defineConfig({
  plugins: [react()],
  base: "./",
});

import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // No custom domain yet: served at norin-web.github.io/Hailuov2rf/ (exact repo case).
  // When a domain is attached in Pages settings, switch to "/" AND add public/CNAME
  // in the same commit, or every asset 404s and the site goes blank.
  base: "/Hailuov2rf/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});

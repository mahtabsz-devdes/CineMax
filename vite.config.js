import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/cinemax/",
  build: {
    outDir: "cinemax-build",
  },
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
});

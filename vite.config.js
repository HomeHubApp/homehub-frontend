import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    flowbiteReact()
  ],
  resolve: {
    alias: {
      // This is the modern, fail-safe way to create the @ alias in Vite
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages sirve el sitio bajo /<repo>/, no bajo la raíz del dominio.
// El workflow define BASE_PATH; en local y en Netlify/Vercel queda en "/".
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [react(), tailwindcss()],
});

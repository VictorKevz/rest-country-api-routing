import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/rest-country-api-routing/",
  server: {
    historyApiFallback: true,  // Ensure this is present
  },
});


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans all files
  theme: {
    extend: {
      colors: {
        primary: "#007BFF", // Blue (Main)
        secondary: "#FF9800", // Orange (CTA)
        accent: "#00C853", // Green (Eco-friendly)
        background: "#F5F5F5", // Light Gray (BG)
        navbar: "#002B5B", // Dark Blue (Nav/Footer)
        text: "#212121", // Dark Gray (Primary Text)
        subtext: "#757575", // Medium Gray (Subtext)
        error: "#D32F2F", // Red (Error)
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})


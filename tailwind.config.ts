import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        frontline: {
          "primary": "#2563EB",
          "primary-content": "#ffffff",
          "secondary": "#0F2557",
          "secondary-content": "#ffffff",
          "accent": "#3B82F6",
          "accent-content": "#ffffff",
          "neutral": "#1a1a1a",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#F9FAFB",
          "base-300": "#E5E7EB",
          "base-content": "#1a1a1a",
          "info": "#3B82F6",
          "info-content": "#ffffff",
          "success": "#22C55E",
          "success-content": "#ffffff",
          "warning": "#F59E0B",
          "warning-content": "#ffffff",
          "error": "#EF4444",
          "error-content": "#ffffff",
          "--rounded-box": "0.75rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.97",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },
    ],
  },
} as Config & { daisyui: unknown };

export default config;

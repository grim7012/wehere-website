/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wehere: {
          purple: "#5E4BEE",
          purpleHover: "#4E3CCE",
          purpleLight: "#7A68F8",
          purpleBg: "#F4F1FE",
          blue: "#378ADD",
          blueLight: "#38BDF8",
          dark: "#121214",
          secondary: "#52525B",
          tertiary: "#71717A",
          border: "rgba(0, 0, 0, 0.08)",
          bg: "#FAF9FB",
          card: "#FFFFFF",
          amber: "#F59E0B",
          amberBg: "#FFFBEB",
          emerald: "#10B981",
          emeraldBg: "#ECFDF5",
          rose: "#E11D48",
          roseBg: "#FFF1F2"
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Outfit', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'bumble-sm': '0 2px 8px -2px rgba(18, 18, 20, 0.04), 0 1px 4px -1px rgba(18, 18, 20, 0.02)',
        'bumble-md': '0 12px 30px -6px rgba(18, 18, 20, 0.08), 0 4px 12px -2px rgba(18, 18, 20, 0.03)',
        'bumble-lg': '0 24px 50px -12px rgba(18, 18, 20, 0.12), 0 8px 24px -4px rgba(18, 18, 20, 0.04)',
        'bumble-purple': '0 16px 36px -6px rgba(94, 75, 238, 0.28)',
        'phone-shadow': '0 30px 70px -15px rgba(18, 18, 20, 0.2), 0 10px 30px -8px rgba(94, 75, 238, 0.12)'
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'snap': 'cubic-bezier(0.25, 1, 0.5, 1)'
      }
    },
  },
  plugins: [],
};

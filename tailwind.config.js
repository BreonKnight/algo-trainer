export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "snes-purple": "#7c5cbf",
        "snes-lavender": "#b9aee0",
        "snes-dark": "#6d6d6d",
        // Add more SNES colors if needed
      },
    },
  },
  plugins: [],
  safelist: [
    "text-accent",
    "hover:text-accent",
    "text-accent/80",
    "text-accent2",
    "hover:text-accent2",
    "text-accent2/80",
    "text-blue-600",
    "hover:text-blue-600",
    "text-blue-600/80",
    "text-accent4",
    "hover:text-accent4",
    "text-accent4/80",
  ],
};

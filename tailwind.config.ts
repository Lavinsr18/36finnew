/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(240, 3.7%, 15.9%)",       // <-- add this line
        background: "hsl(240, 10%, 3.9%)",
        foreground: "hsl(0, 0%, 98%)",
        muted: "hsl(240, 3.7%, 15.9%)",
        "muted-foreground": "hsl(240, 5%, 64.9%)",
        popover: "hsl(240, 10%, 3.9%)",
        "popover-foreground": "hsl(0, 0%, 98%)",
        card: "hsl(240, 10%, 3.9%)",
        "card-foreground": "hsl(0, 0%, 98%)",
        input: "hsl(240, 3.7%, 15.9%)",
        primary: "hsl(263, 85%, 65%)",
        "primary-foreground": "hsl(210, 40%, 98%)",
        secondary: "hsl(240, 3.7%, 15.9%)",
        "secondary-foreground": "hsl(0, 0%, 98%)",
        accent: "hsl(240, 3.7%, 15.9%)",
        "accent-foreground": "hsl(0, 0%, 98%)",
        destructive: "hsl(0, 62.8%, 30.6%)",
        "destructive-foreground": "hsl(0, 0%, 98%)",
        ring: "hsl(240, 4.9%, 83.9%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

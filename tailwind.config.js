/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#259CD5',
        'primary-hover': 'rgba(37, 156, 213, 0.8)',
        // ... other existing colors ...
      },
      // ... other theme extensions ...
    },
  },
  plugins: [],
} 
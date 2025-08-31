/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode based on the 'dark' class on the body
  theme: {
    extend: {
      colors: {
        // Light theme colors (default)
        'bg-color': 'var(--bg-color)',
        'text-color': 'var(--text-color)',
        'card-bg': 'var(--card-bg)',
        'border-color': 'var(--border-color)',
        'shadow-color': 'var(--shadow-color)',
        'primary-color': 'var(--primary-color)',
        'primary-text': 'var(--primary-text)',
        'rating-color': 'var(--rating-color)',
        'tag-new-bg': 'var(--tag-new-bg)',
        'tag-promo-bg': 'var(--tag-promo-bg)',
        'tag-text': 'var(--tag-text)',
        'skeleton-bg': 'var(--skeleton-bg)',
      },
      fontFamily: {
        sans: ['var(--font-family)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'],
      },
      transitionDuration: {
        'DEFAULT': '150ms', // Using the direct value from --transition
      },
      transitionProperty: {
        'colors': 'background-color, color, border-color',
        'shadow': 'box-shadow',
        'transform': 'transform',
      },
      boxShadow: {
        'DEFAULT': '0 2px 4px var(--shadow-color)',
        'lg': '0 6px 16px var(--shadow-color)',
      },
      borderRadius: {
        'DEFAULT': '8px',
        'sm': '4px',
        'md': '6px',
        'lg': '12px',
      },
      spacing: {
        'px': '1px',
        '0': '0',
        '0.25': '0.25rem',
        '0.5': '0.5rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '7': '7rem',
        '10px': '10px',
        '-5px': '-5px',
        '-10px': '-10px',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      keyframes: {
        'skeleton-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      },
      animation: {
        'skeleton-pulse': 'skeleton-pulse 1.5s infinite alternate',
      }
    },
  },
  plugins: [],
}
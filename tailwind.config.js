/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'vsm': '300px',
        'sm': '640px',  
        'md': '768px', 
        'lg': '1024px', 
        'xl': '1280px', 
        '3xl': '3280px', 
      },
      boxShadow: {
        'right-bottom': '6px 6px 5px 0 rgba(0, 0, 0, 0.3)', // Customize the shadow values
      },
      variants: {
        scrollbar: ['rounded', 'dark'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(221, 199, 247, 1) 100%)',
      },
    },
  },
  plugins: [],
}

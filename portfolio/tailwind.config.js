/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
			backdropBlur: {
				sm: '4px',
			  },
        fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
			
			
		  },
  },
  plugins: [],
}


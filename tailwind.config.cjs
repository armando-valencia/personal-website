/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#01200F",
				secondary: "#6BAB90",
				tertiary: "#FFFFFF",
				quarternary: "#FFFFFF",
			},
			fontFamily: {
				robo: ["Roboto Condensed", "sans-serif"],
			},
		},
	},
	plugins: [],
};

// primary: "#383838",
// 				secondary: "#CDBE78",
// 				tertiary: "#F2F2F2",
// 				quarternary: "#066163",

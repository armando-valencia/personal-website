/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#010b12",
				secondary: "#39ff13",
				tertiary: "#f76c00",
				quarternary: "#FFFFFF",
			},
			fontFamily: {
				robo: ["Roboto Condensed", "sans-serif"],
				nunito: ["VT323"],
				barlow: ["Barlow"],
			},
		},
	},
	plugins: [],
};

// primary: "#383838",
// 				secondary: "#CDBE78",
// 				tertiary: "#F2F2F2",
// 				quarternary: "#066163",

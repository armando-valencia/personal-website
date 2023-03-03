/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#222831",
				secondary: "#FFD369",
				tertiary: "#EEEEEE",
			},
			fontFamily: {
				robo: ["Roboto Condensed", "sans-serif"],
			},
		},
	},
	plugins: [],
};

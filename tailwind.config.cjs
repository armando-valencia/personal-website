/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0a192f",
				secondary: "#63fdd8",
				tertiary: "#ccd6f6",
			},
		},
	},
	plugins: [],
};

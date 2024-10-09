/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	colors: {
		'text': '#0e190b',
		'background': '#f4faf4',
		'primary': '#69c350',
		'secondary': '#abe09a',
		'accent': '#82d66b',
	},
	theme: {
	extend: {},
	},
	plugins: [require('flowbite/plugin')],
}
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			aspectRatio: {
				'3/2': '3 / 2'
			}
		}
	},

	plugins: [forms, typography]
};

module.exports = config;

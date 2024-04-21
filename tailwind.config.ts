import type { Config } from 'tailwindcss'

export default {
	content: [
		'./node_modules/pruvious-base/blocks/**/*.vue',
		'./node_modules/pruvious-base/components/**/*.vue',
		'./node_modules/pruvious-base/assets/styles/**/*.css',
		'./node_modules/pruvious-base/layouts/**/*.vue',
		'./node_modules/pruvious-base/pages/**/*.vue',
		'./node_modules/pruvious-base/presets/base/**/*.js',
		'./blocks/**/*.vue',
		'./components/**/*.vue',
		'./assets/styles/**/*.css',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'app.vue',
	],
	darkMode: 'media', // Toggleable dark mode: https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
	theme: {
		extend: {
			colors: {
				test: {
					light: '#ccccff',
					DEFAULT: '#9999ff',
					dark: '#3333ff',
				},
			},
		},
	},
	plugins: [],
	presets: [require('pruvious-base/tailwind.config.ts')],
} satisfies Config

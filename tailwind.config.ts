import type { Config } from 'tailwindcss'

export default {
	content: [
		'.pruvious-base/blocks/**/*.vue',
		'.pruvious-base/components/**/*.vue',
		'.pruvious-base/assets/styles/**/*.css',
		'.pruvious-base/layouts/**/*.vue',
		'.pruvious-base/pages/**/*.vue',
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
	presets: [require('./.pruvious-base/tailwind.config.ts')],
} satisfies Config

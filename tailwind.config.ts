import type { Config } from 'tailwindcss'

export default {
	content: [
		'./blocks/**/*.vue',
		'./components/**/*.vue',
		'./assets/styles/**/*.css',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'app.vue',
	],
	theme: {
		extend: {},
	},
	plugins: [],
	presets: [require('./.pruvious-base/tailwind.config.ts')],
} satisfies Config

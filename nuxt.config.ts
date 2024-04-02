import { PRUVIOUS_BASE_TARGET } from './scripts/constants'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	extends: [PRUVIOUS_BASE_TARGET],

	devtools: { enabled: true },

	pruvious: {
		jwt: {
			secretKey: 'Cp3ehREayzaa1OimUrpSRRbaWrVtOk5MBuZOhbJPCFt-xGuG_DG4CvKL_iUz50lB',
		},
	},

	typescript: {
		strict: true,
	},

	nitro: {
		preset: 'bun',
	},

	$development: {
		sourcemap: true,
	},

	experimental: {
		typedPages: true,
	},
})

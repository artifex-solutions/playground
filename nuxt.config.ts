// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    [process.env.BASE_LAYER || 'github:magnus-bb/pruvious-base', { install: true }]
  ],

  devtools: { enabled: true },

  pruvious: {
    jwt: {
      secretKey: "Cp3ehREayzaa1OimUrpSRRbaWrVtOk5MBuZOhbJPCFt-xGuG_DG4CvKL_iUz50lB"
    }
  }
})
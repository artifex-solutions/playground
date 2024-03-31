// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '../pruvious-base'
  ],

  devtools: { enabled: true },

  pruvious: {
    jwt: {
      secretKey: "Cp3ehREayzaa1OimUrpSRRbaWrVtOk5MBuZOhbJPCFt-xGuG_DG4CvKL_iUz50lB"
    }
  }
})
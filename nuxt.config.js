require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios"); 

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'baseball-lottery',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit'
  ],

  markdownit: {
    html: true,
    injected: true,
    preset: 'default',
   },

  env: {
    API_KEY
  },

  generate: {
    routes() {
     const careers = axios
      .get("https://your.microcms.io/api/v1/careers", {
       headers: { "X-MICROCMS-API-KEY": process.env.API_KEY }
      })
      .then(res => {
       return res.data.contents.map(career => {
        return "/careers/" + career.id;
       });
      });
     const posts = axios
      .get("https://nuxt-microcms2.microcms.io/api/v1/posts", {
       headers: { "X-MICROCMS-API-KEY": process.env.API_KEY }
      })
      .then(res => {
       return res.data.contents.map(post => {
        return "/careers/posts/" + post.id;
       });
      });
     return Promise.all([careers, posts]).then(values => {
      return values.join().split(",");
     });
    }
   },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }

}

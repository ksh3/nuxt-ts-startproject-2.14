import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'universal',
  pwa: false,
  env: {},
  srcDir: 'src/',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  buildModules: ['@nuxtjs/vuetify', '@nuxtjs/dotenv'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {},
  vuetify: {
    treeShake: false,
    customVariables: [],
    defaultAssets: false,
    icons: {
      iconfont: 'mdiSvg'
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#F47265',
          accent: '#FFBB12',
          secondary: '#579B74'
        }
      }
    }
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
  i18n: {
    vueI18nLoader: true,
    detectBrowserLanguage: false,
    seo: true,
    locales: [
      {
        code: 'ja',
        iso: 'ja'
      },
      {
        code: 'en',
        iso: 'en'
      }
    ],
    defaultLocale: 'ja',
    vueI18n: {
      fallbackLocale: 'ja'
    }
  },
  build: {
    extend(config: any, _: any) {
      config.module.rules.push({
        resourceQuery: /blockType=i18n/,
        type: 'javascript/auto',
        loader: ['@intlify/vue-i18n-loader', 'yaml-loader']
      })
    }
  }
}

export default config

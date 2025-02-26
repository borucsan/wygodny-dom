import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // ...Custom flat configs append after nuxt's configs
)
  .prepend(
    // ...Prepend some flat configs in front
  )
  // Override some rules in a specific config, based on their name
  .override('nuxt/typescript', {
    rules: {
      // ...Override rules, for example:
      "vue/first-attribute-linebreak": ["error", {
        "singleline": "beside",
        "multiline": "beside"
      }]
    }
  })
  // ..
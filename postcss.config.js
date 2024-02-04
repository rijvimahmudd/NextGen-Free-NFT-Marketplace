export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        "last 10 Chrome versions",
        "last 10 Firefox versions",
        "last 4 Edge versions",
        "last 7 Safari versions",
        "last 8 Android versions",
        "last 8 ChromeAndroid versions",
        "last 8 FirefoxAndroid versions",
        "last 10 iOS versions",
        "last 5 Opera versions",
      ]
    },
  },
}

module.exports = {
  presets: ["es2015", "stage-0"],
  plugins: [
    "webpack-async-module-name",
    "transform-runtime",
    [
      "component",
      [
        {
          libraryName: "element-ui",
          styleLibraryName: "theme-chalk"
        },
        {
          libraryName: "mint-ui",
          style: true
        }
      ]
    ]
  ]
};
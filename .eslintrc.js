module.exports = {
  root: true,

  env: {
    browser: true,
  },

  extends: ["plugin:vue/essential", "airbnb-base", "prettier"],

  plugins: ["vue"],

  parserOptions: {
    parser: "babel-eslint",
  },

  settings: {
    "import/resolver": {
      webpack: {
        config: "build/webpack.base.config.js",
      },
    },
  },

  rules: {
    // Add custom rules below
    quotes: ["error", "double"],
  },
};

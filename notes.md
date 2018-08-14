# ToDo

- Route transitions
- Data Prefetching (asyncData)

# Dependencies

| Package             | Description                                           |
| ------------------- | ----------------------------------------------------- |
| @babel/polyfill     | Babel polyfills                                       |
| compression         | Node.js compression library to compress server assets |
| express             | To run a node server                                  |
| vue                 | Vue.js core package                                   |
| vue-router          | Vue Router                                            |
| vue-server-renderer | Vue Server Renderer                                   |

# Dev Dependencies

| Package                             | Description                                                                               |
| ----------------------------------- | ----------------------------------------------------------------------------------------- |
| @babel/core                         | Babel core package                                                                        |
| @babel/plugin-syntax-dynamic-import | Allow parsing of dynamic import()                                                         |
| @babel/preset-env                   | Required to transpile ES6 code                                                            |
| autoprefixer                        | PostCSS plugin to autoprefix css                                                          |
| babel-eslint                        | Eslint parser for babel                                                                   |
| babel-loader                        | Babel loader for webpack                                                                  |
| case-sensitive-paths-webpack-plugin | Enforces module path case sensitivity in Webpack                                          |
| chokidar                            | We use it to watch for tenplate file changes                                              |
| cross-env                           | Allows setting anv variables OS independent                                               |
| css-loader                          | Webpack css loader                                                                        |
| eslint                              | Javascript linter                                                                         |
| eslint-config-airbnb-base           | AirBnB Eslint config                                                                      |
| eslint-config-prettier              | Turns off all rules that are unnecessary or might conflict with Prettier                  |
| eslint-import-resolver-webpack      | Resolve paths to dependencies, given a webpack.config.js. Plugin for eslint-plugin-import |
| eslint-loader                       | Eslint webpack loader                                                                     |
| eslint-plugin-import                | Dependency for eslint-config-airbnb-base (helps validate proper imports)                  |
| eslint-plugin-vue                   | Eslint Vue plugin                                                                         |
| file-loader                         | This is the default fallback plugin that url-loader uses. So we install it                |
| friendly-errors-webpack-plugin      | Displays nicely formatted webpack errors in console                                       |
| mini-css-extract-plugin             | Extracts css into a file in production                                                    |
| node-sass                           | Webpack sass loader                                                                       |
| optimize-css-assets-webpack-plugin  | Minifies css in production                                                                |
| postcss-loader                      | Webpack loader for post CSS operations like autoprefixing                                 |
| prettier                            | Code formatter                                                                            |
| rimraf                              | The UNIX command rm -rf for node                                                          |
| sass-loader                         | To compile scss                                                                           |
| sass-resources-loader               | For sharing global sass variables in vue files without importing them explicitly          |
| url-loader                          | Webpack loader which transforms files into base64 URIs. (required for image files etc)    |
| vue-loader                          | Webpack loader for .vue files                                                             |
| vue-template-compiler               | A denepdency for vue-loader                                                               |
| webpack                             | Webpack                                                                                   |
| webpack-cli                         | Dependency for Webpack 4                                                                  |
| webpack-merge                       | For merging webpack config files                                                          |
| webpack-node-externals              | Define modules that should not be bundled by webpack                                      |

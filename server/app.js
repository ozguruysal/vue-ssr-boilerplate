const fs = require("fs");
const express = require("express");
const favicon = require("serve-favicon");
const compression = require("compression");
const { createRenderer, isProd, render, resolve, serve } = require("./utils");

const app = express();

const templatePath = resolve("../src/index.template.html");

const context = {
  title: "Vue SSR Boilerplate",
};

app.use(compression());
app.use(favicon(resolve("./public/favicon.ico")));
app.use("/dist", serve("../dist"));
app.use("/public", serve("./public"));

if (isProd) {
  const template = fs.readFileSync(templatePath, "utf-8");

  const serverBundle = require("../dist/vue-ssr-server-bundle.json");
  const clientManifest = require("../dist/vue-ssr-client-manifest.json");

  renderer = createRenderer(serverBundle, {
    template,
    clientManifest,
  });
} else {
  const setupDevServer = require("../build/setup-dev-server");

  readyPromise = setupDevServer(app, templatePath, (serverBundle, options) => {
    renderer = createRenderer(serverBundle, options);
  });
}

function renderPage(req, res) {
  isProd
    ? render(renderer, context, req, res)
    : readyPromise.then(() => render(renderer, context, req, res));
}

app.get("*", renderPage);

module.exports = app;

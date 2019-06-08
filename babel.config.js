module.exports = api => {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        modules: false,
        useBuiltIns: "usage",
      },
    ],
  ];

  const plugins = ["@babel/plugin-syntax-dynamic-import"];

  const env = {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: { node: "current" },
          },
        ],
      ],
    },
  };

  return {
    presets,
    plugins,
    env,
  };
};

const path = require("path");
module.exports = function (api) {
  api.cache(true);
  const projectRoot = path.resolve(__dirname, "../.."); 
  
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // 'nativewind/babel',
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
          alias: {
            "@": path.resolve(projectRoot, "apps/mobile"),
            "@shared": path.resolve(projectRoot, "shared"),
            "@backend": path.resolve(projectRoot, "backend"),
          },
        },
      ],
      [
        "dotenv-import",
        {
          moduleName: "@env",
          path: ".env",
          safe: false,
          allowUndefined: true,
        },
      ],

    ],
  };
};

const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const projectRoot = path.resolve(__dirname, "../.."); 
const mobileRoot = __dirname;

const config = getDefaultConfig(mobileRoot); 

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
];

config.resolver.extraNodeModules = {
  "@": path.resolve(projectRoot, "apps/mobile"),
  "@shared": path.resolve(projectRoot, "shared"),
  "@services": path.resolve(projectRoot, "services"),
};

config.watchFolders = [
  path.resolve(projectRoot, "shared"),
  path.resolve(projectRoot, "services"),
  path.resolve(projectRoot, "apps"),
];

config.resolver.sourceExts = [
  "js",
  "jsx",
  "ts",
  "tsx",
  "json",
  "cjs",
  "mjs",
];

module.exports = withNativeWind(config, { input:  "./global.css" });

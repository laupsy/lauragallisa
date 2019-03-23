module.exports = {
  presets: ["@babel/preset-env", "@babel/react"],
  plugins: [
    ["babel-plugin-styled-components", { fileName: false }],
    "@babel/plugin-proposal-class-properties",
  ],
};

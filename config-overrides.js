const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackPlugin,
  addBabelPlugin,
} = require("customize-cra");
const px2vwBabelPlugin = require("babel-plugin-styled-components-px2vw");

const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" },
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  addBabelPlugin([
    px2vwBabelPlugin,
    {
      transformRuntime: true,
      viewportWidth: 750,
      // exclude: /\/src\/app\/pages\/HomePage\/Features\/GithubRepoForm/,
      // include: /\/src\/app\/pages\/HomePage\/Features/,
    },
  ])
);

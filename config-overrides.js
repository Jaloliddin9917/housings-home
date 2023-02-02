const { override, fixBabelImports, addLessLoader, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  fixBabelImports('import',  {
    "libraryName": "antd",
    "style": 'true',
    libraryDirectory: "es",
  },
  {
    libraryName: 'ant-design-pro',
    libraryDirectory: "lib",
    camel2DashComponentName: false,
    style: true,
  }),

   addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#0080FF' },
    }),
);

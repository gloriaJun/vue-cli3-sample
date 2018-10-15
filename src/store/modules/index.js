const requireModule = require.context('.', true, /\.js$/);
const modules = {};

requireModule.keys().forEach((fileName) => {
  if (fileName === './index.js') return;

  const moduleName = fileName.replace(/(\.\/|\.js)/g, '');
  if (!modules[moduleName]) {
    modules[moduleName] = {
      namespaced: true,
      ...requireModule(fileName).default,
    };
  }
});

export default modules;

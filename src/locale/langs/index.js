const requireModule = require.context('.', true, /\.js$/);
const locales = {};

requireModule.keys().forEach((fileName) => {
  if (fileName === './index.js') return;

  const path = fileName.replace(/(\.\/|\.js)/g, '');
  const [moduleName, imported] = path.split('/');

  if (!locales[moduleName]) {
    locales[moduleName] = {};
  }
  locales[moduleName][imported] = requireModule(fileName).default;
});

export default locales;

const requireModule = require.context('.', true, /\.js$/);
const locale = {};

requireModule.keys().forEach((fileName) => {
  if (fileName === './index.js') return;

  const moduleName = fileName.replace(/(\.\/|\.js)/g, '');
  if (!locale[moduleName]) {
    locale[moduleName] = {
      ...requireModule(fileName).default,
    };
  }
});

export default locale;

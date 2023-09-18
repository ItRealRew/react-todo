const path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias = {
    '@components': path.resolve(__dirname, 'rc/components'),
    '@utils': path.resolve(__dirname, 'rc/utils'),
  };

  return config;
};
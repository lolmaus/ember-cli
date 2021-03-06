'use strict';
var symbol = require('../utilities/symbol');

var experiments = {
  BUILD_INSTRUMENTATION: symbol('build-instrumentation'),
  ADDON_TREE_CACHING: symbol('addon-tree-caching')
};

Object.freeze(experiments);

module.exports = experiments;

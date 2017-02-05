---
rename:
  basename: index.js
---
'use strict';

/**
 * Adds or overrides a `.<%= camelcase(pluginName(name)) %>` [compiler](http://breakdance.io/docs.html#core-concepts) handler.
 *
 * ```js
 * var Breakdance = require('breakdance');
 * var breakdance = new Breakdance();
 *
 * var <%= camelcase(pluginName(name)) %> = require('<%= name %>');
 * var options = {};
 * breakdance.use(<%= camelcase(pluginName(name)) %>(options));
 * ```
 * @param {String} `options` Plugin options
 * @return {Function} Returns a function that takes an instance of `Breakdance`.
 * @api public
 */

module.exports = function(options) {
  return function(breakdance) {
    if (breakdance.isBreakdance) {
      breakdance.compiler.define('<%= camelcase(pluginName(name)) %>', handler);

    } else if (breakdance.isCompiler) {
      breakdance.define('<%= camelcase(pluginName(name)) %>', handler);

    } else {
      throw new Error('expected an instance of breakdance or breakdance.compiler');
    }
  };
};

function handler() {
  // do stuff
  return;
}


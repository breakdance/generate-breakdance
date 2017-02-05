---
rename:
  basename: index.js
---
'use strict';

/**
 * Adds a `.<%= camelcase(pluginName(name)) %>` method to a [Breakdance][] instance.
 *
 * ```js
 * var Breakdance = require('breakdance');
 * var <%= camelcase(pluginName(name)) %> = require('<%= name %>');
 * var parser = new Breakdance.Parser();
 * parser.use(<%= camelcase(pluginName(name)) %>([options]));
 *
 * ```
 * @param {String} `options` Plugin options
 * @return {Function} Returns a function that takes an instance of `Breakdance`.
 * @api public
 */

module.exports = function(options) {
  return function(breakdance) {
    if (!breakdance.isBreakdance) {
      throw new Error('expected an instance of Breakdance');
    }

    breakdance.define('<%= camelcase(pluginName(name)) %>', function() {
      // do stuff
      return this;
    });
  };
};

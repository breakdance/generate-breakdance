---
rename:
  basename: index.js
---
'use strict';

/**
 * Adds a `.<%= camelcase(pluginName(name)) %>` method to a [breakdance][] `Parser` instance.
 *
 * ```js
 * var Snapdragon = require('breakdance');
 * var <%= camelcase(pluginName(name)) %> = require('<%= name %>');
 * var parser = new Snapdragon.Parser();
 * parser.use(<%= camelcase(pluginName(name)) %>([options]));
 *
 * ```
 * @param {String} `options` Plugin options
 * @return {Function} Returns a function that takes an instance of `Breakdance`.
 * @api public
 */

module.exports = function(options) {
  return function(breakdance) {
    if (breakdance.isBreakdance) {
      breakdance.parser.define('<%= camelcase(pluginName(name)) %>', method);

    } else if (breakdance.isParser) {
      breakdance.define('<%= camelcase(pluginName(name)) %>', method);

    } else {
      throw new Error('expected an instance of breakdance or breakdance.parser');
    }
  };
};

function method() {
  // do stuff
  return;
}

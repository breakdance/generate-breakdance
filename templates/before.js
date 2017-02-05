'use strict';

/**
 * <%= ask(description) %>
 *
 * ```js
 * var Breakdance = require('breakdance');
 * var breakdance = new Breakdance();
 *
 * var '<%= camelcase(pluginName(name)) %>' = require('breakdance-'<%= camelcase(pluginName(name)) %>'');
 * var options = {};
 * breakdance.before('eos' '<%= camelcase(pluginName(name)) %>'(options));
 * ```
 * @param {String} `options` Plugin options
 * @return {Function} Returns the visitor function to be registered with [breakdance.before()](http://breakdance.io/docs.html#api-before-1).
 * @api public
 */

module.exports = function(options) {
  return function(node) {
    // do stuff to node
  };
};

'use strict';

var path = require('path');
var extend = require('extend-shallow');
var isValid = require('is-valid-app');

module.exports = function(app) {
  if (!isValid(app, 'generate-breakdance')) return;

  /**
   * Plugins
   */

  app.use(require('generate-project'));

  /**
   * Helpers
   */

  app.helper('pluginName', function(name) {
    return name.replace(/^breakdance\W*/, '');
  });

  /**
   * Run the generator's default task to scaffold out a new breakdance plugin project.
   *
   * ```sh
   * $ gen breakdance
   * ```
   * @name default task
   * @api public
   */

  app.task('default', ['files', 'plugin-only', 'install']);

  /**
   * Generate only the `index.js` file for a breakdance plugin.
   * Use `--stem` to change the file name.
   *
   * ```sh
   * $ gen breakdance:plugin-only
   * $ gen breakdance:plugin-only --stem foo.js
   * ```
   * @name plugin-only
   * @api public
   */

  task(app, 'plugin-only', 'plugin.js');

  /**
   * Scaffold out a complete project for a breakdance **compiler** plugin.
   *
   * ```sh
   * $ gen breakdance:compiler
   * ```
   * @name compiler
   * @api public
   */

  app.task('compiler', ['files', 'compiler-only', 'install']);

  /**
   * Generate only the `index.js` file for a compiler plugin.
   * Use `--stem` to change the file name.
   *
   * ```sh
   * $ gen breakdance:compiler-only
   * $ gen breakdance:compiler-only --stem foo.js
   * ```
   * @name compiler-only
   * @api public
   */

  task(app, 'compiler-only', 'compiler.js');

  /**
   * Scaffold out a complete project for a breakdance parser plugin.
   *
   * ```sh
   * $ gen breakdance:parser
   * ```
   * @name parser
   * @api public
   */

  app.task('parser', ['files', 'parser-only', 'install']);

  /**
   * Generate only the `index.js` file for a breakdance parser plugin.
   * Use `--stem` to change the file name.
   *
   * ```sh
   * $ gen breakdance:parser-only
   * $ gen breakdance:parser-only --stem foo.js
   * ```
   * @name parser-only
   * @api public
   */

  task(app, 'parser-only', 'parser.js');

  /**
   * For unit tests, to ensure this works as a sub-generator
   */

  app.task('unit-test', function(cb) {
    app.base.set('cache.unit-test', true);
    cb();
  });
};

/**
 * Create a task with the given `name` and glob `pattern`
 */

function task(app, name, pattern, dependencies) {
  app.task(name, dependencies || [], function(cb) {
    return file(app, pattern);
  });
}

function file(app, pattern) {
  var opts = extend({}, app.base.options, app.options);
  var templates = opts.srcBase || path.join(__dirname, 'templates');
  return app.src(pattern, {cwd: templates})
    .pipe(app.renderFile('*'))
    .pipe(app.conflicts(app.cwd))
    .pipe(app.dest(function(file) {
      if (opts.stem) file.stem = opts.stem;
      if (opts.name) file.stem = opts.name;
      return app.cwd;
    }));
}

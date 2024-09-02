module.exports = {
  rollup (config, opts) {
    if (opts.environment === 'development') {
       // redirect dev build to nowhere
       config.output.file = '/dev/null'
    } else {
      // rename prod build to index.js
      // config.output.file = './dist/index.js'

      config.output.sourcemap = false;
      opts.minify = true
    }

    // config.output.format = 'cjs';

    return config;
  }
}
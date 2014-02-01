module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: ['../lib/string-utils*.js'],
    port: 9876,
    colors: true,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: true
  });
};

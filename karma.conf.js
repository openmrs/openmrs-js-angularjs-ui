module.exports = function (config) {
	var webpackConfig = require('./webpack.config');
	webpackConfig.devtool = 'inline-source-map';
	webpackConfig.externals = [];
	
	var karmaConfig = {
		basePath: '.',
		frameworks: ['jasmine'],
		files: [
			{ pattern: './node_modules/babel-polyfill/browser.js', instrument: false},
			{ pattern: './src/test-index.js' }
		],
		exclude: [],
		preprocessors: {
			"./src/test-index.js": ["webpack", "sourcemap"]
		},
		webpack: webpackConfig,
		webpackMiddleware: {
			stats: "errors-only"
		},
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
		customLaunchers: {
			ChromeWithoutSecurity: {
				base: 'Chrome',
				flags: ['--disable-web-security']
			},
			FirefoxOnTravis: {
				base: 'Firefox',
				flags: ['--no-sandbox']
			}
		},
		singleRun: true,
		concurrency: Infinity
	};
	
	if (process.env.TRAVIS) {
		karmaConfig.browsers = ['FirefoxOnTravis'];
	}
	
	config.set(karmaConfig);
};
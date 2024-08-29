module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,svg,txt,css,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
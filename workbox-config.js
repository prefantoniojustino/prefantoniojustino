module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpeg,pdf,png,jpg,svg,txt,webm,css,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
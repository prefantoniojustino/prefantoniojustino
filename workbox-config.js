module.exports = {
  globDirectory: ".",
  globPatterns: ["**/*.{jpeg,pdf,png,jpg,svg,txt,webm,css,html,js,json}"],
  swDest: "sw.js",
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  maximumFileSizeToCacheInBytes: 50000000, // <---- increasing the file size to cached 5mb
};

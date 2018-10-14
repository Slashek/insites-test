
	const path = require("path");
	const glob = require("glob");
	module.exports = {
		entry: glob.sync(path.resolve(__dirname, "marketplace_builder/assets/scripts/app/*.js")),
		output: {
			filename: 'build.js',
			path: path.resolve(__dirname, "marketplace_builder/assets/dist")
		}
	}
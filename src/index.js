'use strict';

const yargs = require('yargs');

module.exports = {
	run() {
		console.log(yargs.argv);
	}
};
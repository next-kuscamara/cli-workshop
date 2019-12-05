'use strict';

const yargs = require('yargs');

module.exports = {
	run() {
		// Los comandos y descripcion de cada uno aparecen en la ayuda (di-hola --help)
		// comando --version nos muestra la version del package.json
		// yargs API: https://github.com/yargs/yargs/blob/HEAD/docs/api.md
		yargs
			.command({
				command: 'saluda',
				describe: 'Dice hola', 
				handler() {
					console.log(`Hola ${yargs.argv.nombre}`);
				}
			})
			.command({
				command: 'insulta',
				describe: 'Insulta',
				handler() {
					console.log('Te digo cosas feas');
				}
			})
			.option('nombre', {
				alias: 'n',
				default: 'persona'
			})
			.argv;
	}
};
const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ Error ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ Error ] » ') + data);
			break;
		default:
			console.log(chalk.magenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ PSTeam ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ PSTeam ] » ') + data);
			break;
		default:
			console.log(chalk.green(`[ PSTeam ] » `) + data);
			break;
	}
}
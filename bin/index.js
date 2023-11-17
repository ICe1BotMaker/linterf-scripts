const { exec } = require(`child_process`);
const chalk = require(`chalk`);

const command = `build`;

if (command === `build`) {
    console.log(`${chalk.gray(`┌`)} ${chalk.gray(`linterf-scripts`)} ▞ ${chalk.hex(`#00ADB5`)(command)} ${chalk.gray(`┐`)}`);

    console.log(`${chalk.gray(`└┄>`)} build start`);

    exec(`npx babel .\\ --out-dir .\\build`, { cwd: `./` }, (error) => {
        if (!error) console.log(`${chalk.gray(`└┄>`)} success.`);
    });
}
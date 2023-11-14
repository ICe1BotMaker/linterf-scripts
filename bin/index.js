const { exec } = require(`child_process`);
const chalk = require(`chalk`);

const command = `build`;

if (command === `build`) {
    console.log(`${chalk.gray(`┌`)} ${chalk.gray(`linterf-scripts`)} ▞ ${chalk.hex(`#00ADB5`)(command)} ${chalk.gray(`┐`)}`);

    exec(`mkdir xcopy`, { cwd: __dirname.replace(`\\bin`, ``) }, (error) => {
        if (!error) exec(`xcopy ${process.argv[1]} ${__dirname.replace(`\\bin`, ``)}\\xcopy /E`, { cwd: `./` }, (error) => {
            if (!error) console.log(`${chalk.gray(`└┄>`)} build start`);
    
            if (!error) exec(`npx --plugins=transform-jsx-syntax.js babel xcopy --out-dir build`, { cwd: __dirname.replace(`\\bin`, ``) }, (error) => {
                if (!error) console.log(`${chalk.gray(`└┄>`)} success.`);

                if (!error) exec(`rmdir /s /q xcopy`, { cwd: __dirname.replace(`\\bin`, ``) }, (error) => {
                    if (!error) exec(`node .`, { cwd: __dirname.replace(`\\bin`, `\\build`) });
                });
            });
        });
    });
}
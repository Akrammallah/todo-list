import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (chalk.red(condition)) {
    let answer = await inquirer.prompt([{
            message: "what do you want to add in list: ",
            type: "input",
            name: "todo"
        },
        {
            message: "what do you want add more: ",
            type: "confirm",
            name: "addMore",
            default: false
        }]);
    todos.push(answer.todo);
    condition = answer.addMore;
    console.log(chalk.blue(todos));
}

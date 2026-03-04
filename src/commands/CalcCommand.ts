import { Command as CommanderCommand } from 'commander';
import { Command } from './Command';
import chalk from 'chalk';

export class CalcCommand extends Command {
    public name = 'calc';
    public description = 'Simple calculator (add, sub, mul, div)';

    public setup(program: CommanderCommand): void {
        program
            .command(this.name)
            .description(this.description)
            .argument('<operation>', 'Operation: add, sub, mul, div')
            .argument('<a>', 'First number')
            .argument('<b>', 'Second number')
            .action((operation: string, a: string, b: string) => this.execute(operation, a, b));
    }

    public execute(operation: string, aStr: string, bStr: string): void {
        const a = parseFloat(aStr);
        const b = parseFloat(bStr);

        if (isNaN(a) || isNaN(b)) {
            console.error(chalk.red('Please provide valid numbers.'));
            return;
        }

        let result: number;

        switch (operation.toLowerCase()) {
            case 'add':
                result = a + b;
                console.log(`${a} + ${b} = ${chalk.green(result)}`);
                break;
            case 'sub':
                result = a - b;
                console.log(`${a} - ${b} = ${chalk.green(result)}`);
                break;
            case 'mul':
                result = a * b;
                console.log(`${a} * ${b} = ${chalk.green(result)}`);
                break;
            case 'div':
                if (b === 0) {
                    console.error(chalk.red('Error: Division by zero.'));
                    return;
                }
                result = a / b;
                console.log(`${a} / ${b} = ${chalk.green(result)}`);
                break;
            default:
                console.error(chalk.red(`Unknown operation '${operation}'. Use add, sub, mul, or div.`));
        }
    }
}

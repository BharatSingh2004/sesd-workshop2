import { Command as CommanderCommand } from 'commander';
import { Command } from './Command';
import axios from 'axios';
import chalk from 'chalk';

export class QuoteCommand extends Command {
    public name = 'quote';
    public description = 'Gets a random interesting programming quote';

    public setup(program: CommanderCommand): void {
        program
            .command(this.name)
            .description(this.description)
            .action(async () => await this.execute());
    }

    public async execute(): Promise<void> {
        try {
            const response = await axios.get('https://dummyjson.com/quotes/random');
            const data = response.data;
            console.log(chalk.italic.yellow(`"${data.quote}"`));
            console.log(chalk.bold.magenta(`  - ${data.author}`));
        } catch (error: any) {
            console.error(chalk.red(`Failed to fetch a quote: ${error.message}`));
        }
    }
}

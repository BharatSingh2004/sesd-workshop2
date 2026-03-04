import { Command as CommanderCommand } from 'commander';
import { Command } from './Command';
import axios from 'axios';
import chalk from 'chalk';

export class WeatherCommand extends Command {
    public name = 'weather';
    public description = 'Gets weather information for a city';

    public setup(program: CommanderCommand): void {
        program
            .command(this.name)
            .description(this.description)
            .argument('<city>', 'City to get weather for')
            .action(async (city: string) => await this.execute(city));
    }

    public async execute(city: string): Promise<void> {
        try {
            // wttr.in format=3 gives a nice single line format like `City: ⛅️  +22°C`
            const response = await axios.get(`https://wttr.in/${city}?format=3`);
            console.log(chalk.cyan(response.data.trim()));
        } catch (error: any) {
            console.error(chalk.red(`Failed to fetch weather for '${city}': ${error.message}`));
        }
    }
}

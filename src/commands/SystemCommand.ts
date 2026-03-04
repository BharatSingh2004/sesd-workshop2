import { Command as CommanderCommand } from 'commander';
import { Command } from './Command';
import * as os from 'os';
import chalk from 'chalk';

export class SystemCommand extends Command {
    public name = 'system';
    public description = 'Shows system information';

    public setup(program: CommanderCommand): void {
        program
            .command(this.name)
            .description(this.description)
            .action(() => this.execute());
    }

    public execute(): void {
        console.log(chalk.bold.magenta('System Information:'));
        console.log(`Platform: ${os.platform()}`);
        console.log(`Architecture: ${os.arch()}`);
        console.log(`Total Memory: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
        console.log(`Free Memory: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
        console.log(`CPUs: ${os.cpus().length} core(s)`);
    }
}

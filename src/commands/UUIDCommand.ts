import { Command as CommanderCommand } from 'commander';
import { Command } from './Command';
import * as crypto from 'crypto';
import chalk from 'chalk';

export class UUIDCommand extends Command {
    public name = 'uuid';
    public description = 'Generates a random UUID';

    public setup(program: CommanderCommand): void {
        program
            .command(this.name)
            .description(this.description)
            .action(() => this.execute());
    }

    public execute(): void {
        const uuid = crypto.randomUUID();
        console.log(chalk.green(`Generated UUID: ${chalk.bold(uuid)}`));
    }
}

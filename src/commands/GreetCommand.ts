import { Command as CommanderCommand } from 'commander';
import { Command } from './Command';

export class GreetCommand extends Command {
    public name = 'greet';
    public description = 'Greets the user by name';

    public setup(program: CommanderCommand): void {
        program
            .command(this.name)
            .description(this.description)
            .argument('<name>', 'Name of the user to greet')
            .action((name: string) => this.execute(name));
    }

    public execute(name: string): void {
        console.log(`Hello, ${name}! Welcome to the CLI.`);
    }
}

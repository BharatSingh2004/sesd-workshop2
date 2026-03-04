import { Command as CommanderCommand } from 'commander';
import { Command } from './commands/Command';

export class CLIApp {
    private program: CommanderCommand;
    private commands: Command[] = [];

    constructor() {
        this.program = new CommanderCommand();
        this.program
            .name('mycli')
            .description('A fully functional CLI tool built with Node, TypeScript, and OOP principles.')
            .version('1.0.0');
    }

    public registerCommand(command: Command): void {
        this.commands.push(command);
        command.setup(this.program);
    }

    public run(): void {
        this.program.parse(process.argv);

        // Display help if no arguments are provided
        if (!process.argv.slice(2).length) {
            this.program.outputHelp();
        }
    }
}

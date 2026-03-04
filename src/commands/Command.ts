import { Command as CommanderCommand } from 'commander';

export abstract class Command {
    public abstract name: string;
    public abstract description: string;

    /**
     * Set up the command with the commander program
     * @param program The commander program instance
     */
    public abstract setup(program: CommanderCommand): void;

    /**
     * Logic to be executed when the command is called
     * @param args Command arguments array
     */
    public abstract execute(...args: any[]): Promise<void> | void;
}

import { Command as CommanderCommand } from 'commander';
import { Command } from './Command';

export class Base64EncodeCommand extends Command {
    public name = 'base64-encode';
    public description = 'Encodes a string to Base64';

    public setup(program: CommanderCommand): void {
        program
            .command(this.name)
            .description(this.description)
            .argument('<text>', 'Text to encode')
            .action((text: string) => this.execute(text));
    }

    public execute(text: string): void {
        const encoded = Buffer.from(text).toString('base64');
        console.log(`Encoded: ${encoded}`);
    }
}

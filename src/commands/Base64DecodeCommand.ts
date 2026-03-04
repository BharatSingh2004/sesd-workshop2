import { Command as CommanderCommand } from 'commander';
import { Command } from './Command';

export class Base64DecodeCommand extends Command {
    public name = 'base64-decode';
    public description = 'Decodes a Base64 string to ASCII';

    public setup(program: CommanderCommand): void {
        program
            .command(this.name)
            .description(this.description)
            .argument('<base64string>', 'Base64 string to decode')
            .action((base64string: string) => this.execute(base64string));
    }

    public execute(base64string: string): void {
        const decoded = Buffer.from(base64string, 'base64').toString('ascii');
        console.log(`Decoded: ${decoded}`);
    }
}

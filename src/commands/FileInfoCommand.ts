import { Command as CommanderCommand } from 'commander';
import { Command } from './Command';
import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';

export class FileInfoCommand extends Command {
    public name = 'fileinfo';
    public description = 'Gets information about a local file';

    public setup(program: CommanderCommand): void {
        program
            .command(this.name)
            .description(this.description)
            .argument('<filename>', 'File to inspect')
            .action((filename: string) => this.execute(filename));
    }

    public execute(filename: string): void {
        const fullPath = path.resolve(process.cwd(), filename);
        try {
            const stats = fs.statSync(fullPath);
            console.log(chalk.bold.cyan(`File Information for: ${filename}`));
            console.log(`Path: ${fullPath}`);
            console.log(`Size: ${stats.size} bytes`);
            console.log(`Created: ${stats.birthtime}`);
            console.log(`Modified: ${stats.mtime}`);
        } catch (error: any) {
            console.error(chalk.red(`Error reading file ${filename}: ${error.message}`));
        }
    }
}

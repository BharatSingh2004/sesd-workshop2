import { Command as CommanderCommand } from 'commander';
import { Command } from './Command';
import axios from 'axios';
import chalk from 'chalk';

export class GithubCommand extends Command {
    public name = 'github';
    public description = 'Gets GitHub user information';

    public setup(program: CommanderCommand): void {
        program
            .command(this.name)
            .description(this.description)
            .argument('<username>', 'GitHub username to query')
            .action(async (username: string) => await this.execute(username));
    }

    public async execute(username: string): Promise<void> {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            const data = response.data;

            console.log(chalk.bold.blue(`GitHub User: ${data.login}`));
            console.log(`Name: ${data.name || 'N/A'}`);
            console.log(`Bio: ${data.bio || 'N/A'}`);
            console.log(`Public Repos: ${data.public_repos}`);
            console.log(`Followers: ${data.followers}`);
            console.log(`Following: ${data.following}`);
            console.log(`Profile URL: ${data.html_url}`);
        } catch (error: any) {
            console.error(chalk.red(`Failed to fetch user '${username}': ${error.message}`));
        }
    }
}

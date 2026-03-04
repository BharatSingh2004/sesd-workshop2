#!/usr/bin/env node
import { CLIApp } from './app';
import { GreetCommand } from './commands/GreetCommand';
import { FileInfoCommand } from './commands/FileInfoCommand';
import { SystemCommand } from './commands/SystemCommand';
import { UUIDCommand } from './commands/UUIDCommand';
import { Base64EncodeCommand } from './commands/Base64EncodeCommand';
import { Base64DecodeCommand } from './commands/Base64DecodeCommand';
import { CalcCommand } from './commands/CalcCommand';
import { GithubCommand } from './commands/GithubCommand';
import { WeatherCommand } from './commands/WeatherCommand';
import { QuoteCommand } from './commands/QuoteCommand';

const app = new CLIApp();

// Register all local commands
app.registerCommand(new GreetCommand());
app.registerCommand(new FileInfoCommand());
app.registerCommand(new SystemCommand());
app.registerCommand(new UUIDCommand());
app.registerCommand(new Base64EncodeCommand());
app.registerCommand(new Base64DecodeCommand());
app.registerCommand(new CalcCommand());
app.registerCommand(new GithubCommand());
app.registerCommand(new WeatherCommand());
app.registerCommand(new QuoteCommand());

// Start the CLI
app.run();

# SESD Workshop 2 - CLI Project
This project is a fully functional Object-Oriented Command Line Interface (CLI) tool built using Node.js and TypeScript. 

It features 10 custom commands, including 7 local utilities and 3 external API integrations, structured securely around Object-Oriented Programming (OOP) principles.

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/BharatSingh2004/sesd-workshop2.git
   cd sesd-workshop2
   ```

2. **Install dependencies**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Execution Setup**
   The project execution uses `ts-node` to compile and run TypeScript code seamlessly on the fly. You can run the CLI using the `npm start` script followed by `--` and the command arguments.
   
   To see the help menu with all available options, run:
   ```bash
   npm start -- --help
   ```

## Available Commands

### Local Utilities
*   **`greet <name>`**: Greets the user by the specified name.
*   **`fileinfo <filename>`**: Inspects a local file and outputs its size, creation timestamp, and modification details.
*   **`system`**: Displays system information including platform, architecture, memory, and CPU cores.
*   **`uuid`**: Generates a unique, random version-4 UUID.
*   **`base64-encode <text>`**: Encodes the given plain-text string into Base64 format.
*   **`base64-decode <base64string>`**: Decodes the given Base64 string back into ASCII text.
*   **`calc <operation> <a> <b>`**: Acts as a simple calculator. Supports `<operation>` arguments: `add`, `sub`, `mul`, `div`.

### API Integrations
*   **`github <username>`**: Fetches public GitHub user profile information (Name, Bio, Public Repos, Followers/Following, and Profile URL) via the GitHub API.
*   **`weather <city>`**: Retrieves current weather condition metrics for a specified city utilizing the `wttr.in` API.
*   **`quote`**: Downloads and displays a random, interesting programming quote and author using the DummyJSON Quotes API.

## Example Usage

**1. Using the Greeting Utility**
```bash
npm start -- greet "Rahul Kumar"
```

**2. Viewing System Specifications**
```bash
npm start -- system
```

**3. Mathematical Calculations**
```bash
npm start -- calc add 10 25
npm start -- calc div 100 4
```

**4. String Encodings**
```bash
npm start -- base64-encode "Hello World"
npm start -- base64-decode "SGVsbG8gV29ybGQ="
```

**5. Grabbing a GitHub Profile**
```bash
npm start -- github BharatSingh2004
```

**6. Fetching Weather Data**
```bash
npm start -- weather Delhi
npm start -- weather London
```

**7. Getting a Programming Quote**
```bash
npm start -- quote
```
// gemini-text-cli.js
require('dotenv').config(); // Load environment variables from .env
const { Command } = require('commander');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const program = new Command();

program
  .name('gemini-text-cli')
  .description('A simple CLI for generating text with the Google Gemini API')
  .version('0.1.0');

// Define the 'generate' command
program.command('generate')
  .description('Generates text based on a given prompt.')
  .argument('<prompt>', 'The text prompt to send to the Gemini model.')
  .option('-m, --model <modelName>', 'Specify the Gemini model to use.', 'gemini-1.5-flash') // Default to 'gemini-1.5-flash'
  .action(async (prompt, options) => {
    const API_KEY = process.env.API_KEY;
    const modelName = options.model;

    if (!API_KEY) {
      console.error('Error: API_KEY is not set. Please set it in your .env file or environment variables.');
      process.exit(1); // Exit with an error code
    }

    if (!prompt || prompt.trim() === '') {
      console.error('Error: Please provide a non-empty prompt.');
      program.help(); // Show help message if prompt is missing
      process.exit(1);
    }

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      // Get the generative model with the specified or default name
      const model = genAI.getGenerativeModel({ model: modelName });

      console.log(`Sending prompt to Gemini (${modelName}): "${prompt}"`);

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      console.log('\n--- Gemini Response ---');
      console.log(text);

    } catch (error) {
      console.error('\nError generating content:');
      if (error.status && error.statusText) {
        console.error(`Status: ${error.status} - ${error.statusText}`);
      }
      if (error.errorDetails) {
        console.error(`Details: ${JSON.stringify(error.errorDetails, null, 2)}`);
      }
      console.error('Full Error:', error.message || error);
      console.error('\nTips:');
      console.error('  - Ensure your API_KEY is correct in the .env file.');
      console.error(`  - Verify that '${modelName}' is a valid model for your API key and supports 'generateContent'.`);
      console.error('  - You can run `node gemini-text-cli.js --help` for usage instructions.');
      process.exit(1); // Exit with an error code
    }
  });

// Parse the arguments and execute the command
program.parse(process.argv);
const {Command} = require('commander');
const fs = require('fs');
const date = new Date();
const axios = require('axios');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const program = new Command();


program
.name('First-CLI')
.description('CLI tool to do some basic tasks')
.version('1.0.0');

program.command('count')
.description('It is for counting the words in file')
.argument('<file>','file to count data')
.action((file)=>{
  fs.readFile(file,'utf-8',(err,data)=>{
    if(err){
      console.log(err);
    }
    else{
      const words = data.trim().split(/\s+/); // split on spaces, tabs, newlines
      console.log("✅ Word count:", words.length);
    }
  })
})
program.command('Time-batana')
.description('It is for tellig the current time')
.action(()=>{
  const date = new Date();
  console.log('⏰ Time:', date.toLocaleTimeString());
})
program.command('time-date-month')
.description('It is for tellig the current time, date and month')
.action(()=>{
  const date = new Date();
  console.log('⏰ Time:', date.toLocaleTimeString());
  console.log('📅 Date:', date.toDateString());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  console.log('📆 Month:',monthNames[date.getMonth()]);
})
program
  .name('gemini-text-cli')
  .description('A simple CLI for generating text with the Google Gemini API')
  
// Define the 'ask' command
program.command('ask')
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
      // console.error('Full Error:', error.message || error);
      // console.error('\nTips:');
      // console.error('  - Ensure your API_KEY is correct in the .env file.');
      // console.error(`  - Verify that '${modelName}' is a valid model for your API key and supports 'generateContent'.`);
      console.error('  - You can run `node gemini-text-cli.js --help` for usage instructions.');
      process.exit(1); 
    }
  });

// Parse the arguments and execute the command
program.parse(process.argv);


  




// program.parse();
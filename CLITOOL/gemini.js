// index.js
require('dotenv').config(); // Load environment variables from .env

const { GoogleGenerativeAI } = require('@google/generative-ai');

async function run() {
  const API_KEY = process.env.API_KEY;

  if (!API_KEY) {
    console.error('API_KEY is not set. Please set it in your .env file or environment variables.');
    return;
  }

  const genAI = new GoogleGenerativeAI(API_KEY);

  // For text-only input, use the gemini-pro model
 // In your original index.js or chat.js
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const prompt = process.argv.slice(2).join(' ');
if (!prompt) {
  console.error('Please provide a prompt as a command-line argument.');
  console.error('Example: node index.js "What is the capital of France?"');
  return;
}

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  } catch (error) {
    console.error('Error generating content:', error);
  }
}

run();
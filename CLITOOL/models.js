// list_models.js
require('dotenv').config();

const { GoogleGenerativeAI } = require('@google/generative-ai');

async function listAvailableModels() {
  const API_KEY = process.env.API_KEY;

  if (!API_KEY) {
    console.error('API_KEY is not set. Please set it in your .env file or environment variables.');
    return;
  }

  const genAI = new GoogleGenerativeAI(API_KEY);

  try {
    const { models } = await genAI.listModels();
    console.log('Available models and their supported methods:');
    for (const model of models) {
      console.log(`\nModel Name: ${model.name}`);
      console.log(`Display Name: ${model.displayName}`);
      console.log(`Description: ${model.description}`);
      console.log(`Input Token Limit: ${model.inputTokenLimit}`);
      console.log(`Output Token Limit: ${model.outputTokenLimit}`);
      console.log(`Supported Generation Methods: ${model.supportedGenerationMethods.join(', ')}`);
      // You can add more details if needed
    }
  } catch (error) {
    console.error('Error listing models:', error);
    if (error.response && error.response.status === 403) {
      console.error('Check your API Key permissions. It might not have access to list models.');
    }
  }
}

listAvailableModels();
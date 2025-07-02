//#!/usr/bin/env node

require('dotenv').config()
const { Command } = require('commander');
const axios = require('axios');
const program = new Command();



                                  

program
  .name('ask-gpt')
  .description('Ask GPT via terminal')
  .version('1.0.0');

program
  .command('ask')
  .arguments('<prompt...>')
  .description('Ask GPT a question')
  .action(async (promptWords) => {
    const prompt = promptWords.join(' ');
    const apiKey = process.env.KEY;
  

    try {
      const res = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('\n🤖 GPT:\n', res.data.choices[0].message.content);
    } catch (err) {
      console.error('❌ Error:', err.response?.data || err.message);
    }
  });

program.parse(process.argv);

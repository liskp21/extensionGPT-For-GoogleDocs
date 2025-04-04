# Project Overview
GPT extension for Google docs using Google Apps Script.

# Core Functionalities
- Connect Google Apps Script to OpenAI API
- Add a custom menu "GPT Extension" to Google Docs with the following options:
-- Show assistant panel
-- Operations with selected text:
--- Summarize
--- Translate
--- Spell check
-- Settings:
--- OpenAI API key
--- Model - to choose model we will use. Short list of pre-defined models is below:
---- GPT-4o
---- GPT-4o-mini
--- Temperature
--- Max tokens



- Set up a sidebar UI that can provide a user-friendly interface where users enter prompts and view results.

# Documentation
## Connect Google Apps Script to OpenAI API
// Replace with your OpenAI API key
const OPENAI_API_KEY = 'your-api-key-here';

function callOpenAI(prompt) {
  // OpenAI API endpoint
  const url = 'https://api.openai.com/v1/chat/completions';
  
  // Request options
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    payload: JSON.stringify({
      model: "gpt-3.5-turbo", // You can change this to gpt-4 if you have access
      messages: [{role: "user", content: prompt}],
      temperature: 0.7
    })
  };
  
  // Make the API call
  const response = UrlFetchApp.fetch(url, options);
  const jsonResponse = JSON.parse(response.getContentText());
  
  // Return the AI's response
  return jsonResponse.choices[0].message.content;
}

// Example function to test the connection
function testOpenAI() {
  const prompt = "Hello, how are you?";
  const response = callOpenAI(prompt);
  Logger.log(response);
}

# Project File Structure
- Code.gs - main file
- OpenAIService.gs - service file
- Config.gs - configuration file
- Menu.gs - menu file
- TextOperations.gs - text operations file
- SettingsHandler.gs - settings handler file
- Sidebar.html - sidebar UI file
- styles.css - styles file
- Utilities.gs - utilities file
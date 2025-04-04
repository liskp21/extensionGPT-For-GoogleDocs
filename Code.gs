// 1. OpenAI Connection
const OPENAI_API_KEY = 'your-api-key-here'; // You'll need to replace this with your actual API key

function callOpenAI(prompt, model = "gpt-3.5-turbo", temperature = 0.7) {
  const url = 'https://api.openai.com/v1/chat/completions';
  
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    payload: JSON.stringify({
      model: model,
      messages: [{role: "user", content: prompt}],
      temperature: temperature
    })
  };
  
}

// 2. Create Custom Menu
function onOpen() {
  const ui = DocumentApp.getUi();
  ui.createMenu('GPT Extension')
    .addItem('Show Assistant Panel', 'showSidebar')
    .addSeparator()
    .addSubMenu(ui.createMenu('Operations with Selected Text')
      .addItem('Summarize', 'summarizeText')
      .addItem('Translate', 'translateText')
      .addItem('Spell Check', 'spellCheckText'))
    .addSeparator()
    .addSubMenu(ui.createMenu('Settings')
      .addItem('Set API Key', 'setApiKey')
      .addItem('Choose Model', 'chooseModel')
      .addItem('Set Temperature', 'setTemperature')
      .addItem('Set Max Tokens', 'setMaxTokens'))
    .addToUi();
}

// 3. Show Sidebar
function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('sidebar')
    .setTitle('GPT Assistant')
    .setWidth(300);
  DocumentApp.getUi().showSidebar(html);
}

// 4. Text Operations
function summarizeText() {
  const doc = DocumentApp.getActiveDocument();
  const selection = doc.getSelection();
  
  if (selection) {
    const text = selection.getRangeElements()[0].getElement().asText().getText();
    const prompt = `Summarize this text: ${text}`;
    const summary = callOpenAI(prompt);
    doc.getBody().appendParagraph(`Summary: ${summary}`);
  } else {
    DocumentApp.getUi().alert('Please select some text to summarize.');
  }
}

function translateText() {
  // We'll implement this next
}

function spellCheckText() {
  // We'll implement this next
} 
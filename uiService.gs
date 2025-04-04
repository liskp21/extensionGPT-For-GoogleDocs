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
      .addItem('Set API Key', 'showApiKeyDialog')
      .addItem('Choose Model', 'showModelDialog')
      .addItem('Set Temperature', 'showTemperatureDialog')
      .addItem('Set Max Tokens', 'showMaxTokensDialog'))
    .addToUi();
}

function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('sidebar')
    .setTitle('GPT Assistant')
    .setWidth(300);
  DocumentApp.getUi().showSidebar(html);
} 
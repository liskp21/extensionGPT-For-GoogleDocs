function getSelectedText() {
  const doc = DocumentApp.getActiveDocument();
  const selection = doc.getSelection();
  if (!selection) {
    DocumentApp.getUi().alert('Please select some text first.');
    return null;
  }
  return selection.getRangeElements()[0].getElement().asText().getText();
}

function summarizeText() {
  const text = getSelectedText();
  if (text) {
    const prompt = `Summarize this text: ${text}`;
    const summary = callOpenAI(prompt);
    DocumentApp.getActiveDocument().getBody().appendParagraph(`Summary: ${summary}`);
  }
}

function translateText() {
  const text = getSelectedText();
  if (text) {
    const prompt = `Translate this text to English: ${text}`;
    const translation = callOpenAI(prompt);
    DocumentApp.getActiveDocument().getBody().appendParagraph(`Translation: ${translation}`);
  }
}

function spellCheckText() {
  const text = getSelectedText();
  if (text) {
    const prompt = `Check spelling and grammar for this text: ${text}`;
    const correctedText = callOpenAI(prompt);
    DocumentApp.getActiveDocument().getBody().appendParagraph(`Corrected Text: ${correctedText}`);
  }
} 
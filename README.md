# Google Docs GPT Extension

This extension integrates OpenAI's GPT models into Google Docs, providing AI-powered writing assistance directly in your documents.

## Features

- **Text Operations**:
  - Summarize selected text
  - Translate selected text
  - Spell check and grammar correction
- **AI Assistant Panel**:
  - Direct chat with GPT
  - Custom prompts
- **Customizable Settings**:
  - Set OpenAI API key
  - Choose GPT model
  - Adjust temperature
  - Set max tokens

## Installation

1. **Create a New Google Apps Script Project**:
   - Go to [Google Apps Script](https://script.google.com/)
   - Create a new project

2. **Add the Script Files**:
   - Create the following files in your project:
     - `config.gs`
     - `openaiService.gs`
     - `uiService.gs`
     - `textOperations.gs`
     - `sidebar.html`
   - Copy the code from each file in this repository into the corresponding file in your project

3. **Set Up Your OpenAI API Key**:
   - Open the `config.gs` file
   - Replace `'your-api-key-here'` with your actual OpenAI API key

4. **Deploy the Script**:
   - Click on "Deploy" > "Test deployments"
   - Select "Google Docs" as the deployment type
   - Follow the prompts to authorize the script

5. **Add to Google Docs**:
   - Open any Google Doc
   - Go to "Extensions" > "Apps Script"
   - Select your project
   - The "GPT Extension" menu will appear in your Google Docs toolbar

## Usage

### Accessing the Extension

1. Open any Google Doc
2. In the menu bar, click on "GPT Extension"
3. Choose from the available options

### Using the Sidebar

1. Click on "GPT Extension" > "Show Assistant Panel"
2. The sidebar will appear on the right side of your document
3. Enter your prompt in the text area and click "Send"

### Text Operations

1. Select the text you want to process
2. Go to "GPT Extension" > "Operations with Selected Text"
3. Choose the operation you want to perform:
   - Summarize
   - Translate
   - Spell Check

### Settings

1. Go to "GPT Extension" > "Settings"
2. Choose the setting you want to modify:
   - Set API Key
   - Choose Model
   - Set Temperature
   - Set Max Tokens

## Troubleshooting

- **API Key Not Working**:
  - Ensure your API key is correct and has sufficient credits
  - Check if the API key has the necessary permissions

- **Script Not Appearing**:
  - Make sure you've deployed the script correctly
  - Refresh your Google Docs page

- **Slow Responses**:
  - Check your internet connection
  - Try reducing the max tokens in the settings

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support or feature requests, please open an issue on GitHub. 
function callOpenAI(prompt, customConfig = {}) {
  const config = Object.assign({}, getConfig(), customConfig);
  const url = 'https://api.openai.com/v1/chat/completions';
  
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    },
    payload: JSON.stringify({
      model: config.MODEL,
      messages: [{role: "user", content: prompt}],
      temperature: config.TEMPERATURE,
      max_tokens: config.MAX_TOKENS
    })
  };
  
  try {
    const response = UrlFetchApp.fetch(url, options);
    const jsonResponse = JSON.parse(response.getContentText());
    return jsonResponse.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return 'Error processing your request. Please try again.';
  }
} 
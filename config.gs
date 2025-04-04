const CONFIG = {
  API_KEY: 'your-api-key-here',
  MODEL: 'gpt-3.5-turbo',
  TEMPERATURE: 0.7,
  MAX_TOKENS: 1000
};

function getConfig() {
  return CONFIG;
}

function updateConfig(newConfig) {
  Object.assign(CONFIG, newConfig);
} 
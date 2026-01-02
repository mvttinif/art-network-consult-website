import { aiResponses } from '../data/aiResponses';

const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s]/g, '') // Remove caracteres especiais
    .trim();
};

const findKeywordMatch = (message) => {
  const normalized = normalizeText(message);
  const words = normalized.split(/\s+/);

  for (const word of words) {
    if (aiResponses.keywords[word]) {
      return aiResponses.keywords[word];
    }
  }

  // Procurar correspondências parciais
  for (const [keyword, responseId] of Object.entries(aiResponses.keywords)) {
    if (normalized.includes(keyword)) {
      return responseId;
    }
  }

  return null;
};

export const getAIResponse = async (message, actionId = null) => {
  // Simular delay de digitação (200-800ms)
  await new Promise((resolve) => setTimeout(resolve, 200 + Math.random() * 600));

  // Se foi clicada uma ação rápida
  if (actionId && aiResponses.responses[actionId]) {
    return aiResponses.responses[actionId];
  }

  // Procurar por palavras-chave na mensagem
  const matchedResponseId = findKeywordMatch(message);

  if (matchedResponseId && aiResponses.responses[matchedResponseId]) {
    return aiResponses.responses[matchedResponseId];
  }

  // Resposta padrão
  return aiResponses.responses.default;
};

export const getInitialGreeting = () => {
  return aiResponses.greetings.initial;
};

export const getQuickActions = () => {
  return aiResponses.quickActions;
};

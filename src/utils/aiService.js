import { aiResponses } from '../data/aiResponses';

/**
 * Normaliza texto removendo acentos, caracteres especiais e convertendo para minúsculas
 */
const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s]/g, ' ') // Substitui caracteres especiais por espaço
    .replace(/\s+/g, ' ') // Remove espaços múltiplos
    .trim();
};

/**
 * Verifica se é uma saudação
 */
const isGreeting = (message) => {
  const normalized = normalizeText(message);
  const words = normalized.split(' ');

  // Se a mensagem é curta (1-3 palavras) e contém padrão de saudação
  if (words.length <= 3) {
    return aiResponses.greetings.patterns.some(pattern =>
      normalized.includes(pattern) || words.includes(pattern)
    );
  }
  return false;
};

/**
 * Obtém resposta de saudação aleatória
 */
const getGreetingResponse = () => {
  const responses = aiResponses.greetings.responses;
  return {
    text: responses[Math.floor(Math.random() * responses.length)],
    followUp: ['ai_help', 'services', 'meeting'],
  };
};

/**
 * Calcula pontuação de match para uma intenção
 * Usa sistema de pontuação ponderada
 */
const calculateIntentScore = (message, intentId, intent) => {
  const normalized = normalizeText(message);
  const words = normalized.split(' ');
  let score = 0;
  let matchedKeywords = 0;

  for (const keyword of intent.keywords) {
    const normalizedKeyword = normalizeText(keyword);

    // Match exato de palavra
    if (words.includes(normalizedKeyword)) {
      score += 3 * intent.weight;
      matchedKeywords++;
    }
    // Match de frase (keyword com múltiplas palavras)
    else if (normalizedKeyword.includes(' ') && normalized.includes(normalizedKeyword)) {
      score += 4 * intent.weight; // Frases têm mais peso
      matchedKeywords++;
    }
    // Match parcial (keyword está contida na mensagem)
    else if (normalized.includes(normalizedKeyword)) {
      score += 2 * intent.weight;
      matchedKeywords++;
    }
    // Match de palavra que contém a keyword (ex: "automação" match "automat")
    else if (words.some(word => word.includes(normalizedKeyword) || normalizedKeyword.includes(word))) {
      score += 1 * intent.weight;
      matchedKeywords++;
    }
  }

  // Bonus por múltiplos matches (indica maior certeza)
  if (matchedKeywords > 1) {
    score += matchedKeywords * 0.5;
  }

  return { intentId, score, matchedKeywords };
};

/**
 * Encontra a melhor intenção baseada na mensagem
 */
const findBestIntent = (message) => {
  const scores = [];

  for (const [intentId, intent] of Object.entries(aiResponses.intents)) {
    const result = calculateIntentScore(message, intentId, intent);
    if (result.score > 0) {
      scores.push(result);
    }
  }

  // Ordenar por pontuação (maior primeiro)
  scores.sort((a, b) => b.score - a.score);

  // Retornar melhor match se tiver pontuação mínima
  if (scores.length > 0 && scores[0].score >= 2) {
    return scores[0].intentId;
  }

  return null;
};

/**
 * Processa follow-up actions e retorna labels formatadas
 */
const getFollowUpButtons = (followUpIds) => {
  if (!followUpIds || followUpIds.length === 0) return [];

  return followUpIds.map(id => ({
    id,
    label: aiResponses.followUpLabels[id] || id,
  }));
};

/**
 * Função principal para obter resposta do AI
 */
export const getAIResponse = async (message, actionId = null) => {
  // Simular delay de digitação mais natural (300-1000ms)
  const typingDelay = 300 + Math.random() * 700;
  await new Promise((resolve) => setTimeout(resolve, typingDelay));

  // Se foi clicada uma ação/botão específico
  if (actionId && aiResponses.responses[actionId]) {
    const response = aiResponses.responses[actionId];
    return {
      text: response.text,
      followUp: getFollowUpButtons(response.followUp),
    };
  }

  // Verificar se é saudação
  if (isGreeting(message)) {
    const greeting = getGreetingResponse();
    return {
      text: greeting.text,
      followUp: getFollowUpButtons(greeting.followUp),
    };
  }

  // Encontrar melhor intenção
  const bestIntent = findBestIntent(message);

  if (bestIntent && aiResponses.responses[bestIntent]) {
    const response = aiResponses.responses[bestIntent];
    return {
      text: response.text,
      followUp: getFollowUpButtons(response.followUp),
    };
  }

  // Resposta padrão
  const defaultResponse = aiResponses.responses.default;
  return {
    text: defaultResponse.text,
    followUp: getFollowUpButtons(defaultResponse.followUp),
  };
};

/**
 * Retorna mensagem de boas-vindas inicial
 */
export const getInitialGreeting = () => {
  return aiResponses.greetings.initial;
};

/**
 * Retorna ações rápidas para mostrar inicialmente
 */
export const getQuickActions = () => {
  return aiResponses.quickActions;
};

/**
 * Verifica se há resposta para uma ação específica
 */
export const hasResponse = (actionId) => {
  return !!aiResponses.responses[actionId];
};

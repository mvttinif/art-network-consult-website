import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineChat, HiX, HiPaperAirplane } from 'react-icons/hi';
import { getAIResponse, getInitialGreeting, getQuickActions } from '../../utils/aiService';

const TypingIndicator = () => (
  <div className="flex items-center gap-1 px-4 py-3">
    <div className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-artnetwork-primary/60 rounded-full"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}
    </div>
    <span className="text-sm text-gray-500 ml-2">A escrever...</span>
  </div>
);

const ChatMessage = ({ message, isBot }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3`}
  >
    <div
      className={`max-w-[85%] px-4 py-3 rounded-2xl ${isBot
          ? 'bg-gray-100 text-gray-800 rounded-bl-md'
          : 'bg-artnetwork-primary text-white rounded-br-md'
        }`}
    >
      <div
        className="text-sm leading-relaxed whitespace-pre-line"
        dangerouslySetInnerHTML={{
          __html: message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
        }}
      />
    </div>
  </motion.div>
);

const QuickActionButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-xs bg-artnetwork-primary/10 text-artnetwork-primary rounded-full hover:bg-artnetwork-primary/20 transition-colors whitespace-nowrap"
  >
    {label}
  </button>
);

const AIConsultant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [quickActions, setQuickActions] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setQuickActions(getQuickActions());
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Enviar mensagem inicial do bot
      setMessages([{ text: getInitialGreeting(), isBot: true }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (text, actionId = null) => {
    if (!text.trim() && !actionId) return;

    const userMessage = text.trim() || quickActions.find((a) => a.id === actionId)?.label;

    // Adicionar mensagem do utilizador
    setMessages((prev) => [...prev, { text: userMessage, isBot: false }]);
    setInput('');
    setIsTyping(true);

    // Obter resposta do bot
    const response = await getAIResponse(userMessage, actionId);

    setIsTyping(false);
    setMessages((prev) => [...prev, { text: response.text, isBot: true }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-artnetwork-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-artnetwork-bright transition-colors ${isOpen ? 'hidden' : ''
          }`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <HiOutlineChat className="w-6 h-6" />
        {/* Pulse animation */}
        <span className="absolute w-full h-full rounded-full bg-artnetwork-primary animate-ping opacity-30" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ height: 'min(700px, calc(100vh - 100px))' }}
          >
            {/* Header */}
            <div className="bg-artnetwork-dark px-4 py-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-artnetwork-primary/20 rounded-full flex items-center justify-center">
                  <HiOutlineChat className="w-5 h-5 text-artnetwork-primary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Assistente IA</h3>
                  <p className="text-gray-400 text-xs">ArtNetwork Consult</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <HiX className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <ChatMessage key={idx} message={msg.text} isBot={msg.isBot} />
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length <= 2 && !isTyping && (
              <div className="px-4 py-2 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto flex-shrink-0">
                {quickActions.map((action) => (
                  <QuickActionButton
                    key={action.id}
                    label={action.label}
                    onClick={() => handleSendMessage('', action.id)}
                  />
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 bg-white border-t border-gray-100 flex gap-2 flex-shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escreva a sua mensagem..."
                className="flex-1 px-4 py-2 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-artnetwork-primary/30"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 bg-artnetwork-primary text-white rounded-xl flex items-center justify-center hover:bg-artnetwork-bright transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <HiPaperAirplane className="w-5 h-5 rotate-90" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIConsultant;

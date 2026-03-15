import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send, Bot, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const quickQuestions = [
  { label: 'Best Hybrid SUV', value: 'What is the best hybrid SUV under 50 lakh?' },
  { label: 'First Car', value: 'I need a first car recommendation under 35 lakh' },
  { label: 'German vs JDM', value: 'Should I buy a German or JDM car?' },
];

const smartResponses: Record<string, string> = {
  suv: '🚗 For hybrid SUVs, we recommend the **Toyota Harrier 2020** (৳52L) or **Honda CR-V 2020** (৳48L). Both have excellent fuel economy and auction grades of 4+. Would you like to schedule a viewing?',
  first: '🎉 For a first car, the **Honda Insight 2020** (৳38L) is perfect! It\'s a hybrid sedan with great fuel economy (1.5L i-VTEC), low maintenance, and an auction grade of 4.5/A. Want to explore more options?',
  german: '🏎️ **JDM cars** are better for reliability and fuel economy. **German cars** like BMW 5 Series offer luxury and performance. For Bangladesh roads and maintenance costs, we recommend JDM for daily use and German for weekend prestige.',
  budget: 'Based on your budget, here are our top picks:\n• Under ৳40L: Honda Insight, Toyota Cross\n• ৳40-60L: Toyota Prius, Honda CR-V, Harrier\n• ৳60L+: BMW 5 Series, Mercedes E250',
};

const getResponse = (msg: string): string => {
  const lower = msg.toLowerCase();
  if (lower.includes('suv') || lower.includes('harrier') || lower.includes('crv')) return smartResponses.suv;
  if (lower.includes('first') || lower.includes('beginner')) return smartResponses.first;
  if (lower.includes('german') || lower.includes('jdm') || lower.includes('bmw')) return smartResponses.german;
  if (lower.includes('budget') || lower.includes('lakh') || lower.includes('price')) return smartResponses.budget;
  return '🤖 Thanks for your interest! I can help you find the perfect vehicle. Try asking about:\n• Best hybrid cars\n• SUV recommendations\n• Budget-based suggestions\n\nOr call us at +880 1608-095085 for personalized assistance!';
};

const SmartCarFinder = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: '👋 Welcome to Torque Tactix! I can help you find your dream car. What are you looking for?' },
  ]);
  const [input, setInput] = useState('');

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: 'user', content: text };
    const botMsg: Message = { role: 'bot', content: getResponse(text) };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <>
      {/* FAB */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full swoosh-click"
        style={{
          background: 'linear-gradient(135deg, hsl(43 74% 49%), hsl(30 60% 42%))',
          boxShadow: '0 0 30px hsl(43 74% 49% / 0.3)',
        }}
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {open ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <Sparkles className="w-6 h-6 text-primary-foreground" />
        )}
      </motion.button>

      {/* Chat panel */}
      {open && (
        <motion.div
          className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] glass-panel-strong overflow-hidden flex flex-col"
          style={{ height: 480 }}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
        >
          {/* Header */}
          <div className="p-4 border-b flex items-center gap-3" style={{ borderColor: 'hsl(43 74% 49% / 0.1)' }}>
            <Bot className="w-5 h-5 text-primary" />
            <div>
              <h4 className="font-display font-bold text-sm">Smart Car Finder</h4>
              <p className="text-xs text-muted-foreground">AI-powered vehicle discovery</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-sm whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'text-foreground'
                    : 'text-foreground'
                }`} style={{
                  background: msg.role === 'user'
                    ? 'linear-gradient(135deg, hsl(43 74% 49% / 0.15), hsl(43 74% 49% / 0.05))'
                    : 'hsl(0 0% 100% / 0.05)',
                  border: `1px solid ${msg.role === 'user' ? 'hsl(43 74% 49% / 0.2)' : 'hsl(0 0% 100% / 0.08)'}`,
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Quick questions */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 flex gap-2 flex-wrap">
              {quickQuestions.map(q => (
                <button
                  key={q.label}
                  onClick={() => send(q.value)}
                  className="glass-button swoosh-click px-3 py-1.5 rounded-full text-xs"
                >
                  {q.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 flex gap-2" style={{ borderTop: '1px solid hsl(43 74% 49% / 0.1)' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send(input)}
              placeholder="Ask about any vehicle..."
              className="flex-1 px-4 py-2 rounded-lg text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors"
              style={{
                background: 'hsl(0 0% 100% / 0.05)',
                border: '1px solid hsl(43 74% 49% / 0.1)',
              }}
            />
            <button
              onClick={() => send(input)}
              className="glass-button-primary p-2 rounded-lg swoosh-click"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SmartCarFinder;

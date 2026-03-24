import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircleIcon, XIcon, SendIcon } from 'lucide-react';
interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}
const RESPONSES: Record<string, string> = {
  price:
  'Our residences range from $825,000 for a 2-bedroom unit to $2,500,000 for The Crown Penthouse. Would you like details on a specific property?',
  penthouse:
  'We have two stunning penthouses: The Crown Penthouse ($2.5M, 4,500 sq.ft) on Floor 40 and The Horizon Penthouse ($2.35M, 4,200 sq.ft) on Floor 39. Both feature private terraces and panoramic views.',
  amenities:
  'Altura offers world-class amenities including an infinity pool & spa, sky lounge & bar, state-of-the-art fitness center, private cinema, 24/7 concierge, and landscaped zen gardens.',
  viewing:
  "I'd be happy to arrange a private viewing! You can schedule one directly on any property page, or call our sales team at +254 700 000 000.",
  invest:
  'Altura offers projected 15%+ annual ROI with 95% target occupancy. Our investor portal provides real-time portfolio tracking. Visit the Investment section or sign up as an investor to learn more.',
  location:
  "Altura Upper Hill is located on Upper Hill Road in Nairobi, Kenya — the city's premier financial and diplomatic district, minutes from the CBD and major hospitals.",
  payment:
  'We accept payments via M-Pesa for residents. Flexible payment plans are available for property purchases. Contact our sales team for details.',
  maintenance:
  'Residents can submit maintenance requests through the Resident Portal. Our team typically responds within 24 hours for standard requests and 2 hours for urgent issues.',
  hello:
  "Welcome to Altura Upper Hill! I'm your AI concierge. I can help with property information, amenities, investment details, scheduling viewings, and more. What would you like to know?",
  hi: 'Hello! Welcome to Altura Upper Hill. How may I assist you today? I can help with property details, pricing, amenities, or scheduling a viewing.'
};
function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, response] of Object.entries(RESPONSES)) {
    if (lower.includes(key)) return response;
  }
  return 'Thank you for your inquiry. For detailed information, I recommend exploring our Properties page or contacting our sales team at +254 700 000 000 or info@alturaupperhill.com. Is there anything specific about Altura I can help with?';
}
export function AIChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
  {
    id: 0,
    text: 'Welcome to Altura Upper Hill. How may I assist you with your luxury real estate inquiries today?',
    sender: 'bot'
  }]
  );
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [messages, isTyping]);
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);
  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = {
      id: Date.now(),
      text,
      sender: 'user'
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setTimeout(
      () => {
        const botMsg: Message = {
          id: Date.now() + 1,
          text: getResponse(text),
          sender: 'bot'
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      },
      800 + Math.random() * 700
    );
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  return (
    <>
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.95
          }}
          transition={{
            duration: 0.2
          }}
          className="fixed bottom-24 right-6 w-80 sm:w-96 bg-altura-card border border-altura-border rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col">
          
            {/* Header */}
            <div className="bg-altura-charcoal border-b border-altura-border p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-altura-gold animate-pulse" />
                <h3 className="font-serif text-altura-white tracking-wide">
                  Altura Concierge
                </h3>
              </div>
              <button
              onClick={() => setIsOpen(false)}
              className="text-altura-muted hover:text-altura-white transition-colors"
              aria-label="Close chat">
              
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="h-80 p-4 overflow-y-auto bg-altura-surface flex flex-col space-y-4">
              {messages.map((msg) =>
            <motion.div
              key={msg.id}
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className={`max-w-[85%] ${msg.sender === 'user' ? 'self-end' : 'self-start'}`}>
              
                  <div
                className={`p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-altura-gold/20 border border-altura-gold/30 rounded-br-none text-altura-white' : 'bg-altura-charcoal border border-altura-border rounded-tl-none text-altura-warm'}`}>
                
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </motion.div>
            )}
              {isTyping &&
            <div className="self-start max-w-[85%]">
                  <div className="bg-altura-charcoal border border-altura-border p-3 rounded-2xl rounded-tl-none">
                    <div className="flex space-x-1.5">
                      <div
                    className="w-2 h-2 bg-altura-gold/50 rounded-full animate-bounce"
                    style={{
                      animationDelay: '0ms'
                    }} />
                  
                      <div
                    className="w-2 h-2 bg-altura-gold/50 rounded-full animate-bounce"
                    style={{
                      animationDelay: '150ms'
                    }} />
                  
                      <div
                    className="w-2 h-2 bg-altura-gold/50 rounded-full animate-bounce"
                    style={{
                      animationDelay: '300ms'
                    }} />
                  
                    </div>
                  </div>
                </div>
            }
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 &&
          <div className="px-4 py-2 bg-altura-surface border-t border-altura-border/50 flex gap-2 overflow-x-auto hide-scrollbar">
                {['Pricing', 'Amenities', 'Penthouse', 'Viewing'].map((s) =>
            <button
              key={s}
              onClick={() => {
                setInput(s);
                setTimeout(() => {
                  setInput(s);
                  handleSend();
                }, 0);
              }}
              className="px-3 py-1 text-xs text-altura-gold border border-altura-gold/20 hover:bg-altura-gold/5 transition-colors whitespace-nowrap flex-shrink-0">
              
                    {s}
                  </button>
            )}
              </div>
          }

            {/* Input Area */}
            <div className="p-4 bg-altura-charcoal border-t border-altura-border flex items-center space-x-2">
              <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 bg-altura-surface border border-altura-border rounded-full px-4 py-2 text-sm text-altura-white focus:outline-none focus:border-altura-gold transition-colors" />
            
              <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-10 h-10 rounded-full bg-altura-gold flex items-center justify-center text-altura-black hover:bg-altura-gold-light transition-colors flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message">
              
                <SendIcon className="w-4 h-4 ml-[-2px]" />
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>

      <motion.button
        whileHover={{
          scale: 1.05
        }}
        whileTap={{
          scale: 0.95
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-altura-gold rounded-full flex items-center justify-center text-altura-black shadow-[0_0_20px_rgba(201,169,110,0.3)] hover:shadow-[0_0_30px_rgba(201,169,110,0.5)] transition-shadow z-50"
        aria-label="Toggle AI Chat">
        
        {isOpen ?
        <XIcon className="w-6 h-6" /> :

        <MessageCircleIcon className="w-6 h-6" />
        }
      </motion.button>
    </>);

}
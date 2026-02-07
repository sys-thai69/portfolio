"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hi there! 👋 I\'m Pheav\'s intelligent AI assistant.\n\nI have comprehensive knowledge about:\n• His technical skills & expertise\n• Projects & achievements\n• Education & background\n• How to contact him\n\nTry asking:\n💬 "What are his skills?"\n💬 "Tell me about his projects"\n💬 "How can I contact him?"\n\nWhat would you like to know?',
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI Knowledge Base - Enhanced with better responses
  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Greeting responses
    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey") ||
      message.match(/^h[ie]y?$/)
    ) {
      return "Hello! 👋 I'm Pheav's AI assistant. I have deep knowledge about his:\n\n• Technical skills & expertise\n• Projects & achievements\n• Education & certifications\n• Work experience\n• How to contact him\n• Career goals & interests\n\nWhat would you like to explore?";
    }

    // Skills questions - More detailed
    if (
      message.includes("skill") ||
      message.includes("tech") ||
      message.includes("language") ||
      message.includes("know")
    ) {
      if (message.includes("python")) {
        return "Pheav is highly proficient in Python (85%):\n\n🐍 Python Expertise:\n• AI/ML Development with PyTorch & TensorFlow\n• Data Science: Pandas, NumPy, Matplotlib\n• Jupyter Notebooks for research\n• Scripting and automation\n• Backend development\n\nHe uses Python primarily for AI/ML projects and data analysis. Want to see his Python projects?";
      }
      if (
        message.includes("web") ||
        message.includes("frontend") ||
        message.includes("react") ||
        message.includes("next")
      ) {
        return "Pheav excels in modern web development:\n\n⚛️ Frontend Stack:\n• Next.js (85%) - Server-side rendering, App Router\n• React.js (85%) - Component architecture, Hooks\n• Tailwind CSS (90%) - Utility-first styling\n• Framer Motion - Advanced animations\n• TypeScript (80%) - Type-safe development\n\n🔧 Backend:\n• Node.js (70%)\n• Laravel/PHP (75%)\n• RESTful APIs (80%)\n\nHe can build full-stack applications from scratch!";
      }
      if (
        message.includes("ai") ||
        message.includes("ml") ||
        message.includes("machine") ||
        message.includes("learning")
      ) {
        return "Pheav's AI & Machine Learning expertise:\n\n🤖 Frameworks & Libraries:\n• PyTorch (75%) - Deep learning models\n• TensorFlow (70%) - Neural networks\n• Pandas (85%) - Data manipulation\n• NumPy (80%) - Numerical computing\n• Matplotlib (75%) - Data visualization\n• Jupyter Notebook (85%) - Research & experimentation\n\n📊 Applications:\n• Predictive models\n• Data analysis pipelines\n• ML algorithm implementation\n• Model training & optimization\n\nCheck out his AI/ML projects for examples!";
      }
      return "Pheav has a comprehensive tech stack:\n\n💻 Programming Languages:\n• Python (85%) - AI/ML, Data Science\n• JavaScript/TypeScript (80%) - Web development\n• C++ (75%) - Algorithms, performance\n• SQL (70%) - Database management\n• PHP (65%) - Backend development\n\n🌐 Web Technologies:\n• Next.js, React.js (85%)\n• Tailwind CSS (90%)\n• Node.js (70%)\n\n🤖 AI/ML:\n• PyTorch, TensorFlow (70-75%)\n• Pandas, NumPy (80-85%)\n\n🛠️ Tools:\n• Git/GitHub (85%)\n• VS Code (90%)\n• Docker (65%)\n• MySQL/PostgreSQL (75%)\n\nWhich technology interests you most?";
    }

    // Projects questions - More detailed
    if (message.includes("project")) {
      if (message.includes("game")) {
        return "Pheav has developed engaging game projects:\n\n🎮 Game Development:\n• Created interactive games using modern frameworks\n• Focus on user experience and gameplay mechanics\n• Implemented game logic and physics\n• Used technologies like C++ and game engines\n\nVisit the Projects page to see screenshots and live demos!";
      }
      if (message.includes("ai") || message.includes("ml")) {
        return "Pheav's AI/ML projects showcase practical applications:\n\n🤖 Machine Learning Projects:\n• Predictive models using PyTorch/TensorFlow\n• Data analysis and visualization\n• Neural network implementations\n• Real-world problem-solving with AI\n\nThese projects demonstrate his ability to apply theoretical knowledge to practical solutions. Check the Projects page for details!";
      }
      if (
        message.includes("web") ||
        message.includes("fullstack") ||
        message.includes("full-stack")
      ) {
        return "Pheav builds complete full-stack applications:\n\n🌐 Full-Stack Projects:\n• End-to-end web applications\n• Frontend: React/Next.js with Tailwind\n• Backend: Node.js, Laravel, APIs\n• Database integration: MySQL, PostgreSQL\n• Responsive design & modern UI/UX\n• Deployment and production-ready code\n\nHis portfolio itself is a great example - built with Next.js, TypeScript, and Tailwind! See more on the Projects page.";
      }
      return "Pheav has worked on diverse projects across multiple domains:\n\n� Project Categories:\n\n�🎮 Game Development - Interactive games with engaging mechanics\n🤖 AI/ML Projects - Machine learning applications\n🌐 Full-Stack Web Apps - Complete web solutions\n📊 Data Visualization - Analytics dashboards\n\n📈 Stats:\n• 6+ projects completed\n• Multiple technologies per project\n• Full development lifecycle experience\n• From concept to deployment\n\nEach project showcases different skills. Visit the Projects page to explore them in detail! Which type interests you?";
    }

    // Education questions
    if (
      message.includes("education") ||
      message.includes("study") ||
      message.includes("university") ||
      message.includes("school") ||
      message.includes("degree")
    ) {
      return "Pheav's educational background:\n\n🎓 Current Education:\n• Paragon International University\n  - Focus on Computer Science & AI\n  - Hands-on project experience\n  - Modern curriculum\n\n📚 Institute of Foreign Languages\n  - Language proficiency\n  - Cross-cultural communication\n  - Professional development\n\n📖 Self-Learning:\n• 3+ years of continuous learning\n• Online courses and certifications\n• Open-source contributions\n• Personal projects for skill development\n\nHe believes in lifelong learning and stays updated with the latest technologies. Check the Education page for more details!";
    }

    // Experience questions
    if (message.includes("experience") || message.includes("work") || message.includes("job")) {
      return "Pheav's professional journey:\n\n💼 Current Status:\n• Aspiring AI Engineer & Developer\n• Open to Work - Actively seeking opportunities\n• 3+ years of learning & building\n\n🚀 Focus Areas:\n• AI & Machine Learning solutions\n• Full-Stack Web Development\n• Building impactful products\n• Solving real-world problems\n\n💡 Philosophy:\n• Growth mindset - always learning\n• Society-focused development\n• Quality over quantity\n• User-centric design\n\n🎯 Seeking:\n• AI Engineering roles\n• Full-Stack Development positions\n• Innovative tech companies\n• Projects that make a difference\n\nVisit the Experience page to see his complete journey!";
    }

    // Contact questions
    if (
      message.includes("contact") ||
      message.includes("email") ||
      message.includes("reach") ||
      message.includes("hire") ||
      message.includes("connect")
    ) {
      return "📬 Get in touch with Pheav:\n\nYou can reach him through multiple channels:\n\n📧 Email - Direct communication\n� LinkedIn - Professional networking\n� GitHub - Check out his code\n🌐 Portfolio - Browse his work\n\n✅ He's actively looking for opportunities in:\n• AI/ML Engineering\n• Full-Stack Development\n• Innovative tech projects\n\n🇰🇭 Based in Cambodia, open to remote work\n\nHead to the Contact page to send a message or get his details. He typically responds within 24 hours!";
    }

    // About questions
    if (
      message.includes("who") ||
      message.includes("about") ||
      message.match(/^tell me (about|more)/)
    ) {
      return "👨‍💻 Meet Pheav Chhengthai\n\n🇰🇭 From Cambodia, with global ambitions\n\n🎯 Role: Aspiring AI Engineer & Full-Stack Developer\n\n💡 Mission: Building AI and web solutions that help society evolve\n\n✨ Key Strengths:\n• Strong foundation in AI/ML and web development\n• Full-stack capabilities (frontend to backend)\n• Problem-solver with a growth mindset\n• Passionate about continuous learning\n• Focus on user-centric solutions\n\n🎓 Education:\n• Paragon International University\n• Institute of Foreign Languages\n• Self-taught in many technologies\n\n🚀 Currently:\n• Building impressive projects\n• Learning cutting-edge technologies\n• Seeking impactful opportunities\n• Open to collaboration\n\nWhat specific aspect would you like to know more about?";
    }

    // Career goals
    if (
      message.includes("goal") ||
      message.includes("future") ||
      message.includes("plan") ||
      message.includes("dream")
    ) {
      return "🎯 Pheav's Career Goals:\n\n� Short-term:\n• Land a role in AI Engineering or Full-Stack Development\n• Work on innovative, impactful projects\n• Continue building portfolio projects\n• Contribute to open-source\n\n🌟 Long-term:\n• Become a leading AI Engineer\n• Build products that solve real problems\n• Help society through technology\n• Mentor future developers\n\n� Vision:\nCreate AI and web solutions that make a meaningful difference in people's lives while continuously growing as a developer.\n\nInterested in working together? Check the Contact page!";
    }

    // Why hire questions
    if (message.includes("why") && (message.includes("hire") || message.includes("choose"))) {
      return "🌟 Why work with Pheav?\n\n💪 Technical Skills:\n• Strong in AI/ML (PyTorch, TensorFlow)\n• Full-stack web development expertise\n• 30+ technologies mastered\n• 82% average proficiency\n\n🧠 Mindset:\n• Growth-oriented and adaptable\n• Problem-solver, not just coder\n• Self-learner who stays updated\n• Quality-focused developer\n\n🎯 Work Ethic:\n• Passionate about building great products\n• Detail-oriented\n• User-centric approach\n• Reliable and communicative\n\n📊 Proven Track Record:\n• 6+ completed projects\n• Full development lifecycle experience\n• Modern tech stack\n• Portfolio speaks for itself\n\n🚀 He's ready to contribute from day one!\n\nView his projects and skills to see his work!";
    }

    // Location questions
    if (
      message.includes("where") ||
      message.includes("location") ||
      message.includes("cambodia") ||
      message.includes("remote")
    ) {
      return "📍 Location & Availability:\n\n🇰🇭 Based in: Cambodia\n\n💼 Work Preferences:\n✅ Remote work (preferred)\n✅ Hybrid opportunities\n✅ Open to relocation for the right role\n\n🌍 Time Zone:\n• Indochina Time (ICT, UTC+7)\n• Flexible working hours\n• Comfortable with async communication\n\n✈️ Willing to travel for:\n• Team meetings\n• Company events\n• Training sessions\n\nHe's experienced with remote collaboration tools and agile workflows!";
    }

    // Salary/Compensation questions
    if (
      message.includes("salary") ||
      message.includes("rate") ||
      message.includes("pay") ||
      message.includes("compensation")
    ) {
      return "💰 Compensation Discussion:\n\nPheav is open to discussing compensation based on:\n\n� Factors:\n• Role and responsibilities\n• Company size and stage\n• Project complexity\n• Growth opportunities\n• Benefits package\n\n💼 He values:\n• Learning opportunities\n• Impactful work\n• Growth potential\n• Team culture\n• Work-life balance\n\n📧 For specific discussions about compensation, please reach out through the Contact page. He's reasonable and flexible for the right opportunity!";
    }

    // Technology comparisons
    if (message.includes("prefer") || message.includes("favorite") || message.includes("best")) {
      return "⭐ Pheav's Technology Preferences:\n\n🥇 Favorite Stack:\n• Next.js + React for web apps\n• Tailwind CSS for styling\n• PyTorch for AI/ML\n• TypeScript for type safety\n\n❤️ Why?\n• Modern, efficient, and scalable\n• Great developer experience\n• Strong community support\n• Production-ready\n\n🎯 He adapts to project needs but loves working with cutting-edge, well-documented technologies that enable rapid development without sacrificing quality.\n\nWant to know about a specific technology?";
    }

    // Strengths questions
    if (message.includes("strength") || message.includes("good at") || message.includes("excel")) {
      return "💪 Pheav's Core Strengths:\n\n🎯 Technical:\n• Full-stack development (frontend + backend)\n• AI/ML implementation\n• Clean, maintainable code\n• Modern UI/UX design\n• Problem-solving & algorithms\n\n🧠 Soft Skills:\n• Quick learner\n• Self-motivated\n• Detail-oriented\n• Good communicator\n• Team player\n\n🚀 Unique Advantages:\n• Bridges AI and web development\n• Can handle entire product lifecycle\n• Modern tech stack expertise\n• Passionate about quality\n• Growth mindset\n\nSee his Skills page for detailed proficiency levels!";
    }

    // Thank you responses
    if (message.includes("thank") || message.includes("thanks") || message.includes("appreciate")) {
      return "You're very welcome! 😊\n\nI'm here anytime you need to know more about Pheav's:\n• Skills and expertise\n• Projects and work\n• Education and experience\n• How to get in touch\n\nFeel free to ask anything else! And if you're interested in working with Pheav, don't hesitate to reach out via the Contact page. 🚀";
    }

    // Help questions
    if (message.includes("help") || message.includes("can you") || message.includes("what can")) {
      return '🤖 I\'m Pheav\'s AI Assistant!\n\nI can help you with:\n\n✅ Technical Questions:\n• What skills does Pheav have?\n• What technologies does he know?\n• What\'s his proficiency level?\n\n✅ Project Information:\n• What projects has he built?\n• What type of work has he done?\n• Can I see examples?\n\n✅ Career Information:\n• What\'s his background?\n• What\'s his education?\n• What are his goals?\n\n✅ Contact & Hiring:\n• How can I contact him?\n• Is he available for work?\n• Where is he located?\n\n💬 Just ask naturally - I understand conversational language! Try questions like:\n• "Tell me about his Python skills"\n• "What AI projects has he done?"\n• "How can I hire him?"\n\nWhat would you like to know?';
    }

    // Random/fun questions
    if (message.includes("joke") || message.includes("funny")) {
      return "😄 Here's a developer joke for you:\n\nWhy do programmers prefer dark mode?\n\nBecause light attracts bugs! 🐛\n\n---\n\nBut seriously, Pheav prefers dark mode because it's easier on the eyes during those long coding sessions. Speaking of coding, want to know about his projects?";
    }

    // Unclear/default response - More helpful
    return '🤔 I\'m not sure I understood that perfectly.\n\nI can help you learn about:\n\n💻 Technical Skills:\n• "What programming languages does he know?"\n• "Tell me about his AI/ML skills"\n• "What frameworks does he use?"\n\n� Projects:\n• "What projects has he built?"\n• "Show me his web development work"\n• "What AI projects has he done?"\n\n🎓 Background:\n• "What\'s his education?"\n• "Tell me about his experience"\n• "What are his career goals?"\n\n� Contact:\n• "How can I contact him?"\n• "Is he available for hire?"\n• "Where is he located?"\n\nTry asking a question from above, or rephrase what you\'d like to know!';
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-[9998] w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl hover:shadow-indigo-500/50 transition-all duration-300"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              ✕
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              💬
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-[9997] w-[400px] h-[600px] bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                🤖
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold">AI Assistant</h3>
                <p className="text-xs text-white/80">Ask me about Pheav</p>
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                        : "bg-gray-800 text-gray-100 border border-gray-700"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    <p className="text-xs mt-2 opacity-60">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-800 border border-gray-700 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700 bg-gray-900">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <motion.button
                  onClick={handleSendMessage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!inputValue.trim()}
                  className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

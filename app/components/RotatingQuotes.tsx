"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    text: "Artificial intelligence is the new electricity.",
    author: "Andrew Ng",
  },
  {
    text: "The science of today is the technology of tomorrow.",
    author: "Edward Teller",
  },
  {
    text: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci",
  },
];

export default function RotatingQuotes() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentQuote = quotes[currentQuoteIndex];
  const typingSpeed = 50;
  const deletingSpeed = 30;
  const displayDuration = 7000; // How long to show the complete quote

  useEffect(() => {
    const quoteText = currentQuote.text;

    if (isTyping) {
      // Typing animation
      if (displayedText.length < quoteText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(quoteText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Quote fully typed, wait before deleting
        const timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, displayDuration);
        return () => clearTimeout(timeout);
      }
    }

    if (isDeleting) {
      // Deleting animation
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Fully deleted, move to next quote
        const timeout = setTimeout(() => {
          setIsDeleting(false);
          setIsTyping(true);
          setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        }, 0);
        return () => clearTimeout(timeout);
      }
    }
  }, [
    displayedText,
    isTyping,
    isDeleting,
    currentQuote.text,
    typingSpeed,
    deletingSpeed,
    displayDuration,
  ]);

  return (
    <div className="glass p-8 rounded-2xl min-h-[200px] flex flex-col justify-center">
      <div className="text-center">
        <motion.div
          key={currentQuoteIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mb-6"
        >
          <div className="text-6xl text-indigo-400 mb-4">&ldquo;</div>
          <p className="text-xl md:text-2xl text-gray-200 font-medium italic mb-4 min-h-[80px] flex items-center justify-center">
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-0.5 h-6 bg-indigo-400 ml-1"
            />
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isTyping && !isDeleting && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-indigo-400 font-semibold"
            >
              — {currentQuote.author}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mt-6">
        {quotes.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentQuoteIndex ? "w-8 bg-indigo-500" : "w-2 bg-gray-600"
            }`}
            animate={{
              scale: index === currentQuoteIndex ? 1 : 0.8,
            }}
          />
        ))}
      </div>
    </div>
  );
}

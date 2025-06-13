'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const quotes = [
  { text: "Design is not just what it looks like and feels like. Design is how it works.", emoji: "✨" },
  { text: "The best way to predict the future is to create it.", emoji: "🚀" },
  { text: "Innovation distinguishes between a leader and a follower.", emoji: "💡" },
  { text: "Simplicity is the ultimate sophistication.", emoji: "🎯" },
  { text: "Good design is actually a lot harder to notice than poor design.", emoji: "🎨" },
  { text: "Design creates culture. Culture shapes values. Values determine the future.", emoji: "🌍" },
  { text: "The details are not the details. They make the design.", emoji: "🔍" },
  { text: "Design is the silent ambassador of your brand.", emoji: "🎭" },
  { text: "Every great design begins with an even better story.", emoji: "📖" },
  { text: "Design is not about making things look pretty. It's about making things work better.", emoji: "⚡" }
];

export default function Preloader({ onComplete }) {
  const quoteRef = useRef(null);
  const containerRef = useRef(null);
  const [currentQuote, setCurrentQuote] = useState({ text: '', emoji: '' });

  useEffect(() => {
    // Select random quote only on client side
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    // Fade in
    gsap.to(quoteRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    });
    
    // Fade out after 2 seconds and reveal hero
    setTimeout(() => {
      gsap.to(quoteRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          // After quote fades out, animate the preloader up
          gsap.to(containerRef.current, {
            y: '-100%',
            duration: 1,
            ease: 'power2.inOut',
            onComplete: onComplete
          });
        }
      });
    }, 3000);

  }, [onComplete]);

  return (
    <section ref={containerRef} className="font-inter w-screen h-screen overflow-hidden bg-black text-white fixed top-0 left-0 z-10">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div 
          ref={quoteRef}
          className="text-2xl md:text-3xl text-center max-w-2xl px-4 opacity-0"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {currentQuote.text}
          <p className="text-4xl mt-4">{currentQuote.emoji}</p>
        </div>
      </div>
    </section>
  );
}

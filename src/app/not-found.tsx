'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

export default function NotFound() {
  // Lock scrolling on page load
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto'; // Unlock scrolling when component is unmounted
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6 overflow-hidden">
      {/* Animated Title */}
      <motion.h1
        className="text-6xl font-extrabold mb-4 text-red-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        className="text-xl text-muted-foreground mb-6 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Oops! The page you're looking for doesn’t exist.
      </motion.p>

      {/* Bouncing Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
      >
        <Link
          href="/"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition-colors shadow-lg"
        >
          Go back home
        </Link>
      </motion.div>

      {/* Floating Shapes (Optional) */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500 rounded-full opacity-20"
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 3,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 w-16 h-16 bg-green-500 rounded-full opacity-20"
        initial={{ y: 100 }}
        animate={{ y: -100 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 2.5,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

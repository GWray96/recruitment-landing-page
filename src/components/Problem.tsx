'use client';

import { motion } from 'framer-motion';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const challenges = [
  'Standing out in a noisy industry',
  'Attracting high-quality candidates',
  'Juggling manual processes',
  'Showing measurable ROI',
];

export default function Problem() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-blue-100 opacity-50 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The Problem
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                In today&apos;s digital age, traditional recruitment methods aren&apos;t enough. You need a modern approach that combines AI, automation, and strategic marketing to stay ahead.
              </p>
              <div className="mt-8 space-y-4">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <ExclamationTriangleIcon className="h-6 w-6 text-red-500 mt-1" />
                    <span className="ml-3 text-gray-700">{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gray-200">?</div>
                  <p className="mt-4 text-gray-500">How do you solve these challenges?</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
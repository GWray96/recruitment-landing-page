'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    content: "The AI tools and automations gave us an edge we never had. They just *get* recruitment.",
    author: "Sarah Johnson",
    role: "CEO, TechRecruit Agency",
    rating: 5,
  },
  {
    content: "We no longer chase leads manually. Everything is tracked, optimized, and scalable.",
    author: "Michael Chen",
    role: "Director, Global Talent Solutions",
    rating: 5,
  },
  {
    content: "The ROI we've seen since implementing their solutions has been incredible. Our cost-per-hire has dropped significantly.",
    author: "Emily Rodriguez",
    role: "Head of Talent Acquisition",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
          >
            Hear from recruitment agencies who have transformed their operations with our solutions
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                &quot;The team&apos;s expertise in recruitment marketing and AI automation has transformed our agency. We&apos;ve seen a 300% increase in qualified leads.&quot;
              </blockquote>
              <div className="mt-6">
                <p className="text-base font-semibold leading-7 text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm leading-6 text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
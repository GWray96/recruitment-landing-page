'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const plans = [
  {
    name: 'Essential',
    price: 1499,
    description: 'Perfect for small recruitment agencies looking to scale their digital presence',
    features: [
      'Job ad campaigns + 8 social media posts/month',
      'Basic dashboard',
      'Bi-weekly strategy calls',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: 2999,
    description: 'Ideal for growing agencies seeking comprehensive digital solutions',
    features: [
      'Everything in Essential, plus:',
      'Landing pages',
      'Email automation',
      'Weekly strategy',
      'Priority phone/email support',
    ],
  },
  {
    name: 'Enterprise',
    price: 4999,
    description: 'For established agencies requiring full-scale automation and support',
    features: [
      'Everything in Professional, plus:',
      'Full funnel builds',
      'AI chatbot',
      'Advanced automation',
      'Dedicated account manager',
      '24/7 support',
    ],
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

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
            Plans & Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
          >
            Choose the perfect plan for your recruitment agency's needs
          </motion.p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative">
            <button
              type="button"
              className={`${
                isAnnual ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'
              } relative inline-flex h-12 w-24 items-center justify-center rounded-l-full px-4 text-sm font-semibold transition-colors`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
            </button>
            <button
              type="button"
              className={`${
                !isAnnual ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'
              } relative inline-flex h-12 w-24 items-center justify-center rounded-r-full px-4 text-sm font-semibold transition-colors`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl ${
                plan.name === 'Professional'
                  ? 'bg-blue-600 text-white ring-4 ring-blue-600'
                  : 'bg-white text-gray-900 ring-1 ring-gray-200'
              } p-8 shadow-sm hover:shadow-md transition-shadow`}
            >
              {plan.name === 'Professional' && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold leading-8">{plan.name}</h3>
              <p className="mt-4 text-sm text-gray-500">Perfect for agencies just getting started with digital marketing</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight">${plan.price}</span>
                <span className="text-sm font-semibold leading-6">/month</span>
              </p>
              <ul className="mt-8 space-y-3 text-sm leading-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className={`h-6 w-5 flex-none ${
                        plan.name === 'Professional' ? 'text-white' : 'text-blue-600'
                      }`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.name === 'Professional'
                    ? 'bg-white text-blue-600 hover:bg-gray-50 focus-visible:outline-white'
                    : 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
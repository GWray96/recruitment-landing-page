'use client';

import { motion } from 'framer-motion';
import { ChartBarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const results = [
  {
    metric: '73%',
    label: 'More qualified applicants',
    icon: UserGroupIcon,
  },
  {
    metric: '41%',
    label: 'Lower cost-per-hire',
    icon: ChartBarIcon,
  },
  {
    metric: '30+',
    label: 'Hours/month saved via automation',
    icon: ClockIcon,
  },
];

export default function CaseStudy() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Case Study: TechRecruit Agency
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
          >
            See how we helped TechRecruit Agency transform their recruitment process with AI and automation
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <result.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="mt-6 text-4xl font-bold tracking-tight text-gray-900">
                {result.metric}
              </p>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {result.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 rounded-2xl bg-blue-600 px-6 py-10 sm:px-12 sm:py-16"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ready to achieve similar results?
            </h3>
            <p className="mt-4 text-lg leading-8 text-blue-100">
              Book a free strategy session to discover how we can help transform your recruitment agency
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Schedule Your Free Strategy Session
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
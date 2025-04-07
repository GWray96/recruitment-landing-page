'use client';

import { motion } from 'framer-motion';
import { 
  RocketLaunchIcon,
  ChartBarIcon,
  UserGroupIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const solutions = [
  {
    title: 'Launch targeted digital campaigns',
    description: 'Reach the right candidates with precision targeting and AI-powered optimization',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Automate repetitive workflows',
    description: 'Save time and reduce errors with smart automation systems',
    icon: CogIcon,
  },
  {
    title: 'Attract quality candidates faster',
    description: 'Leverage AI to identify and engage with top talent more effectively',
    icon: UserGroupIcon,
  },
  {
    title: 'Optimize every part of your marketing funnel',
    description: 'Data-driven insights to improve conversion rates and ROI',
    icon: ChartBarIcon,
  },
];

export default function Solution() {
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
            Our Solution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
          >
            We&apos;ve developed a proven system that combines AI-powered automation with strategic marketing to help recruitment agencies thrive in the digital age.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <solution.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                {solution.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
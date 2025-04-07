'use client';

import { motion } from 'framer-motion';
import {
  UserCircleIcon,
  ChartBarSquareIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  EnvelopeIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'AI-Powered Candidate Targeting',
    description: 'Leverage advanced AI algorithms to identify and engage with the perfect candidates for your roles',
    icon: UserCircleIcon,
  },
  {
    title: 'Automated Campaign Funnels',
    description: 'Set up sophisticated marketing funnels that nurture candidates through the recruitment process',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Recruitment Brand Positioning',
    description: 'Stand out in the market with a compelling brand story and consistent messaging',
    icon: ChartBarSquareIcon,
  },
  {
    title: 'Performance Dashboards',
    description: 'Track and optimize your recruitment metrics with real-time analytics and reporting',
    icon: CommandLineIcon,
  },
  {
    title: 'CRM and Email Automation',
    description: 'Automate candidate communications and relationship management',
    icon: EnvelopeIcon,
  },
  {
    title: 'Landing Page + Funnel Development',
    description: 'Convert more visitors into candidates with optimized landing pages and funnels',
    icon: CodeBracketIcon,
  },
];

export default function Services() {
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
            Core Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive solutions to transform your recruitment agency's digital presence and operations
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
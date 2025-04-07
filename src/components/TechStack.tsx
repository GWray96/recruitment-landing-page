'use client';

import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  ServerIcon,
  SwatchIcon,
} from '@heroicons/react/24/outline';

const techStack = [
  {
    category: 'Marketing Automation',
    tools: ['ActiveCampaign', 'Zapier', 'Make.com'],
    icon: CursorArrowRaysIcon,
  },
  {
    category: 'CRM Systems',
    tools: ['HubSpot', 'GoHighLevel', 'Custom Airtable Setups'],
    icon: ServerIcon,
  },
  {
    category: 'Ad Campaign Management',
    tools: ['Meta Ads', 'LinkedIn Ads', 'Google Ads'],
    icon: ChartBarIcon,
  },
  {
    category: 'AI & Personalization',
    tools: ['ChatGPT API', 'OpenAI Embeddings', 'Jasper', 'Custom Chatbots'],
    icon: CommandLineIcon,
  },
  {
    category: 'Website & Funnels',
    tools: ['Webflow', 'WordPress', 'Framer', 'Custom Builds'],
    icon: SwatchIcon,
  },
  {
    category: 'Analytics & Reporting',
    tools: ['Google Analytics 4', 'Looker Studio', 'Custom Dashboards'],
    icon: DocumentTextIcon,
  },
];

export default function TechStack() {
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
            Tech Stack We Use
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
          >
            Cutting-edge tools and platforms to execute our services with precision and efficiency
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <tech.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                {tech.category}
              </h3>
              <ul className="mt-4 space-y-2">
                {tech.tools.map((tool) => (
                  <li key={tool} className="text-base leading-7 text-gray-600">
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
'use client';

import { motion } from 'framer-motion';
import { UserGroupIcon, CodeBracketIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const team = [
  {
    title: 'Engineers',
    description: 'Building scalable systems and automation solutions',
    icon: CodeBracketIcon,
  },
  {
    title: 'Recruiters',
    description: 'Deep industry expertise and recruitment knowledge',
    icon: UserGroupIcon,
  },
  {
    title: 'Growth Strategists',
    description: 'Data-driven approach to scaling your agency',
    icon: ChartBarIcon,
  },
];

export default function About() {
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We&apos;re a team of digital marketing experts, AI specialists, and automation engineers who understand the unique challenges recruitment agencies face. Our mission is to help you leverage technology to streamline your operations and attract more clients.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {team.map((member) => (
                <motion.div
                  key={member.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-2xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-200"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <member.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold leading-7 text-gray-900">
                    {member.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {member.description}
                  </p>
                </motion.div>
              ))}
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
                  <p className="text-lg font-semibold text-gray-900">Our Mission</p>
                  <p className="mt-2 text-gray-600">
                    To revolutionize recruitment through technology and innovation
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-2xl bg-blue-600 px-6 py-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white">
                  Ready to transform your agency?
                </h3>
                <p className="mt-2 text-blue-100">
                  Join the growing number of recruitment agencies leveraging AI and automation
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
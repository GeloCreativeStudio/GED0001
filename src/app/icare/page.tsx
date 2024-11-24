'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WrenchScrewdriverIcon, DocumentTextIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const features = [
  {
    title: "iCARE-ERC Laboratory Forms",
    description: "Comprehensive documentation of our team's laboratory activities and technical reading exercises",
    icon: <DocumentTextIcon className="w-6 h-6 text-[#1C5310]" />
  },
  {
    title: "Achieve 3000 Activities",
    description: "Collection of our completed Achieve 3000 reading comprehension and analysis tasks",
    icon: <ClipboardDocumentListIcon className="w-6 h-6 text-[#1C5310]" />
  }
];

export default function ICarePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden bg-gradient-to-b from-[#1C5310]/5 to-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.02]" />
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              variants={fadeIn}
              className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-6 sm:mb-8 rounded-2xl bg-[#1C5310]/10 flex items-center justify-center"
            >
              <WrenchScrewdriverIcon className="w-8 sm:w-10 h-8 sm:h-10 text-[#1C5310]" />
            </motion.div>

            <motion.h1 
              variants={fadeIn}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#1C5310]"
            >
              Coming Soon
            </motion.h1>

            <motion.p 
              variants={fadeIn}
              className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12"
            >
              We are currently preparing our iCARE activities documentation. Stay tuned!
            </motion.p>

            {/* Progress Bar */}
            <motion.div 
              variants={fadeIn}
              className="max-w-md mx-auto mb-12 sm:mb-16"
            >
              <div className="bg-gray-100 h-4 rounded-full overflow-hidden">
                <div className="bg-[#1C5310] w-[94%] h-full rounded-full" />
              </div>
              <p className="text-sm text-gray-500 mt-2">Documentation in Progress - 94%</p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div 
              variants={fadeIn}
              className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 sm:w-14 h-12 sm:h-14 mx-auto mb-4 rounded-xl bg-[#1C5310]/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#1C5310]">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#1C5310]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FFB81C]/5 rounded-full blur-3xl" />
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="grid md:grid-cols-2 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1C5310]/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1C5310] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Progress Indicator */}
            <motion.div
              variants={fadeIn}
              className="mt-16 text-center"
            >
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
                <motion.div
                  className="h-full bg-[#1C5310] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '94%' }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </div>
              <p className="text-[#2E7D32] font-medium">Documentation in Progress</p>
              <p className="text-gray-600 mt-2">
                We're currently organizing and uploading our iCARE-ERC Laboratory Forms and Achieve 3000 Activities. Check back soon!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

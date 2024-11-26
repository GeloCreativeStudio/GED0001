'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { DocumentTextIcon, MagnifyingGlassIcon, PencilSquareIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import PDFViewer from '@/components/PDFViewer'
import { fadeIn, stagger, scaleIn, pageTransition } from '@/components/animations'

interface ProcessCardProps {
  title: string
  description: string
  icon: React.ReactNode
  steps: string[]
}

function ProcessCard({ title, description, icon, steps }: ProcessCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -5 }}
      className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative"
    >
      {/* Card Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl" />
      
      {/* Content */}
      <div className="relative">
        <div className="relative mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#1C5310]/10 flex items-center justify-center group-hover:bg-[#1C5310]/20 transition-all duration-300">
            {icon}
          </div>
          {/* Decorative circle */}
          <div className="absolute -inset-2 rounded-full bg-[#FFB81C]/10 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-[#1C5310] mb-2 sm:mb-3">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{description}</p>

        {/* Steps */}
        <ul className="space-y-2 sm:space-y-3">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start space-x-2 sm:space-x-3">
              <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#1C5310] flex-shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-gray-600">{step}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

const processes = [
  {
    icon: <DocumentTextIcon className="w-8 h-8 text-[#1C5310]" />,
    title: "Pre-Reading",
    description: "Prepare and establish context before diving into the technical material",
    steps: [
      "Review the title, headings, and subheadings",
      "Scan for key terms and definitions",
      "Identify the document's structure and organization",
      "Set reading goals and expectations"
    ]
  },
  {
    icon: <MagnifyingGlassIcon className="w-8 h-8 text-[#1C5310]" />,
    title: "During Reading",
    description: "Actively engage with the text to ensure comprehensive understanding",
    steps: [
      "Highlight key concepts and important details",
      "Take structured notes using provided templates",
      "Create concept maps or diagrams",
      "Track questions and uncertainties"
    ]
  },
  {
    icon: <PencilSquareIcon className="w-8 h-8 text-[#1C5310]" />,
    title: "Post-Reading",
    description: "Reflect and consolidate knowledge after completing the reading",
    steps: [
      "Summarize main points and key takeaways",
      "Answer comprehension questions",
      "Connect concepts to prior knowledge",
      "Identify areas for further research"
    ]
  }
]

export default function Page() {
  const [activeTab, setActiveTab] = useState('pdf');
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.02]" />
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C5310] mb-4"
            >
              Reading Process Worksheets
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12"
            >
              Our systematic approach to technical reading analysis and comprehension
            </motion.p>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-10 -right-10 w-40 h-40 bg-[#1C5310]/5 rounded-full blur-3xl" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FFB81C]/5 rounded-full blur-3xl" 
        />
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Mobile View: Tab Navigation */}
          <div className="lg:hidden mb-6">
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
              <button 
                onClick={() => setActiveTab('pdf')}
                className={`px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap text-sm sm:text-base
                  ${activeTab === 'pdf' 
                    ? 'bg-[#1C5310] text-white shadow-lg' 
                    : 'bg-white text-[#1C5310] hover:bg-[#1C5310]/10'}`}
              >
                Worksheet
              </button>
              <button 
                onClick={() => setActiveTab('steps')}
                className={`px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap text-sm sm:text-base
                  ${activeTab === 'steps' 
                    ? 'bg-[#1C5310] text-white shadow-lg' 
                    : 'bg-white text-[#1C5310] hover:bg-[#1C5310]/10'}`}
              >
                Reading Guide
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* PDF Section */}
            <div className={`${activeTab === 'steps' ? 'hidden lg:block' : ''}`}>
              <motion.div
                initial="initial"
                animate="animate"
                variants={fadeIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex-grow">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#1C5310] mb-2">
                      Reading Process Worksheet
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600">
                      A comprehensive worksheet that guides you through the reading process, helping you analyze and understand technical texts effectively
                    </p>
                  </div>
                  <button
                    onClick={() => setIsPDFOpen(true)}
                    className="flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-[#1C5310] text-white rounded-lg hover:bg-[#1C5310]/90 transition-all duration-300 group w-full sm:w-auto justify-center sm:justify-start"
                  >
                    <DocumentTextIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm sm:text-base font-medium whitespace-nowrap">Open Worksheet</span>
                  </button>
                </div>
              </motion.div>

              {/* PDF Viewer Modal */}
              <PDFViewer
                url="/documents/Reading Process Worksheet.pdf"
                title="Reading Process Worksheet"
                isOpen={isPDFOpen}
                onClose={() => setIsPDFOpen(false)}
              />
            </div>

            {/* Reading Process Steps */}
            <div className={`${activeTab === 'pdf' ? 'hidden lg:block' : ''}`}>
              <motion.div
                initial="initial"
                animate="animate"
                variants={stagger}
                className="space-y-4 sm:space-y-6"
              >
                {processes.map((process, index) => (
                  <ProcessCard
                    key={index}
                    title={process.title}
                    description={process.description}
                    icon={process.icon}
                    steps={process.steps}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpenIcon, 
  DocumentTextIcon, 
  AcademicCapIcon,
  ComputerDesktopIcon,
  ExclamationTriangleIcon,
  SpeakerWaveIcon,
  WifiIcon
} from '@heroicons/react/24/outline';

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

interface ResourceCardProps {
  title: string;
  description: string;
  pdfUrl: string;
  icon: React.ReactNode;
}

function ResourceCard({ title, description, pdfUrl, icon }: ResourceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={fadeIn}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group"
    >
      <div 
        className="p-4 sm:p-6 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start space-x-3 sm:space-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1C5310]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1C5310]/20 transition-colors">
            {icon}
          </div>
          <div className="flex-grow min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 className="text-lg sm:text-xl font-semibold text-[#1C5310] truncate pr-4">{title}</h3>
              <div className="flex items-center mt-1 sm:mt-0">
                <DocumentTextIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB81C] mr-1.5" />
                <span className="text-xs sm:text-sm text-[#FFB81C] font-medium whitespace-nowrap">
                  {isExpanded ? 'Click to close PDF' : 'Click to view PDF'}
                </span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 line-clamp-2 mb-2">{description}</p>
            <div className="flex items-center text-xs sm:text-sm text-gray-500">
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="mr-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
              {isExpanded ? 'Collapse document' : 'Expand document'}
            </div>
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <div className="relative" style={{ paddingTop: '141.4%' }}> {/* A4 aspect ratio */}
            <div className="absolute inset-0 p-4">
              <iframe
                src={pdfUrl}
                title={title}
                className="w-full h-full rounded-lg shadow-lg"
                style={{ 
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#fff'
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

const resources = [
  {
    title: "Technology Dependency in Modern Life",
    description: "An insightful analysis exploring the extent of our reliance on technology in daily life and its implications for society.",
    pdfUrl: "/documents/resources/Are We Too Dependent on Technology.pdf",
    icon: <ComputerDesktopIcon className="w-6 h-6 text-[#1C5310]" />
  },
  {
    title: "E-Cigarette Battery Safety",
    description: "A critical examination of safety concerns surrounding e-cigarette batteries and their potential hazards.",
    pdfUrl: "/documents/resources/Exploding E-Cigarettes A Battery Safety Issue.pdf",
    icon: <ExclamationTriangleIcon className="w-6 h-6 text-[#1C5310]" />
  },
  {
    title: "Smart Pronunciation Learning",
    description: "Research on innovative smartphone-based techniques for pronunciation learning in ambient intelligence environments.",
    pdfUrl: "/documents/resources/Smartphone-Assisted Pronunciation Learning Technique for Ambient Intelligence.pdf",
    icon: <SpeakerWaveIcon className="w-6 h-6 text-[#1C5310]" />
  },
  {
    title: "Advanced Wireless Communications",
    description: "Technical exploration of wireless communication systems and applications operating above 100 GHz frequency.",
    pdfUrl: "/documents/resources/Wireless Communications and Applications Above 100 GHz.pdf",
    icon: <WifiIcon className="w-6 h-6 text-[#1C5310]" />
  }
];

export default function Resources() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C5310] mb-4">Reading Resources</h1>
              <p className="text-base sm:text-lg text-gray-600">
                A collection of technical reading materials and analysis worksheets
              </p>
            </div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="space-y-4 sm:space-y-6"
            >
              {resources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  pdfUrl={resource.pdfUrl}
                  icon={resource.icon}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

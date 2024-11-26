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
import PDFViewer from '@/components/PDFViewer';
import { fadeIn, stagger, scaleIn, pageTransition } from '@/components/animations';

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
                  View PDF
                </span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 line-clamp-2">{description}</p>
          </div>
        </div>
      </div>
      
      <PDFViewer
        url={pdfUrl}
        title={title}
        isOpen={isExpanded}
        onClose={() => setIsExpanded(false)}
      />
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

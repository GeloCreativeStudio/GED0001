'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  UserIcon,
  AcademicCapIcon,
  StarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const fadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

const stagger: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

interface ReflectionPaper {
  author: string;
  title: string;
  date: string;
  excerpt: string;
  pdfUrl: string;
  tags: string[];
}

function ReflectionCard({ paper }: { paper: ReflectionPaper }) {
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
            <UserIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#1C5310]" />
          </div>
          <div className="flex-grow min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 className="text-lg sm:text-xl font-semibold text-[#1C5310] truncate pr-4">{paper.title}</h3>
              <div className="flex items-center mt-1 sm:mt-0">
                <DocumentTextIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB81C] mr-1.5" />
                <span className="text-xs sm:text-sm text-[#FFB81C] font-medium whitespace-nowrap">
                  {isExpanded ? 'Click to close reflection' : 'Click to view reflection'}
                </span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-1">{paper.author}</p>
            <p className="text-xs sm:text-sm text-gray-500 mb-2">{paper.date}</p>
            <p className="text-sm sm:text-base text-gray-600 line-clamp-2 mb-3">{paper.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {paper.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-[#FFB81C]/10 text-[#1C5310] rounded-full text-xs sm:text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center mt-3 text-xs sm:text-sm text-gray-500">
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
              {isExpanded ? 'Collapse reflection' : 'Expand reflection'}
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
                src={paper.pdfUrl}
                title={paper.title}
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

const reflectionPapers = [
  {
    author: "Manalo, Angelo",
    title: "GED0001 Journey",
    date: "A Five-Paragraph Reflection",
    excerpt: "A personal reflection on my experience in GED0001, discussing the challenges faced, skills developed, and valuable lessons learned throughout the course.",
    pdfUrl: "/documents/dummy.pdf",
    tags: ["Course Experience", "Personal Growth", "Technical Reading"]
  },
  {
    author: "Pantaleon, Hannah Coleen D.",
    title: "GED0001 Journey",
    date: "A Five-Paragraph Reflection",
    excerpt: "A personal reflection on my experience in GED0001, discussing the challenges faced, skills developed, and valuable lessons learned throughout the course.",
    pdfUrl: "/documents/dummy.pdf",
    tags: ["Course Experience", "Personal Growth", "Technical Reading"]
  }
];

const learningOutcomes = [
  "Developed comprehensive technical reading and analysis skills",
  "Enhanced critical thinking and document comprehension abilities",
  "Improved academic writing and reflection capabilities",
  "Strengthened collaborative learning and peer discussion skills"
];

export default function ReflectionsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C5310] mb-4">Course Reflections</h1>
              <p className="text-base sm:text-lg text-gray-600">
                Our team's reflections on the GED0001 course experience
              </p>
            </div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="space-y-4 sm:space-y-6"
            >
              {reflectionPapers.map((paper, index) => (
                <ReflectionCard key={index} paper={paper} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserIcon,
  AcademicCapIcon,
  StarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import PDFViewer from '@/components/PDFViewer';
import { fadeIn, stagger, scaleIn, pageTransition } from '@/components/animations';

interface ReflectionPaper {
  title: string;
  date: string;
  excerpt: string;
  pdfUrl: string;
  tags: string[];
}

function ReflectionCard({ paper }: { paper: ReflectionPaper }) {
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  return (
    <motion.div
      variants={fadeIn}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start space-x-4 sm:space-x-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#1C5310]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1C5310]/20 transition-colors">
            <UserIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#1C5310]" />
          </div>
          <div className="flex-grow min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1C5310] mb-1">{paper.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500">{paper.date}</p>
              </div>
              <button
                onClick={() => setIsPDFOpen(true)}
                className="flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-[#1C5310] text-white rounded-lg hover:bg-[#1C5310]/90 transition-all duration-300 group/btn w-full sm:w-auto justify-center sm:justify-start"
              >
                <DocumentTextIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 group-hover/btn:scale-110 transition-transform" />
                <span className="text-sm sm:text-base font-medium whitespace-nowrap">View Reflection</span>
              </button>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-4">{paper.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {paper.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2.5 sm:px-3.5 py-1 bg-[#FFB81C]/10 text-[#1C5310] rounded-full text-xs sm:text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PDFViewer
        url={paper.pdfUrl}
        title={paper.title}
        isOpen={isPDFOpen}
        onClose={() => setIsPDFOpen(false)}
      />
    </motion.div>
  );
}

const reflectionPapers = [
  {
    title: "Manalo, Angelo L.",
    date: "GED0001 Journey - A Five-Paragraph Reflection",
    excerpt: "A personal reflection on my experience in GED0001, discussing the challenges faced, skills developed, and valuable lessons learned throughout the course.",
    pdfUrl: "/documents/form_and_reflections/Manalo/Reflection_Paper.pdf",
    tags: ["Course Experience", "Personal Growth", "Technical Reading"]
  },
  {
    title: "Pantaleon, Hannah Coleen D.",
    date: "GED0001 Journey - A Five-Paragraph Reflection",
    excerpt: "A personal reflection on my experience in GED0001, discussing the challenges faced, skills developed, and valuable lessons learned throughout the course.",
    pdfUrl: "/documents/form_and_reflections/Pantaleon/Reflection_Paper.pdf",
    tags: ["Course Experience", "Personal Growth", "Technical Reading"]
  },
  {
    title: "Castro, Christian Aaron",
    date: "GED0001 Journey - A Five-Paragraph Reflection",
    excerpt: "A personal reflection on my experience in GED0001, discussing the challenges faced, skills developed, and valuable lessons learned throughout the course.",
    pdfUrl: "/documents/form_and_reflections/Castro/Reflection_Paper.pdf",
    tags: ["Course Experience", "Personal Growth", "Technical Reading"]
  },
  {
    title: "Balais, Jerico James G.",
    date: "GED0001 Journey - A Five-Paragraph Reflection",
    excerpt: "A personal reflection on my experience in GED0001, discussing the challenges faced, skills developed, and valuable lessons learned throughout the course.",
    pdfUrl: "/documents/form_and_reflections/Balais/Reflection_Paper.pdf",
    tags: ["Course Experience", "Personal Growth", "Technical Reading"]
  }
];

export default function ReflectionsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C5310] mb-4">Team Reflections</h1>
              <p className="text-base sm:text-lg text-gray-600">
                Personal insights and experiences from our GED0001 journey
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="space-y-6 sm:space-y-8"
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

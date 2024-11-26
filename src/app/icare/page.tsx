'use client';

import { useState } from 'react';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  UserIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  BookOpenIcon,
  PencilSquareIcon,
  ClipboardDocumentCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import PDFViewer from '@/components/PDFViewer';
import Image from 'next/image';
import { fadeIn, stagger, slideIn, pageTransition } from '@/components/animations';

interface RubricCriteria {
  title: string;
  points: number;
  description: string;
  icon: any;
}

const rubricCriteria: RubricCriteria[] = [
  {
    title: "Process Sheets",
    points: 25,
    description: "Complete set of two reader responses, two reading process worksheets, and one five-paragraph reflection",
    icon: ClipboardDocumentCheckIcon
  },
  {
    title: "Understanding the Text",
    points: 20,
    description: "Demonstrates clear comprehension of main ideas and supporting points",
    icon: BookOpenIcon
  },
  {
    title: "Reasoning & Reaction",
    points: 20,
    description: "Shows logical coherence and effective use of textual evidence",
    icon: PencilSquareIcon
  },
  {
    title: "Writing Conventions",
    points: 15,
    description: "Proper grammar, mechanics, and format adherence",
    icon: CheckCircleIcon
  },
  {
    title: "iCARE Activities",
    points: 20,
    description: "Completion of 10 iCARE activities with proper documentation",
    icon: StarIcon
  }
];

interface TeamMember {
  name: string;
  role: string;
  description: string;
  pdfUrl: string;
  tags: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Pantaleon, Hannah Coleen D.",
    role: "Team Leader",
    description: "Led the team in completing comprehensive iCARE activities documentation, ensuring adherence to rubric criteria and maintaining high standards in technical reading exercises.",
    pdfUrl: "/documents/form_and_reflections/Pantaleon/iCARE-ERC_Lab_Form.pdf",
    tags: ["Process Sheets", "Reader Response", "iCARE Activities"]
  },
  {
    name: "Manalo, Angelo",
    role: "Web Developer",
    description: "Developed the digital reading portfolio platform while maintaining detailed documentation of technical reading activities and iCARE forms.",
    pdfUrl: "/documents/form_and_reflections/Manalo/iCARE-ERC_Lab_Form.pdf",
    tags: ["Technical Documentation", "iCARE Activities", "Portfolio Development"]
  },
  {
    name: "Castro, Christian Aaron",
    role: "Content Writer",
    description: "Comprehensive documentation of laboratory activities and technical reading exercises through iCARE-ERC forms and Achieve 3000 activities.",
    pdfUrl: "/documents/form_and_reflections/Castro/iCARE-ERC_Lab_Form.pdf",
    tags: ["Lab Documentation", "Technical Reading", "Achieve 3000"]
  },
  {
    name: "Cantuba, Maruel Zoe",
    role: "Content Writer",
    description: "Comprehensive documentation of laboratory activities and technical reading exercises through iCARE-ERC forms and Achieve 3000 activities.",
    pdfUrl: "/documents/form_and_reflections/Cantuba/iCARE-ERC_Lab_Form.pdf",
    tags: ["Lab Documentation", "Technical Reading", "Achieve 3000"]
  },
  {
    name: "Tabago, Marc Alexis",
    role: "Content Writer",
    description: "Comprehensive documentation of laboratory activities and technical reading exercises through iCARE-ERC forms and Achieve 3000 activities.",
    pdfUrl: "/documents/form_and_reflections/Tabago/iCARE-ERC_Lab_Form.pdf",
    tags: ["Lab Documentation", "Technical Reading", "Achieve 3000"]
  },
  {
    name: "Cruz, Jan Mychal",
    role: "Content Writer",
    description: "Comprehensive documentation of laboratory activities and technical reading exercises through iCARE-ERC forms and Achieve 3000 activities.",
    pdfUrl: "/documents/form_and_reflections/Cruz/iCARE-ERC_Lab_Form.pdf",
    tags: ["Lab Documentation", "Technical Reading", "Achieve 3000"]
  },
  {
    name: "Suarez, Ken Enrique",
    role: "Content Writer",
    description: "Comprehensive documentation of laboratory activities and technical reading exercises through iCARE-ERC forms and Achieve 3000 activities.",
    pdfUrl: "/documents/form_and_reflections/Suarez/iCARE-ERC_Lab_Form.pdf",
    tags: ["Lab Documentation", "Technical Reading", "Achieve 3000"]
  },
  {
    name: "Cachuela, Maricar Joi",
    role: "Content Writer",
    description: "Comprehensive documentation of laboratory activities and technical reading exercises through iCARE-ERC forms and Achieve 3000 activities.",
    pdfUrl: "/documents/form_and_reflections/Cachuela/iCARE-ERC_Lab_Form.pdf",
    tags: ["Lab Documentation", "Technical Reading", "Achieve 3000"]
  }
];

function RubricCard({ criteria }: { criteria: RubricCriteria }) {
  const Icon = criteria.icon;
  return (
    <motion.div
      variants={fadeIn}
      className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-[#1C5310]/10 flex items-center justify-center group-hover:bg-[#1C5310]/20 transition-all duration-300 flex-shrink-0">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#1C5310] group-hover:scale-110 transition-transform" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-1 sm:mb-2">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#1C5310] truncate pr-2">{criteria.title}</h3>
            <span className="text-[#FFB81C] font-bold text-sm sm:text-base lg:text-lg whitespace-nowrap">{criteria.points} pts</span>
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 line-clamp-3 group-hover:line-clamp-none">{criteria.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  return (
    <motion.div
      variants={slideIn}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
    >
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-[#1C5310]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1C5310]/20 transition-all duration-300">
            <UserIcon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#1C5310] group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex-grow min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-2 sm:mb-3">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#1C5310] mb-0.5 sm:mb-1 group-hover:text-[#1C5310]/90 transition-colors truncate">{member.name}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-[#FFB81C] font-medium mb-0.5 sm:mb-1">{member.role}</p>
              </div>
              <button
                onClick={() => setIsPDFOpen(true)}
                className="flex items-center px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-[#1C5310] text-white rounded-lg hover:bg-[#1C5310]/90 transition-all duration-300 group/btn w-full sm:w-auto justify-center sm:justify-start transform hover:translate-y-[-2px]"
              >
                <DocumentTextIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-1.5 lg:mr-2 group-hover/btn:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap">View iCARE Form</span>
              </button>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-2 sm:mb-3 lg:mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">{member.description}</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {member.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 sm:px-2.5 lg:px-3.5 py-0.5 sm:py-1 bg-[#FFB81C]/10 text-[#1C5310] rounded-full text-xs sm:text-sm font-medium transform hover:scale-105 transition-transform"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PDFViewer
        url={member.pdfUrl}
        title={`${member.name}'s iCARE-ERC Laboratory Form`}
        isOpen={isPDFOpen}
        onClose={() => setIsPDFOpen(false)}
      />
    </motion.div>
  );
}

export default function ICarePage() {
  const { scrollY } = useScroll();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="relative py-12 sm:py-16 lg:py-20 xl:py-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.02]" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#1C5310]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#FFB81C]/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={pageTransition}
            className="max-w-3xl lg:max-w-5xl mx-auto"
          >
            {/* Hero Section */}
            <motion.div 
              variants={fadeIn}
              className="text-center mb-8 sm:mb-12 lg:mb-16"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 text-[#1C5310] tracking-tight">
                Reading Portfolio
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
                A comprehensive showcase of our team's work in <span className="text-[#1C5310] font-semibold">GED0001 - Specialized English Program</span> at FEU Tech. 
                This portfolio demonstrates our mastery of technical reading, critical analysis, and professional documentation.
              </p>

              {/* Team Section */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1C5310] mb-4 sm:mb-6 lg:mb-8">Team Contributions</h2>
            </motion.div>

            {/* Team Members Grid */}
            <motion.div 
              variants={fadeIn}
              className="space-y-3 sm:space-y-4 lg:space-y-6 mb-8 sm:mb-12 lg:mb-16"
            >
              {teamMembers.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </motion.div>

            {/* Rubric Section */}
            <motion.div variants={fadeIn} className="text-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1C5310] mb-4 sm:mb-6 lg:mb-8">Assessment Criteria</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {rubricCriteria.map((criteria, index) => (
                  <RubricCard key={index} criteria={criteria} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

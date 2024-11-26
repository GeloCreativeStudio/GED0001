'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HomeIcon,
  UserGroupIcon,
  DocumentTextIcon,
  BookOpenIcon,
  FolderIcon,
  ClipboardDocumentListIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  ChartBarIcon,
  PresentationChartLineIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { fadeIn, stagger, pageTransition } from '@/components/animations';

const sections: Section[] = [
  {
    title: "Introduction",
    icon: HomeIcon,
    description: "Overview of the Digital Reading Portfolio project and its mission",
    content: (
      <div className="space-y-6">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed">
            Welcome to the Digital Reading Portfolio documentation. This website was created by students from Far Eastern University Institute of Technology
            as part of our final requirement for the Specialized English Program (GED0001). Our portfolio showcases our development in technical reading
            comprehension, analysis, and critical thinking skills through various assignments and reflections.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#1C5310]/5 to-[#1C5310]/10 p-6 rounded-xl border border-[#1C5310]/10">
          <h4 className="font-semibold text-[#1C5310] text-lg mb-3">Mission Statement</h4>
          <p className="text-gray-700">To showcase our development in technical reading comprehension and analysis through an organized digital portfolio.</p>
        </div>
      </div>
    )
  },
  {
    title: "Goals",
    icon: ChartBarIcon,
    description: "Key objectives and aims of our digital portfolio project",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            title: "Demonstrate Learning",
            description: "Present our understanding and analysis of technical texts",
            icon: AcademicCapIcon
          },
          {
            title: "Document Growth",
            description: "Track our progress in reading comprehension and critical thinking",
            icon: ChartBarIcon
          },
          {
            title: "Showcase Skills",
            description: "Display our ability to analyze and evaluate technical materials",
            icon: CheckCircleIcon
          }
        ].map((goal, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1C5310]/10 flex items-center justify-center mb-4">
              <goal.icon className="w-6 h-6 text-[#1C5310]" />
            </div>
            <h4 className="font-semibold text-[#1C5310] text-lg mb-2">{goal.title}</h4>
            <p className="text-gray-600">{goal.description}</p>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    title: "Website Structure",
    icon: PresentationChartLineIcon,
    description: "Detailed overview of website sections and their purposes",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Home",
              description: "Welcome message, quick navigation menu, and search functionality",
              icon: HomeIcon
            },
            {
              title: "Team",
              description: "Information about team members and their roles in the project",
              icon: UserGroupIcon
            },
            {
              title: "RPW",
              description: "Technical reading analysis, vocabulary development, and critical evaluation",
              icon: DocumentTextIcon
            },
            {
              title: "Reflections",
              description: "Individual papers and documentation of our learning journey",
              icon: BookOpenIcon
            },
            {
              title: "Resources",
              description: "PDF documents and reference materials",
              icon: FolderIcon
            },
            {
              title: "iCARE",
              description: "Comprehensive documentation of iCARE activities and achievements",
              icon: ClipboardDocumentListIcon
            }
          ].map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1C5310]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1C5310]/20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#1C5310] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C5310] text-lg mb-2 group-hover:text-[#1C5310]/90">{section.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{section.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    )
  },
  {
    title: "Team Members",
    icon: UserGroupIcon,
    description: "Meet the team behind the Digital Reading Portfolio",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { role: "Team Leader", name: "Pantaleon, Hannah Coleen D." },
            { role: "Web Developer", name: "Manalo, Angelo" },
            { role: "Content Writer", name: "Castro, Christian Aaron" },
            { role: "Content Writer", name: "Cantuba, Maruel Zoe" },
            { role: "Content Writer", name: "Tabago, Marc Alexis" },
            { role: "Content Writer", name: "Cruz, Jan Mychal" },
            { role: "Content Writer", name: "Suarez, Ken Enrique" },
            { role: "Content Writer", name: "Cachuela, Maricar Joi" }
          ].map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1C5310]/10 flex items-center justify-center mb-4">
                <UserGroupIcon className="w-6 h-6 text-[#1C5310]" />
              </div>
              <h4 className="font-semibold text-[#1C5310] text-lg mb-1">{member.name}</h4>
              <p className="text-[#FFB81C] font-medium text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Technical Features",
    icon: AcademicCapIcon,
    description: "Overview of the technologies and features used in the website",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Next.js Framework",
              description: "Built with React and Next.js for optimal performance and SEO",
              icon: DocumentTextIcon
            },
            {
              title: "Responsive Design",
              description: "Fully responsive layout that works on all devices",
              icon: PresentationChartLineIcon
            },
            {
              title: "PDF Integration",
              description: "Seamless PDF viewing experience for documentation",
              icon: FolderIcon
            },
            {
              title: "Modern UI/UX",
              description: "Clean and intuitive interface with smooth animations",
              icon: AcademicCapIcon
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#1C5310]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1C5310]/20 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-[#1C5310] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1C5310] text-lg mb-2 group-hover:text-[#1C5310]/90">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }
];

interface Section {
  title: string;
  icon: any;
  content: React.ReactNode;
  description: string;
}

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState<string>(sections[0].title);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.02]" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#1C5310]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#FFB81C]/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={pageTransition}
            className="max-w-7xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={fadeIn} className="text-center mb-12 sm:mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-[#1C5310] tracking-tight">
                Documentation
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto">
                A comprehensive guide to our Digital Reading Portfolio website for GED0001 - Specialized English Program at FEU Tech.
              </p>
            </motion.div>

            {/* Navigation Pills */}
            <motion.div variants={fadeIn} className="mb-12">
              <div className="flex flex-wrap justify-center gap-2">
                {sections.map((section) => (
                  <button
                    key={section.title}
                    onClick={() => setActiveSection(section.title)}
                    className={`
                      flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${activeSection === section.title
                        ? 'bg-[#1C5310] text-white shadow-md'
                        : 'bg-white text-gray-600 hover:bg-[#1C5310]/10 hover:text-[#1C5310]'
                      }
                    `}
                  >
                    <section.icon className="w-4 h-4 mr-2" />
                    {section.title}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Content Sections */}
            <AnimatePresence mode="wait">
              {sections.map((section) => (
                activeSection === section.title && (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <div className="p-6 sm:p-8 lg:p-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#1C5310]/10 flex items-center justify-center">
                          <section.icon className="w-6 h-6 text-[#1C5310]" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-[#1C5310]">
                            {section.title}
                          </h2>
                          <p className="text-gray-600">{section.description}</p>
                        </div>
                      </div>
                      <div className="prose max-w-none">
                        {section.content}
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

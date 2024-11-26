'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpenIcon, 
  AcademicCapIcon, 
  LightBulbIcon,
  ArrowTrendingUpIcon,
  DocumentTextIcon,
  UserGroupIcon,
  PencilSquareIcon,
  BookmarkIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import { fadeIn, stagger, pageTransition } from '@/components/animations';

const IconWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <div className="w-16 h-16 rounded-2xl bg-[#1C5310]/10 flex items-center justify-center mb-6 group-hover:bg-[#1C5310]/20 transition-all duration-300">
        {children}
      </div>
      {/* Decorative circle */}
      <div className="absolute -inset-2 rounded-full bg-[#FFB81C]/10 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
    </div>
  );
}

function TeamMember({ name, role, contributions }: { name: string; role: string; contributions?: string[] }) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -5 }}
      className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-[#1C5310] rounded-full flex items-center justify-center flex-shrink-0 transform transition-transform group-hover:scale-110">
          <span className="text-white text-lg font-semibold">
            {name.split(',')[0].charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="font-semibold text-[#1C5310]">{name}</h3>
          <p className="text-[#FFB81C] font-medium">{role}</p>
        </div>
      </div>
      {contributions && (
        <div className="mt-3">
          <div className="flex flex-wrap gap-2">
            {contributions.map((contribution, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-[#FFB81C]/10 text-[#1C5310] rounded-full text-sm font-medium"
              >
                {contribution}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.main 
      initial="initial" 
      animate="animate" 
      variants={pageTransition} 
      className="min-h-screen bg-gradient-to-b from-white to-gray-50"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeIn}
            className="text-center"
          >
            <motion.div
              variants={fadeIn}
              className="mb-8 relative w-40 h-40 mx-auto"
            >
              <Image
                src="/FEU-Logo-flat.png"
                alt="FEU Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 px-4">
              <span className="text-[#1C5310]">Digital Reading</span>
              <br />
              <span className="text-[#FFB81C]">Portfolio</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto px-4">
              Demonstrating our technical reading analysis and comprehension skills through structured worksheets
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4"
            >
              <Link
                href="/rpw"
                className="inline-block bg-[#1C5310] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#1C5310]/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Reading Process Worksheets
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { color: '#1C5310', top: '20%', left: '60%', duration: 10 },
            { color: '#FFB81C', top: '60%', left: '25%', duration: 12 },
            { color: '#2E7D32', top: '40%', left: '80%', duration: 14 }
          ].map((shape, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full mix-blend-multiply filter blur-xl opacity-30"
              style={{
                background: shape.color,
                top: shape.top,
                left: shape.left,
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 w-full flex justify-center">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#1C5310]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[#1C5310]">Course Learning Outcomes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#1C5310]/10 rounded-xl flex items-center justify-center mb-4">
                <DocumentTextIcon className="w-6 h-6 text-[#1C5310]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1C5310]">Technical Text Mastery</h3>
              <p className="text-gray-600">Develop familiarity with scientific and technical texts in Engineering/IT, understanding their unique features and structure.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#1C5310]/10 rounded-xl flex items-center justify-center mb-4">
                <BookOpenIcon className="w-6 h-6 text-[#1C5310]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1C5310]">Reading Process Excellence</h3>
              <p className="text-gray-600">Master effective reading comprehension and critical reading strategies specifically tailored for Engineering/IT texts.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#1C5310]/10 rounded-xl flex items-center justify-center mb-4">
                <AcademicCapIcon className="w-6 h-6 text-[#1C5310]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1C5310]">Field Concept Discussion</h3>
              <p className="text-gray-600">Engage in meaningful discussions about fundamental Engineering/IT concepts derived from technical readings.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#1C5310]/10 rounded-xl flex items-center justify-center mb-4">
                <PencilSquareIcon className="w-6 h-6 text-[#1C5310]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1C5310]">Analysis & Summary Skills</h3>
              <p className="text-gray-600">Develop the ability to compose clear, concise summaries and in-depth analyses of Engineering/IT texts of varying complexity.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#1C5310]/10 rounded-xl flex items-center justify-center mb-4">
                <BookmarkIcon className="w-6 h-6 text-[#1C5310]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1C5310]">Lifelong Reading Habits</h3>
              <p className="text-gray-600">Cultivate lasting reading habits and a positive attitude towards continuous improvement in English reading skills for professional growth.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#1C5310]/10 rounded-xl flex items-center justify-center mb-4">
                <RocketLaunchIcon className="w-6 h-6 text-[#1C5310]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1C5310]">Professional Development</h3>
              <p className="text-gray-600">Build efficiency in performing profession-related tasks through enhanced technical reading and comprehension abilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl font-bold text-[#1C5310] mb-4"
            >
              Our Team
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-gray-600 text-xl max-w-2xl mx-auto"
            >
              Meet the dedicated team behind this Digital Reading Portfolio, working together to demonstrate technical reading excellence.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Leadership */}
            <motion.div 
              variants={fadeIn}
              className="col-span-1 md:col-span-2 lg:col-span-4 mb-8"
            >
              <h3 className="text-2xl font-semibold text-[#1C5310] mb-8 text-center">Leadership & Development</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TeamMember 
                  name="Pantaleon, Hannah Coleen D." 
                  role="Team Leader"
                  contributions={["Team Leadership", "Content Planning", "Documentation"]}
                />
                <TeamMember 
                  name="Manalo, Angelo" 
                  role="Web Developer"
                  contributions={["Website Development", "Technical Implementation", "UI/UX Design"]}
                />
              </div>
            </motion.div>
            
            {/* Content Writers */}
            <motion.div 
              variants={fadeIn}
              className="col-span-1 md:col-span-2 lg:col-span-4"
            >
              <h3 className="text-2xl font-semibold text-[#1C5310] mb-8 text-center">Content Development Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <TeamMember name="Castro, Christian Aaron" role="Content Writer" />
                <TeamMember name="Cantuba, Maruel Zoe" role="Content Writer" />
                <TeamMember name="Tabago, Marc Alexis" role="Content Writer" />
                <TeamMember name="Cruz, Jan Mychal" role="Content Writer" />
                <TeamMember name="Suarez, Ken Enrique" role="Content Writer" />
                <TeamMember name="Cachuela, Maricar Joi" role="Content Writer" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1C5310] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl font-bold text-white mb-6"
            >
              Ready to Explore Our Reading Process?
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-white/80 text-xl mb-8 max-w-2xl mx-auto"
            >
              Discover our structured approach to technical reading analysis and comprehension
            </motion.p>
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/rpw"
                className="inline-block bg-[#FFB81C] text-[#1C5310] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FFB81C]/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Worksheets
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}

import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  contributions: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Pantaleon, Hannah Coleen D.",
    role: "Team Leader",
    contributions: ["Team Leader", "Content Writer", "Content Planning", "Team Coordination"]
  },
  {
    name: "Manalo, Angelo",
    role: "Web Developer",
    contributions: ["Website Development", "Design", "Frontend", "Technical Setup"]
  },
  {
    name: "Castro, Christian Aaron",
    role: "Content Writer",
    contributions: ["Content Creation", "Documentation", "Research"]
  },
  {
    name: "Cantuba, Maruel Zoe",
    role: "Content Writer",
    contributions: ["Content Creation", "Documentation", "Research"]
  },
  {
    name: "Tabago, Marc Alexis",
    role: "Content Writer",
    contributions: ["Content Creation", "Documentation", "Research"]
  },
  {
    name: "Cruz, Jan Mychal",
    role: "Content Writer",
    contributions: ["Content Creation", "Documentation", "Research"]
  },
  {
    name: "Suarez, Ken Enrique",
    role: "Content Writer",
    contributions: ["Content Creation", "Documentation", "Research"]
  },
  {
    name: "Cachuela, Maricar Joi",
    role: "Content Writer",
    contributions: ["Content Creation", "Documentation", "Research"]
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1C5310] mb-4">Meet Our Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are FEU Tech students taking GED0001 - Specialized English Program. This Digital Reading Portfolio 
            serves as our Final Assessment for the course.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#1C5310] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-semibold">
                      {member.name.split(',')[0].charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-[#1C5310]">{member.name}</h2>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {member.contributions.map((contribution, contributionIndex) => (
                      <span 
                        key={contributionIndex}
                        className="px-3 py-1 bg-[#1C5310]/10 text-[#1C5310] rounded-full text-sm"
                      >
                        {contribution}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Goals Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-[#1C5310] text-center mb-8">Our Goals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-[#1C5310] mb-2">Learn Together</h3>
              <p className="text-gray-600">
                Support each other in understanding and analyzing technical reading materials.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold text-[#1C5310] mb-2">Create & Share</h3>
              <p className="text-gray-600">
                Develop comprehensive reading materials and share our insights with classmates.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-[#1C5310] mb-2">Demonstrate Skills</h3>
              <p className="text-gray-600">
                Showcase our understanding of technical reading and comprehension strategies.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

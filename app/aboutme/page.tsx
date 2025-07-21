'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';

export default function AboutMe() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(prev => (prev === section ? null : section));
  };

  return (
    <div className="min-h-screen bg-[#0D0D2B] text-white px-6 py-12">
      <Navbar />
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg text-gray-300">
          I'm a BS Information Technology student at St. Peter's College with hands-on experience in WordPress, Shopify, basic programming, and IT support.
          I've built real skills through academic projects and a paid internship. I'm a fast learner, detail-oriented, and passionate about using technology to solve problems.
        </p>

        {/* Toggle Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <button
            onClick={() => toggleSection('education')}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
          >
            Educational Background
          </button>

          <button
            onClick={() => toggleSection('skills')}
            className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
          >
            Skills
          </button>

          <button
            onClick={() => toggleSection('projects')}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
          >
            Projects
          </button>
        </div>

        {/* Section Content */}
        {activeSection === 'education' && (
          <div className="mt-8 text-left bg-[#1a1a3d] p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-2">Educational Background</h2>
            <ul className="list-disc pl-5 text-gray-300">
              <li>St. Peter's College – BS Information Technology (Current)</li>
              <li>Senior High School – Accountancy and Business Management</li>
              <li>Junior High School – Laubach Institute</li>
            </ul>
          </div>
        )}

        {activeSection === 'skills' && (
          <div className="mt-8">
            <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 rounded-2xl border border-purple-500 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Skills & Expertise
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* CMS Platforms */}
                <div className="group relative p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                      CMS Platforms
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="text-sm font-medium">WordPress</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="text-sm font-medium">Shopify CMS</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Frontend Development */}
                <div className="group relative p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      Frontend Development
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="text-sm font-medium">HTML, CSS, JavaScript</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="text-sm font-medium">React & Tailwind CSS</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Technical Support */}
                <div className="group relative p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                      Technical Support
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="text-sm font-medium">IT Support</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="text-sm font-medium">Troubleshooting</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-purple-500 opacity-10 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        )}

      {activeSection === 'projects' && (
  <div className="mt-8">
    <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 p-8 rounded-2xl border border-indigo-500 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Portfolio Website */}
        <div className="group relative bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105">
          <div className="relative h-48 bg-gradient-to-br from-purple-600 to-blue-600 overflow-hidden">
            {/* Placeholder for project image */}
            <div className="absolute inset-0 flex items-center justify-center">
            
            </div>
            <img 
  src="/port.PNG" 
  alt="Portfolio Website" 
  className="w-full h-full object-cover" 
/>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
              Portfolio Website
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Modern portfolio built with Next.js and Tailwind CSS featuring responsive design and smooth animations.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">Next.js</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">Tailwind</span>
              </div>
              
             
            </div>
          </div>
          
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
        </div>

        {/* Parking System */}
        <div className="group relative bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105">
          <div className="relative h-48 bg-gradient-to-br from-orange-600 to-red-600 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
  src="/capstone.PNG" 
  alt="Portfolio Website" 
  className="w-full h-full object-cover" 
/>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
              Parking Management System
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Smart parking system with Firebase backend for real-time slot management and automated billing.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full">Firebase</span>
                <span className="px-2 py-1 bg-yellow-500 text-white text-xs rounded-full">React JavaScript</span>
              </div>
              
              <div className="flex gap-2">
                <a 
                  href="https://spcparking0.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a 
                  href="https://github.com/yourusername/parking-system" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
        </div>

        {/* Online Exam System */}
        <div className="group relative bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 md:col-span-2">
          <div className="flex flex-col md:flex-row">
            <div className="relative h-48 md:h-auto md:w-1/3 bg-gradient-to-br from-green-600 to-teal-600 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
  src="/athena.PNG" 
  alt="Portfolio Website" 
  className="w-full h-full object-cover" 
/>
              </div>
            </div>
            
            <div className="p-6 md:w-2/3">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                Online English Proficiency Exam System
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Comprehensive online examination platform with automated scoring, time management, and detailed analytics for English proficiency assessment.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">React</span>
                  <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">Node.js</span>
                  <span className="px-2 py-1 bg-purple-500 text-white text-xs rounded-full">Firebase</span>
                </div>
                
                <div className="flex gap-2">
                  <a 
                    href="https://athens-db.web.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/yourusername/exam-system" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-indigo-500 opacity-10 rounded-full blur-xl animate-pulse"></div>
    </div>
  </div>
        )}
      </div>
    </div>
  );
}
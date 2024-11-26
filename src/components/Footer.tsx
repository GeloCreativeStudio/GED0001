import React from 'react';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C5310] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Digital Reading Portfolio</h3>
            <p className="text-sm">
              A Final Assessment for GED0001 - Specialized English Program at FEU Tech
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-[#FFB81C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm hover:text-[#FFB81C] transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/rpw" className="text-sm hover:text-[#FFB81C] transition-colors">
                  Reading Process
                </Link>
              </li>
              <li>
                <Link href="/reflections" className="text-sm hover:text-[#FFB81C] transition-colors">
                  Reflections
                </Link>
              </li>
              <li>
                <Link href="/icare" className="text-sm hover:text-[#FFB81C] transition-colors">
                  iCARE
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-sm hover:text-[#FFB81C] transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div>
              <p className="text-sm">You can reach out to us at our</p>
              <a 
                href="https://www.angelomanalo.me/#contact" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-[#FFB81C] hover:text-white transition-colors"
              >
                Developer&apos;s contact page
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          {new Date().getFullYear()} Digital Reading Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

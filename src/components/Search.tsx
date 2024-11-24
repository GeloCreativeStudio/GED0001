"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface SearchResult {
  id: string;
  title: string;
  type: 'rpw' | 'reflection' | 'icare';
  excerpt: string;
  url: string;
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Mock search results - in a real application, this would come from an API
  const mockSearch = (searchQuery: string): SearchResult[] => {
    if (!searchQuery.trim()) return [];
    
    const allContent: SearchResult[] = [
      {
        id: '1',
        title: 'Technical Reading Analysis',
        type: 'rpw',
        excerpt: 'Analysis of emerging technologies and their societal impact...',
        url: '/rpw#technical-analysis'
      },
      {
        id: '2',
        title: 'Digital Transformation Reflection',
        type: 'reflection',
        excerpt: 'Personal insights on the impact of digital transformation...',
        url: '/reflections/digital-transformation'
      },
      {
        id: '3',
        title: 'Group Discussion Activity',
        type: 'icare',
        excerpt: 'Collaborative session on technical reading methodologies...',
        url: '/icare#group-discussion'
      }
    ];

    return allContent.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query) {
      const searchResults = mockSearch(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const handleResultClick = (url: string) => {
    router.push(url);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search content..."
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#1C5310] focus:ring-2 focus:ring-[#1C5310]/20"
        />
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="py-2">
            {results.map((result) => (
              <button
                key={result.id}
                onClick={() => handleResultClick(result.url)}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              >
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">
                      {result.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {result.excerpt}
                    </p>
                  </div>
                  <span className={`
                    ml-2 px-2 py-1 text-xs rounded-full
                    ${result.type === 'rpw' ? 'bg-blue-100 text-blue-800' : ''}
                    ${result.type === 'reflection' ? 'bg-green-100 text-green-800' : ''}
                    ${result.type === 'icare' ? 'bg-yellow-100 text-yellow-800' : ''}
                  `}>
                    {result.type.toUpperCase()}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={`w-5 h-5 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

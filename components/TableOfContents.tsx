'use client';

import { useState } from 'react';
import { generateId } from '@/lib/utils';

interface Section {
  type: string;
  level?: number;
  content?: string;
  [key: string]: any;
}

interface TableOfContentsProps {
  sections: Section[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);

  // Extract all h2 headings
  const headings = sections
    .filter(section => section.type === 'heading' && section.level === 2)
    .map(section => ({
      text: section.content || '',
      id: generateId(section.content || '')
    }));

  if (headings.length === 0) {
    return null;
  }

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Indice dei contenuti</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-200 rounded transition-colors"
          aria-label={isOpen ? 'Chiudi indice' : 'Apri indice'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-0' : 'rotate-180'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <ol className="space-y-2">
          {headings.map((heading, index) => (
            <li key={index}>
              <button
                onClick={() => handleClick(heading.id)}
                className="text-left text-purple-600 hover:text-purple-800 hover:underline transition-colors w-full"
              >
                {index + 1}. {heading.text}
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

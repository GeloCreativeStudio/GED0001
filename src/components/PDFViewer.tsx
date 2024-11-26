'use client';

import { useState, useEffect, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/24/outline';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFViewerProps {
  url: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function PDFViewer({ url, title, isOpen, onClose }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle document load success
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  // Handle document load error
  const onDocumentLoadError = (error: Error) => {
    setLoading(false);
    setError('Failed to load PDF. Please try again.');
    console.error('PDF load error:', error);
  };

  // Navigation handlers
  const goToPrevPage = () => setPageNumber(prev => Math.max(1, prev - 1));
  const goToNextPage = () => setPageNumber(prev => Math.min(numPages || prev, prev + 1));

  // Zoom handlers
  const zoomIn = () => setScale(prev => Math.min(2, prev + 0.1));
  const zoomOut = () => setScale(prev => Math.max(0.5, prev - 0.1));
  const resetZoom = () => setScale(1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;
      switch (e.key) {
        case 'ArrowLeft':
          goToPrevPage();
          break;
        case 'ArrowRight':
          goToNextPage();
          break;
        case 'Escape':
          onClose();
          break;
        case '+':
          zoomIn();
          break;
        case '-':
          zoomOut();
          break;
        case '0':
          resetZoom();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, onClose]);

  // Modal animations
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full h-full md:w-[90%] md:h-[90%] bg-white rounded-lg shadow-xl overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close PDF viewer"
              >
                <XMarkIcon className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Zoom controls */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10 flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur rounded-full shadow-md">
              <button
                onClick={zoomOut}
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Zoom out"
              >
                <MinusIcon className="w-5 h-5 text-gray-600" />
              </button>
              <span className="text-sm font-medium text-gray-600">{Math.round(scale * 100)}%</span>
              <button
                onClick={zoomIn}
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Zoom in"
              >
                <PlusIcon className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={resetZoom}
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Reset zoom"
              >
                <ArrowsPointingOutIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* PDF Document */}
            <div className="h-full pt-16 pb-16 overflow-auto bg-gray-100">
              {loading && (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#1C5310] border-t-transparent"></div>
                </div>
              )}
              
              {error && (
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <div className="p-3 rounded-full bg-red-100">
                    <XMarkIcon className="w-8 h-8 text-red-600" />
                  </div>
                  <p className="text-red-600 font-medium">{error}</p>
                  <button
                    onClick={() => setLoading(true)}
                    className="px-4 py-2 bg-[#1C5310] text-white rounded-lg hover:bg-[#1C5310]/90 transition-colors"
                  >
                    Retry
                  </button>
                </div>
              )}

              <Document
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                className="flex flex-col items-center"
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  className="shadow-lg"
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </Document>
            </div>

            {/* Navigation controls */}
            <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur border-t border-gray-200">
              <button
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed min-w-[100px]"
              >
                <ChevronLeftIcon className="w-5 h-5 mr-1" />
                Previous
              </button>
              <span className="text-sm text-gray-600">
                Page {pageNumber} of {numPages || '?'}
              </span>
              <button
                onClick={goToNextPage}
                disabled={pageNumber >= (numPages || 1)}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed min-w-[100px]"
              >
                Next
                <ChevronRightIcon className="w-5 h-5 ml-1" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

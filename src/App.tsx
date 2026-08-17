import React, { useState, useEffect } from 'react';
import { CONTEXTS_DATA } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { ContextDetail } from './components/ContextDetail';
import { ReferencesView } from './components/ReferencesView';
import { AudioTranscriptModal } from './components/AudioTranscriptModal';
import { EducatorToolkitModal } from './components/EducatorToolkitModal';
import { SearchModal } from './components/SearchModal';
import { PrintableView } from './components/PrintableView';
import {
  BookOpen,
  Sparkles,
  Layers,
  Search,
  Headphones
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('economic');
  const [savedStrategies, setSavedStrategies] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('epro506_saved_strategies');
      return saved ? JSON.parse(saved) : ['econ-strat-1', 'soc-strat-1', 'cult-strat-2'];
    } catch {
      return ['econ-strat-1', 'soc-strat-1', 'cult-strat-2'];
    }
  });

  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [transcriptOpen, setTranscriptOpen] = useState<boolean>(false);
  const [toolkitOpen, setToolkitOpen] = useState<boolean>(false);
  const [printMode, setPrintMode] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem('epro506_saved_strategies', JSON.stringify(savedStrategies));
    } catch {
      // ignore
    }
  }, [savedStrategies]);

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleSaveStrategy = (id: string) => {
    setSavedStrategies((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleClearAllStrategies = () => {
    setSavedStrategies([]);
  };

  const currentContextIndex = CONTEXTS_DATA.findIndex((c) => c.id === activeTab);
  const currentContext = CONTEXTS_DATA[currentContextIndex] || CONTEXTS_DATA[0];

  const handleNextContext = () => {
    if (currentContextIndex < CONTEXTS_DATA.length - 1) {
      setActiveTab(CONTEXTS_DATA[currentContextIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevContext = () => {
    if (currentContextIndex > 0) {
      setActiveTab(CONTEXTS_DATA[currentContextIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (printMode) {
    return <PrintableView onBack={() => setPrintMode(false)} />;
  }

  return (
    <div className="min-h-screen bg-stone-100/70 text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Navbar Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(id) => {
          setActiveTab(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenTranscript={() => setTranscriptOpen(true)}
        onOpenReferences={() => setActiveTab('references')}
        onOpenToolkit={() => setToolkitOpen(true)}
        onOpenPrint={() => setPrintMode(true)}
        savedStrategiesCount={savedStrategies.length}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">

        {/* View Switcher */}
        {activeTab === 'references' ? (
          <ReferencesView onSelectContext={(id) => setActiveTab(id)} />
        ) : (
          <ContextDetail
            context={currentContext}
            savedStrategies={savedStrategies}
            onToggleSaveStrategy={handleToggleSaveStrategy}
            onNextContext={handleNextContext}
            onPrevContext={handlePrevContext}
            isFirst={currentContextIndex === 0}
            isLast={currentContextIndex === CONTEXTS_DATA.length - 1}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-8 mt-12 text-xs text-stone-500 font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-stone-800">Early Childhood Professional Portfolio</span>
            <span>•</span>
            <span>Family & Community Contexts in Early Childhood Education</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTranscriptOpen(true)}
              className="hover:text-stone-900 underline flex items-center gap-1"
            >
              <Headphones className="w-3.5 h-3.5" />
              <span>Audio Transcript</span>
            </button>
            <button
              onClick={() => setActiveTab('references')}
              className="hover:text-stone-900 underline"
            >
              APA 7th References
            </button>
            <button
              onClick={() => setPrintMode(true)}
              className="hover:text-stone-900 underline"
            >
              Print / Save PDF
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectContext={(id) => {
          setActiveTab(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <AudioTranscriptModal
        isOpen={transcriptOpen}
        onClose={() => setTranscriptOpen(false)}
      />

      <EducatorToolkitModal
        isOpen={toolkitOpen}
        onClose={() => setToolkitOpen(false)}
        savedStrategies={savedStrategies}
        onToggleSaveStrategy={handleToggleSaveStrategy}
        onClearAll={handleClearAllStrategies}
      />
    </div>
  );
}

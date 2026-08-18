import React, { useState } from 'react';
import {
  BookOpen,
  FileText,
  Search,
  Headphones,
  Printer,
  CheckSquare,
  Sparkles,
  Coins,
  Users,
  Globe,
  HeartPulse,
  ShieldAlert,
  Menu,
  X
} from 'lucide-react';
import { CONTEXTS_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  onOpenSearch: () => void;
  onOpenTranscript: () => void;
  onOpenReferences: () => void;
  onOpenToolkit: () => void;
  onOpenPrint: () => void;
  savedStrategiesCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenTranscript,
  onOpenReferences,
  onOpenPrint,
  savedStrategiesCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const getContextIcon = (id: string) => {
    switch (id) {
      case 'economic':
        return <Coins className="w-4 h-4" />;
      case 'social':
        return <Users className="w-4 h-4" />;
      case 'cultural':
        return <Globe className="w-4 h-4" />;
      case 'health':
        return <HeartPulse className="w-4 h-4" />;
      case 'crisis':
        return <ShieldAlert className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const handleSelectTab = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">

      {/* Main Header & Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div
          onClick={() => handleSelectTab('economic')}
          className="cursor-pointer group flex items-center space-x-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform shrink-0">
            <BookOpen className="w-5 h-5 text-amber-100" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-stone-900 leading-tight">
              Digital Portfolio: Family & Community Contexts
            </h1>
            <p className="text-xs text-stone-500 font-normal hidden sm:block">
              Early Childhood Education Professional Resource & Practice Guide
            </p>
          </div>
        </div>

        {/* Desktop Quick Actions */}
        <div className="hidden lg:flex items-center space-x-2">
          <button
            onClick={onOpenSearch}
            className="flex items-center space-x-2 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors border border-stone-200"
          >
            <Search className="w-3.5 h-3.5 text-stone-500" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-white border border-stone-300 rounded text-stone-500 font-mono">⌘K</kbd>
          </button>

          <button
            onClick={onOpenTranscript}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-lg transition-colors"
            title="Audio Narration & Presentation Transcript"
          >
            <Headphones className="w-3.5 h-3.5 text-amber-700" />
            <span>Audio & Transcript</span>
          </button>
          <button
            onClick={onOpenReferences}
            className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border ${activeTab === 'references'
              ? 'bg-stone-900 text-white border-stone-900'
              : 'text-stone-700 bg-stone-100 hover:bg-stone-200 border-stone-200'
              }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>APA 7th References</span>
          </button>

          <button
            onClick={onOpenPrint}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-950 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors shadow-2xs"
            title="Print or Export Full Digital Portfolio"
          >
            <Printer className="w-3.5 h-3.5 text-stone-600" />
            <span>Print / PDF</span>
          </button>
        </div>

        {/* Mobile Hamburger & Action Icons */}
        <div className="flex lg:hidden items-center space-x-1.5">
          <button
            onClick={onOpenSearch}
            className="p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenTranscript}
            className="p-2 text-amber-700 hover:text-amber-900 rounded-lg hover:bg-amber-50"
            aria-label="Audio Transcript"
          >
            <Headphones className="w-5 h-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-800 hover:text-stone-950 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-amber-700" />
            ) : (
              <Menu className="w-6 h-6 text-stone-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer (Hamburger Dropdown) */}
      {
        mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white shadow-xl px-4 py-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2 px-1">
                Family & Community Context Sections
              </p>
              <div className="grid grid-cols-1 gap-1">
                {CONTEXTS_DATA.map((context, index) => {
                  const isActive = activeTab === context.id;
                  return (
                    <button
                      key={context.id}
                      onClick={() => handleSelectTab(context.id)}
                      className={`flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all ${isActive
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'text-stone-700 hover:bg-stone-100'
                        }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <span className={isActive ? 'text-amber-400' : 'text-stone-500'}>
                          {getContextIcon(context.id)}
                        </span>
                        <span>{context.title}</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-normal ${isActive ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-500'
                        }`}>
                        Context {index + 1}
                      </span>
                    </button>
                  );
                })}

                <button
                  onClick={() => handleSelectTab('references')}
                  className={`flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all ${activeTab === 'references'
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-700 hover:bg-stone-100'
                    }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <FileText className={`w-4 h-4 ${activeTab === 'references' ? 'text-amber-400' : 'text-stone-500'}`} />
                    <span>APA 7th Reference Library</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-normal ${activeTab === 'references' ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-500'
                    }`}>
                    33 Citations
                  </span>
                </button>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 grid grid-cols-2 gap-2">


              <button
                onClick={() => {
                  onOpenPrint();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center space-x-1.5 p-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs font-bold shadow-2xs"
              >
                <Printer className="w-4 h-4" />
                <span>Print / PDF</span>
              </button>
            </div>
          </div>
        )
      }

      {/* Contexts Horizontal Quick Bar (Desktop Only) */}
      <div className="hidden lg:block border-t border-stone-200 bg-stone-50/90 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-1 py-1.5 min-w-max">
          {CONTEXTS_DATA.map((context, index) => {
            const isActive = activeTab === context.id;
            return (
              <button
                key={context.id}
                onClick={() => setActiveTab(context.id)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-all duration-200 whitespace-nowrap ${isActive
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
                  }`}
              >
                <span className={`${isActive ? 'text-amber-400' : 'text-stone-400'}`}>
                  {getContextIcon(context.id)}
                </span>
                <span>{context.title}</span>
              </button>
            );
          })}

          <button
            onClick={() => setActiveTab('references')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-all duration-200 whitespace-nowrap ${activeTab === 'references'
              ? 'bg-stone-900 text-white shadow-xs'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
              }`}
          >
            <FileText className="w-3.5 h-3.5 text-stone-400" />
            <span>References</span>
          </button>
        </div>
      </div>
    </header >
  );
};


import React from 'react';
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
  ShieldAlert
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
  onOpenToolkit,
  onOpenPrint,
  savedStrategiesCount
}) => {
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

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      {/* Top Banner / Assessment Meta */}
      <div className="bg-stone-900 text-stone-100 px-4 py-2 text-xs font-medium flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <span className="bg-amber-500 text-stone-950 font-bold px-2 py-0.5 rounded text-[11px] tracking-wide">
            EPRO506 – Assessment 3
          </span>
          <span className="text-stone-300 hidden sm:inline">
            Working with Children, Families, and Communities in Contemporary Society
          </span>
        </div>
        <div className="flex items-center space-x-3 text-[11px] text-stone-300">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            APA 7th Edition Verified
          </span>
          <span className="text-stone-500">|</span>
          <span>5 Core Contexts • 5000+ Words</span>
        </div>
      </div>

      {/* Main Header & Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div 
            onClick={() => setActiveTab('economic')}
            className="cursor-pointer group flex items-center space-x-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5 text-amber-100" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-stone-900 leading-tight">
                Digital Portfolio: Family & Community Contexts
              </h1>
              <p className="text-xs text-stone-500 font-normal">
                Early Childhood Education Professional Resource & Practice Guide
              </p>
            </div>
          </div>

          <div className="flex md:hidden items-center space-x-1">
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
          </div>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <button
            onClick={onOpenSearch}
            className="flex items-center space-x-2 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors border border-stone-200"
          >
            <Search className="w-3.5 h-3.5 text-stone-500" />
            <span>Search Portfolio</span>
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
            onClick={onOpenToolkit}
            className="relative flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg transition-colors"
            title="Interactive Educator Action Plan & Checklists"
          >
            <CheckSquare className="w-3.5 h-3.5 text-stone-600" />
            <span>Educator Toolkit</span>
            {savedStrategiesCount > 0 && (
              <span className="w-4 h-4 bg-emerald-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                {savedStrategiesCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenReferences}
            className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border ${
              activeTab === 'references'
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
            title="Print or Export Full Assessment Portfolio"
          >
            <Printer className="w-3.5 h-3.5 text-stone-600" />
            <span>Print / PDF View</span>
          </button>
        </div>
      </div>

      {/* Contexts Tab Navigation */}
      <div className="border-t border-stone-200 bg-stone-50/80 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-1 py-1.5 min-w-max">
          {CONTEXTS_DATA.map((context, index) => {
            const isActive = activeTab === context.id;
            return (
              <button
                key={context.id}
                onClick={() => setActiveTab(context.id)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold tracking-tight transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
                }`}
              >
                <span className={`${isActive ? 'text-amber-400' : 'text-stone-400'}`}>
                  {getContextIcon(context.id)}
                </span>
                <span>{context.title}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded font-normal ${
                    isActive ? 'bg-stone-800 text-stone-300' : 'bg-stone-200 text-stone-600'
                  }`}
                >
                  Tab {index + 1}
                </span>
              </button>
            );
          })}

          <button
            onClick={() => setActiveTab('references')}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold tracking-tight transition-all duration-200 whitespace-nowrap md:hidden ${
              activeTab === 'references'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
            }`}
          >
            <FileText className="w-4 h-4 text-stone-400" />
            <span>References</span>
          </button>
        </div>
      </div>
    </header>
  );
};

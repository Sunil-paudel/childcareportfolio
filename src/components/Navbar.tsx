import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Search, 
  Printer, 
  Coins,
  Users,
  Globe,
  HeartPulse,
  ShieldAlert,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { CONTEXTS_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  onOpenSearch: () => void;
  onOpenReferences: () => void;
  onOpenPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenReferences,
  onOpenPrint,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getContextIcon = (id: string, className = "w-4 h-4") => {
    switch (id) {
      case 'economic':
        return <Coins className={className} />;
      case 'social':
        return <Users className={className} />;
      case 'cultural':
        return <Globe className={className} />;
      case 'health':
        return <HeartPulse className={className} />;
      case 'crisis':
        return <ShieldAlert className={className} />;
      default:
        return <BookOpen className={className} />;
    }
  };

  const handleSelectTab = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  const currentContext = CONTEXTS_DATA.find(c => c.id === activeTab);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">
        {/* Logo / Brand */}
        <div 
          onClick={() => handleSelectTab('economic')}
          className="cursor-pointer group flex items-center space-x-3 min-w-0"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-900 flex items-center justify-center text-white shadow-xs group-hover:bg-amber-950 transition-colors shrink-0">
            <BookOpen className="w-5 h-5 text-amber-100" />
          </div>
          <div className="min-w-0">
            <h1 className="text-sm sm:text-base font-bold tracking-tight text-stone-900 leading-tight truncate sm:whitespace-normal">
              Working with Children, Families, and Communities
            </h1>
            <p className="text-[11px] sm:text-xs text-stone-500 font-normal truncate">
              Contemporary Early Childhood Portfolio
            </p>
          </div>
        </div>

        {/* Mobile Header Controls: Search + Hamburger */}
        <div className="flex md:hidden items-center space-x-1.5 shrink-0">
          <button
            onClick={onOpenSearch}
            className="p-2 text-stone-600 hover:text-stone-900 rounded-xl hover:bg-stone-100 min-w-[40px] min-h-[40px] flex items-center justify-center transition-colors"
            aria-label="Search Portfolio"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors ${
              mobileMenuOpen 
                ? 'bg-stone-900 text-white' 
                : 'text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Desktop Action Buttons (Search, References, Print) */}
        <div className="hidden md:flex items-center space-x-2 shrink-0">
          <button
            onClick={onOpenSearch}
            className="flex items-center space-x-2 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors border border-stone-200"
          >
            <Search className="w-3.5 h-3.5 text-stone-500" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-white border border-stone-300 rounded text-stone-500 font-mono">⌘K</kbd>
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
            <span>References</span>
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

      {/* Desktop Horizontal Tab Navigation (Hidden on Mobile) */}
      <div className="hidden md:block border-t border-stone-200 bg-stone-50/80 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-1 py-1.5 min-w-max">
          {CONTEXTS_DATA.map((context, index) => {
            const isActive = activeTab === context.id;
            return (
              <button
                key={context.id}
                onClick={() => handleSelectTab(context.id)}
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
            onClick={() => handleSelectTab('references')}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold tracking-tight transition-all duration-200 whitespace-nowrap ${
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

      {/* Mobile Current Context Indicator Bar (When Menu is Closed) */}
      {!mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-stone-100/70 px-4 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 min-w-0">
            <span className="text-amber-900 shrink-0 font-medium">
              {activeTab === 'references' ? <FileText className="w-3.5 h-3.5 inline mr-1" /> : getContextIcon(activeTab, "w-3.5 h-3.5 inline mr-1")}
            </span>
            <span className="font-semibold text-stone-800 truncate">
              {activeTab === 'references' ? 'APA 7th Reference List' : `${currentContext?.category}: ${currentContext?.title}`}
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-[11px] font-bold text-amber-900 flex items-center shrink-0 ml-2"
          >
            Switch Tab <ChevronRight className="w-3.5 h-3.5 inline ml-0.5" />
          </button>
        </div>
      )}

      {/* Mobile Drawer / Navigation Dropdown Menu (Triggered by Hamburger) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="px-4 py-3 space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto">
            <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 px-3 py-1.5">
              Portfolio Contexts
            </div>

            {CONTEXTS_DATA.map((context, index) => {
              const isActive = activeTab === context.id;
              return (
                <button
                  key={context.id}
                  onClick={() => handleSelectTab(context.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all min-h-[50px] ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'text-stone-800 hover:bg-stone-100 active:bg-stone-200/80 border border-stone-100'
                  }`}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-stone-800 text-amber-400' : 'bg-stone-100 text-stone-600'
                    }`}>
                      {getContextIcon(context.id, "w-4 h-4")}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate">
                        {context.title}
                      </div>
                      <div className={`text-[11px] truncate ${isActive ? 'text-stone-300' : 'text-stone-500'}`}>
                        {context.subtitle}
                      </div>
                    </div>
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ml-2 ${
                    isActive ? 'bg-stone-800 text-amber-300' : 'bg-stone-200 text-stone-700'
                  }`}>
                    Tab {index + 1}
                  </span>
                </button>
              );
            })}

            <div className="pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 px-3 py-1.5">
                Documentation & Tools
              </div>

              {/* References Tab */}
              <button
                onClick={() => handleSelectTab('references')}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all min-h-[50px] ${
                  activeTab === 'references'
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-800 hover:bg-stone-100 active:bg-stone-200/80 border border-stone-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    activeTab === 'references' ? 'bg-stone-800 text-amber-400' : 'bg-stone-100 text-stone-600'
                  }`}>
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">APA 7th References</div>
                    <div className={`text-[11px] ${activeTab === 'references' ? 'text-stone-300' : 'text-stone-500'}`}>
                      Complete academic bibliography
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>

              {/* Print / PDF Button inside Mobile Menu */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPrint();
                }}
                className="w-full mt-2 flex items-center justify-between p-3 rounded-xl text-left text-stone-800 bg-stone-50 hover:bg-stone-100 active:bg-stone-200 border border-stone-200 transition-all min-h-[48px]"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-stone-200 flex items-center justify-center text-stone-700">
                    <Printer className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Print / Export PDF</div>
                    <div className="text-[11px] text-stone-500">View complete assessment document</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

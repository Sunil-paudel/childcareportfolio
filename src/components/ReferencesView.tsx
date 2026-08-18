import React, { useState } from 'react';
import { REFERENCES_DATA } from '../data/portfolioData';
import {
  Search,
  Copy,
  Check,
  ExternalLink,
  BookOpen,
  Filter,
  CheckCheck,
  Globe
} from 'lucide-react';

interface ReferencesViewProps {
  onSelectContext?: (contextId: string) => void;
}

export const ReferencesView: React.FC<ReferencesViewProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const filteredReferences = REFERENCES_DATA.filter((ref) => {
    return (
      searchQuery.trim() === '' ||
      ref.apaFormatted.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleCopySingle = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAll = () => {
    const fullText = REFERENCES_DATA.map((r, idx) => `${idx + 1}. ${r.apaFormatted}`).join('\n\n');
    navigator.clipboard.writeText(fullText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  // Helper to parse and render text with clickable links
  const renderFormattedApaText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-sans text-xs sm:text-sm font-semibold text-amber-800 hover:text-amber-950 underline decoration-amber-300 hover:decoration-amber-800 underline-offset-2 transition-colors break-all mx-1"
          >
            <span>{part}</span>
            <ExternalLink className="w-3 h-3 inline shrink-0" />
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  // Extract primary URL from text or ref
  const extractUrl = (text: string, fallbackUrl?: string) => {
    if (fallbackUrl && fallbackUrl.startsWith('http')) return fallbackUrl;
    const match = text.match(/(https?:\/\/[^\s]+)/);
    return match ? match[0] : null;
  };

  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto w-full">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-8 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Academic Bibliography</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              References
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              APA 7th Edition Reference List • {REFERENCES_DATA.length} Academic Citations & Sources
            </p>
          </div>

          <button
            onClick={handleCopyAll}
            className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 active:scale-98 text-white rounded-xl text-xs font-bold transition-all shadow-xs shrink-0 self-start sm:self-auto min-h-[44px]"
          >
            {copiedAll ? (
              <>
                <CheckCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">All References Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Full Reference List</span>
              </>
            )}
          </button>
        </div>

        {/* Search Bar */}
        <div className="mt-6 pt-5 border-t border-stone-100 flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search references by author, title, organization, or publication year..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
            />
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="px-3 py-2 text-xs font-medium text-stone-500 hover:text-stone-800 bg-stone-100 rounded-xl"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* References Listing */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-8 md:p-10 shadow-2xs">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-100 text-xs text-stone-500">
          <span>Showing {filteredReferences.length} of {REFERENCES_DATA.length} references</span>
          <span className="font-medium text-amber-900">Numbered APA 7th Edition</span>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {filteredReferences.map((ref, idx) => {
            const originalIndex = REFERENCES_DATA.findIndex(r => r.id === ref.id) + 1;
            const primaryUrl = extractUrl(ref.apaFormatted, ref.url);

            return (
              <div
                key={ref.id}
                className="group p-4 sm:p-5 rounded-xl border border-stone-100 hover:border-amber-200 bg-stone-50/40 hover:bg-amber-50/20 transition-all duration-200 relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
              >
                {/* Number Badge */}
                <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-stone-200/80 group-hover:bg-amber-900 text-stone-700 group-hover:text-amber-100 font-mono text-xs font-bold transition-colors">
                  {originalIndex < 10 ? `0${originalIndex}` : originalIndex}
                </div>

                {/* Reference Content */}
                <div className="flex-1 min-w-0 space-y-2.5">
                  <div className="text-sm sm:text-[15px] leading-relaxed text-stone-800 sm:text-justify font-serif">
                    {renderFormattedApaText(ref.apaFormatted)}
                  </div>

                  {/* Actions Bar for Reference */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {primaryUrl && (
                      <a
                        href={primaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-900 bg-amber-100/80 hover:bg-amber-200/90 border border-amber-200 transition-colors"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Visit Source URL</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                      </a>
                    )}

                    <button
                      onClick={() => handleCopySingle(ref.id, `${originalIndex}. ${ref.apaFormatted}`)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-stone-600 hover:text-stone-900 bg-white hover:bg-stone-100 border border-stone-200 transition-colors shadow-2xs"
                      title="Copy APA Citation"
                    >
                      {copiedId === ref.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Citation Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-stone-400" />
                          <span>Copy Citation</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredReferences.length === 0 && (
            <div className="text-center py-12 space-y-2">
              <p className="text-sm font-semibold text-stone-700">
                No references found matching "{searchQuery}".
              </p>
              <p className="text-xs text-stone-500">
                Try searching for an author name (e.g. Bronfenbrenner, Bowlby), an organisation (e.g. AIHW, SNAICC), or year.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

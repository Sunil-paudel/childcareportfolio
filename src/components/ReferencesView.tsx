import React, { useState } from 'react';
import { REFERENCES_DATA } from '../data/portfolioData';
import { 
  Search, 
  Copy, 
  Check, 
  ExternalLink,
  BookOpen
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
    const fullText = REFERENCES_DATA.map((r) => r.apaFormatted).join('\n\n');
    navigator.clipboard.writeText(fullText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              References
            </h1>
            <p className="text-sm text-stone-500 mt-1">
              APA 7th Edition Academic Reference List
            </p>
          </div>

          <button
            onClick={handleCopyAll}
            className="flex items-center space-x-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs shrink-0 self-start sm:self-auto"
          >
            {copiedAll ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
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
              placeholder="Search references by author, title or year..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* References Listing */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-2xs space-y-6">
        <div className="space-y-6">
          {filteredReferences.map((ref) => (
            <div
              key={ref.id}
              className="group flex flex-col sm:flex-row sm:items-start justify-between gap-3 text-sm text-stone-800 leading-relaxed"
            >
              <div className="flex-1 text-justify">
                <p className="pl-6 -indent-6">
                  {ref.apaFormatted}
                </p>
              </div>

              <button
                onClick={() => handleCopySingle(ref.id, ref.apaFormatted)}
                className="opacity-0 group-hover:opacity-100 focus:opacity-100 self-start sm:self-center px-2.5 py-1 rounded-lg text-xs font-medium bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200 transition-all flex items-center space-x-1 shrink-0"
                title="Copy reference"
              >
                {copiedId === ref.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-stone-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          ))}

          {filteredReferences.length === 0 && (
            <div className="text-center py-12">
              <p className="text-sm text-stone-500">
                No references found matching "{searchQuery}".
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

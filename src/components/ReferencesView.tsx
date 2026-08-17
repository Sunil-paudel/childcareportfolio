import React, { useState } from 'react';
import { REFERENCES_DATA } from '../data/portfolioData';
import { 
  FileText, 
  Search, 
  Copy, 
  Check, 
  ExternalLink, 
  BookMarked, 
  Filter, 
  Sparkles,
  ArrowUpRight 
} from 'lucide-react';

interface ReferencesViewProps {
  onSelectContext?: (contextId: string) => void;
}

export const ReferencesView: React.FC<ReferencesViewProps> = ({ onSelectContext }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const filters = [
    { id: 'all', label: 'All References (33)' },
    { id: 'economic', label: 'Economic Contexts' },
    { id: 'social', label: 'Social Contexts' },
    { id: 'cultural', label: 'Cultural Contexts' },
    { id: 'health', label: 'Health & Wellbeing' },
    { id: 'crisis', label: 'Crisis & Disasters' },
  ];

  const filteredReferences = REFERENCES_DATA.filter((ref) => {
    const matchesFilter =
      selectedFilter === 'all' || ref.relatedContextIds.includes(selectedFilter);
    const matchesSearch =
      searchQuery.trim() === '' ||
      ref.apaFormatted.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
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
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-stone-900 text-amber-400">
                Academic Bibliography
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                APA 7th Edition Format
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              References & Source Literature
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              Comprehensive peer-reviewed journals, national Australian policy documents (Early Years Strategy, Closing the Gap, AIHW 2025, ACOSS, AEDC), and seminal sociological frameworks.
            </p>
          </div>

          <button
            onClick={handleCopyAll}
            className="flex items-center space-x-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs shrink-0 self-start md:self-auto"
          >
            {copiedAll ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">All 33 References Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Entire APA 7th Reference List</span>
              </>
            )}
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-6 pt-5 border-t border-stone-100 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by author (e.g., Bronfenbrenner, Bowlby, AIHW)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedFilter === filter.id
                    ? 'bg-stone-900 text-white shadow-2xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* References Listing */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-stone-100 text-xs text-stone-500 font-medium">
          <span>Showing {filteredReferences.length} of {REFERENCES_DATA.length} Citations</span>
          <span>Alphabetical by Author (APA Standard)</span>
        </div>

        <div className="divide-y divide-stone-100 space-y-1">
          {filteredReferences.map((ref, idx) => (
            <div
              key={ref.id}
              className="pt-4 first:pt-0 pb-4 group flex flex-col sm:flex-row sm:items-start justify-between gap-3"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold text-stone-400">
                    [{idx + 1}]
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {ref.relatedContextIds.map((cid) => (
                      <span
                        key={cid}
                        className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200"
                      >
                        {cid}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-stone-800 leading-relaxed font-serif pl-4 sm:pl-0 border-l-2 sm:border-l-0 border-amber-500 sm:border-transparent">
                  {ref.apaFormatted}
                </p>

                {ref.url && (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-amber-800 hover:text-amber-950 hover:underline gap-1 mt-1 break-all"
                  >
                    <span>{ref.url}</span>
                    <ArrowUpRight className="w-3 h-3 shrink-0" />
                  </a>
                )}
              </div>

              <button
                onClick={() => handleCopySingle(ref.id, ref.apaFormatted)}
                className="self-start sm:self-center px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200 transition-colors flex items-center space-x-1 shrink-0"
              >
                {copiedId === ref.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-stone-500" />
                    <span>Copy Citation</span>
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

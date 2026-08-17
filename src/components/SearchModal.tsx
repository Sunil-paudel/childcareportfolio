import React, { useState, useEffect, useRef } from 'react';
import { CONTEXTS_DATA, REFERENCES_DATA } from '../data/portfolioData';
import { Search, X, BookOpen, Brain, Landmark, Sparkles, Building2, Book, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectContext: (id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectContext
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  // Search through all elements
  const results = [];

  if (trimmed.length > 1) {
    // Search contexts
    CONTEXTS_DATA.forEach((ctx) => {
      if (
        ctx.title.toLowerCase().includes(trimmed) ||
        ctx.subtitle.toLowerCase().includes(trimmed) ||
        ctx.understanding.definition.toLowerCase().includes(trimmed) ||
        ctx.understanding.australianContext.toLowerCase().includes(trimmed)
      ) {
        results.push({
          type: 'Context Overview',
          icon: <BookOpen className="w-4 h-4 text-amber-700" />,
          title: ctx.title,
          subtitle: ctx.subtitle,
          contextId: ctx.id
        });
      }

      // Search theories
      ctx.understanding.theories.forEach((theory) => {
        if (
          theory.theorist.toLowerCase().includes(trimmed) ||
          theory.theoryName.toLowerCase().includes(trimmed) ||
          theory.applicationToECE.toLowerCase().includes(trimmed)
        ) {
          results.push({
            type: 'Sociological Theory',
            icon: <Brain className="w-4 h-4 text-blue-700" />,
            title: `${theory.theoryName} (${theory.theorist}, ${theory.year})`,
            subtitle: theory.applicationToECE.slice(0, 100) + '...',
            contextId: ctx.id
          });
        }
      });

      // Search strategies
      ctx.strategies.forEach((strat) => {
        if (
          strat.title.toLowerCase().includes(trimmed) ||
          strat.summary.toLowerCase().includes(trimmed) ||
          strat.theoreticalBasis.toLowerCase().includes(trimmed)
        ) {
          results.push({
            type: 'Practice Strategy',
            icon: <Sparkles className="w-4 h-4 text-emerald-700" />,
            title: strat.title,
            subtitle: strat.summary.slice(0, 100) + '...',
            contextId: ctx.id
          });
        }
      });

      // Search partnerships
      ctx.partnerships.forEach((partner) => {
        if (
          partner.name.toLowerCase().includes(trimmed) ||
          partner.role.toLowerCase().includes(trimmed) ||
          partner.collaborationModel.toLowerCase().includes(trimmed)
        ) {
          results.push({
            type: 'Community Partner',
            icon: <Building2 className="w-4 h-4 text-indigo-700" />,
            title: partner.name,
            subtitle: `${partner.role} • ${partner.collaborationModel.slice(0, 80)}...`,
            contextId: ctx.id
          });
        }
      });

      // Search storybooks & media
      ctx.resources.storybooks.forEach((b) => {
        if (b.title.toLowerCase().includes(trimmed) || b.author.toLowerCase().includes(trimmed)) {
          results.push({
            type: 'Children’s Storybook',
            icon: <Book className="w-4 h-4 text-amber-700" />,
            title: `${b.title} by ${b.author}`,
            subtitle: b.theme,
            contextId: ctx.id
          });
        }
      });
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-stone-950/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Header Input */}
        <div className="p-4 border-b border-stone-200 flex items-center space-x-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search theories, strategies, books, partners (e.g. Bronfenbrenner, ACCS, 1800RESPECT)..."
            className="w-full text-sm bg-transparent focus:outline-none text-stone-900 placeholder:text-stone-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-600 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-lg"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-2 flex-1">
          {trimmed.length <= 1 ? (
            <div className="py-8 text-center text-xs text-stone-400 space-y-1">
              <p>Type at least 2 characters to search across all 5 contexts, theories, and resources.</p>
              <p className="text-[11px] text-stone-400">Try searching: "Bourdieu", "Attachment", "First Nations", "Homelessness", "Bluey"</p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-xs text-stone-500">
              No results found for "{query}".
            </div>
          ) : (
            results.slice(0, 15).map((res, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectContext(res.contextId);
                  onClose();
                }}
                className="p-3 rounded-xl hover:bg-amber-50/70 border border-transparent hover:border-amber-200 cursor-pointer transition-all flex items-start space-x-3 group"
              >
                <div className="p-2 rounded-lg bg-stone-100 group-hover:bg-white shrink-0 mt-0.5">
                  {res.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-1.5 py-0.2 rounded">
                      {res.type}
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                      {res.title}
                    </h5>
                  </div>
                  <p className="text-xs text-stone-500 truncate mt-0.5">
                    {res.subtitle}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-stone-700 shrink-0 self-center transition-transform group-hover:translate-x-1" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

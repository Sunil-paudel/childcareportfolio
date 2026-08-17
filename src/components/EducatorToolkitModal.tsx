import React, { useState } from 'react';
import { CONTEXTS_DATA } from '../data/portfolioData';
import { 
  X, 
  CheckSquare, 
  CheckCircle2, 
  Sparkles, 
  FileDown, 
  Printer, 
  Trash2, 
  BookOpen, 
  HelpCircle,
  Plus
} from 'lucide-react';

interface EducatorToolkitModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedStrategies: string[];
  onToggleSaveStrategy: (id: string) => void;
  onClearAll: () => void;
}

export const EducatorToolkitModal: React.FC<EducatorToolkitModalProps> = ({
  isOpen,
  onClose,
  savedStrategies,
  onToggleSaveStrategy,
  onClearAll
}) => {
  const [activeContextFilter, setActiveContextFilter] = useState<string>('all');
  const [educatorNotes, setEducatorNotes] = useState<Record<string, string>>({});
  const [strategyStatus, setStrategyStatus] = useState<Record<string, 'planned' | 'in-progress' | 'embedded'>>({});

  if (!isOpen) return null;

  // Flatten all strategies with context info
  const allStrategies = CONTEXTS_DATA.flatMap((ctx) =>
    ctx.strategies.map((s) => ({
      ...s,
      contextId: ctx.id,
      contextTitle: ctx.title,
      contextBadge: ctx.badgeColor
    }))
  );

  const displayedStrategies = allStrategies.filter((s) => {
    const isSaved = savedStrategies.includes(s.id);
    const matchesFilter = activeContextFilter === 'all' || s.contextId === activeContextFilter;
    return isSaved && matchesFilter;
  });

  const handleStatusChange = (id: string, status: 'planned' | 'in-progress' | 'embedded') => {
    setStrategyStatus((prev) => ({ ...prev, [id]: status }));
  };

  const handleNoteChange = (id: string, note: string) => {
    setEducatorNotes((prev) => ({ ...prev, [id]: note }));
  };

  const handlePrintPlan = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
              <CheckSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                My Early Childhood Practice Action Plan
              </h3>
              <p className="text-xs text-stone-400">
                Personalized educator toolkit & evidence-based strategy implementation tracker
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="bg-stone-100 border-b border-stone-200 px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-stone-700">
              {savedStrategies.length} Strategies Selected
            </span>
            <span className="text-stone-300">|</span>
            <div className="flex flex-wrap gap-1">
              <button
                onClick={() => setActiveContextFilter('all')}
                className={`px-2.5 py-1 rounded text-xs font-semibold ${
                  activeContextFilter === 'all'
                    ? 'bg-stone-900 text-white'
                    : 'bg-white text-stone-600 hover:bg-stone-200'
                }`}
              >
                All
              </button>
              {CONTEXTS_DATA.map((ctx) => (
                <button
                  key={ctx.id}
                  onClick={() => setActiveContextFilter(ctx.id)}
                  className={`px-2.5 py-1 rounded text-xs font-semibold ${
                    activeContextFilter === ctx.id
                      ? 'bg-stone-900 text-white'
                      : 'bg-white text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {ctx.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {savedStrategies.length > 0 && (
              <button
                onClick={onClearAll}
                className="flex items-center space-x-1 px-2.5 py-1 text-xs text-rose-700 hover:text-rose-900 hover:bg-rose-50 rounded border border-rose-200"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Selection</span>
              </button>
            )}
            <button
              onClick={handlePrintPlan}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Action Plan</span>
            </button>
          </div>
        </div>

        {/* Strategies List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {savedStrategies.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-stone-800">
                No Strategies Saved Yet
              </h4>
              <p className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed">
                Click the "Save Strategy" button on any of the 25 evidence-based practice cards within the 5 core contexts to construct your personal early childhood implementation plan.
              </p>
            </div>
          ) : (
            displayedStrategies.map((strat, idx) => {
              const currentStatus = strategyStatus[strat.id] || 'planned';
              return (
                <div
                  key={strat.id}
                  className="bg-white rounded-xl border border-stone-200 p-5 shadow-2xs space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-stone-100">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-600 mr-2">
                        {strat.contextTitle}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-stone-900 inline-block mt-1">
                        {strat.title}
                      </h4>
                    </div>

                    {/* Status Toggle */}
                    <div className="flex items-center space-x-1 self-start sm:self-auto">
                      {(['planned', 'in-progress', 'embedded'] as const).map((st) => (
                        <button
                          key={st}
                          onClick={() => handleStatusChange(strat.id, st)}
                          className={`px-2 py-1 rounded text-[11px] font-bold capitalize transition-colors ${
                            currentStatus === st
                              ? st === 'embedded'
                                ? 'bg-emerald-600 text-white'
                                : st === 'in-progress'
                                ? 'bg-amber-600 text-white'
                                : 'bg-stone-900 text-white'
                              : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                          }`}
                        >
                          {st.replace('-', ' ')}
                        </button>
                      ))}
                      <button
                        onClick={() => onToggleSaveStrategy(strat.id)}
                        className="p-1 text-stone-400 hover:text-rose-600 rounded ml-1"
                        title="Remove from Toolkit"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-stone-700 leading-relaxed">
                    {strat.summary}
                  </p>

                  <div className="bg-stone-50 p-3 rounded-lg border border-stone-200/60">
                    <span className="text-[11px] font-bold text-stone-900 block mb-1">
                      Classroom Implementation Steps:
                    </span>
                    <ul className="space-y-1">
                      {strat.classroomApplication.map((step, sIdx) => (
                        <li key={sIdx} className="text-xs text-stone-600 flex items-start">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mr-1.5 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Personal Educator Implementation Notes */}
                  <div>
                    <label className="text-[11px] font-bold text-stone-600 uppercase tracking-wide block mb-1">
                      My Room Context & Pedagogical Reflection:
                    </label>
                    <textarea
                      value={educatorNotes[strat.id] || ''}
                      onChange={(e) => handleNoteChange(strat.id, e.target.value)}
                      placeholder="Add personal notes, specific children's needs, or team action steps..."
                      rows={2}
                      className="w-full text-xs p-2.5 rounded-lg border border-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500 bg-stone-50/50"
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { PracticeStrategy } from '../types';
import { Sparkles, CheckCircle, PlusCircle, HelpCircle, ChevronRight } from 'lucide-react';

interface StrategyCardProps {
  strategy: PracticeStrategy;
  index: number;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const StrategyCard: React.FC<StrategyCardProps> = ({
  strategy,
  index,
  isSaved,
  onToggleSave
}) => {
  return (
    <div
      className={`rounded-xl border transition-all duration-200 p-5 ${
        isSaved
          ? 'bg-amber-50/40 border-amber-300 shadow-xs'
          : 'bg-white border-stone-200 hover:border-stone-300 shadow-2xs'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
        <div className="flex items-start space-x-3">
          <span className="w-7 h-7 rounded-lg bg-stone-900 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-2xs">
            0{index + 1}
          </span>
          <div>
            <h4 className="text-base font-bold text-stone-900 leading-snug">
              {strategy.title}
            </h4>
            <span className="inline-block mt-1 text-[11px] font-semibold text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md">
              Theoretical Foundation: {strategy.theoreticalBasis}
            </span>
          </div>
        </div>

        <button
          onClick={() => onToggleSave(strategy.id)}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-colors shrink-0 ${
            isSaved
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
              : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200'
          }`}
        >
          {isSaved ? (
            <>
              <CheckCircle className="w-3.5 h-3.5" />
              <span>In My Action Plan</span>
            </>
          ) : (
            <>
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Save Strategy</span>
            </>
          )}
        </button>
      </div>

      <p className="text-sm text-stone-700 leading-relaxed mb-4">
        {strategy.summary}
      </p>

      {/* Concrete Classroom Action Steps */}
      <div className="bg-stone-50/90 rounded-xl p-4 border border-stone-200/80 mb-3">
        <h5 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          Concrete Classroom Implementation for Educators:
        </h5>
        <ul className="space-y-2">
          {strategy.classroomApplication.map((step, idx) => (
            <li key={idx} className="flex items-start text-xs sm:text-sm text-stone-700">
              <ChevronRight className="w-4 h-4 text-amber-700 shrink-0 mt-0.5 mr-1.5" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Critical Educator Reflection Prompt */}
      <div className="bg-amber-100/40 rounded-lg px-3.5 py-2.5 border border-amber-200/60 flex items-start space-x-2.5">
        <HelpCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
        <div>
          <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wide block">
            Critical Educator Reflection:
          </span>
          <p className="text-xs text-amber-950/90 italic mt-0.5">
            "{strategy.educatorReflectionPrompt}"
          </p>
        </div>
      </div>
    </div>
  );
};

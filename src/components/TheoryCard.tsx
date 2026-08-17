import React from 'react';
import { SociologicalTheory } from '../types';
import { Brain, Quote, CheckCircle2 } from 'lucide-react';

interface TheoryCardProps {
  theory: SociologicalTheory;
  index: number;
}

export const TheoryCard: React.FC<TheoryCardProps> = ({ theory, index }) => {
  return (
    <div className="bg-white rounded-xl border border-stone-200/90 shadow-2xs hover:border-amber-400 transition-all p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-md bg-stone-100 border border-stone-200 text-stone-700 flex items-center justify-center text-xs font-bold font-mono">
              T{index + 1}
            </span>
            <h4 className="text-base font-bold text-stone-900 leading-tight">
              {theory.theoryName}
            </h4>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/70 whitespace-nowrap">
            {theory.theorist} ({theory.year})
          </span>
        </div>

        {/* Key Concepts Pills */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {theory.keyConcepts.map((concept, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md"
            >
              {concept}
            </span>
          ))}
        </div>

        {/* Application to ECE */}
        <div className="mb-4">
          <p className="text-xs font-medium uppercase tracking-wider text-stone-400 mb-1 flex items-center gap-1">
            <Brain className="w-3.5 h-3.5 text-stone-500" />
            Application to Early Childhood Practice:
          </p>
          <p className="text-sm text-stone-700 leading-relaxed">
            {theory.applicationToECE}
          </p>
        </div>
      </div>

      {/* Quote / Core Idea Box */}
      <div className="bg-stone-50 rounded-lg p-3 border border-stone-200/60 mt-2">
        <p className="text-xs text-stone-600 italic flex items-start gap-2">
          <Quote className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
          <span>"{theory.quoteOrCoreIdea}"</span>
        </p>
      </div>
    </div>
  );
};

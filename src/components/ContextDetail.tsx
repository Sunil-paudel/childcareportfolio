import React, { useState } from 'react';
import { ContextSection } from '../types';
import { TheoryCard } from './TheoryCard';
import { StrategyCard } from './StrategyCard';
import { PartnerCard } from './PartnerCard';
import { ProgramCard, StorybookCard, MediaCard } from './ResourceCard';
import { 
  BookOpen, 
  Brain, 
  HeartHandshake, 
  Landmark, 
  Lightbulb, 
  Users, 
  Library, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  FileCheck
} from 'lucide-react';

interface ContextDetailProps {
  context: ContextSection;
  savedStrategies: string[];
  onToggleSaveStrategy: (id: string) => void;
  onNextContext: () => void;
  onPrevContext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export const ContextDetail: React.FC<ContextDetailProps> = ({
  context,
  savedStrategies,
  onToggleSaveStrategy,
  onNextContext,
  onPrevContext,
  isFirst,
  isLast
}) => {
  const [activeSubSection, setActiveSubSection] = useState<'all' | 'understanding' | 'impact' | 'policy' | 'strategies' | 'partnerships' | 'resources'>('all');

  const subSections = [
    { id: 'all', label: 'Complete View' },
    { id: 'understanding', label: '1. Understanding & Theory' },
    { id: 'impact', label: '2. Impact & ECEC' },
    { id: 'policy', label: '3. Social Policy & Data' },
    { id: 'strategies', label: '4. 5 Practice Strategies' },
    { id: 'partnerships', label: '5. 5 Partnerships' },
    { id: 'resources', label: '6. Educator Resources' },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Context Hero Card */}
      <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-100/40 via-transparent to-transparent rounded-bl-full pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-stone-900 text-amber-400">
              {context.category}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
              Early Childhood Practice Domain
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            {context.title}
          </h2>
          <p className="text-base sm:text-lg font-medium text-stone-600 mt-1 mb-4">
            {context.subtitle}
          </p>

          <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-4xl">
            {context.understanding.definition}
          </p>

          {/* Context Banner Photos */}
          {context.imageUrl && (
            <div className={`mt-5 grid grid-cols-1 ${context.secondaryImageUrl ? 'md:grid-cols-2' : ''} gap-4`}>
              <div className="rounded-xl overflow-hidden border border-stone-200/90 shadow-xs relative group">
                <div className="aspect-video w-full overflow-hidden bg-stone-100">
                  <img 
                    src={context.imageUrl} 
                    alt={context.imageAlt || context.title} 
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                  />
                </div>
                {context.imageAlt && (
                  <div className="absolute bottom-0 inset-x-0 bg-stone-950/75 backdrop-blur-sm text-stone-100 p-2.5 text-xs font-medium flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
                    <span>{context.imageAlt}</span>
                  </div>
                )}
              </div>

              {context.secondaryImageUrl && (
                <div className="rounded-xl overflow-hidden border border-stone-200/90 shadow-xs relative group">
                  <div className="aspect-video w-full overflow-hidden bg-stone-100">
                    <img 
                      src={context.secondaryImageUrl} 
                      alt={context.secondaryImageAlt || context.title} 
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                  {context.secondaryImageAlt && (
                    <div className="absolute bottom-0 inset-x-0 bg-stone-950/75 backdrop-blur-sm text-stone-100 p-2.5 text-xs font-medium flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                      <span>{context.secondaryImageAlt}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Quick Sub-Navigation Pills */}
          <div className="mt-6 pt-5 border-t border-stone-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider mr-2">
              Filter Section:
            </span>
            {subSections.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubSection(tab.id as any)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeSubSection === tab.id
                    ? 'bg-stone-900 text-white shadow-2xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 1: UNDERSTANDING THE CONTEXT & THEORETICAL FRAMEWORKS */}
      {(activeSubSection === 'all' || activeSubSection === 'understanding') && (
        <section id="understanding" className="bg-stone-50/50 rounded-2xl border border-stone-200/80 p-6 sm:p-8 space-y-6">
          <div className="flex items-center space-x-3 pb-3 border-b border-stone-200">
            <div className="w-8 h-8 rounded-lg bg-amber-800 text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-stone-900">
                Understanding the Context & Theoretical Grounding
              </h3>
              <p className="text-xs text-stone-500">
                Sociological theories, developmental models, and Australian societal realities
              </p>
            </div>
          </div>

          {/* Australian Reality Narrative */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-2xs space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 flex items-center gap-2">
              <Landmark className="w-4 h-4 text-amber-700" />
              Contemporary Australian Socio-Economic Landscape:
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">
              {context.understanding.australianContext}
            </p>
            <div className="bg-amber-50/60 p-3 rounded-lg border border-amber-200/60 text-xs text-amber-950 font-medium">
              <span className="font-bold">Evolving Nature in Australia: </span>
              {context.understanding.evolvingNature}
            </div>
          </div>

          {/* Sociological Theories Cards Grid */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-4 flex items-center gap-2">
              <Brain className="w-4 h-4 text-amber-700" />
              Sociological Theories & Developmental Models:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {context.understanding.theories.map((theory, idx) => (
                <TheoryCard key={idx} theory={theory} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: IMPACT ON CHILDREN AND FAMILIES */}
      {(activeSubSection === 'all' || activeSubSection === 'impact') && (
        <section id="impact" className="bg-stone-50/50 rounded-2xl border border-stone-200/80 p-6 sm:p-8 space-y-6">
          <div className="flex items-center space-x-3 pb-3 border-b border-stone-200">
            <div className="w-8 h-8 rounded-lg bg-blue-800 text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-stone-900">
                Impact on Children, Families, and Early Childhood Service Provision
              </h3>
              <p className="text-xs text-stone-500">
                Developmental trajectories, relational wellbeing, and pedagogical implications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-2xs">
              <div className="flex items-center space-x-2 text-stone-900 font-bold mb-2">
                <HeartHandshake className="w-4 h-4 text-amber-700" />
                <h4>Child Development & Family Dynamics</h4>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed mb-3">
                {context.impact.childDevelopment}
              </p>
              <div className="bg-stone-50 p-3 rounded-lg text-xs text-stone-600 border border-stone-200/60">
                <span className="font-semibold text-stone-900">Relational Dynamics: </span>
                {context.impact.familyDynamics}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-2xs">
              <div className="flex items-center space-x-2 text-stone-900 font-bold mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <h4>Implications for ECEC Service Provision</h4>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed mb-3">
                {context.impact.ececImplications}
              </p>
              <div className="bg-amber-50/70 p-3 rounded-lg text-xs text-amber-950 border border-amber-200/60">
                <span className="font-bold">Hidden Systemic Disadvantages: </span>
                {context.impact.hiddenDisadvantages}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: SOCIAL POLICY AND AUSTRALIAN RESPONSES */}
      {(activeSubSection === 'all' || activeSubSection === 'policy') && (
        <section id="policy" className="bg-stone-50/50 rounded-2xl border border-stone-200/80 p-6 sm:p-8 space-y-6">
          <div className="flex items-center space-x-3 pb-3 border-b border-stone-200">
            <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-stone-900">
                Social Policy and Australian Responses
              </h3>
              <p className="text-xs text-stone-500">
                National frameworks, legislative initiatives, data points, and policy critique
              </p>
            </div>
          </div>

          {/* Policy Initiatives Cards */}
          <div className="space-y-4">
            {context.policy.nationalStrategies.map((policy, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-stone-200 p-5 shadow-2xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-stone-100">
                  <div>
                    <h4 className="text-base font-bold text-stone-900">
                      {policy.title}
                    </h4>
                    <p className="text-xs text-stone-500 font-medium">
                      {policy.governingBody} • {policy.timeframe}
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-stone-100 text-stone-700 self-start sm:self-auto">
                    National Strategy
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-xs sm:text-sm">
                  <div className="bg-stone-50 p-3 rounded-lg border border-stone-200/60">
                    <span className="font-bold text-stone-900 block mb-1">Key Statistics & Scope:</span>
                    <p className="text-stone-700 leading-relaxed">{policy.keyStatistics}</p>
                  </div>
                  <div className="bg-emerald-50/60 p-3 rounded-lg border border-emerald-200/60">
                    <span className="font-bold text-emerald-950 block mb-1">Impact on ECEC Practice:</span>
                    <p className="text-emerald-900 leading-relaxed">{policy.impactOnECE}</p>
                  </div>
                </div>

                {policy.critiqueOrGap && (
                  <div className="mt-3 bg-amber-50/50 p-2.5 rounded-lg border border-amber-200/50 text-xs text-amber-950">
                    <span className="font-bold">Critical Policy Gap / Sector Challenge: </span>
                    {policy.critiqueOrGap}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Synthesis & Practice Shift */}
          <div className="bg-stone-900 text-stone-100 rounded-xl p-5 shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1.5 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              Strategic Shift Required for Early Childhood Services:
            </h4>
            <p className="text-sm text-stone-300 leading-relaxed">
              {context.policy.practiceImplications}
            </p>
          </div>
        </section>
      )}

      {/* SECTION 4: 5 EVIDENCE-BASED STRATEGIES FOR PRACTICE */}
      {(activeSubSection === 'all' || activeSubSection === 'strategies') && (
        <section id="strategies" className="bg-stone-50/50 rounded-2xl border border-stone-200/80 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900">
                  Five (5) Evidence-Based Strategies for Practice
                </h3>
                <p className="text-xs text-stone-500">
                  Classroom interventions, resilience-building pedagogies, and educator reflection
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200/70 self-start sm:self-auto">
              5 of 5 Strategies Documented
            </span>
          </div>

          <div className="space-y-4">
            {context.strategies.map((strategy, idx) => (
              <StrategyCard
                key={strategy.id}
                strategy={strategy}
                index={idx}
                isSaved={savedStrategies.includes(strategy.id)}
                onToggleSave={onToggleSaveStrategy}
              />
            ))}
          </div>
        </section>
      )}

      {/* SECTION 5: 5 COMMUNITY AND PROFESSIONAL PARTNERSHIPS */}
      {(activeSubSection === 'all' || activeSubSection === 'partnerships') && (
        <section id="partnerships" className="bg-stone-50/50 rounded-2xl border border-stone-200/80 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-700 text-white flex items-center justify-center font-bold text-sm">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900">
                  Five (5) Community & Professional Partnerships
                </h3>
                <p className="text-xs text-stone-500">
                  Support organisations, referral pathways, and inter-agency collaboration models
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-900 border border-indigo-200 self-start sm:self-auto">
              5 of 5 Partners Documented
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {context.partnerships.map((partner, idx) => (
              <PartnerCard key={idx} partner={partner} index={idx} />
            ))}
          </div>
        </section>
      )}

      {/* SECTION 6: RESOURCES FOR EDUCATORS AND CHILDREN */}
      {(activeSubSection === 'all' || activeSubSection === 'resources') && (
        <section id="resources" className="bg-stone-50/50 rounded-2xl border border-stone-200/80 p-6 sm:p-8 space-y-8">
          <div className="flex items-center space-x-3 pb-3 border-b border-stone-200">
            <div className="w-8 h-8 rounded-lg bg-rose-700 text-white flex items-center justify-center font-bold text-sm">
              6
            </div>
            <div>
              <h3 className="text-xl font-bold text-stone-900">
                Curated Resources for Educators & Children
              </h3>
              <p className="text-xs text-stone-500">
                4 Projects/Programs • 4 Storybooks (0–5 yrs) • 4 Videos/Podcasts with Pedagogical Discussion Prompts
              </p>
            </div>
          </div>

          {/* 4 Projects / Programs / Websites */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
              <Library className="w-4 h-4 text-amber-700" />
              Four (4) Projects, Programs, and Websites:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {context.resources.programs.map((program, idx) => (
                <ProgramCard key={idx} program={program} index={idx} />
              ))}
            </div>
          </div>

          {/* 4 Storybooks (0–5 years) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-700" />
              Four (4) Children's Storybooks (Birth–5 Years):
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {context.resources.storybooks.map((book, idx) => (
                <StorybookCard key={idx} book={book} index={idx} />
              ))}
            </div>
          </div>

          {/* 4 Videos / Shows / Podcasts */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-700" />
              Four (4) Children's Videos, Shows, and Podcasts:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {context.resources.media.map((media, idx) => (
                <MediaCard key={idx} media={media} index={idx} />
              ))}
            </div>
          </div>

          {/* Pedagogical Synthesis Statement */}
          <div className="bg-amber-900/90 text-amber-50 rounded-xl p-5 shadow-xs border border-amber-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-300" />
              Pedagogical Application Synthesis:
            </h4>
            <p className="text-sm leading-relaxed text-amber-100">
              {context.resources.pedagogicalSynthesis}
            </p>
          </div>
        </section>
      )}

      {/* Pagination Footer */}
      <div className="flex items-center justify-between pt-6 border-t border-stone-200">
        <button
          onClick={onPrevContext}
          disabled={isFirst}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            isFirst
              ? 'opacity-40 cursor-not-allowed text-stone-400 bg-stone-100'
              : 'text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 shadow-2xs'
          }`}
        >
          <span>← Previous Context</span>
        </button>

        <span className="text-xs font-semibold text-stone-500">
          Section {context.category} of 5
        </span>

        <button
          onClick={onNextContext}
          disabled={isLast}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            isLast
              ? 'opacity-40 cursor-not-allowed text-stone-400 bg-stone-100'
              : 'text-white bg-stone-900 hover:bg-stone-800 shadow-xs'
          }`}
        >
          <span>Next Context →</span>
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import { CONTEXTS_DATA, REFERENCES_DATA, TRANSCRIPT_DATA } from '../data/portfolioData';
import { Printer, ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';

interface PrintableViewProps {
  onBack: () => void;
}

export const PrintableView: React.FC<PrintableViewProps> = ({ onBack }) => {
  return (
    <div className="bg-white text-stone-900 min-h-screen font-serif p-6 sm:p-12 max-w-5xl mx-auto space-y-10 print:p-0 print:m-0 print:max-w-none">
      {/* Non-printable Action Bar */}
      <div className="print:hidden bg-stone-900 text-white p-4 rounded-xl flex items-center justify-between shadow-lg sticky top-4 z-50">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-sans font-semibold text-stone-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Interactive Portfolio</span>
          </button>
          <span className="text-xs text-stone-400 font-sans hidden sm:inline">
            Print Preview Mode (Complete 5000+ Word Academic Portfolio)
          </span>
        </div>

        <button
          onClick={() => window.print()}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs font-sans font-bold shadow-xs transition-colors"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Cover / Title Page */}
      <div className="text-center py-16 border-b border-stone-300 space-y-4">
        <p className="text-sm font-sans font-bold tracking-widest text-stone-500 uppercase">
          EPRO506 Digital Portfolio • Assessment 3
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
          Working with Children, Families, and Communities in Contemporary Society
        </h1>
        <h2 className="text-xl font-medium text-stone-700 italic">
          Digital Portfolio: Family and Community Contexts in Early Childhood Education
        </h2>
        <div className="pt-8 text-xs font-sans text-stone-500 space-y-1">
          <p className="font-semibold text-stone-700">Course: EPRO506 Early Childhood Education</p>
          <p>Format: Digital Portfolio & Practice Resource Guide (APA 7th Edition)</p>
          <p>Word Count Scope: 5,000 words (1,000 words per context)</p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 font-sans space-y-3">
        <h3 className="text-base font-bold text-stone-900 uppercase tracking-wide">
          Portfolio Contents & Section Architecture
        </h3>
        <ol className="list-decimal list-inside text-sm text-stone-700 space-y-1.5 font-medium">
          <li>Economic Contexts: Poverty, Housing Stress, and Financial Hardship</li>
          <li>Social Contexts: Isolation, Divorce, and Out-of-Home Care</li>
          <li>Cultural and Diversity Contexts: First Nations, Immigrant, and Refugee Families</li>
          <li>Health and Wellbeing Contexts: Parental Mental Illness, Substance Use, Trauma, Grief, and Abuse</li>
          <li>Crisis and Emergency Contexts: Climate Disaster, Family Violence, and Displacement</li>
          <li>Assessment Audio Presentation Transcript</li>
          <li>Comprehensive APA 7th Edition References</li>
        </ol>
      </div>

      {/* All 5 Contexts Full Text */}
      {CONTEXTS_DATA.map((context, cIdx) => (
        <section key={context.id} className="space-y-6 pt-8 border-t border-stone-300 page-break">
          <div className="space-y-1">
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-amber-900">
              Context {cIdx + 1} of 5
            </span>
            <h2 className="text-2xl font-bold text-stone-900">
              {context.title}: {context.subtitle}
            </h2>
          </div>

          {/* 1. Understanding the Context */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-1">
              1. Understanding the Context & Theoretical Frameworks
            </h3>
            <p className="text-sm leading-relaxed text-stone-800 text-justify">
              {context.understanding.definition}
            </p>
            <p className="text-sm leading-relaxed text-stone-800 text-justify">
              {context.understanding.australianContext}
            </p>

            <div className="font-sans space-y-3 mt-3">
              <h4 className="text-xs font-bold uppercase text-stone-700">Sociological & Developmental Theories:</h4>
              {context.understanding.theories.map((theory, tIdx) => (
                <div key={tIdx} className="bg-stone-50 p-3.5 rounded border border-stone-200 text-xs space-y-1">
                  <p className="font-bold text-stone-900">
                    {theory.theoryName} — {theory.theorist} ({theory.year})
                  </p>
                  <p className="text-stone-700 font-serif leading-relaxed">
                    {theory.applicationToECE}
                  </p>
                  <p className="text-stone-500 italic">
                    Core Concept: "{theory.quoteOrCoreIdea}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Impact on Children and Families */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-1">
              2. Impact on Children, Families & Early Childhood Service Provision
            </h3>
            <p className="text-sm leading-relaxed text-stone-800 text-justify">
              {context.impact.childDevelopment}
            </p>
            <p className="text-sm leading-relaxed text-stone-800 text-justify">
              {context.impact.familyDynamics}
            </p>
            <p className="text-sm leading-relaxed text-stone-800 text-justify">
              {context.impact.ececImplications}
            </p>
          </div>

          {/* 3. Social Policy and Australian Responses */}
          <div className="space-y-3 font-sans">
            <h3 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-1 font-serif">
              3. Social Policy & Australian Initiatives
            </h3>
            {context.policy.nationalStrategies.map((pol, pIdx) => (
              <div key={pIdx} className="bg-stone-50 p-3 rounded border border-stone-200 text-xs space-y-1">
                <p className="font-bold text-stone-900">{pol.title} ({pol.timeframe})</p>
                <p className="text-stone-700"><span className="font-semibold">Statistics & Scope:</span> {pol.keyStatistics}</p>
                <p className="text-stone-700"><span className="font-semibold">ECE Impact:</span> {pol.impactOnECE}</p>
              </div>
            ))}
          </div>

          {/* 4. Strategies for Practice */}
          <div className="space-y-3 font-sans">
            <h3 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-1 font-serif">
              4. Five (5) Evidence-Based Strategies for Practice
            </h3>
            {context.strategies.map((strat, sIdx) => (
              <div key={strat.id} className="p-3 bg-stone-50 rounded border border-stone-200 text-xs space-y-1.5">
                <p className="font-bold text-stone-900">
                  Strategy {sIdx + 1}: {strat.title}
                </p>
                <p className="text-stone-700 font-serif leading-relaxed">{strat.summary}</p>
                <ul className="list-disc list-inside text-stone-600 space-y-0.5">
                  {strat.classroomApplication.map((app, aIdx) => (
                    <li key={aIdx}>{app}</li>
                  ))}
                </ul>
                <p className="text-amber-900 italic bg-amber-50 p-1.5 rounded">
                  Reflection Prompt: {strat.educatorReflectionPrompt}
                </p>
              </div>
            ))}
          </div>

          {/* 5. Community and Professional Partnerships */}
          <div className="space-y-3 font-sans">
            <h3 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-1 font-serif">
              5. Five (5) Community & Professional Partnerships
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {context.partnerships.map((partner, pIdx) => (
                <div key={pIdx} className="p-3 bg-stone-50 rounded border border-stone-200 text-xs space-y-1">
                  <p className="font-bold text-stone-900">{partner.name} ({partner.scope})</p>
                  <p className="text-stone-600 font-serif">{partner.role}</p>
                  <p className="text-stone-700"><span className="font-semibold">ECE Collaboration:</span> {partner.collaborationModel}</p>
                  <p className="text-amber-800 underline font-mono text-[10px]">{partner.websiteUrl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Resources for Educators and Children */}
          <div className="space-y-3 font-sans">
            <h3 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-1 font-serif">
              6. Curated Resources for Educators and Children
            </h3>

            {/* Programs */}
            <div className="text-xs space-y-1">
              <p className="font-bold text-stone-800">Programs, Projects and Websites:</p>
              {context.resources.programs.map((prog, prIdx) => (
                <p key={prIdx} className="text-stone-700">
                  {prIdx + 1}. <span className="font-semibold">{prog.name}</span> — {prog.url}
                </p>
              ))}
            </div>

            {/* Books */}
            <div className="text-xs space-y-1">
              <p className="font-bold text-stone-800">Children’s Storybooks (Birth–5 Years):</p>
              {context.resources.storybooks.map((book, bIdx) => (
                <p key={bIdx} className="text-stone-700 font-serif">
                  {bIdx + 1}. <span className="italic">{book.title}</span> by {book.author} ({book.ageRange}) — {book.theme}
                </p>
              ))}
            </div>

            {/* Media */}
            <div className="text-xs space-y-1">
              <p className="font-bold text-stone-800">Children’s Videos, Shows, and Podcasts:</p>
              {context.resources.media.map((med, mIdx) => (
                <p key={mIdx} className="text-stone-700">
                  {mIdx + 1}. <span className="font-semibold">{med.title}</span> ({med.creatorOrPlatform}) — {med.url}
                </p>
              ))}
            </div>

            <p className="text-xs text-stone-700 font-serif italic bg-stone-100 p-2.5 rounded">
              Synthesis: {context.resources.pedagogicalSynthesis}
            </p>
          </div>
        </section>
      ))}

      {/* Full Transcript Section */}
      <section className="space-y-4 pt-8 border-t border-stone-300 page-break">
        <h2 className="text-2xl font-bold text-stone-900">
          Assessment Audio Presentation Transcript
        </h2>
        <div className="space-y-4 text-xs font-serif text-stone-800">
          {TRANSCRIPT_DATA.map((tr, tIdx) => (
            <div key={tIdx} className="p-3 bg-stone-50 rounded border border-stone-200 space-y-1">
              <p className="font-sans font-bold text-stone-900">
                [{tr.timestamp}] {tr.title} (Speaker: {tr.speaker})
              </p>
              <p className="leading-relaxed text-justify">{tr.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* References Section */}
      <section className="space-y-4 pt-8 border-t border-stone-300 page-break">
        <h2 className="text-2xl font-bold text-stone-900">
          References (APA 7th Edition)
        </h2>
        <div className="space-y-3 text-xs font-serif text-stone-800">
          {REFERENCES_DATA.map((ref, rIdx) => (
            <p key={rIdx} className="pl-6 -indent-6 leading-relaxed">
              {ref.apaFormatted}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};

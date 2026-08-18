import React from 'react';
import { CONTEXTS_DATA, REFERENCES_DATA } from '../data/portfolioData';
import { Printer, ArrowLeft } from 'lucide-react';

interface PrintableViewProps {
  onBack: () => void;
}

export const PrintableView: React.FC<PrintableViewProps> = ({ onBack }) => {
  return (
    <div className="bg-white text-stone-900 min-h-screen font-serif p-6 sm:p-12 max-w-5xl mx-auto space-y-12 print:p-0 print:m-0 print:max-w-none">
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
            Print Preview Mode (Complete Academic Portfolio)
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

      {/* Page 1: Title Page */}
      <div className="text-center py-20 border-b border-stone-200 space-y-6">
        <div className="text-right text-xs text-stone-400 font-sans mb-12">
          EPRO506 Digital Portfolio
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
          Working with Children, Families, and Communities in Contemporary Society
        </h1>
        <h2 className="text-xl font-medium text-stone-700">
          Digital Portfolio: Family and Community Contexts in Early Childhood Education
        </h2>
        <div className="pt-12 text-sm text-stone-600 font-sans">
          EPRO506 – Assessment 3
        </div>
      </div>

      {/* Page 2-3: Contents */}
      <div className="space-y-4 pt-8 border-b border-stone-200 pb-12">
        <div className="text-right text-xs text-stone-400 font-sans">
          EPRO506 Digital Portfolio
        </div>
        <h2 className="text-2xl font-bold text-stone-900">Contents</h2>
        <div className="space-y-2 text-sm leading-relaxed text-stone-800">
          <p className="font-bold">Economic Contexts: Poverty, Housing Stress, and Financial Hardship</p>
          <p className="pl-4">Understanding the Context</p>
          <p className="pl-4">Impact on Children and Families</p>
          <p className="pl-4">Social Policy and Australian Responses</p>
          <p className="pl-4">Strategies for Practice</p>
          <p className="pl-4">Community and Professional Partnerships</p>
          <p className="pl-4">Resources for Educators and Children</p>

          <p className="font-bold pt-2">Social Contexts: Isolation, Divorce, and Out-of-Home Care</p>
          <p className="pl-4">Understanding the Context</p>
          <p className="pl-4">Impact on Children and Families</p>
          <p className="pl-4">Social Policy and Australian Responses</p>
          <p className="pl-4">Strategies for Practice</p>
          <p className="pl-4">Community and Professional Partnerships</p>
          <p className="pl-4">Resources for Educators and Children</p>

          <p className="font-bold pt-2">Cultural and Diversity Contexts: First Nations, Immigrant, and Refugee Families</p>
          <p className="pl-4">Understanding the Context</p>
          <p className="pl-4">Impact on Children and Families</p>
          <p className="pl-4">Social Policy and Australian Responses</p>
          <p className="pl-4">Strategies for Practice</p>
          <p className="pl-4">Community and Professional Partnerships</p>
          <p className="pl-4">Resources for Educators and Children</p>

          <p className="font-bold pt-2">Health and Wellbeing Contexts: Parental Mental Illness, Substance Use, Trauma, Grief, and Abuse</p>
          <p className="pl-4">Understanding the Context</p>
          <p className="pl-4">Impact on Children and Families</p>
          <p className="pl-4">Social Policy and Australian Responses</p>
          <p className="pl-4">Strategies for Practice</p>
          <p className="pl-4">Community and Professional Partnerships</p>
          <p className="pl-4">Resources for Educators and Children</p>

          <p className="font-bold pt-2">Crisis and Emergency Contexts: Climate Disaster, Family Violence, and Displacement</p>
          <p className="pl-4">Understanding the Context</p>
          <p className="pl-4">Impact on Children and Families</p>
          <p className="pl-4">Social Policy and Australian Responses</p>
          <p className="pl-4">Strategies for Practice</p>
          <p className="pl-4">Community and Professional Partnerships</p>
          <p className="pl-4">Resources for Educators and Children</p>

          <p className="font-bold pt-2">References</p>
        </div>
      </div>

      {/* 5 Contexts in Full */}
      {CONTEXTS_DATA.map((context) => (
        <section key={context.id} className="space-y-6 pt-8 border-b border-stone-200 pb-12">
          <div className="text-right text-xs text-stone-400 font-sans">
            EPRO506 Digital Portfolio
          </div>

          <h2 className="text-2xl font-bold text-stone-900">
            {context.title}: {context.subtitle}
          </h2>

          {/* Context Photograph(s) */}
          {(context.imageUrl || context.secondaryImageUrl) && (
            <div className={`grid grid-cols-1 ${context.secondaryImageUrl ? 'sm:grid-cols-2' : 'grid-cols-1'} gap-4 my-4`}>
              {context.imageUrl && (
                <figure className="border border-stone-300 rounded-lg overflow-hidden bg-stone-50">
                  <img
                    src={context.imageUrl}
                    alt={context.imageAlt || context.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                  {context.imageAlt && (
                    <figcaption className="p-2 text-xs font-sans text-stone-600 border-t border-stone-200">
                      {context.imageAlt}
                    </figcaption>
                  )}
                </figure>
              )}
              {context.secondaryImageUrl && (
                <figure className="border border-stone-300 rounded-lg overflow-hidden bg-stone-50">
                  <img
                    src={context.secondaryImageUrl}
                    alt={context.secondaryImageAlt || context.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                  {context.secondaryImageAlt && (
                    <figcaption className="p-2 text-xs font-sans text-stone-600 border-t border-stone-200">
                      {context.secondaryImageAlt}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          )}

          {/* Understanding the Context */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-stone-900">
              Understanding the Context
            </h3>
            {context.understanding.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-sm leading-relaxed text-stone-800 text-justify">
                {p}
              </p>
            ))}
          </div>

          {/* Impact on Children and Families */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-stone-900">
              Impact on Children and Families
            </h3>
            {context.impact.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-sm leading-relaxed text-stone-800 text-justify">
                {p}
              </p>
            ))}
          </div>

          {/* Social Policy and Australian Responses */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-stone-900">
              Social Policy and Australian Responses
            </h3>
            {context.policy.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-sm leading-relaxed text-stone-800 text-justify">
                {p}
              </p>
            ))}
          </div>

          {/* Strategies for Practice */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-stone-900">
              Strategies for Practice
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed text-stone-800">
              {context.strategies.map((strat, sIdx) => (
                <li key={sIdx} className="flex items-start space-x-2">
                  <span>•</span>
                  <span>{strat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Community and Professional Partnerships */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-stone-900">
              Community and Professional Partnerships
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed text-stone-800">
              {context.partnerships.map((partner, pIdx) => (
                <li key={pIdx} className="flex items-start space-x-2">
                  <span>•</span>
                  <span>
                    <strong>{partner.name}</strong> — {partner.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources for Educators and Children */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900">
              Resources for Educators and Children
            </h3>

            <div className="space-y-1 text-sm text-stone-800">
              <p className="italic font-bold">Projects, programs and websites:</p>
              {context.resources.programs.map((prog, prIdx) => (
                <p key={prIdx} className="pl-4">
                  {prIdx + 1}. {prog.name} {prog.url}
                </p>
              ))}
            </div>

            <div className="space-y-1 text-sm text-stone-800">
              <p className="italic font-bold">Children's storybooks (birth–5 years):</p>
              {context.resources.storybooks.map((book, bIdx) => (
                <p key={bIdx} className="pl-4">
                  {bIdx + 1}. {book.title} by {book.author}
                </p>
              ))}
            </div>

            <div className="space-y-1 text-sm text-stone-800">
              <p className="italic font-bold">Children's videos, shows and podcasts:</p>
              {context.resources.media.map((med, mIdx) => (
                <p key={mIdx} className="pl-4">
                  {mIdx + 1}. {med.title} ({med.platform}) – {med.description} {med.url}
                </p>
              ))}
            </div>

            <p className="text-sm leading-relaxed text-stone-800 pt-2 text-justify">
              {context.resources.pedagogicalSynthesis}
            </p>
          </div>
        </section>
      ))}

      {/* References Section */}
      <section className="space-y-4 pt-8 pb-12">
        <div className="text-right text-xs text-stone-400 font-sans">
          EPRO506 Digital Portfolio
        </div>
        <h2 className="text-2xl font-bold text-stone-900">
          References
        </h2>
        <div className="space-y-3 text-sm text-stone-800">
          {REFERENCES_DATA.map((ref, rIdx) => {
            const urlRegex = /(https?:\/\/[^\s]+)/g;
            const parts = ref.apaFormatted.split(urlRegex);

            return (
              <div key={rIdx} className="flex items-start gap-2 leading-relaxed text-justify">
                <span className="font-mono font-bold text-xs text-stone-600 shrink-0 w-7 pt-0.5">
                  {rIdx + 1}.
                </span>
                <div className="flex-1">
                  {parts.map((part, pIdx) => {
                    if (part.match(urlRegex)) {
                      return (
                        <a
                          key={pIdx}
                          href={part}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 underline font-sans text-xs break-all"
                        >
                          {part}
                        </a>
                      );
                    }
                    return <span key={pIdx}>{part}</span>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

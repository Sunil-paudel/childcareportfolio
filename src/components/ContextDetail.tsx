import React from 'react';
import { ContextSection } from '../types';
import { 
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Image as ImageIcon
} from 'lucide-react';

interface ContextDetailProps {
  context: ContextSection;
  onNextContext: () => void;
  onPrevContext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export const ContextDetail: React.FC<ContextDetailProps> = ({
  context,
  onNextContext,
  onPrevContext,
  isFirst,
  isLast
}) => {
  return (
    <div className="space-y-6 sm:space-y-8 pb-12 max-w-4xl mx-auto w-full">
      {/* Context Title Header */}
      <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-8 shadow-2xs">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
          <span>{context.category}</span>
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight leading-tight">
          {context.title}: {context.subtitle}
        </h1>
      </div>

      {/* Visual Media Section (Images from provided data) */}
      {(context.imageUrl || context.secondaryImageUrl) && (
        <div className={`grid grid-cols-1 ${context.secondaryImageUrl ? 'sm:grid-cols-2' : 'grid-cols-1'} gap-4 sm:gap-6`}>
          {context.imageUrl && (
            <figure className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs flex flex-col">
              <div className="relative w-full aspect-video sm:aspect-4/3 bg-stone-100 overflow-hidden">
                <img
                  src={context.imageUrl}
                  alt={context.imageAlt || context.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
                  loading="lazy"
                />
              </div>
              {context.imageAlt && (
                <figcaption className="p-3.5 sm:p-4 text-xs text-stone-600 border-t border-stone-100 bg-stone-50/70 flex items-start gap-2">
                  <ImageIcon className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{context.imageAlt}</span>
                </figcaption>
              )}
            </figure>
          )}

          {context.secondaryImageUrl && (
            <figure className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs flex flex-col">
              <div className="relative w-full aspect-video sm:aspect-4/3 bg-stone-100 overflow-hidden">
                <img
                  src={context.secondaryImageUrl}
                  alt={context.secondaryImageAlt || context.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
                  loading="lazy"
                />
              </div>
              {context.secondaryImageAlt && (
                <figcaption className="p-3.5 sm:p-4 text-xs text-stone-600 border-t border-stone-100 bg-stone-50/70 flex items-start gap-2">
                  <ImageIcon className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{context.secondaryImageAlt}</span>
                </figcaption>
              )}
            </figure>
          )}
        </div>
      )}

      {/* Main Content Card */}
      <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-8 md:p-10 shadow-2xs space-y-8 sm:space-y-10">
        
        {/* 1. Understanding the Context */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
            Understanding the Context
          </h2>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed text-stone-700 sm:text-justify">
            {context.understanding.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* 2. Impact on Children and Families */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
            Impact on Children and Families
          </h2>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed text-stone-700 sm:text-justify">
            {context.impact.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* 3. Social Policy and Australian Responses */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
            Social Policy and Australian Responses
          </h2>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed text-stone-700 sm:text-justify">
            {context.policy.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* 4. Strategies for Practice */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
            Strategies for Practice
          </h2>
          <ul className="space-y-3 text-sm sm:text-base leading-relaxed text-stone-700">
            {context.strategies.map((strat, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-amber-800 text-lg leading-none font-bold mt-1 shrink-0">•</span>
                <span className="flex-1">{strat}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. Community and Professional Partnerships */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
            Community and Professional Partnerships
          </h2>
          <ul className="space-y-3.5 text-sm sm:text-base leading-relaxed text-stone-700">
            {context.partnerships.map((partner, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-amber-800 text-lg leading-none font-bold mt-1 shrink-0">•</span>
                <div className="flex-1">
                  <span className="font-semibold text-stone-900">{partner.name}</span>
                  {partner.websiteUrl ? (
                    <a
                      href={partner.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center ml-1 text-amber-800 hover:text-amber-950 hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5 inline" />
                    </a>
                  ) : null}
                  {' — '}{partner.description}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 6. Resources for Educators and Children */}
        <section className="space-y-5 sm:space-y-6">
          <h2 className="text-lg sm:text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
            Resources for Educators and Children
          </h2>

          {/* Projects, programs and websites */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold italic text-stone-900">
              Projects, programs and websites:
            </h3>
            <ol className="space-y-1.5 text-sm sm:text-base leading-relaxed text-stone-700 pl-4 list-decimal">
              {context.resources.programs.map((prog, idx) => (
                <li key={idx} className="pl-1">
                  <span className="font-medium text-stone-900">{prog.name}</span>{' '}
                  <a
                    href={prog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-800 hover:text-amber-950 hover:underline break-all text-xs sm:text-sm font-sans"
                  >
                    {prog.url}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Children's storybooks */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold italic text-stone-900">
              Children's storybooks (birth–5 years):
            </h3>
            <ol className="space-y-1.5 text-sm sm:text-base leading-relaxed text-stone-700 pl-4 list-decimal">
              {context.resources.storybooks.map((book, idx) => (
                <li key={idx} className="pl-1">
                  <span className="font-serif italic">{book.title}</span> by {book.author}
                </li>
              ))}
            </ol>
          </div>

          {/* Children's videos, shows and podcasts */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold italic text-stone-900">
              Children's videos, shows and podcasts:
            </h3>
            <ol className="space-y-2 text-sm sm:text-base leading-relaxed text-stone-700 pl-4 list-decimal">
              {context.resources.media.map((med, idx) => (
                <li key={idx} className="pl-1">
                  <span className="font-semibold text-stone-900">{med.title} ({med.platform})</span> – {med.description}{' '}
                  <a
                    href={med.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-800 hover:text-amber-950 hover:underline break-all text-xs sm:text-sm font-sans"
                  >
                    {med.url}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Synthesis Note */}
          <div className="bg-stone-50 p-4 sm:p-5 rounded-xl border border-stone-200 text-xs sm:text-sm leading-relaxed text-stone-700">
            <p>{context.resources.pedagogicalSynthesis}</p>
          </div>
        </section>

      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between pt-4 gap-2">
        <button
          onClick={onPrevContext}
          disabled={isFirst}
          className={`flex items-center space-x-1.5 sm:space-x-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-bold transition-all min-h-[44px] ${
            isFirst
              ? 'opacity-30 cursor-not-allowed text-stone-400 bg-stone-100'
              : 'text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 shadow-2xs active:scale-98'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
          <span className="hidden xs:inline">Previous Context</span>
          <span className="xs:hidden">Previous</span>
        </button>

        <span className="text-xs font-semibold text-stone-500 whitespace-nowrap">
          {context.category} of 5
        </span>

        <button
          onClick={onNextContext}
          disabled={isLast}
          className={`flex items-center space-x-1.5 sm:space-x-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-bold transition-all min-h-[44px] ${
            isLast
              ? 'opacity-30 cursor-not-allowed text-stone-400 bg-stone-100'
              : 'text-white bg-stone-900 hover:bg-stone-800 shadow-xs active:scale-98'
          }`}
        >
          <span className="hidden xs:inline">Next Context</span>
          <span className="xs:hidden">Next</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </button>
      </div>
    </div>
  );
};

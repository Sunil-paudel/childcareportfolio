import React from 'react';
import { ProgramResource, StorybookResource, MediaResource } from '../types';
import { 
  Book, 
  Tv, 
  Radio, 
  ExternalLink, 
  Sparkles, 
  MessageSquareQuote, 
  Compass, 
  ArrowUpRight 
} from 'lucide-react';

interface ProgramCardProps {
  program: ProgramResource;
  index: number;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, index }) => (
  <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-2xs hover:border-amber-400 transition-all flex flex-col justify-between">
    <div>
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="text-sm font-bold text-stone-900 leading-snug">
          {index + 1}. {program.name}
        </h4>
        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-stone-100 text-stone-600 shrink-0">
          {program.organization}
        </span>
      </div>
      <p className="text-xs text-stone-600 mb-3 leading-relaxed">
        {program.description}
      </p>
    </div>

    <div className="pt-2 border-t border-stone-100">
      <p className="text-xs text-stone-700 mb-2 bg-stone-50 p-2 rounded border border-stone-100">
        <span className="font-semibold text-stone-900">Educator Value: </span>
        {program.keyBenefitsForServices}
      </p>
      <a
        href={program.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-xs font-semibold text-amber-800 hover:text-amber-950 hover:underline gap-1"
      >
        <span>Access Program / Website</span>
        <ArrowUpRight className="w-3 h-3" />
      </a>
    </div>
  </div>
);

interface StorybookCardProps {
  book: StorybookResource;
  index: number;
}

export const StorybookCard: React.FC<StorybookCardProps> = ({ book, index }) => (
  <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-2xs hover:border-amber-400 transition-all flex flex-col justify-between">
    <div>
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
            <Book className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-stone-900 leading-tight">
              {book.title}
            </h4>
            <p className="text-xs text-stone-500 font-medium">
              by {book.author}
            </p>
          </div>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
          {book.ageRange}
        </span>
      </div>

      <div className="my-2.5">
        <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wide block mb-0.5">
          Core Sociological Theme:
        </span>
        <p className="text-xs text-stone-700 italic">
          {book.theme}
        </p>
      </div>
    </div>

    <div className="pt-2.5 border-t border-stone-100 bg-amber-50/50 -mx-4 -mb-4 p-3 rounded-b-xl border-stone-200/50">
      <span className="text-[11px] font-bold text-amber-900 flex items-center gap-1 mb-1">
        <MessageSquareQuote className="w-3.5 h-3.5" />
        Pedagogical Discussion Prompt:
      </span>
      <p className="text-xs text-stone-800 leading-relaxed font-normal">
        {book.pedagogicalPrompt}
      </p>
    </div>
  </div>
);

interface MediaCardProps {
  media: MediaResource;
  index: number;
}

export const MediaCard: React.FC<MediaCardProps> = ({ media, index }) => (
  <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-2xs hover:border-amber-400 transition-all flex flex-col justify-between">
    <div>
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
            {media.type === 'Podcast' ? (
              <Radio className="w-4 h-4 text-amber-700" />
            ) : (
              <Tv className="w-4 h-4 text-amber-700" />
            )}
          </div>
          <div>
            <h4 className="text-sm font-bold text-stone-900 leading-tight">
              {media.title}
            </h4>
            <p className="text-xs text-stone-500">
              {media.creatorOrPlatform}
            </p>
          </div>
        </div>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700 shrink-0">
          {media.type}
        </span>
      </div>

      <p className="text-xs text-stone-600 mb-3 leading-relaxed">
        {media.description}
      </p>
    </div>

    <div className="pt-2 border-t border-stone-100">
      <p className="text-xs text-stone-700 mb-2 bg-stone-50 p-2 rounded border border-stone-100">
        <span className="font-semibold text-stone-900">How to Use in Practice: </span>
        {media.howToUseInPractice}
      </p>
      <a
        href={media.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-xs font-semibold text-amber-800 hover:text-amber-950 hover:underline gap-1"
      >
        <span>Access Official Media Link</span>
        <ArrowUpRight className="w-3 h-3" />
      </a>
    </div>
  </div>
);

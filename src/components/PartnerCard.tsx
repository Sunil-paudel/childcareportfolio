import React from 'react';
import { CommunityPartner } from '../types';
import { ExternalLink, Building2, Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface PartnerCardProps {
  partner: CommunityPartner;
  index: number;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ partner, index }) => {
  return (
    <div className="bg-white rounded-xl border border-stone-200/90 shadow-2xs hover:border-stone-400 transition-all p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-md bg-stone-900 text-stone-100 flex items-center justify-center text-xs font-bold font-mono">
              P{index + 1}
            </span>
            <div>
              <h4 className="text-base font-bold text-stone-900 leading-snug">
                {partner.name}
              </h4>
              <p className="text-xs text-amber-800 font-semibold mt-0.5">
                {partner.role}
              </p>
            </div>
          </div>
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200 whitespace-nowrap">
            {partner.scope}
          </span>
        </div>

        {/* Key Offerings List */}
        <div className="my-3">
          <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1.5 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" />
            Key Support Services & Offerings:
          </p>
          <ul className="space-y-1.5">
            {partner.serviceOfferings.map((offering, idx) => (
              <li key={idx} className="flex items-start text-xs text-stone-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 mr-1.5" />
                <span>{offering}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Collaboration Protocol & Link */}
      <div className="mt-4 pt-3 border-t border-stone-100">
        <p className="text-xs text-stone-700 mb-3 bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
          <span className="font-semibold text-stone-900">ECE Collaboration Pathway: </span>
          {partner.collaborationModel}
        </p>

        <a
          href={partner.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-semibold text-amber-800 hover:text-amber-950 hover:underline gap-1 group"
        >
          <span>Visit Official Portal</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
};

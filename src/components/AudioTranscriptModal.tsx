import React, { useState, useEffect } from 'react';
import { TRANSCRIPT_DATA } from '../data/portfolioData';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check, 
  Clock, 
  Headphones,
  FileText,
  Sparkles
} from 'lucide-react';

interface AudioTranscriptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AudioTranscriptModal: React.FC<AudioTranscriptModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string>('intro');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSynth(window.speechSynthesis);
    }
  }, []);

  const currentSection = TRANSCRIPT_DATA.find((s) => s.sectionId === activeSectionId) || TRANSCRIPT_DATA[0];

  const handlePlayVoice = (text: string) => {
    if (!synth) return;

    if (isPlaying) {
      synth.cancel();
      setIsPlaying(false);
      return;
    }

    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = playbackRate;
    utterance.pitch = 1;

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    synth.speak(utterance);
    setIsPlaying(true);
  };

  const handleStopVoice = () => {
    if (synth) {
      synth.cancel();
      setIsPlaying(false);
    }
  };

  const handleCopyTranscript = () => {
    const fullText = TRANSCRIPT_DATA.map(
      (s) => `[${s.timestamp}] ${s.title}\nSpeaker: ${s.speaker}\n\n${s.content}\n`
    ).join('\n---\n\n');

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
              <Headphones className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                Digital Audio Narration & Presentation Transcript
              </h3>
              <p className="text-xs text-stone-400">
                Presentation Audio Track & Verbatim Transcript for ECE Practice Overview
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              handleStopVoice();
              onClose();
            }}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Player Controls Bar */}
        <div className="bg-stone-100 border-b border-stone-200 px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handlePlayVoice(currentSection.content)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                isPlaying
                  ? 'bg-amber-600 hover:bg-amber-700 text-white'
                  : 'bg-stone-900 hover:bg-stone-800 text-white'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pause Narration</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Listen to Section</span>
                </>
              )}
            </button>

            <button
              onClick={handleStopVoice}
              disabled={!isPlaying}
              className="p-2 text-stone-600 hover:text-stone-900 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg hover:bg-stone-200"
              title="Stop Narration"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Speed Control */}
            <div className="flex items-center space-x-1.5 bg-white border border-stone-200 px-2.5 py-1 rounded-lg text-xs">
              <span className="text-stone-500 font-medium">Speed:</span>
              {[0.8, 1, 1.25, 1.5].map((rate) => (
                <button
                  key={rate}
                  onClick={() => {
                    setPlaybackRate(rate);
                    if (isPlaying) {
                      handleStopVoice();
                    }
                  }}
                  className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                    playbackRate === rate
                      ? 'bg-stone-900 text-white'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyTranscript}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied Transcript</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Full Transcript</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Content Body: Sidebar Navigation + Transcript Display */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200">
          {/* Section Selector */}
          <div className="p-4 overflow-y-auto space-y-2 max-h-48 md:max-h-none bg-stone-50/50">
            <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2 px-2">
              Presentation Timestamps & Track
            </p>
            {TRANSCRIPT_DATA.map((sec) => {
              const isSelected = activeSectionId === sec.sectionId;
              return (
                <button
                  key={sec.sectionId}
                  onClick={() => {
                    handleStopVoice();
                    setActiveSectionId(sec.sectionId);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-start space-x-2.5 ${
                    isSelected
                      ? 'bg-white border border-amber-300 shadow-xs text-stone-950 font-semibold'
                      : 'text-stone-600 hover:bg-stone-200/60'
                  }`}
                >
                  <span className="px-1.5 py-0.5 rounded bg-stone-200 font-mono text-[10px] text-stone-700 shrink-0 mt-0.5">
                    {sec.timestamp}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="truncate font-medium">{sec.title}</p>
                    <p className="text-[10px] text-stone-400">{sec.durationApprox}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Transcript Content Reader */}
          <div className="md:col-span-2 p-6 overflow-y-auto space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div>
                <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {currentSection.timestamp} • {currentSection.durationApprox}
                </span>
                <h4 className="text-lg font-bold text-stone-900 mt-2">
                  {currentSection.title}
                </h4>
              </div>
              <span className="text-xs text-stone-500 font-medium">
                Speaker: {currentSection.speaker}
              </span>
            </div>

            <div className="prose prose-stone text-sm leading-relaxed text-stone-700 bg-stone-50 p-5 rounded-xl border border-stone-200/80 font-serif">
              {currentSection.content}
            </div>

            <div className="bg-amber-50/60 p-3 rounded-lg border border-amber-200/50 flex items-center space-x-2 text-xs text-amber-900">
              <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                Use the Play button above to hear this section read aloud with real-time browser speech synthesis.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

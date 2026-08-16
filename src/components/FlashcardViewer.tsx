import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  RotateCw, 
  Star, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  HelpCircle, 
  BookOpen, 
  Sparkles,
  Info,
  ChevronDown,
  ChevronUp,
  Flame,
  Check,
  RotateCcw
} from 'lucide-react';
import { Flashcard, MasteryStatus, UserCardState } from '../types';
import { speakText, stopSpeaking, isSpeaking } from '../utils/speech';

interface FlashcardViewerProps {
  cards: Flashcard[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  userStates: Record<string, UserCardState>;
  onUpdateStatus: (cardId: string, status: MasteryStatus) => void;
  onToggleStar: (cardId: string) => void;
}

export const FlashcardViewer: React.FC<FlashcardViewerProps> = ({
  cards,
  currentIndex,
  onNavigate,
  userStates,
  onUpdateStatus,
  onToggleStar
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedOptionKeys, setSelectedOptionKeys] = useState<string[]>([]);
  const [speaking, setSpeaking] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [showOptionsBreakdown, setShowOptionsBreakdown] = useState(true);

  const card = cards[currentIndex];
  const currentState = card ? userStates[card.id] : undefined;
  const isStarred = currentState?.isStarred || false;
  const status = currentState?.status || 'new';

  // Reset flip and selections when navigating cards
  useEffect(() => {
    setIsFlipped(false);
    setSelectedOptionKeys([]);
    stopSpeaking();
    setSpeaking(false);
  }, [currentIndex, card?.id]);

  // Keyboard navigation & actions
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        if (currentIndex < cards.length - 1) onNavigate(currentIndex + 1);
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        if (currentIndex > 0) onNavigate(currentIndex - 1);
      } else if (e.key === '1') {
        if (card) onUpdateStatus(card.id, 'learning');
      } else if (e.key === '2') {
        if (card) onUpdateStatus(card.id, 'learning');
      } else if (e.key === '3') {
        if (card) onUpdateStatus(card.id, 'mastered');
      } else if (e.key.toLowerCase() === 's') {
        if (card) onToggleStar(card.id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, cards.length, card, onNavigate, onUpdateStatus, onToggleStar]);

  if (!card) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center text-slate-400">
        <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 text-slate-500">
          <BookOpen className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold text-slate-200 mb-2">No cards match the current filter</h3>
        <p className="text-sm text-slate-400 max-w-md mb-6">
          Try clearing your filter or choosing a different category to view cards.
        </p>
      </div>
    );
  }

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
    } else {
      setSpeaking(true);
      const textToRead = isFlipped 
        ? `Answer: ${card.answerDisplay}. Explanation: ${card.highYieldExplanation}. Common trap: ${card.commonTrap}`
        : `Question: ${card.question}. Options: ${card.options.map(o => `${o.key}: ${o.text}`).join(', ')}`;
      
      speakText(textToRead, () => setSpeaking(false));
    }
  };

  const handleOptionClick = (key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (card.isMultiSelect) {
      setSelectedOptionKeys(prev => 
        prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
      );
    } else {
      setSelectedOptionKeys([key]);
    }
  };

  const getStatusBadge = () => {
    if (status === 'mastered') {
      return (
        <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Mastered
        </span>
      );
    }
    if (status === 'learning') {
      return (
        <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
          <RotateCcw className="w-3.5 h-3.5" />
          Learning
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-slate-700/60 text-slate-300 border border-slate-600">
        New Card
      </span>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 sm:py-6 flex flex-col items-center">
      {/* Top progress and controls bar */}
      <div className="w-full flex items-center justify-between mb-3 text-xs sm:text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-200">
            Card {currentIndex + 1} of {cards.length}
          </span>
          <span className="text-slate-600">|</span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-slate-800 text-teal-300 font-medium">
            {card.category}
          </span>
          {getStatusBadge()}
        </div>

        <div className="flex items-center gap-2">
          {/* Font size toggle */}
          <button
            onClick={() => setFontSize(prev => prev === 'normal' ? 'large' : 'normal')}
            title="Toggle text size"
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
          >
            <span className="font-bold text-xs">{fontSize === 'normal' ? 'A+' : 'A-'}</span>
          </button>

          {/* Read aloud */}
          <button
            onClick={handleSpeak}
            title={speaking ? 'Stop speech' : 'Read card aloud'}
            className={`p-1.5 rounded-lg border transition ${
              speaking 
                ? 'bg-teal-500/20 text-teal-300 border-teal-500/40 animate-pulse' 
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
            }`}
          >
            {speaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Star toggle */}
          <button
            onClick={() => onToggleStar(card.id)}
            title={isStarred ? 'Unstar card' : 'Star for review'}
            className={`p-1.5 rounded-lg border transition ${
              isStarred 
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' 
                : 'bg-slate-800 hover:bg-slate-700 text-slate-400 border-slate-700'
            }`}
          >
            <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* 3D Perspective Flashcard Container */}
      <div 
        id="flashcard-container"
        className="w-full relative min-h-[480px] sm:min-h-[520px] cursor-pointer perspective-1000 select-text"
        onClick={() => setIsFlipped(prev => !prev)}
      >
        <div 
          className={`w-full min-h-[480px] sm:min-h-[520px] rounded-2xl shadow-xl transition-transform duration-500 transform-style-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* ================= FRONT OF CARD ================= */}
          <div 
            className="absolute inset-0 w-full h-full bg-slate-900 border-2 border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between backface-hidden shadow-lg overflow-y-auto hover:border-slate-700 transition"
          >
            <div>
              {/* Card Meta Tags */}
              <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-semibold">
                    {card.category}
                  </span>
                  <span className={`px-2 py-0.5 rounded-md text-[11px] font-semibold tracking-wider ${
                    card.tag === 'VERBATIM' 
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                      : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                  }`}>
                    [{card.tag}]
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span>Question</span>
                  {card.isMultiSelect && (
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[11px] font-semibold">
                      Multiple Select
                    </span>
                  )}
                </div>
              </div>

              {/* Main Question Text */}
              <div className="my-2">
                <p className={`font-semibold text-slate-100 leading-relaxed tracking-tight ${
                  fontSize === 'large' ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                }`}>
                  {card.question}
                </p>
              </div>

              {/* Options Section */}
              <div className="mt-6 space-y-2.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  {card.isMultiSelect ? 'Select all applicable options:' : 'Select an answer or click card to flip:'}
                </p>
                {card.options.map((opt) => {
                  const isSelected = selectedOptionKeys.includes(opt.key);
                  return (
                    <button
                      key={opt.key}
                      onClick={(e) => handleOptionClick(opt.key, e)}
                      className={`w-full text-left p-3.5 rounded-xl border transition flex items-start gap-3 group ${
                        isSelected 
                          ? 'bg-teal-950/40 border-teal-500/60 text-teal-200' 
                          : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/70 text-slate-300 hover:text-white'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition ${
                        isSelected 
                          ? 'bg-teal-500 text-slate-950 shadow-sm' 
                          : 'bg-slate-700/80 text-slate-300 group-hover:bg-slate-700'
                      }`}>
                        {opt.key}
                      </span>
                      <span className={`text-sm sm:text-base font-normal leading-snug flex-1 ${
                        isSelected ? 'font-medium text-teal-100' : ''
                      }`}>
                        {opt.text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Flip Hint */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-400">
                <RotateCw className="w-3.5 h-3.5 text-teal-400" />
                <span>Click card or press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono text-[10px]">Space</kbd> to flip</span>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsFlipped(true); }}
                className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-medium text-xs flex items-center gap-1 shadow-sm transition"
              >
                Reveal Answer
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ================= BACK OF CARD ================= */}
          <div 
            className="absolute inset-0 w-full h-full bg-slate-900 border-2 border-teal-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between backface-hidden rotate-y-180 shadow-2xl overflow-y-auto"
          >
            <div>
              {/* Back Top Meta */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Correct Solution
                  </span>
                  <span className="text-xs text-slate-400">
                    {card.category}
                  </span>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
                  className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition"
                >
                  <RotateCw className="w-3 h-3" />
                  Flip back
                </button>
              </div>

              {/* Answer Banner */}
              <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 mb-4">
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Correct Answer
                </div>
                <div className={`font-bold text-emerald-200 leading-snug ${
                  fontSize === 'large' ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
                }`}>
                  {card.answerDisplay}
                </div>
              </div>

              {/* High-Yield Explanation */}
              <div className="mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  High-Yield Clinical Explanation
                </h4>
                <div className={`text-slate-200 leading-relaxed bg-slate-800/40 p-3.5 rounded-xl border border-slate-700/60 ${
                  fontSize === 'large' ? 'text-base' : 'text-sm'
                }`}>
                  {card.highYieldExplanation}
                </div>
              </div>

              {/* Why Other Options Are Wrong */}
              {card.whyOthersWrong && card.whyOthersWrong.length > 0 && (
                <div className="mb-4">
                  <button
                    onClick={(e) => { e.stopPropagation(); setShowOptionsBreakdown(prev => !prev); }}
                    className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-300 py-1 hover:text-white"
                  >
                    <span className="flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
                      Why Other Options Are Wrong ({card.whyOthersWrong.length})
                    </span>
                    {showOptionsBreakdown ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {showOptionsBreakdown && (
                    <div className="mt-2 space-y-2">
                      {card.whyOthersWrong.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/50 text-xs sm:text-sm text-slate-300"
                        >
                          <span className="font-semibold text-rose-300 block mb-0.5">
                            {item.option}
                          </span>
                          <span className="text-slate-300 leading-normal">
                            {item.explanation}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Common Trap Box */}
              {card.commonTrap && (
                <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-3.5 text-xs sm:text-sm">
                  <div className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Common Exam Trap</span>
                  </div>
                  <p className="text-amber-200/90 leading-relaxed">
                    {card.commonTrap}
                  </p>
                </div>
              )}
            </div>

            {/* Back Bottom Rating Prompts */}
            <div className="pt-4 mt-4 border-t border-slate-800 text-center">
              <span className="text-xs text-slate-400">
                Rate your recall below to organize spaced repetition
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Spaced Repetition Self-Rating Buttons */}
      <div className="w-full max-w-xl mt-4 bg-slate-900/90 border border-slate-800 p-2.5 rounded-2xl shadow-md flex items-center justify-between gap-2">
        <button
          id="rate-again-btn"
          onClick={() => {
            onUpdateStatus(card.id, 'learning');
            if (currentIndex < cards.length - 1) onNavigate(currentIndex + 1);
          }}
          className="flex-1 flex flex-col items-center py-2 px-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition group"
        >
          <span className="text-xs sm:text-sm font-bold flex items-center gap-1">
            <XCircle className="w-3.5 h-3.5" />
            Again / Hard
          </span>
          <span className="text-[10px] text-rose-400/80 font-mono">Press [1]</span>
        </button>

        <button
          id="rate-good-btn"
          onClick={() => {
            onUpdateStatus(card.id, 'learning');
            if (currentIndex < cards.length - 1) onNavigate(currentIndex + 1);
          }}
          className="flex-1 flex flex-col items-center py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition group"
        >
          <span className="text-xs sm:text-sm font-bold flex items-center gap-1">
            <RotateCcw className="w-3.5 h-3.5" />
            Good
          </span>
          <span className="text-[10px] text-amber-400/80 font-mono">Press [2]</span>
        </button>

        <button
          id="rate-mastered-btn"
          onClick={() => {
            onUpdateStatus(card.id, 'mastered');
            if (currentIndex < cards.length - 1) onNavigate(currentIndex + 1);
          }}
          className="flex-1 flex flex-col items-center py-2 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition group"
        >
          <span className="text-xs sm:text-sm font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Mastered
          </span>
          <span className="text-[10px] text-emerald-400/80 font-mono">Press [3]</span>
        </button>
      </div>

      {/* Navigation Arrows & Slider */}
      <div className="w-full flex items-center justify-between mt-4">
        <button
          id="prev-card-btn"
          disabled={currentIndex === 0}
          onClick={() => onNavigate(currentIndex - 1)}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium border transition ${
            currentIndex === 0
              ? 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        {/* Quick jump dropdown */}
        <div className="flex items-center gap-2">
          <select
            value={currentIndex}
            onChange={(e) => onNavigate(Number(e.target.value))}
            className="bg-slate-800 text-slate-300 text-xs sm:text-sm px-3 py-2 rounded-xl border border-slate-700 focus:outline-none focus:border-teal-500"
          >
            {cards.map((c, i) => (
              <option key={c.id} value={i}>
                #{i + 1}: {c.question.slice(0, 32)}...
              </option>
            ))}
          </select>
        </div>

        <button
          id="next-card-btn"
          disabled={currentIndex === cards.length - 1}
          onClick={() => onNavigate(currentIndex + 1)}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium border transition ${
            currentIndex === cards.length - 1
              ? 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed'
              : 'bg-teal-600 hover:bg-teal-500 text-white border-teal-500 shadow-sm'
          }`}
        >
          <span>Next</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

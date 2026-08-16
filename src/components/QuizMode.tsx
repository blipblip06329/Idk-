import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  Trophy, 
  Sparkles, 
  AlertTriangle,
  Flame,
  Check,
  X,
  BookOpen
} from 'lucide-react';
import { Flashcard, MasteryStatus, QuizSessionState, UserCardState } from '../types';

interface QuizModeProps {
  cards: Flashcard[];
  userStates: Record<string, UserCardState>;
  initialQuizState?: QuizSessionState | null;
  onUpdateStatus: (cardId: string, status: MasteryStatus) => void;
  onSwitchToFlashcards: () => void;
  onSaveQuizState?: (state: QuizSessionState | null) => void;
}

export const QuizMode: React.FC<QuizModeProps> = ({
  cards,
  userStates,
  initialQuizState,
  onUpdateStatus,
  onSwitchToFlashcards,
  onSaveQuizState
}) => {
  const [currentIndex, setCurrentIndex] = useState(() => {
    if (initialQuizState && typeof initialQuizState.currentIndex === 'number' && initialQuizState.currentIndex < cards.length) {
      return initialQuizState.currentIndex;
    }
    return 0;
  });

  const [selectedKeys, setSelectedKeys] = useState<string[]>(() => {
    return initialQuizState?.selectedKeys || [];
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(() => {
    return initialQuizState?.isSubmitted || false;
  });

  const [score, setScore] = useState<number>(() => {
    return initialQuizState?.score || 0;
  });

  const [streak, setStreak] = useState<number>(() => {
    return initialQuizState?.streak || 0;
  });

  const [bestStreak, setBestStreak] = useState<number>(() => {
    return initialQuizState?.bestStreak || 0;
  });

  const [answeredHistory, setAnsweredHistory] = useState<{
    cardId: string;
    userKeys: string[];
    isCorrect: boolean;
  }[]>(() => {
    return initialQuizState?.answeredHistory || [];
  });

  const [isFinished, setIsFinished] = useState<boolean>(() => {
    return initialQuizState?.isFinished || false;
  });

  const card = cards[currentIndex];

  // Save quiz state whenever key state variables change
  useEffect(() => {
    if (onSaveQuizState) {
      const stateToSave: QuizSessionState = {
        currentIndex,
        selectedKeys,
        isSubmitted,
        score,
        streak,
        bestStreak,
        answeredHistory,
        isFinished
      };
      onSaveQuizState(stateToSave);
    }
  }, [currentIndex, selectedKeys, isSubmitted, score, streak, bestStreak, answeredHistory, isFinished, onSaveQuizState]);

  const handleSelectOption = (key: string) => {
    if (isSubmitted) return;

    if (card?.isMultiSelect) {
      setSelectedKeys(prev => 
        prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
      );
    } else {
      setSelectedKeys([key]);
    }
  };

  const handleSubmit = () => {
    if (!card || selectedKeys.length === 0 || isSubmitted) return;

    const correctSet = new Set(card.correctKeys);
    const selectedSet = new Set(selectedKeys);
    
    // Check if sets match
    const isCorrect = 
      correctSet.size === selectedSet.size && 
      [...correctSet].every(k => selectedSet.has(k));

    setIsSubmitted(true);

    if (isCorrect) {
      setScore(prev => prev + 1);
      setStreak(prev => {
        const newStreak = prev + 1;
        if (newStreak > bestStreak) setBestStreak(newStreak);
        return newStreak;
      });
      onUpdateStatus(card.id, 'mastered');
    } else {
      setStreak(0);
      onUpdateStatus(card.id, 'learning');
    }

    setAnsweredHistory(prev => [
      ...prev,
      { cardId: card.id, userKeys: selectedKeys, isCorrect }
    ]);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedKeys([]);
      setIsSubmitted(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedKeys([]);
    setIsSubmitted(false);
    setScore(0);
    setStreak(0);
    setAnsweredHistory([]);
    setIsFinished(false);
    if (onSaveQuizState) {
      onSaveQuizState(null);
    }
  };

  if (!card && !isFinished) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center text-slate-400">
        <p className="text-sm">No cards available in this category for quiz mode.</p>
      </div>
    );
  }

  // Quiz Finished Screen
  if (isFinished) {
    const accuracy = cards.length > 0 ? Math.round((score / cards.length) * 100) : 0;
    const missedQuestions = answeredHistory
      .filter(h => !h.isCorrect)
      .map(h => {
        const c = cards.find(item => item.id === h.cardId);
        return { ...h, card: c };
      })
      .filter(h => h.card !== undefined);

    return (
      <div className="w-full max-w-3xl mx-auto px-4 py-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-6 shadow-inner">
            <Trophy className="w-10 h-10" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Quiz Complete!</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-8">
            You tested your knowledge on <strong className="text-slate-200">{cards.length}</strong> pathology questions.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-8">
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60">
              <div className="text-2xl sm:text-3xl font-bold text-teal-400">{score}/{cards.length}</div>
              <div className="text-xs text-slate-400 mt-1">Total Score</div>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60">
              <div className={`text-2xl sm:text-3xl font-bold ${accuracy >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {accuracy}%
              </div>
              <div className="text-xs text-slate-400 mt-1">Accuracy</div>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400">{bestStreak}</div>
              <div className="text-xs text-slate-400 mt-1">Best Streak</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold transition"
            >
              <RotateCcw className="w-4 h-4" />
              Retake All
            </button>

            <button
              onClick={onSwitchToFlashcards}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold shadow-md transition"
            >
              <BookOpen className="w-4 h-4" />
              Review in Flashcard Mode
            </button>
          </div>

          {/* Missed questions list review */}
          {missedQuestions.length > 0 && (
            <div className="mt-10 text-left border-t border-slate-800 pt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-rose-400 mb-4 flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                Review Missed Questions ({missedQuestions.length})
              </h3>
              <div className="space-y-3">
                {missedQuestions.map((item, idx) => (
                  <div key={idx} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/60 text-xs sm:text-sm">
                    <p className="font-semibold text-slate-200 mb-2">{item.card!.question}</p>
                    <div className="text-emerald-400 font-medium mb-1">
                      Correct: {item.card!.answerDisplay}
                    </div>
                    <p className="text-slate-400 text-xs">{item.card!.highYieldExplanation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const correctSet = new Set(card.correctKeys);
  const selectedSet = new Set(selectedKeys);
  const isQuestionCorrect = isSubmitted && 
    correctSet.size === selectedSet.size && 
    [...correctSet].every(k => selectedSet.has(k));

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-6">
      {/* Quiz Header & Live Score */}
      <div className="flex items-center justify-between mb-4 text-xs sm:text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-200">
            Question {currentIndex + 1} of {cards.length}
          </span>
          <span className="text-slate-600">|</span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-teal-300 text-xs font-medium">
            {card.category}
          </span>
          {card.isMultiSelect && (
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-semibold">
              Multi-Select
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {streak > 1 && (
            <span className="flex items-center gap-1 text-amber-400 font-semibold text-xs">
              <Flame className="w-4 h-4 fill-amber-400" />
              {streak} streak
            </span>
          )}
          <span className="bg-slate-800 px-3 py-1 rounded-lg border border-slate-700 text-slate-300 font-medium">
            Score: <strong className="text-teal-400">{score}</strong>
          </span>
          <button
            onClick={handleRestart}
            title="Reset Quiz"
            className="p-1 text-xs text-slate-500 hover:text-slate-300 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl mb-6">
        <p className="text-lg sm:text-xl font-bold text-slate-100 leading-relaxed mb-6">
          {card.question}
        </p>

        {/* Options List */}
        <div className="space-y-3 mb-6">
          {card.options.map((opt) => {
            const isSelected = selectedSet.has(opt.key);
            const isCorrectOption = correctSet.has(opt.key);

            let buttonStyles = 'bg-slate-800/70 hover:bg-slate-800 border-slate-700/80 text-slate-200';
            let badgeStyles = 'bg-slate-700 text-slate-300';

            if (isSubmitted) {
              if (isCorrectOption) {
                buttonStyles = 'bg-emerald-950/50 border-emerald-500/60 text-emerald-100 shadow-sm';
                badgeStyles = 'bg-emerald-500 text-slate-950 font-bold';
              } else if (isSelected && !isCorrectOption) {
                buttonStyles = 'bg-rose-950/50 border-rose-500/60 text-rose-200';
                badgeStyles = 'bg-rose-500 text-white font-bold';
              } else {
                buttonStyles = 'opacity-50 bg-slate-900 border-slate-800 text-slate-400';
              }
            } else if (isSelected) {
              buttonStyles = 'bg-indigo-950/50 border-indigo-500 text-indigo-100';
              badgeStyles = 'bg-indigo-500 text-white font-bold';
            }

            return (
              <button
                key={opt.key}
                disabled={isSubmitted}
                onClick={() => handleSelectOption(opt.key)}
                className={`w-full text-left p-4 rounded-xl border transition flex items-start gap-3.5 group ${buttonStyles}`}
              >
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 transition ${badgeStyles}`}>
                  {isSubmitted && isCorrectOption ? (
                    <Check className="w-4 h-4 stroke-[3]" />
                  ) : isSubmitted && isSelected && !isCorrectOption ? (
                    <X className="w-4 h-4 stroke-[3]" />
                  ) : (
                    opt.key
                  )}
                </span>
                <span className="text-sm sm:text-base leading-snug flex-1 font-medium">
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Submit or Next Action */}
        {!isSubmitted ? (
          <button
            id="quiz-submit-btn"
            disabled={selectedKeys.length === 0}
            onClick={handleSubmit}
            className={`w-full py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-md transition ${
              selectedKeys.length === 0
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                : 'bg-teal-600 hover:bg-teal-500 text-white border border-teal-500'
            }`}
          >
            Submit Answer
          </button>
        ) : (
          <div>
            {/* Answer feedback alert */}
            <div className={`p-4 rounded-2xl mb-4 border ${
              isQuestionCorrect 
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200' 
                : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
            }`}>
              <div className="flex items-center gap-2 font-bold text-sm sm:text-base mb-1">
                {isQuestionCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Correct! Excellent recall.</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-400" />
                    <span>Incorrect. Review the rationale below.</span>
                  </>
                )}
              </div>
              <p className="text-xs sm:text-sm opacity-90">
                Correct Answer: <strong className="underline">{card.answerDisplay}</strong>
              </p>
            </div>

            {/* Explanation rationale */}
            <div className="bg-slate-800/70 p-4 rounded-2xl border border-slate-700/60 mb-4 text-xs sm:text-sm text-slate-300">
              <div className="font-bold text-teal-400 text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                High-Yield Rationale
              </div>
              <p className="leading-relaxed mb-3">{card.highYieldExplanation}</p>

              {card.commonTrap && (
                <div className="bg-amber-950/40 border border-amber-500/30 p-2.5 rounded-xl text-amber-200/90 text-xs">
                  <strong className="text-amber-400 flex items-center gap-1 mb-0.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Trap:
                  </strong>
                  {card.commonTrap}
                </div>
              )}
            </div>

            <button
              id="quiz-next-btn"
              onClick={handleNext}
              className="w-full py-3.5 rounded-xl font-bold text-sm sm:text-base bg-teal-600 hover:bg-teal-500 text-white shadow-md flex items-center justify-center gap-2 transition"
            >
              <span>{currentIndex === cards.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

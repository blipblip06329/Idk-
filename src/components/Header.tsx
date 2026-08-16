import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  HelpCircle, 
  Layers, 
  RotateCcw, 
  Shuffle, 
  Star, 
  Sparkles,
  Keyboard,
  BarChart3,
  ShieldCheck
} from 'lucide-react';
import { Category, StudyMode } from '../types';
import { CATEGORIES } from '../data/flashcardsData';

interface HeaderProps {
  mode: StudyMode;
  setMode: (mode: StudyMode) => void;
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
  filterStarredOnly: boolean;
  setFilterStarredOnly: (val: boolean | ((prev: boolean) => boolean)) => void;
  totalCards: number;
  filteredCount: number;
  masteredCount: number;
  learningCount: number;
  starredCount: number;
  onShuffle: () => void;
  onResetProgress: () => void;
  onOpenShortcuts: () => void;
  onOpenStats: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  mode,
  setMode,
  selectedCategory,
  setSelectedCategory,
  filterStarredOnly,
  setFilterStarredOnly,
  totalCards,
  filteredCount,
  masteredCount,
  learningCount,
  starredCount,
  onShuffle,
  onResetProgress,
  onOpenShortcuts,
  onOpenStats
}) => {
  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-30 shadow-md">
      {/* Top Banner / Brand */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 shadow-inner">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
                Pathology Mastery Deck
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  48 Cards
                </span>
              </h1>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="hidden sm:inline">Cellular Adaptation, Neoplasia, Inflammation & Genetics</span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                Auto-saved
              </span>
            </div>
          </div>
        </div>

        {/* Study Mode Switcher */}
        <div className="flex items-center bg-slate-800/90 p-1 rounded-xl border border-slate-700/80">
          <button
            id="mode-flashcards-btn"
            onClick={() => setMode('flashcards')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              mode === 'flashcards'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>3D Flip</span>
          </button>
          <button
            id="mode-quiz-btn"
            onClick={() => setMode('quiz')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              mode === 'quiz'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Quiz Mode</span>
          </button>
          <button
            id="mode-browse-btn"
            onClick={() => setMode('browse')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              mode === 'browse'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Deck Index</span>
          </button>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            id="open-stats-btn"
            onClick={onOpenStats}
            title="View Deck Statistics and Progress"
            className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
          >
            <BarChart3 className="w-4 h-4 text-teal-400" />
            <span className="hidden md:inline">Progress</span>
            <span className="font-semibold text-teal-300">{masteredCount}/{totalCards}</span>
          </button>

          <button
            id="shuffle-cards-btn"
            onClick={onShuffle}
            title="Shuffle deck order"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
          >
            <Shuffle className="w-4 h-4" />
          </button>

          <button
            id="open-shortcuts-btn"
            onClick={onOpenShortcuts}
            title="Keyboard shortcuts"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition hidden sm:flex"
          >
            <Keyboard className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Category Bar & Quick Filters */}
      <div className="bg-slate-950/60 border-t border-slate-800/80 px-4 sm:px-6 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Categories Pill Scroll */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar flex-1">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-colors font-medium ${
                    isSelected
                      ? 'bg-teal-500 text-slate-950 font-semibold shadow-sm'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Starred filter and quick counts */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setFilterStarredOnly(prev => !prev)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full border transition ${
                filterStarredOnly
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${filterStarredOnly ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span>Starred ({starredCount})</span>
            </button>

            <span className="text-slate-500">|</span>
            <span className="text-slate-400 font-medium">
              Showing <strong className="text-slate-200">{filteredCount}</strong> of {totalCards}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

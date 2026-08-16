import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Star, 
  CheckCircle2, 
  RotateCcw, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  AlertTriangle,
  Play,
  Layers,
  Filter,
  Check
} from 'lucide-react';
import { Flashcard, Category, CardTag, MasteryStatus, UserCardState } from '../types';
import { CATEGORIES } from '../data/flashcardsData';

interface BrowseModeProps {
  cards: Flashcard[];
  userStates: Record<string, UserCardState>;
  onToggleStar: (cardId: string) => void;
  onUpdateStatus: (cardId: string, status: MasteryStatus) => void;
  onStudyCard: (cardIndex: number) => void;
}

export const BrowseMode: React.FC<BrowseModeProps> = ({
  cards,
  userStates,
  onToggleStar,
  onUpdateStatus,
  onStudyCard
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState<Category>('All');
  const [selectedTag, setSelectedTag] = useState<'All' | CardTag>('All');
  const [selectedStatus, setSelectedStatus] = useState<'All' | MasteryStatus | 'starred'>('All');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const filteredCards = useMemo(() => {
    return cards.filter(card => {
      const state = userStates[card.id];
      const status = state?.status || 'new';
      const isStarred = state?.isStarred || false;

      // Category filter
      if (selectedCat !== 'All' && card.category !== selectedCat) return false;

      // Tag filter
      if (selectedTag !== 'All' && card.tag !== selectedTag) return false;

      // Status filter
      if (selectedStatus === 'starred' && !isStarred) return false;
      if (selectedStatus !== 'All' && selectedStatus !== 'starred' && status !== selectedStatus) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesQuestion = card.question.toLowerCase().includes(query);
        const matchesAnswer = card.answerDisplay.toLowerCase().includes(query);
        const matchesExplanation = card.highYieldExplanation.toLowerCase().includes(query);
        const matchesTrap = card.commonTrap.toLowerCase().includes(query);
        const matchesOptions = card.options.some(o => o.text.toLowerCase().includes(query));

        if (!matchesQuestion && !matchesAnswer && !matchesExplanation && !matchesTrap && !matchesOptions) {
          return false;
        }
      }

      return true;
    });
  }, [cards, userStates, selectedCat, selectedTag, selectedStatus, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedCardId(prev => prev === id ? null : id);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6">
      {/* Top Search and Filters Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg mb-6 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="browse-search-input"
            type="text"
            placeholder="Search questions, options, concepts, traps (e.g. 'metaplasia', 'H. pylori', 'sarcoidosis')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-teal-500 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200 px-2 py-1 rounded bg-slate-700"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            {/* Category Select */}
            <select
              value={selectedCat}
              onChange={(e) => setSelectedCat(e.target.value as Category)}
              className="bg-slate-800 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus:border-teal-500"
            >
              <option value="All">All Categories ({cards.length})</option>
              {CATEGORIES.filter(c => c !== 'All').map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {/* Tag Select */}
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value as any)}
              className="bg-slate-800 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus:border-teal-500"
            >
              <option value="All">All Tags</option>
              <option value="VERBATIM">[VERBATIM] Questions</option>
              <option value="GENERATED">[GENERATED] Questions</option>
            </select>

            {/* Status Select */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as any)}
              className="bg-slate-800 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus:border-teal-500"
            >
              <option value="All">All Mastery Levels</option>
              <option value="mastered">Mastered Only</option>
              <option value="learning">Learning / Review</option>
              <option value="new">New Unstudied</option>
              <option value="starred">Starred Only</option>
            </select>
          </div>

          <span className="text-slate-400 font-medium">
            Found <strong className="text-teal-400">{filteredCards.length}</strong> cards
          </span>
        </div>
      </div>

      {/* Cards List */}
      {filteredCards.length === 0 ? (
        <div className="text-center py-16 bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <p className="text-slate-400 text-sm">No flashcards found matching your filters.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCat('All');
              setSelectedTag('All');
              setSelectedStatus('All');
            }}
            className="mt-3 text-xs font-semibold text-teal-400 hover:text-teal-300 underline"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredCards.map((card, idx) => {
            const originalIndex = cards.findIndex(c => c.id === card.id);
            const isExpanded = expandedCardId === card.id;
            const state = userStates[card.id];
            const isStarred = state?.isStarred || false;
            const status = state?.status || 'new';

            return (
              <div 
                key={card.id}
                className={`bg-slate-900 border rounded-2xl transition shadow-md overflow-hidden ${
                  isExpanded ? 'border-teal-500/50 ring-1 ring-teal-500/20' : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Header preview row */}
                <div 
                  onClick={() => toggleExpand(card.id)}
                  className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        #{originalIndex + 1}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[11px] font-semibold">
                        {card.category}
                      </span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                        card.tag === 'VERBATIM' 
                          ? 'bg-blue-500/10 text-blue-400' 
                          : 'bg-purple-500/10 text-purple-400'
                      }`}>
                        [{card.tag}]
                      </span>
                      {status === 'mastered' && (
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[11px] font-medium flex items-center gap-1">
                          <Check className="w-3 h-3" /> Mastered
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm sm:text-base font-semibold text-slate-100 leading-snug">
                      {card.question}
                    </h3>
                  </div>

                  {/* Right actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleStar(card.id);
                      }}
                      title="Star card"
                      className={`p-1.5 rounded-lg border transition ${
                        isStarred 
                          ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' 
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-400 border-slate-700'
                      }`}
                    >
                      <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-400' : ''}`} />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onStudyCard(originalIndex);
                      }}
                      title="Study this card in 3D flip viewer"
                      className="px-2.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold flex items-center gap-1 shadow-sm transition"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span className="hidden sm:inline">Flip</span>
                    </button>

                    <div className="text-slate-400 p-1">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-slate-800/80 bg-slate-950/40 space-y-4">
                    {/* Options list */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Options
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {card.options.map(opt => {
                          const isCorrect = card.correctKeys.includes(opt.key);
                          return (
                            <div 
                              key={opt.key}
                              className={`p-2.5 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${
                                isCorrect 
                                  ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200 font-medium' 
                                  : 'bg-slate-800/50 border-slate-700/60 text-slate-300'
                              }`}
                            >
                              <span className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold shrink-0 ${
                                isCorrect ? 'bg-emerald-500 text-slate-950' : 'bg-slate-700 text-slate-300'
                              }`}>
                                {opt.key}
                              </span>
                              <span className="flex-1 leading-snug">{opt.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Answer & Explanation */}
                    <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs sm:text-sm">
                      <div className="text-emerald-400 font-bold mb-1.5 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        Correct: {card.answerDisplay}
                      </div>
                      <p className="text-slate-200 leading-relaxed">
                        {card.highYieldExplanation}
                      </p>
                    </div>

                    {/* Common Trap */}
                    {card.commonTrap && (
                      <div className="bg-amber-950/30 border border-amber-500/30 p-3 rounded-xl text-xs sm:text-sm text-amber-200/90 flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-amber-400 font-semibold">Common Trap: </strong>
                          {card.commonTrap}
                        </div>
                      </div>
                    )}

                    {/* Quick status updater buttons */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-slate-400">Mark Status:</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateStatus(card.id, 'learning')}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition ${
                            status === 'learning' 
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                              : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                          }`}
                        >
                          Learning
                        </button>
                        <button
                          onClick={() => onUpdateStatus(card.id, 'mastered')}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition ${
                            status === 'mastered' 
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
                              : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                          }`}
                        >
                          Mastered
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

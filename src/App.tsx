import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { FlashcardViewer } from './components/FlashcardViewer';
import { QuizMode } from './components/QuizMode';
import { BrowseMode } from './components/BrowseMode';
import { ShortcutsModal } from './components/ShortcutsModal';
import { DeckStatsModal } from './components/DeckStatsModal';
import { FLASHCARDS_DATA } from './data/flashcardsData';
import { Category, Flashcard, MasteryStatus, QuizSessionState, StudyMode, StudySessionState, UserCardState } from './types';
import { loadUserProgress, saveUserProgress, loadStudySession, saveStudySession, clearAllSavedData } from './utils/storage';
import { Sparkles, X, RotateCcw } from 'lucide-react';

export default function App() {
  const [deck, setDeck] = useState<Flashcard[]>(FLASHCARDS_DATA);
  
  // Load saved session state from localStorage
  const [initialSession] = useState<StudySessionState>(loadStudySession);
  const [mode, setMode] = useState<StudyMode>(() => initialSession.mode || 'flashcards');
  const [selectedCategory, setSelectedCategory] = useState<Category>(() => initialSession.selectedCategory || 'All');
  const [filterStarredOnly, setFilterStarredOnly] = useState<boolean>(() => initialSession.filterStarredOnly || false);
  const [currentIndex, setCurrentIndex] = useState<number>(() => initialSession.lastCardIndex || 0);
  const [quizState, setQuizState] = useState<QuizSessionState | null>(() => initialSession.quizState || null);

  const [userStates, setUserStates] = useState<Record<string, UserCardState>>(loadUserProgress);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [showResumeBanner, setShowResumeBanner] = useState<boolean>(() => {
    // Show resume banner if returning with existing card progress
    const hasProgress = Object.keys(loadUserProgress()).length > 0;
    return hasProgress && (initialSession.lastCardIndex > 0 || initialSession.mode !== 'flashcards');
  });

  // Automatically sync card progress to local storage
  useEffect(() => {
    saveUserProgress(userStates);
  }, [userStates]);

  // Automatically sync session state (mode, category, position, quiz state) to local storage
  useEffect(() => {
    saveStudySession({
      mode,
      selectedCategory,
      filterStarredOnly,
      lastCardIndex: currentIndex,
      quizState
    });
  }, [mode, selectedCategory, filterStarredOnly, currentIndex, quizState]);

  // Filtered deck according to category and starred toggle
  const activeDeck = useMemo(() => {
    return deck.filter(card => {
      if (selectedCategory !== 'All' && card.category !== selectedCategory) {
        return false;
      }
      if (filterStarredOnly && !userStates[card.id]?.isStarred) {
        return false;
      }
      return true;
    });
  }, [deck, selectedCategory, filterStarredOnly, userStates]);

  // Ensure currentIndex stays within bounds when filters change
  useEffect(() => {
    if (currentIndex >= activeDeck.length && activeDeck.length > 0) {
      setCurrentIndex(0);
    }
  }, [activeDeck.length, currentIndex]);

  // Count stats
  const totalCards = deck.length;
  const filteredCount = activeDeck.length;

  let masteredCount = 0;
  let learningCount = 0;
  let starredCount = 0;

  deck.forEach(c => {
    const s = userStates[c.id];
    if (s?.status === 'mastered') masteredCount++;
    if (s?.status === 'learning') learningCount++;
    if (s?.isStarred) starredCount++;
  });

  const handleUpdateStatus = (cardId: string, status: MasteryStatus) => {
    setUserStates(prev => {
      const existing = prev[cardId] || {
        cardId,
        status: 'new',
        isStarred: false,
        timesReviewed: 0,
        timesCorrect: 0
      };

      return {
        ...prev,
        [cardId]: {
          ...existing,
          status,
          timesReviewed: existing.timesReviewed + 1,
          timesCorrect: status === 'mastered' ? existing.timesCorrect + 1 : existing.timesCorrect,
          lastReviewed: Date.now()
        }
      };
    });
  };

  const handleToggleStar = (cardId: string) => {
    setUserStates(prev => {
      const existing = prev[cardId] || {
        cardId,
        status: 'new',
        isStarred: false,
        timesReviewed: 0,
        timesCorrect: 0
      };

      return {
        ...prev,
        [cardId]: {
          ...existing,
          isStarred: !existing.isStarred
        }
      };
    });
  };

  const handleShuffle = () => {
    setDeck(prev => {
      const shuffled = [...prev];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
    setCurrentIndex(0);
  };

  const handleResetProgress = () => {
    clearAllSavedData();
    setUserStates({});
    setCurrentIndex(0);
    setQuizState(null);
    setSelectedCategory('All');
    setFilterStarredOnly(false);
  };

  const handleRestoreData = (newStates: Record<string, UserCardState>, newSession: StudySessionState) => {
    setUserStates(newStates);
    if (newSession) {
      setMode(newSession.mode || 'flashcards');
      setSelectedCategory(newSession.selectedCategory || 'All');
      setFilterStarredOnly(newSession.filterStarredOnly || false);
      setCurrentIndex(newSession.lastCardIndex || 0);
      setQuizState(newSession.quizState || null);
    }
  };

  const handleStudyCardFromBrowse = (index: number) => {
    setCurrentIndex(index);
    setMode('flashcards');
  };

  const handleSaveQuizState = useCallback((state: QuizSessionState | null) => {
    setQuizState(state);
  }, []);

  const sessionState: StudySessionState = {
    mode,
    selectedCategory,
    filterStarredOnly,
    lastCardIndex: currentIndex,
    quizState,
    lastSavedTimestamp: Date.now()
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-teal-500 selection:text-slate-950">
      <Header
        mode={mode}
        setMode={setMode}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        filterStarredOnly={filterStarredOnly}
        setFilterStarredOnly={setFilterStarredOnly}
        totalCards={totalCards}
        filteredCount={filteredCount}
        masteredCount={masteredCount}
        learningCount={learningCount}
        starredCount={starredCount}
        onShuffle={handleShuffle}
        onResetProgress={handleResetProgress}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
        onOpenStats={() => setIsStatsOpen(true)}
      />

      {/* Auto-Resumed Session Notice (Dismissible) */}
      {showResumeBanner && (
        <div className="max-w-7xl mx-auto w-full px-4 pt-3">
          <div className="bg-slate-900 border border-teal-500/30 rounded-2xl px-4 py-2.5 flex items-center justify-between text-xs text-slate-300 shadow-md">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
              <span>
                <strong>Welcome back!</strong> Resumed your saved study session at <strong>Card #{currentIndex + 1}</strong> ({selectedCategory}).
              </span>
            </div>
            <button
              onClick={() => setShowResumeBanner(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition"
              title="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-7xl w-full mx-auto p-2 sm:p-4 md:p-6 flex flex-col justify-center">
        {mode === 'flashcards' && (
          <FlashcardViewer
            cards={activeDeck}
            currentIndex={currentIndex}
            onNavigate={setCurrentIndex}
            userStates={userStates}
            onUpdateStatus={handleUpdateStatus}
            onToggleStar={handleToggleStar}
          />
        )}

        {mode === 'quiz' && (
          <QuizMode
            cards={activeDeck}
            userStates={userStates}
            initialQuizState={quizState}
            onUpdateStatus={handleUpdateStatus}
            onSwitchToFlashcards={() => setMode('flashcards')}
            onSaveQuizState={handleSaveQuizState}
          />
        )}

        {mode === 'browse' && (
          <BrowseMode
            cards={deck}
            userStates={userStates}
            onToggleStar={handleToggleStar}
            onUpdateStatus={handleUpdateStatus}
            onStudyCard={handleStudyCardFromBrowse}
          />
        )}
      </main>

      {/* Modals */}
      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

      <DeckStatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        cards={deck}
        userStates={userStates}
        sessionState={sessionState}
        onResetProgress={handleResetProgress}
        onRestoreData={handleRestoreData}
      />
    </div>
  );
}

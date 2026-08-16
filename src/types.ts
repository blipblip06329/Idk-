export type CardTag = 'VERBATIM' | 'GENERATED';

export type Category = 
  | 'All'
  | 'Cellular Adaptations'
  | 'Cell Injury & Hypoxia'
  | 'Inflammation & Granulomas'
  | 'Pigments & Calcification'
  | 'Neoplasia & Tumor Biology'
  | 'Microbiology & Host Response'
  | 'Genetics & Inheritance'
  | 'Pharmacology & ADRs';

export interface OptionItem {
  key: string; // e.g. "A", "B", "C"
  text: string; // full text including or without prefix
}

export interface Flashcard {
  id: string;
  tag: CardTag;
  category: Category;
  question: string;
  options: OptionItem[];
  isMultiSelect?: boolean;
  correctKeys: string[];
  answerDisplay: string;
  highYieldExplanation: string;
  whyOthersWrong: { option: string; explanation: string }[];
  commonTrap: string;
}

export type MasteryStatus = 'new' | 'learning' | 'mastered';

export interface UserCardState {
  cardId: string;
  status: MasteryStatus;
  isStarred: boolean;
  timesReviewed: number;
  timesCorrect: number;
  lastReviewed?: number;
}

export type StudyMode = 'flashcards' | 'quiz' | 'browse';

export interface QuizSessionState {
  currentIndex: number;
  selectedKeys: string[];
  isSubmitted: boolean;
  score: number;
  streak: number;
  bestStreak: number;
  answeredHistory: {
    cardId: string;
    userKeys: string[];
    isCorrect: boolean;
  }[];
  isFinished: boolean;
}

export interface StudySessionState {
  mode: StudyMode;
  selectedCategory: Category;
  filterStarredOnly: boolean;
  lastCardId?: string;
  lastCardIndex: number;
  quizState?: QuizSessionState | null;
  lastSavedTimestamp: number;
}

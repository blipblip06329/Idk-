import { Category, StudyMode, StudySessionState, UserCardState } from '../types';

const PROGRESS_KEY = 'pathology_deck_card_progress_v2';
const SESSION_KEY = 'pathology_deck_session_state_v2';

// Legacy key migration support
const LEGACY_KEY = 'pathology_flashcards_progress_v1';

export function loadUserProgress(): Record<string, UserCardState> {
  try {
    const data = localStorage.getItem(PROGRESS_KEY);
    if (data) {
      return JSON.parse(data);
    }
    // Check legacy key
    const legacyData = localStorage.getItem(LEGACY_KEY);
    if (legacyData) {
      const parsed = JSON.parse(legacyData);
      localStorage.setItem(PROGRESS_KEY, legacyData);
      return parsed;
    }
  } catch (err) {
    console.error('Failed to load user progress from localStorage', err);
  }
  return {};
}

export function saveUserProgress(progress: Record<string, UserCardState>): void {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error('Failed to save user progress to localStorage', err);
  }
}

export const DEFAULT_SESSION: StudySessionState = {
  mode: 'flashcards',
  selectedCategory: 'All',
  filterStarredOnly: false,
  lastCardIndex: 0,
  quizState: null,
  lastSavedTimestamp: Date.now()
};

export function loadStudySession(): StudySessionState {
  try {
    const data = localStorage.getItem(SESSION_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      return {
        ...DEFAULT_SESSION,
        ...parsed,
      };
    }
  } catch (err) {
    console.error('Failed to load study session from localStorage', err);
  }
  return DEFAULT_SESSION;
}

export function saveStudySession(session: Partial<StudySessionState>): void {
  try {
    const current = loadStudySession();
    const updated: StudySessionState = {
      ...current,
      ...session,
      lastSavedTimestamp: Date.now()
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save study session to localStorage', err);
  }
}

export function exportAllDataAsJSON(userStates: Record<string, UserCardState>, session: StudySessionState) {
  const exportPayload = {
    app: 'PathologyMasteryDeck',
    version: '2.0',
    exportedAt: new Date().toISOString(),
    userStates,
    session
  };

  const jsonStr = JSON.stringify(exportPayload, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `pathology_deck_progress_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function importAllDataFromJSON(
  fileContent: string
): { success: boolean; userStates?: Record<string, UserCardState>; session?: StudySessionState; error?: string } {
  try {
    const parsed = JSON.parse(fileContent);
    if (parsed.userStates && typeof parsed.userStates === 'object') {
      saveUserProgress(parsed.userStates);
      if (parsed.session) {
        saveStudySession(parsed.session);
      }
      return {
        success: true,
        userStates: parsed.userStates,
        session: parsed.session || DEFAULT_SESSION
      };
    }
    return { success: false, error: 'Invalid backup file format' };
  } catch (err: any) {
    return { success: false, error: err.message || 'Failed to parse JSON file' };
  }
}

export function clearAllSavedData(): void {
  try {
    localStorage.removeItem(PROGRESS_KEY);
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(LEGACY_KEY);
  } catch (err) {
    console.error('Failed to clear saved data', err);
  }
}

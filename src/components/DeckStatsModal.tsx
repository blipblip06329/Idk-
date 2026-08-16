import React, { useRef, useState } from 'react';
import { 
  X, 
  BarChart3, 
  CheckCircle2, 
  RotateCcw, 
  Star, 
  BookOpen, 
  Trash2, 
  Download, 
  Upload, 
  ShieldCheck,
  Check
} from 'lucide-react';
import { Category, Flashcard, MasteryStatus, StudySessionState, UserCardState } from '../types';
import { CATEGORIES } from '../data/flashcardsData';
import { exportAllDataAsJSON, importAllDataFromJSON } from '../utils/storage';

interface DeckStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  cards: Flashcard[];
  userStates: Record<string, UserCardState>;
  sessionState: StudySessionState;
  onResetProgress: () => void;
  onRestoreData: (userStates: Record<string, UserCardState>, session: StudySessionState) => void;
}

export const DeckStatsModal: React.FC<DeckStatsModalProps> = ({
  isOpen,
  onClose,
  cards,
  userStates,
  sessionState,
  onResetProgress,
  onRestoreData
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importMessage, setImportMessage] = useState<{ text: string; isError?: boolean } | null>(null);

  if (!isOpen) return null;

  const total = cards.length;
  let mastered = 0;
  let learning = 0;
  let starred = 0;

  cards.forEach(card => {
    const s = userStates[card.id];
    if (s?.status === 'mastered') mastered++;
    if (s?.status === 'learning') learning++;
    if (s?.isStarred) starred++;
  });

  const unstudied = total - (mastered + learning);
  const masteryPercentage = total > 0 ? Math.round((mastered / total) * 100) : 0;

  // Category breakdown
  const categoryStats = CATEGORIES.filter(c => c !== 'All').map(cat => {
    const catCards = cards.filter(c => c.category === cat);
    const catMastered = catCards.filter(c => userStates[c.id]?.status === 'mastered').length;
    return {
      category: cat,
      total: catCards.length,
      mastered: catMastered,
      pct: catCards.length > 0 ? Math.round((catMastered / catCards.length) * 100) : 0
    };
  });

  const handleExport = () => {
    exportAllDataAsJSON(userStates, sessionState);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const res = importAllDataFromJSON(content);
      if (res.success && res.userStates && res.session) {
        onRestoreData(res.userStates, res.session);
        setImportMessage({ text: 'Progress restored successfully!' });
        setTimeout(() => setImportMessage(null), 4000);
      } else {
        setImportMessage({ text: res.error || 'Failed to import backup file', isError: true });
        setTimeout(() => setImportMessage(null), 4000);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Study Progress & Metrics</h3>
              <p className="text-xs text-slate-400">All progress is automatically saved</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auto-save notification pill */}
        <div className="mb-4 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-3 flex items-center gap-2.5 text-xs text-emerald-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong>Auto-Saved:</strong> Your card ratings, current positions, and quiz scores are continuously saved so you never restart from scratch.
          </span>
        </div>

        {/* Big Progress Bar */}
        <div className="mb-6 bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Overall Mastery</span>
            <span className="text-lg font-bold text-teal-400">{masteryPercentage}%</span>
          </div>
          <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden flex">
            <div 
              style={{ width: `${(mastered / total) * 100}%` }} 
              className="h-full bg-emerald-500 transition-all duration-500" 
              title={`Mastered: ${mastered}`}
            />
            <div 
              style={{ width: `${(learning / total) * 100}%` }} 
              className="h-full bg-amber-500 transition-all duration-500" 
              title={`Learning: ${learning}`}
            />
          </div>
          <div className="flex items-center justify-between mt-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              Mastered: {mastered}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              Learning: {learning}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              Unstudied: {unstudied}
            </span>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Category Breakdown
          </h4>
          <div className="space-y-2">
            {categoryStats.map(stat => (
              <div key={stat.category} className="bg-slate-800/40 p-2.5 rounded-xl border border-slate-800 text-xs">
                <div className="flex items-center justify-between mb-1.5 font-medium">
                  <span className="text-slate-200">{stat.category}</span>
                  <span className="text-slate-400">{stat.mastered} / {stat.total} ({stat.pct}%)</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                  <div 
                    style={{ width: `${stat.pct}%` }} 
                    className="h-full bg-teal-500 rounded-full transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backup & Sync Controls */}
        <div className="mb-6 p-4 rounded-2xl bg-slate-800/50 border border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Backup & Cross-Device Transfer
          </h4>
          <p className="text-xs text-slate-400 mb-3">
            Export a copy of your progress or import a backup file to sync between your phone, tablet, and computer.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleExport}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition"
            >
              <Download className="w-3.5 h-3.5 text-teal-400" />
              Export Progress (JSON)
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition"
            >
              <Upload className="w-3.5 h-3.5 text-indigo-400" />
              Import Backup
            </button>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImportFile}
              accept=".json"
              className="hidden"
            />
          </div>

          {importMessage && (
            <div className={`mt-2 p-2 rounded-xl text-xs font-medium ${
              importMessage.isError ? 'bg-rose-950/50 text-rose-300 border border-rose-500/30' : 'bg-emerald-950/50 text-emerald-300 border border-emerald-500/30'
            }`}>
              {importMessage.text}
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              if (window.confirm('Reset all your flashcard progress and ratings? This action cannot be undone.')) {
                onResetProgress();
                onClose();
              }
            }}
            className="flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 py-2 px-3 rounded-lg hover:bg-rose-500/10 transition"
          >
            <Trash2 className="w-4 h-4" />
            Reset Progress
          </button>

          <button
            onClick={onClose}
            className="py-2 px-5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition shadow-sm"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

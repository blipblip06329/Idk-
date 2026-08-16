import React from 'react';
import { X, Keyboard } from 'lucide-react';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: 'Space', desc: 'Flip flashcard front / back' },
    { key: 'Arrow Left (←)', desc: 'Previous flashcard' },
    { key: 'Arrow Right (→)', desc: 'Next flashcard' },
    { key: '1', desc: 'Rate card: Again / Hard' },
    { key: '2', desc: 'Rate card: Good / Review' },
    { key: '3', desc: 'Rate card: Mastered / Easy' },
    { key: 'S', desc: 'Star / Unstar current card' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Keyboard className="w-5 h-5 text-teal-400" />
            <h3 className="text-base font-bold text-white">Keyboard Shortcuts</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2.5 mb-6">
          {shortcuts.map((s, idx) => (
            <div key={idx} className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-300">{s.desc}</span>
              <kbd className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-teal-300 font-semibold shadow-inner">
                {s.key}
              </kbd>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs sm:text-sm transition"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

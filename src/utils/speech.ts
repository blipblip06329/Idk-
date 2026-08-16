let currentUtterance: SpeechSynthesisUtterance | null = null;

export function speakText(text: string, onEnd?: () => void): void {
  if (!('speechSynthesis' in window)) return;

  stopSpeaking();

  const cleanText = text
    .replace(/\[1\]/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .trim();

  currentUtterance = new SpeechSynthesisUtterance(cleanText);
  currentUtterance.rate = 1.0;
  currentUtterance.pitch = 1.0;
  currentUtterance.lang = 'en-US';

  if (onEnd) {
    currentUtterance.onend = () => {
      currentUtterance = null;
      onEnd();
    };
    currentUtterance.onerror = () => {
      currentUtterance = null;
      onEnd();
    };
  }

  window.speechSynthesis.speak(currentUtterance);
}

export function stopSpeaking(): void {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  currentUtterance = null;
}

export function isSpeaking(): boolean {
  if (!('speechSynthesis' in window)) return false;
  return window.speechSynthesis.speaking;
}

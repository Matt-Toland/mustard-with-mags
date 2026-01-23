import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function ThankYou({ onReset }) {
  useEffect(() => {
    // Fire confetti on mount
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ['#FFD000', '#C9A000', '#D64045', '#2B2B2B'];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    // Big burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors,
    });
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto px-4">
      <Card className="text-center">
        <div className="text-6xl mb-4">🎉</div>

        <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-2">
          You did it!
        </h2>

        <p className="font-display text-xl text-brown-medium mb-6">
          You're officially a <span className="text-mustard-dark">★ MUSTARD-TEER ★</span>
        </p>

        <p className="font-body text-brown-medium mb-6">
          Thanks for helping Mags make mustard dreams come true!
          Your feedback is pure gold (the mustard kind).
        </p>

        <div className="bg-mustard-bright border-3 border-charcoal rounded-2xl p-4 mb-8 shadow-[4px_4px_0_0_#2B2B2B]">
          <p className="font-display text-charcoal text-lg">
            🟡 2026 is gonna be SAUCY 🟡
          </p>
          <p className="font-body text-sm text-charcoal/70 mt-1">
            Stay tuned for updates...
          </p>
        </div>

        <Button variant="secondary" onClick={onReset}>
          Take it again
        </Button>
      </Card>
    </div>
  );
}

import React, { useState, useEffect, useCallback, useRef } from 'react';
import examples from './data/examples';
import CodePanel from './components/CodePanel';
import ExplanationPanel from './components/ExplanationPanel';
import Controls from './components/Controls';
import './styles/app.css';

export default function App() {
  const [exampleIndex, setExampleIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1200); // ms between auto-steps

  const intervalRef = useRef(null);

  const activeExample = examples[exampleIndex];
  const activeStep = activeExample.steps[stepIndex];
  const totalSteps = activeExample.steps.length;

  // ── Autoplay ────────────────────────────────────────────────
  const stopPlay = useCallback(() => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startPlay = useCallback(() => {
    setIsPlaying(true);
    intervalRef.current = setInterval(() => {
      setStepIndex((prev) => {
        const next = prev + 1;
        if (next >= activeExample.steps.length) {
          stopPlay();
          return prev;
        }
        return next;
      });
    }, speed);
  }, [speed, activeExample.steps.length, stopPlay]);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      stopPlay();
    } else {
      startPlay();
    }
  }, [isPlaying, startPlay, stopPlay]);

  // Restart interval when speed changes mid-play
  const handleSpeedChange = useCallback(
    (newSpeed) => {
      setSpeed(newSpeed);
      if (isPlaying) {
        stopPlay();
        // startPlay picks up the new speed from state on next render;
        // we schedule it after state update.
        setTimeout(() => {
          setIsPlaying(true);
        }, 0);
      }
    },
    [isPlaying, stopPlay]
  );

  // When isPlaying flips to true (from handleSpeedChange) restart the interval
  useEffect(() => {
    if (isPlaying && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setStepIndex((prev) => {
          const next = prev + 1;
          if (next >= activeExample.steps.length) {
            stopPlay();
            return prev;
          }
          return next;
        });
      }, speed);
    }
    return () => {
      // cleanup handled by stopPlay
    };
  }, [isPlaying, speed, activeExample.steps.length, stopPlay]);

  // Stop play and reset on example change
  const handleExampleChange = useCallback(
    (e) => {
      stopPlay();
      setExampleIndex(Number(e.target.value));
      setStepIndex(0);
    },
    [stopPlay]
  );

  const handlePrev = useCallback(() => {
    setStepIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setStepIndex((prev) => Math.min(totalSteps - 1, prev + 1));
  }, [totalSteps]);

  const handleReset = useCallback(() => {
    stopPlay();
    setStepIndex(0);
  }, [stopPlay]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') handleNext();
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   handlePrev();
      if (e.key === ' ') { e.preventDefault(); togglePlay(); }
      if (e.key === 'r' || e.key === 'R') handleReset();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleNext, handlePrev, togglePlay, handleReset]);

  // Cleanup on unmount
  useEffect(() => () => stopPlay(), [stopPlay]);

  return (
    <div className="app">
      {/* ── Header ──────────────────────────────────────────── */}
      <header className="app__header">
        <div className="app__logo">
          <div className="app__logo-icon">⚡</div>
          <span className="app__logo-text">Mind Your Code</span>
          <span className="app__tagline">— step-by-step execution visualizer</span>
        </div>

        <select
          className="app__example-select"
          value={exampleIndex}
          onChange={handleExampleChange}
        >
          {examples.map((ex, i) => (
            <option key={ex.name} value={i}>
              {ex.name}
            </option>
          ))}
        </select>
      </header>

      {/* ── Split body ──────────────────────────────────────── */}
      <main className="app__body">
        {/* LEFT: code panel */}
        <CodePanel
          code={activeExample.code}
          activeLine={activeStep.line}
          filename={activeExample.filename}
        />

        {/* RIGHT: explanation + controls */}
        <div className="app__right">
          <ExplanationPanel
            step={activeStep}
            stepIndex={stepIndex}
            totalSteps={totalSteps}
          />
          <Controls
            stepIndex={stepIndex}
            totalSteps={totalSteps}
            isPlaying={isPlaying}
            speed={speed}
            onPrev={handlePrev}
            onNext={handleNext}
            onTogglePlay={togglePlay}
            onSpeedChange={handleSpeedChange}
            onReset={handleReset}
          />
        </div>
      </main>

      {/* ── Keyboard shortcut hint ──────────────────────────── */}
      <div className="app__kbd-hint">
        ← → navigate &nbsp;·&nbsp; Space play/pause &nbsp;·&nbsp; R reset
      </div>
    </div>
  );
}
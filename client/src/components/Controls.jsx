import React from 'react';

const Controls = ({
  currentStep,
  totalSteps,
  isPlaying,
  onPlay,
  onPause,
  onNext,
  onPrevious,
  onReset,
  progress
}) => {
  return (
    <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-purple-400">Controls</h2>
        <div className="text-sm text-gray-400">
          Step {currentStep} of {totalSteps}
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={onPrevious}
          disabled={currentStep <= 1}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded transition-colors"
        >
          ⏮️ Previous
        </button>

        <button
          onClick={isPlaying ? onPause : onPlay}
          className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded transition-colors"
        >
          {isPlaying ? '⏸️ Pause' : '▶️ Play'}
        </button>

        <button
          onClick={onNext}
          disabled={currentStep >= totalSteps}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded transition-colors"
        >
          Next ⏭️
        </button>

        <button
          onClick={onReset}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition-colors"
        >
          🔄 Reset
        </button>
      </div>

      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Controls;
import React from 'react';

const CodePanel = ({ code, currentLine, onLineClick }) => {
  const lines = code.split('\n');

  return (
    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg h-full overflow-auto">
      <h2 className="text-lg font-semibold mb-4 text-blue-400">Code Viewer</h2>
      <pre className="text-sm font-mono">
        {lines.map((line, index) => (
          <div
            key={index}
            className={`px-2 py-1 cursor-pointer hover:bg-gray-800 transition-colors ${
              currentLine === index + 1 ? 'bg-blue-600 text-white' : ''
            }`}
            onClick={() => onLineClick(index + 1)}
          >
            <span className="text-gray-500 mr-4 select-none">
              {String(index + 1).padStart(3, ' ')}
            </span>
            <span className="text-green-400">{line}</span>
          </div>
        ))}
      </pre>
    </div>
  );
};

export default CodePanel;
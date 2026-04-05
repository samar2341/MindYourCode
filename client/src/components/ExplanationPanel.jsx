import React from 'react';

const ExplanationPanel = ({ step, memoryState }) => {
  return (
    <div className="bg-gray-800 text-gray-100 p-4 rounded-lg h-full overflow-auto">
      <h2 className="text-lg font-semibold mb-4 text-green-400">Step Explanation</h2>

      {step ? (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">{step.title}</h3>
            <p className="text-gray-300 leading-relaxed">{step.explanation}</p>
          </div>

          {memoryState && Object.keys(memoryState).length > 0 && (
            <div>
              <h4 className="text-md font-semibold text-purple-400 mb-2">Memory State</h4>
              <div className="bg-gray-900 p-3 rounded border">
                <pre className="text-sm text-gray-300">
                  {JSON.stringify(memoryState, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-8">
          <p>Select a line of code to see the explanation</p>
        </div>
      )}
    </div>
  );
};

export default ExplanationPanel;
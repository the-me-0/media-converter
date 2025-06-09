'use client';

import React from "react";

const StartProgression = () => {
  const [progress, setProgress] = React.useState(0);
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleProgressClicked = () => {
    // Simulate progress starting. Sets isProcessing to true, and increments progress every second. Once progress reaches 100, it resets to 0 and sets isProcessing to false.
    if (isProcessing) return;
    setIsProcessing(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          return 0;
        }
        return prev + 10;
      });
    }, 1000);
  }

  return (
    <>
      {isProcessing ? (
        <div className="w-full max-w-md mx-auto">
          <div className="bg-gray-800 rounded-full h-6 overflow-hidden">
            <div
              className="bg-amber-500 h-full transition-all duration-500 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-2">
            {`Processing... ${progress}%`}
          </p>
        </div>
      ) : (
        <button className={`
        bg-amber-500 text-gray-900 hover:bg-amber-600
        px-4 py-2 rounded transition-colors
        focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50
      `} onClick={handleProgressClicked}>
          Start processing
        </button>
      )}
    </>
  )
}

export default StartProgression;

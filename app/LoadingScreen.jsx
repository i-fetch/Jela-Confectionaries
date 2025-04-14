import React from 'react'

const LoadingScreen = () => {
  return (
    // <div  className="absolute top-0 left-0 w-full min-h-screen bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500 border-solid"></div>
        <p className="text-white mt-4 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
}

export default LoadingScreen

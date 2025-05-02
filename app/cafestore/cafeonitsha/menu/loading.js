// app/loading.js
"use client";

import { Loader } from "lucide-react";

export default function Loading() {
  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm">
    <div className="absolute w-full h-full z-[70] top-0 left-0 flex items-center justify-center bg-transparent backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <Loader className="animate-spin" size={28} color="#898080" strokeWidth={2.25} />
        <span className="mt-2 text-sm text-gray-500">Loading...</span>
      </div>
    </div>
  );
}



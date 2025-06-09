import React from "react";
import StartProgression from "@/lib/components/StartProgression";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start gap-8 bg-gray-900 text-amber-200 pt-16">
      <h1 className="uppercase text-2xl">AVIF/AV1 Media Converter</h1>
      <p className="">
        Convert your images to AVIF or AV1 format with ease. Upload your files and get high-quality, compressed images.
      </p>
      <StartProgression />
    </div>
  );
}

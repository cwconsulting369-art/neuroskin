"use client";

import { useCallback, useState, useRef } from "react";

interface ImageUploaderProps {
  onUpload: (file: File) => void;
  isLoading: boolean;
}

export default function ImageUploader({
  onUpload,
  isLoading,
}: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target?.result as string);
      reader.readAsDataURL(file);
      onUpload(file);
    },
    [onUpload]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleClick = () => fileInputRef.current?.click();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`relative cursor-pointer rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-300 ${
        isDragging
          ? "border-medical-blue bg-medical-blue/10 scale-[1.02]"
          : "border-navy-700 bg-navy-800/50 hover:border-medical-blue/50 hover:bg-navy-800"
      } ${isLoading ? "pointer-events-none opacity-60" : ""}`}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        className="hidden"
      />

      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-navy-900/80">
          <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-medical-blue border-t-transparent" />
            <p className="text-sm text-medical-blue">Analyse läuft...</p>
          </div>
        </div>
      )}

      {preview ? (
        <div className="flex flex-col items-center gap-4">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={preview}
              alt="Vorschau"
              className="max-h-64 rounded-xl object-contain"
            />
          </div>
          <p className="text-sm text-gray-400">
            Klicken oder ziehen Sie ein neues Bild hierher
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 py-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-700">
            <svg
              className="h-8 w-8 text-medical-blue"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
          </div>
          <div>
            <p className="text-base font-medium text-white">
              Bild hochladen
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Ziehen Sie ein Bild hierher oder klicken Sie zum Auswählen
            </p>
          </div>
          <div className="flex gap-2">
            {["JPG", "PNG", "WEBP"].map((fmt) => (
              <span
                key={fmt}
                className="rounded bg-navy-700 px-2 py-0.5 text-xs text-gray-400"
              >
                {fmt}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

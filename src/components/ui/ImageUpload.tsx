import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';

interface ImageUploadProps {
  currentImage: string;
  onImageChange: (file: File) => void;
  className?: string;
}

export default function ImageUpload({ 
  currentImage, 
  onImageChange,
  className 
}: ImageUploadProps): React.JSX.Element {
  const [previewUrl, setPreviewUrl] = useState(currentImage);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (file: File) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageChange(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files?.[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  return (
    <div 
      className={cn(
        "relative w-24 h-24",
        isDragging && "ring-2 ring-black ring-offset-2",
        className
      )}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <Image
        src={previewUrl}
        alt="Profile"
        fill
        className="rounded-full object-cover"
      />
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            handleFileChange(e.target.files[0]);
          }
        }}
      />
      <button 
        onClick={() => fileInputRef.current?.click()}
        className="absolute bottom-0 right-0 p-2 bg-black rounded-full 
        hover:bg-gray-800 transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
      >
        <Image 
          src="/images/icons/pencil.svg" 
          alt="Edit" 
          width={16} 
          height={16} 
        />
      </button>
    </div>
  );
} 
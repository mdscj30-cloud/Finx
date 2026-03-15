import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Image as ImageIcon, AlertCircle } from 'lucide-react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  priority = false,
  fallbackSrc 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
    setIsLoading(true);
    setError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
    if (fallbackSrc && currentSrc !== fallbackSrc) {
        setCurrentSrc(fallbackSrc);
        setError(false); // Try to load fallback
    }
  };

  return (
    <div 
      className={cn(
        "relative overflow-hidden bg-slate-100", 
        className
      )}
      style={{ 
        width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
        height: height ? (typeof height === 'number' ? `${height}px` : height) : 'auto',
      }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 animate-pulse z-10">
          <ImageIcon className="w-8 h-8 text-slate-300" />
        </div>
      )}
      
      {error && !fallbackSrc && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 text-slate-400 z-10 p-4 text-center">
          <AlertCircle className="w-8 h-8 mb-2" />
          <span className="text-xs">Image unavailable</span>
        </div>
      )}

      <img
        src={currentSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={handleLoad}
        onError={handleError}
        width={width}
        height={height}
      />
    </div>
  );
};

export default OptimizedImage;
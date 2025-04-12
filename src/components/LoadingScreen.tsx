
import React, { useEffect, useState } from 'react';
import { Loader, Brain, Coffee, BugOff } from 'lucide-react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [loadingText, setLoadingText] = useState('Mengompilasi kode yang ngga perlu dikoding...');
  const [progress, setProgress] = useState(0);
  
  const loadingTexts = [
    'Mengompilasi kode yang ngga perlu dikoding...',
    'Menjadi programmer handal tanpa harus ngoding...',
    'Menyiapkan kursus ngoding tanpa ngoding...',
    'Menyihir algoritma biar kerja sendiri...',
    'Nyuruh AI ngerjain tugas coding kamu...',
    'Belajar jadi programmer tanpa ketik satu baris kode pun...',
    'Loading kemampuan coding instant...',
    'Bikin website tanpa perlu bingung sama syntax error...',
    'Menghapus semua bug dengan kekuatan pikiran...',
    'Memasukkan kopi ke USB drive untuk extra processing power...',
    'Meyakinkan komputer untuk bekerja lebih keras...',
    'Bernegosiasi dengan error untuk pergi dengan damai...',
  ];
  
  useEffect(() => {
    // Mengganti loading setiap 1.5 detik
    const textInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loadingTexts.length);
      setLoadingText(loadingTexts[randomIndex]);
    }, 1500);
    
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 15;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 300);
    
    const timer = setTimeout(() => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
      setProgress(100);
      setTimeout(onComplete, 300); 
    }, 2500);
    
    return () => {
      clearTimeout(timer);
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete, loadingTexts]);
  
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-900">
      <div className="w-full max-w-md px-4 text-center">
        <h1 className="text-3xl font-bold gradient-text mb-2">Imphen</h1>
        <p className="text-white/70 mb-8">Programmer Handal Tanpa Ngoding</p>
        
        <div className="mb-4 flex items-center justify-center gap-4">
          {progress < 33 && <Loader className="animate-spin text-accent1 h-8 w-8" />}
          {progress >= 33 && progress < 66 && <Brain className="text-accent1 h-8 w-8 animate-pulse" />}
          {progress >= 66 && <BugOff className="text-accent2 h-8 w-8 animate-bounce" />}
          <Coffee className="text-accent2 h-7 w-7 animate-pulse-slow" />
        </div>
        
        <p className="text-white/80 text-lg mb-6 min-h-[3rem]">{loadingText}</p>
        
        <div className="w-full bg-dark-700 h-2 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-accent1 to-accent2 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-white/60 text-sm mt-3">
          {Math.round(progress)}% loading kemampuan programming instan...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;

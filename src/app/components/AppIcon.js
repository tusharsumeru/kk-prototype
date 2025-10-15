'use client';

import Image from 'next/image';

export default function AppIcon() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[14px] sm:rounded-[16px] overflow-hidden shadow-lg bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center">
        <img
          src="/images/kk-icon-new.png"
          alt="Karmic Keran"
          className="w-full h-full object-contain"
          onError={(e) => {
            console.log('Image failed to load:', e.target.src);
            e.target.style.backgroundColor = 'red';
          }}
          onLoad={() => console.log('Image loaded successfully')}
        />
      </div>
      <div className="text-white text-xs sm:text-sm font-medium mt-2 text-center drop-shadow-lg">
        Karmic Keran
      </div>
    </div>
  );
}

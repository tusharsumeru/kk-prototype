'use client';

import { useState } from 'react';
import Image from 'next/image';
import AppScreen from './AppScreen';

export default function MobileScreen() {
  const [activeTab, setActiveTab] = useState('home');
  const [showApp, setShowApp] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  const tabs = [
    { id: 'home', name: 'Home', icon: '🏠' },
    { id: 'horoscope', name: 'Horoscope', icon: '🔮' },
    { id: 'chart', name: 'Chart', icon: '⭐' },
    { id: 'profile', name: 'Profile', icon: '👤' }
  ];

  return (
    <div className="relative w-[360px] h-[98vh] max-h-[730px] sm:w-[380px] md:w-[420px] bg-black rounded-[45px] sm:rounded-[50px] md:rounded-[55px] shadow-2xl border-[2px] sm:border-[2px] md:border-[3px] border-black">
      {/* iPhone Dynamic Island */}
      <div className="absolute top-[12px] sm:top-[15px] left-1/2 transform -translate-x-1/2 w-[90px] sm:w-[110px] h-[30px] sm:h-[35px] bg-black rounded-[25px] z-10"></div>
      
      {/* iPhone Speaker */}
      <div className="absolute top-[21px] sm:top-[25px] left-1/2 transform -translate-x-1/2 w-[45px] sm:w-[50px] h-[4px] sm:h-[5px] bg-gray-600 rounded-full"></div>
      
      {/* iPhone Camera */}
      <div className="absolute top-[19px] sm:top-[23px] left-[30px] sm:left-[35px] w-[9px] sm:w-[10px] h-[9px] sm:h-[10px] bg-gray-600 rounded-full"></div>
      
      {/* iPhone Screen */}
      <div className="absolute inset-[2px] sm:inset-[2px] md:inset-[3px] rounded-[43px] sm:rounded-[48px] md:rounded-[52px] overflow-hidden">
        <div className="w-full h-full relative">
          <Image
            src="/images/wp2597278 (1).jpg"
            alt="Mobile Wallpaper"
            fill
            className="object-cover"
            priority
          />
          {/* App Icon in top corner */}
          <div className="absolute top-6 left-6 z-10 cursor-pointer" onClick={() => {
            setShowSplash(true);
            setTimeout(() => {
              setShowSplash(false);
              setShowApp(true);
            }, 2000);
          }}>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[14px] sm:rounded-[16px] overflow-hidden shadow-lg bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center">
                <Image
                  src="/images/InShot_20251015_135112564.jpg"
                  alt="Karmic Keran"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-white text-xs sm:text-sm font-medium mt-2 text-center drop-shadow-lg">
                Karmic Keran
              </div>
            </div>
          </div>
          
                {/* Splash Screen */}
                {showSplash && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-orange-500 to-blue-600 z-30 flex items-center justify-center animate-fadeIn">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-white/30 backdrop-blur-md border-2 border-white/40 flex items-center justify-center shadow-2xl animate-pulse">
                        <Image
                          src="/images/InShot_20251015_135112564.jpg"
                          alt="Karmic Keran"
                          width={80}
                          height={80}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                      <h1 className="text-4xl font-bold text-white mb-3 animate-bounce bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                        Karmic Keran
                      </h1>
                      <p className="text-white/90 text-lg font-medium mb-4">Your Cosmic Journey Awaits</p>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-white/80 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                        <div className="w-2 h-2 bg-white/80 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                        <div className="w-2 h-2 bg-white/80 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                      </div>
                    </div>
                  </div>
                )}

          {/* App Screen Overlay */}
          {showApp && (
            <AppScreen onClose={() => setShowApp(false)} />
          )}
        </div>
      </div>
      
      {/* iPhone Side Buttons */}
      <div className="absolute -left-[2px] sm:-left-[3px] top-[100px] sm:top-[120px] w-[3px] sm:w-[4px] h-[25px] sm:h-[30px] bg-gray-700 rounded-r-lg"></div>
      <div className="absolute -left-[2px] sm:-left-[3px] top-[140px] sm:top-[165px] w-[3px] sm:w-[4px] h-[50px] sm:h-[60px] bg-gray-700 rounded-r-lg"></div>
      <div className="absolute -left-[2px] sm:-left-[3px] top-[200px] sm:top-[235px] w-[3px] sm:w-[4px] h-[50px] sm:h-[60px] bg-gray-700 rounded-r-lg"></div>
      <div className="absolute -right-[2px] sm:-right-[3px] top-[140px] sm:top-[165px] w-[3px] sm:w-[4px] h-[70px] sm:h-[85px] bg-gray-700 rounded-l-lg"></div>
    </div>
  );
}

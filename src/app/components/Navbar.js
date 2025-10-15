'use client';

import { useState } from 'react';
import { 
  HiHome, 
  HiCog6Tooth, 
  HiCalendarDays, 
  HiCog6Tooth as HiSettings
} from 'react-icons/hi2';

export default function Navbar({ activeTab, setActiveTab }) {

  const tabs = [
    { id: 'home', name: 'Home', icon: HiHome },
    { id: 'services', name: 'Services', icon: HiCog6Tooth },
    { id: 'booking', name: 'My Booking', icon: HiCalendarDays },
    { id: 'settings', name: 'Settings', icon: HiSettings }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-100 via-orange-100 to-blue-100 px-4 py-4 backdrop-blur-sm">
      <div className="flex justify-around">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.id
                        ? 'bg-gradient-to-r from-purple-500 to-orange-500 text-white shadow-lg shadow-purple-500/30'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-white/50'
              }`}
            >
              <IconComponent className={`text-xl mb-1 ${activeTab === tab.id ? 'animate-bounce' : ''}`} />
              <span className={`text-xs font-semibold ${activeTab === tab.id ? 'text-white' : 'text-gray-600'}`}>
                {tab.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

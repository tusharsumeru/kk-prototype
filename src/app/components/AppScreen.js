'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import ServicesScreen from './ServicesScreen';
import MyBookingScreen from './MyBookingScreen';

export default function AppScreen({ onClose }) {
  const [activeTab, setActiveTab] = useState('home');
  return (
    <div className="absolute inset-0 bg-white z-20 flex flex-col">
      {/* App Header */}
            <div className="bg-gradient-to-r from-purple-500 via-orange-500 to-blue-500 px-6 py-5 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className="text-white text-xl hover:bg-white/20 rounded-full p-2 transition-all duration-300 hover:scale-110"
          >
            ←
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white text-sm">✨</span>
            </div>
            <h1 className="text-white text-xl font-bold">Karmic Keran</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            🔔
          </button>
        </div>
      </div>
      
      {/* App Content */}
      {activeTab === 'home' && (
        <div className="flex-1 bg-gradient-to-br from-purple-50 via-orange-50 to-blue-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-r from-purple-400 to-orange-400 flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-4xl">✨</span>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mb-2">
              Welcome to Karmic Keran
            </h2>
            <p className="text-gray-600 text-sm">Your cosmic journey starts here 🌟</p>
          </div>
        </div>
      )}

      {activeTab === 'services' && <ServicesScreen />}
      
      {activeTab === 'booking' && <MyBookingScreen />}
      
      {activeTab === 'settings' && (
        <div className="flex-1 bg-gradient-to-br from-purple-50 via-orange-50 to-blue-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-r from-purple-400 to-orange-400 flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-4xl">⚙️</span>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mb-2">
              Settings
            </h2>
            <p className="text-gray-600 text-sm">App settings coming soon 🌟</p>
          </div>
        </div>
      )}
      
      {/* Bottom Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

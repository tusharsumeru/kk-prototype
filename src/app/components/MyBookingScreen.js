'use client';

import { useState } from 'react';
import { 
  HiCalendarDays, 
  HiClock, 
  HiCreditCard, 
  HiGlobeAlt, 
  HiPencil, 
  HiVideoCamera, 
  HiChevronDown, 
  HiChevronUp,
  HiSparkles,
  HiBuildingOffice2,
  HiHome
} from 'react-icons/hi2';

export default function MyBookingScreen() {
  const [expandedCard, setExpandedCard] = useState(null);

  const bookings = [
    {
      id: 1,
      title: "Energy at Workplace/ New Workplace",
      astrologer: "With Karmic Keran",
      date: "Wednesday 22 October 2025 at 17:30",
      timezone: "Europe/London",
      status: "upcoming",
      payment: "£550.00",
      paymentStatus: "Paid",
      mode: "Online",
      price: "£550.00",
      icon: HiBuildingOffice2
    },
    {
      id: 2,
      title: "Energy at Home/ New Home",
      astrologer: "With Karmic Keran",
      date: "Wednesday 22 October 2025 at 10:00",
      timezone: "Europe/London",
      status: "upcoming",
      payment: "£250.00",
      paymentStatus: "Paid",
      mode: "Online",
      price: "£250.00",
      icon: HiHome
    }
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-purple-50 via-orange-50 to-blue-50 p-4 overflow-y-auto scrollbar-hide">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-orange-500 flex items-center justify-center shadow-lg">
              <HiCalendarDays className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
              My Bookings
            </h2>
          </div>
          <p className="text-gray-600">Your cosmic appointments ✨</p>
        </div>

        <div className="grid gap-6">
          {bookings.map((booking, index) => (
            <div
              key={booking.id}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">{booking.title}</h3>
                <p className="text-purple-600 font-medium mb-3">{booking.astrologer}</p>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm rounded-full font-medium">
                    {booking.status}
                  </span>
                  <span className="text-2xl font-bold text-gray-800">{booking.price}</span>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center">
                    <HiClock className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Consultation Time</p>
                    <p className="font-medium text-gray-800">{booking.date} ({booking.timezone})</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                      <HiGlobeAlt className="text-white text-sm" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Mode</p>
                      <p className="font-medium text-gray-800">{booking.mode}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center">
                      <HiCreditCard className="text-white text-sm" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Payment</p>
                      <p className="font-medium text-gray-800">{booking.payment} <span className="text-xs text-green-600 font-medium">({booking.paymentStatus})</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-purple-500 to-orange-500 text-white py-3 px-6 rounded-2xl font-semibold hover:from-purple-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <HiPencil className="text-lg" />
                  Edit Birth Details
                </button>
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-2xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <HiVideoCamera className="text-lg" />
                  Join Audio/Video Call
                </button>
                <button 
                  onClick={() => setExpandedCard(expandedCard === booking.id ? null : booking.id)}
                  className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  {expandedCard === booking.id ? <HiChevronUp className="text-lg" /> : <HiChevronDown className="text-lg" />}
                  More Details
                </button>
              </div>

              {/* Expanded Details */}
              {expandedCard === booking.id && (
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-orange-50 rounded-2xl border border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-orange-400 flex items-center justify-center">
                      <HiSparkles className="text-white text-xs" />
                    </div>
                    <h4 className="font-semibold text-gray-800">Additional Information</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This consultation will provide you with detailed insights about your workplace energy and how to optimize it for success and prosperity. We&apos;ll analyze your personal horoscope combined with your workplace&apos;s energy patterns.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

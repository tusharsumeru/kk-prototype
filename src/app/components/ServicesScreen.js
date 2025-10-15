'use client';

import { useState } from 'react';

export default function ServicesScreen() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "IN DEPTH READING",
      duration: "60 min",
      price: "£100",
      type: "Online",
      callType: "Audio / Video Call",
      description: "This reading is an in-depth analysis ideal for those looking for long-term guidance and clarity. Ask questions about any area of your life—whether it's career, relationships, or personal growth.",
      features: [
        "Casting & interpretation of your horoscope",
        "Identifying the problems you are facing without you having to disclose them",
        "Analysing the major planetary influences you are currently experiencing on all aspects of your life",
        "Gemstones | Talismans & Yantra remedies",
        "Plenty of opportunity for you to ask questions throughout the Reading"
      ]
    },
    {
      id: 2,
      title: "COMPATIBILITY READING",
      duration: "30 min",
      price: "£100",
      type: "Online",
      callType: "Audio / Video Call",
      description: "Whether in love or business, astrology offers a deeper insight into the strengths and challenges within your relationships and how you can improve communication and avoid potential misunderstandings.",
      features: [
        "Casting & interpretation of two horoscopes",
        "Analysing major planetary degrees and angles using my compatibility formulae",
        "Opportunity to ask specific questions about your relationship"
      ]
    },
    {
      id: 3,
      title: "GENERAL READING",
      duration: "30 min",
      price: "£50",
      type: "Online",
      callType: "Audio / Video Call",
      description: "This reading is designed for those seeking general guidance and clarity. Whether you need help with a personal issue or professional decision-making, the reading offers insightful predictions to guide you.",
      features: [
        "Casting & interpretation of your horoscope",
        "Identifying the problems you are currently facing without you having to disclose them",
        "Gemstones | Talismans & Yantra remedies",
        "Opportunity to ask specific questions"
      ]
    },
    {
      id: 4,
      title: "ENERGY AT HOME/ NEW HOME",
      duration: "45 min",
      price: "£250",
      type: "Online",
      callType: "Audio / Video Call",
      description: "Did you know your home has its own horoscope? At Karmic Keran, we go a step further by aligning your personal horoscope and combining it with the principles of Vedic Astrology, Vastu Shastra and Feng Shui.",
      features: [
        "Dual Horoscope Casting & Interpretation – yours and your property's",
        "Integrated Astrological Space Analysis – combining Vastu Shastra | Feng Shui | and your birth chart",
        "Full walkthrough – detailed review of your home"
      ]
    },
    {
      id: 5,
      title: "ENERGY AT WORKPLACE/ NEW WORKPLACE",
      duration: "45 min",
      price: "£550",
      type: "Online",
      callType: "Audio / Video Call",
      description: "Did you know your workplace has its own horoscope? At Karmic Keran, we go a step further by aligning your personal horoscope and combining it with the principles of Vedic Astrology, Vastu Shastra and Feng Shui.",
      features: [
        "Dual Horoscope Casting & Interpretation – yours and your property's",
        "Integrated Astrological Space Analysis – combining Vastu Shastra | Feng Shui | and your birth chart",
        "Full walkthrough – detailed review of your place of work"
      ]
    }
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-purple-50 via-orange-50 to-blue-50 p-4 overflow-y-auto scrollbar-hide">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mb-2">
            Our Services ✨
          </h2>
          <p className="text-gray-600">Choose your cosmic journey</p>
        </div>

        <div className="grid gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                hoveredCard === service.id ? 'shadow-purple-500/20' : ''
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-3">
                           <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-orange-500 text-white text-sm rounded-full font-medium">
                      {service.duration}
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm rounded-full font-medium">
                      {service.price}
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm rounded-full font-medium">
                      {service.type}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                           <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✨</span>
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </div>
                ))}
              </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-orange-500 text-white py-3 px-6 rounded-2xl font-semibold hover:from-purple-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Book Now 🚀
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';
import TierBadge from '../components/TierBadge';
import { useEffect } from 'react';

export default function EventCard({ event }: { event: any }) {
  useEffect(() => {
    const glow = document.createElement('div');
    glow.id = 'cursor-glow';
    document.body.appendChild(glow);

    const handleMouseMove = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(glow);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      {/* Watermark background */}
    

      {/* Event Box */}
      <div className="bg-white p-6 rounded-xl shadow-xl z-10 max-w-md w-full text-center">
        <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
          <Image
            src={event.image_url || '/placeholder.jpg'}
            alt={event.title}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
        <p className="text-gray-700 text-sm mb-1">{event.description}</p>
        <p className="text-gray-500 text-sm mb-2">
          📅 {new Date(event.event_date).toLocaleDateString()}
        </p>
        <TierBadge tier={event.tier} />
      </div>
    </div>
  );
}

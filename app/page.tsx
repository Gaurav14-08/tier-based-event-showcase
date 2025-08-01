'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
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
   <main className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
  {/* Background Watermark Text */}
 

  {/* Centered Box */}
  <div className="bg-white p-10 rounded-xl shadow-xl z-10 text-center max-w-xl w-full">
    <h1 className="text-3xl md:text-4xl font-bold mb-6">Welcome to the Tier-Based Event Showcase</h1>
    <Link href="/events" className="text-blue-700 font-semibold underline text-lg">
      Go to Events
    </Link>
  </div>
</main>

  );
}

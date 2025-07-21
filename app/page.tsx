'use client';

import Navbar from '@/components/navbar';
import Card from '@/components/card';



export default function Home() {
  return (
    <div className="relative w-full h-screen bg-[#0D0D2B] text-white overflow-y-scroll scroll-smooth snap-y snap-mandatory overscroll-y-none">
      
      {/* ✅ Navbar fixed only on this page */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* ✅ Offset so content isn't hidden behind navbar */}
      <main className="pt-16">
        {/* Hero / Profile */}
        <div className="snap-start h-screen w-full" id="Home">
          <Card />
          </div>
        
      </main>
      
    </div>
  );
}

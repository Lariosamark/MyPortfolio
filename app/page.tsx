'use client';

import Navbar from '@/components/navbar'; // ✅ Add navbar import
import Card from '@/components/card';
import AboutMe from '@/components/Aboutme';
import Skill from '@/components/skill';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-[#0D0D2B] text-white overflow-y-scroll scroll-smooth snap-y snap-mandatory overscroll-y-none">
      {/* ✅ Navbar visible on all pages */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Offset to avoid content under navbar */}
      <main className="pt-16"> {/* adjust pt (padding-top) to match your navbar height */}
        
        {/* Hero / Profile */}
        <section id='Home' className="snap-start h-screen w-full">
          <Card />
        </section>

        {/* About Section */}
        <section id="about" className="snap-start h-screen w-full">
          <AboutMe />
        </section>

        {/* Skills Section */}
        <section className="snap-start h-screen w-full">
          <Skill />
        </section>

        {/* Projects Section */}
        <section className="snap-start h-screen w-full">
          <Projects />
        </section>

        {/* Contact + Footer */}
        <section id="contact" className="snap-start h-screen w-full flex flex-col">
          <Contact />
          <Footer />
        </section>
      </main>
    </div>
  );
}

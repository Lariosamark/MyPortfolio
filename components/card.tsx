import Image from "next/image";

const LandingPage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/background.png')" }} // Replace with your own image path
    >
      {/* Hero Section */}
      <section id="Home" className="relative h-screen flex items-center justify-center">
        {/* Semi-transparent Overlay with Blur */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-m"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-4 lg:space-y-6">
              <div className="space-y-1 lg:space-y-2">
                <p className="pt-6 text-base lg:text-lg text-amber-300 font-medium tracking-wide animate-fade-in">
                  Hello, I am
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black leading-tight animate-slide-up">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    Mark Anthony
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                    Lariosa
                  </span>
                </h1>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
                A passionate <span className="text-amber-400 font-bold">Bachelor of Science in Information Technology</span> focused on creating stunning web & mobile experiences.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start pt-4 lg:pt-6 animate-fade-in-up delay-300">
                <a href="/aboutme">
                  <button className="px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform text-sm lg:text-base">
                    About Me
                  </button>
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-4 lg:pt-6 animate-fade-in-up delay-400">
                <p className="text-gray-400 text-xs lg:text-sm mb-3 lg:mb-4">Connect with me</p>
                <div className="flex gap-4 lg:gap-6 justify-center lg:justify-start">
                  <a
                    href="https://www.facebook.com/macky2020/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 lg:w-12 h-10 lg:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
                  >
                    <Image
                      src="/facebook.svg"
                      alt="Facebook"
                      width={20}
                      height={20}
                      className="group-hover:scale-110 transition-transform lg:w-6 lg:h-6"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/maaak_oy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 lg:w-12 h-10 lg:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:scale-110 transition-all duration-300 group"
                  >
                    <Image
                      src="/instagram.svg"
                      alt="Instagram"
                      width={20}
                      height={20}
                      className="group-hover:scale-110 transition-transform lg:w-6 lg:h-6"
                    />
                  </a>
                  <a
                    href="https://github.com/Lariosamark"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 lg:w-12 h-10 lg:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gray-800 hover:scale-110 transition-all duration-300 group"
                  >
                    <Image
                      src="/github.svg"
                      alt="GitHub"
                      width={20}
                      height={20}
                      className="group-hover:scale-110 transition-transform lg:w-6 lg:h-6"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 1.2s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
};

export default LandingPage;

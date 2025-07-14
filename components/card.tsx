import Image from "next/image";


const Card = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-[#0D0D2B] via-[#1F1F3A] to-[#0D0D2B] text-white flex flex-col overflow-hidden">
      {/* Navbar */}
      

      {/* Background Glow Effect */}
      <div className="absolute -bottom-10 -right-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-pink-400 rounded-full blur-[160px] opacity-30 z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 max-w-7xl mx-auto w-full">
          
          {/* LEFT - TEXT */}
          <div className="text-center lg:text-left">
            <p className="text-base sm:text-lg mb-2 text-gray-300">Hello, I am</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Mark Anthony <span className="block">Lariosa</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300">
              A passionate <span className="text-pink-400 font-semibold">Bachelor of Science in Information Technology</span> focused on modern web & mobile design.
            </p>

            <p className="mt-8 text-gray-400 text-sm">Find Me on</p>
            <div className="flex justify-center lg:justify-start gap-5 mt-3">
              <a href="https://www.facebook.com/macky2020/" target="_blank" rel="noopener noreferrer">
                <Image src="/facebook.svg" alt="Facebook" width={28} height={28} />
              </a>
              <a href="https://www.instagram.com/maaak_oy/" target="_blank" rel="noopener noreferrer">
                <Image src="/instagram.svg" alt="Instagram" width={28} height={28} />
              </a>
              <a href="https://github.com/Lariosamark" target="_blank" rel="noopener noreferrer">
                <Image src="/github.svg" alt="GitHub" width={28} height={28} />
              </a>
            </div>
          </div>

          {/* RIGHT - IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <Image
                src="/image.png.jpg"
                alt="Mark Anthony C. Lariosa"
                width={330}
                height={350}
                className="rounded-2xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-500 to-transparent opacity-20 blur-2xl z-[-1]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;

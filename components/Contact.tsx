export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0D0D2B] text-white px-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Email Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-pink-400/30 transition">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl">📧</span>
            <h3 className="text-lg font-bold">Email Me</h3>
          </div>
          <p className="text-sm text-gray-300">markanthonylariosa3@gmail.com</p>
        </div>

        {/* Phone Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-blue-400/30 transition">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl">📞</span>
            <h3 className="text-lg font-bold">Call Me</h3>
          </div>
          <p className="text-sm text-gray-300">0994 441 2995</p>
        </div>

      </div>
    </section>
  );
}

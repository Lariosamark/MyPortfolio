'use client';
import Navbar from "@/components/navbar";
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0D0D2B] text-white flex items-center justify-center px-6 py-20">
      <Navbar/>
      <div className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-amber-400">Let's Work Together</h1>

        <p className="text-lg text-gray-300">
          Feel free to reach out to me via phone or email.
        </p>

        <div className="space-y-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
            <h2 className="text-lg font-semibold text-white">Phone</h2>
            <p className="text-gray-300">0994 441 2995</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
            <h2 className="text-lg font-semibold text-white">Email</h2>
            <p className="text-gray-300">markanthonylariosa3@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

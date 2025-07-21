
import Link from 'next/link';

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-[#0D0D2B] text-white px-6 py-12">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold">Educational Background</h1>

        <div className="space-y-6 text-left">
          <div className="bg-white/10 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-amber-400">College</h2>
            <p className="text-gray-300">
              <strong>St. Peter's College</strong> <br />
              Bachelor of Science in Information Technology <br />
              2022 – Present
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-amber-400">Senior High School</h2>
            <p className="text-gray-300">
              <strong>[Your SHS Name]</strong> <br />
              ICT Strand <br />
              [Graduation Year]
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-amber-400">Junior High School</h2>
            <p className="text-gray-300">
              <strong>[Your JHS Name]</strong> <br />
              [Graduation Year]
            </p>
          </div>
        </div>

        <Link href="/aboutme">
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:scale-105 transition duration-300">
            Back to About Me
          </button>
        </Link>
      </div>
    </div>
  );
}

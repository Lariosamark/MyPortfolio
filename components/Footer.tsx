// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-[#0D0D2B] text-white pt-8 pb-3 px-4 text-center border-t border-white/10">
      <p className="text-sm md:text-base text-gray-300 italic mb-2 max-w-xl mx-auto">
        “Success doesn’t come from what you do occasionally, it comes from what you do consistently.”
      </p>
      <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Mark Anthony Lariosa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

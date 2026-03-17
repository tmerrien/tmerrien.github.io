export default function Footer() {
  return (
    <footer className="py-8 px-5 sm:px-6 max-w-4xl mx-auto border-t border-[#E4E4E7] dark:border-[#27272A]">
      <div className="flex justify-between items-center">
        <p className="text-xs text-[#A1A1AA] dark:text-[#52525B] font-mono">
          &copy; {new Date().getFullYear()} Tanguy Merrien
        </p>
        <p className="text-xs text-[#A1A1AA] dark:text-[#52525B]">
          Ottawa, Canada
        </p>
      </div>
    </footer>
  );
}

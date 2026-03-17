export default function Footer() {
  return (
    <footer className="py-8 px-6 max-w-3xl mx-auto border-t border-gray-200 dark:border-gray-800 mt-12">
      <p className="text-xs text-gray-400 dark:text-gray-600">
        © {new Date().getFullYear()} Tanguy Merrien
      </p>
    </footer>
  );
}

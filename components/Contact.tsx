export default function Contact() {
  return (
    <section id="contact" className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
      <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
        <p>📧 <a href="mailto:tmerrien@outlook.com" className="hover:text-blue-600 dark:hover:text-blue-400">tmerrien@outlook.com</a></p>
        <p>🔗 <a href="https://github.com/tmerrien" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">GitHub</a> · <a href="https://www.linkedin.com/in/tanguy-merrien-26aa96146/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">LinkedIn</a></p>
        <p>📍 Ottawa, Canada</p>
      </div>
    </section>
  );
}

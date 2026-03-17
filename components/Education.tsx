export default function Education() {
  return (
    <section id="education" className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>

      <div className="mb-6">
        <div className="flex justify-between items-baseline mb-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">B.Sc. Computer Science (Honours)</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">December 2025</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">University of Prince Edward Island — Minor: Physics</p>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <p className="font-medium mb-1">Honours Thesis</p>
          <p className="italic mb-2">&ldquo;Building a Wizard-of-Oz Platform for Evaluating LLM Conversational Quality&rdquo;</p>
          <p>Designed and built a research platform for controlled evaluation of LLM response quality. 
          Supports three experimental conditions (direct-AI, human-mediated AI, direct-human) to study 
          how tone, empathy, refusal strategies, and formatting affect user trust in conversational AI systems.</p>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Professional Certificate in Sound Engineering</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">April 2020</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Harris Institute</p>
      </div>
    </section>
  );
}

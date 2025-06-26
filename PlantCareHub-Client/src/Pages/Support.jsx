import React from "react";

const Support = () => (
  <div className="max-w-4xl mx-auto py-16 px-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
    <h1 className="text-3xl font-bold mb-4 text-green-700 dark:text-green-300">Support</h1>
    <p className="text-gray-700 dark:text-gray-200 text-lg mb-6">
      Need help? Browse our FAQ or contact our support team for assistance.
    </p>
    <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-200">
      <li>Check our <a href="/faq" className="text-green-600 dark:text-green-400 underline">FAQ</a> for common questions.</li>
      <li>Email us at <a href="mailto:support@plantcarehub.com" className="text-green-600 dark:text-green-400 underline">support@plantcarehub.com</a></li>
      <li>Join our community forum for peer support.</li>
    </ul>
    <a
      href="mailto:support@plantcarehub.com"
      className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
    >
      Contact Support
    </a>
  </div>
);

export default Support;

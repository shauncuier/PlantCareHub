import React from "react";

/**
 * Contact page component.
 * Provides a contact form for user inquiries and feedback.
 * Follows industry standards for clarity and maintainability.
 */
const Contact = () => (
  <div className="max-w-4xl mx-auto py-16 px-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
    <h1 className="text-3xl font-bold mb-4 text-green-700 dark:text-green-300">Contact Us</h1>
    <p className="text-gray-700 dark:text-gray-200 text-lg mb-6">
      Have questions or feedback? Reach out to us using the form below.
    </p>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
      />
      <textarea
        placeholder="Your Message"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
        rows={5}
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
      >
        Send Message
      </button>
    </form>
  </div>
);

export default Contact;

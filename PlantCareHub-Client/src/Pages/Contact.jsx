import React from "react";

/**
 * Contact page component.
 * Provides a contact form for user inquiries and feedback.
 * Follows industry standards for clarity and maintainability.
 */
const Contact = () => (
  <div className="max-w-5xl mx-auto py-16 px-4 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl">
    {/* Hero Section */}
    <div className="flex flex-col md:flex-row items-center mb-10">
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
        <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
          <svg width="64" height="64" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 4a7 7 0 0 0-7 7c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2 7 7 0 0 0-7-7Z"/></svg>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-extrabold mb-2 text-green-700 dark:text-green-300">Contact Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">
          We’re here to help! Whether you have a question, suggestion, or need support, our team is ready to assist you.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">Friendly Support</span>
          <span className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold">Quick Response</span>
          <span className="inline-block bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">Confidential</span>
        </div>
      </div>
    </div>
    {/* Contact Info Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div className="bg-green-50 dark:bg-gray-800 rounded-2xl shadow p-6 flex flex-col items-center">
        <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="mb-2"><path fill="#22c55e" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 4a7 7 0 0 0-7 7c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2 7 7 0 0 0-7-7Z"/></svg>
        <div className="font-semibold text-green-700 dark:text-green-300 mb-1">Email</div>
        <a href="mailto:support@plantcarehub.com" className="text-green-600 dark:text-green-400 underline">support@plantcarehub.com</a>
      </div>
      <div className="bg-emerald-50 dark:bg-gray-800 rounded-2xl shadow p-6 flex flex-col items-center">
        <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="mb-2"><path fill="#10b981" d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C7.61 21 3 16.39 3 11.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z"/></svg>
        <div className="font-semibold text-emerald-700 dark:text-emerald-300 mb-1">Phone</div>
        <span className="text-gray-700 dark:text-gray-200">+1 (800) 123-4567</span>
      </div>
      <div className="bg-yellow-50 dark:bg-gray-800 rounded-2xl shadow p-6 flex flex-col items-center">
        <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="mb-2"><circle cx="12" cy="12" r="10" fill="#facc15"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <div className="font-semibold text-yellow-700 dark:text-yellow-400 mb-1">Response Time</div>
        <span className="text-gray-700 dark:text-gray-200">Within 24 hours</span>
      </div>
    </div>
    {/* Contact Form */}
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-8">
      <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">Send Us a Message</h2>
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
      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        Your information is kept confidential and used only to respond to your inquiry.
      </div>
    </div>
  </div>
);

export default Contact;

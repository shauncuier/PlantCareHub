import React from "react";

/**
 * About page component.
 * Displays information about PlantCare Hub and its mission.
 * Follows industry standards for clarity and maintainability.
 */
const About = () => (
  <div className="max-w-5xl mx-auto py-16 px-4 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl">
    <div className="flex flex-col md:flex-row items-center mb-10">
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
        <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
          <svg width="64" height="64" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 2C7.03 2 2.5 6.03 2.5 11c0 4.97 4.53 9 9.5 9s9.5-4.03 9.5-9c0-4.97-4.53-9-9.5-9Zm0 16c-3.87 0-7-3.13-7-7 0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.87-3.13 7-7 7Z"/><path fill="#fff" d="M12 6a5 5 0 0 0-5 5c0 2.76 2.24 5 5 5s5-2.24 5-5a5 5 0 0 0-5-5Zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3Z"/></svg>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-extrabold mb-2 text-green-700 dark:text-green-300">About PlantCare Hub</h1>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">
          PlantCare Hub is dedicated to helping plant lovers nurture and manage their green companions. Our mission is to provide expert guidance, community support, and innovative tools for plant care.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">Expert Guidance</span>
          <span className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold">Community Support</span>
          <span className="inline-block bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">Smart Tools</span>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      <div className="bg-green-50 dark:bg-gray-800 rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-2 text-green-600 dark:text-green-400">Our Vision</h2>
        <p className="text-gray-700 dark:text-gray-200">
          We envision a world where everyone can enjoy the benefits of healthy, thriving plants—indoors and outdoors. We strive to make plant care accessible, enjoyable, and rewarding for all.
        </p>
      </div>
      <div className="bg-emerald-50 dark:bg-gray-800 rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-2 text-emerald-600 dark:text-emerald-400">Our Team</h2>
        <p className="text-gray-700 dark:text-gray-200">
          Our passionate team of horticulturists, developers, and plant enthusiasts brings together expertise in botany, technology, and design. We are committed to supporting our community at every step of their plant care journey.
        </p>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 mb-8">
      <h2 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-300">Our Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-start">
          <span className="mr-3 mt-1 text-green-500">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#22c55e"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <div>
            <div className="font-semibold text-green-700 dark:text-green-300">Community</div>
            <div className="text-gray-700 dark:text-gray-200 text-sm">We foster a welcoming and supportive environment for all plant lovers.</div>
          </div>
        </div>
        <div className="flex items-start">
          <span className="mr-3 mt-1 text-yellow-500">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#facc15"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <div>
            <div className="font-semibold text-yellow-700 dark:text-yellow-400">Innovation</div>
            <div className="text-gray-700 dark:text-gray-200 text-sm">We leverage technology to make plant care smarter and easier.</div>
          </div>
        </div>
        <div className="flex items-start">
          <span className="mr-3 mt-1 text-blue-500">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#38bdf8"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <div>
            <div className="font-semibold text-blue-700 dark:text-blue-400">Education</div>
            <div className="text-gray-700 dark:text-gray-200 text-sm">We empower users with reliable information and expert tips.</div>
          </div>
        </div>
        <div className="flex items-start">
          <span className="mr-3 mt-1 text-emerald-500">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#34d399"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <div>
            <div className="font-semibold text-emerald-700 dark:text-emerald-400">Sustainability</div>
            <div className="text-gray-700 dark:text-gray-200 text-sm">We promote eco-friendly practices and responsible plant ownership.</div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center">
      <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">Join Our Community</h3>
      <p className="text-gray-700 dark:text-gray-200 mb-4">
        Whether you are a beginner or an expert, PlantCare Hub is your trusted companion for all things plants. Join our growing community and let’s make the world greener together!
      </p>
      <a
        href="mailto:support@plantcarehub.com"
        className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg"
      >
        Contact Our Team
      </a>
    </div>
  </div>
);

export default About;

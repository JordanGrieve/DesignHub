import React from "react";

export default function ContactForm() {
  return (
    <form className="md:w-3xl">
      <p className="text-white text-4xl font-light mb-5">
        Have a project in mind? We'd love to hear about it and discuss how we
        can help bring your vision to life.
      </p>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 bg-gray-800 text-white border border-gray-700"
          placeholder="Your name"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          className="w-full p-2 bg-gray-800 text-white border border-gray-700"
          placeholder="your@email.com"
        />
      </div>
      <div className="mb-4">
        <textarea
          className="w-full p-2 bg-gray-800 text-white border border-gray-700 h-32"
          placeholder="Your message"
        />
      </div>
      <button
        type="submit"
        className="p-5 bg-red-600 text-white font-semibold hover:bg-gray-800 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}

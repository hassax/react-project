import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function Contact() {
  return (
    <main id="contact">
      <div className="px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Contact Us
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300">
              We'd love to hear from you. Reach out via the form or use the
              contact info below.
            </p>
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-1">
                Email
              </h3>
              <a
                href="mailto:info@coffeehub.com"
                className="text-yellow-600 hover:underline"
              >
                info@coffeehub.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-1">
                Phone
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                +44 123 456 789
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-1">
                Address
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                300 Bath Street, Tay House, Glasgow G2 4JR, UK
              </p>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Your Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-white"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Message
              </label>
              <textarea
                rows="4"
                className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-white"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-block px-6 py-2 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;

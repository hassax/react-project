import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function About() {
  return (
    <main id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
          We are passionate about coffee and its ability to bring people
          together. Our story began with a love for the aroma, the flavors, and
          the joy of sharing a perfect cup.
        </p>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
              alt="Our Story"
              className="w-full h-[400px] object-contain object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              To deliver premium coffee experiences that connect communities and
              inspire warmth, creativity, and shared moments through every cup.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;

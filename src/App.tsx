import './App.css'

import PixelCat from "./components/PixelCat";

function App() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 to-rose-100 text-orange-800 overflow-auto">
      <main className="px-6 py-10 max-w-6xl mx-auto">
        <header id="about" className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-2 drop-shadow-sm">WhiskersStack</h1>
          <p className="text-lg italic">Where curiosity compiles the code.</p>
        </header>

        <section id="projects" className="flex flex-col items-center justify-center">
          <PixelCat />
          <p className="mt-4 text-base max-w-md text-center">
            A cloud-focused developer portfolio for practical frontend projects
            and continued learning across AWS and AI.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-xl shadow transition"
            >
              Explore Projects
            </a>
            <a
              href="#about"
              className="inline-flex min-h-11 items-center justify-center border border-orange-300 hover:border-orange-500 text-orange-600 font-semibold px-6 py-2 rounded-xl transition"
            >
              Learn More
            </a>
          </div>
        </section>

        <footer className="mt-16 text-center text-sm text-orange-500">
          <p>&copy; 2026 WhiskersStack. Built with React, TypeScript, and Tailwind CSS.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;

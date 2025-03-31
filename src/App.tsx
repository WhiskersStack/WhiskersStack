import './App.css';

function App() {
  return (
    <div
      className="fixed inset-0 min-h-screen w-full transition-colors duration-300
           bg-gradient-to-br from-indigo-900 via-purple-800 to-black text-white overflow-auto"
    >
      <main className="px-6 py-10 max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-2 drop-shadow-sm">WhiskersStack</h1>
        <p className="text-lg italic text-zinc-400">Where curiosity compiles the code.</p>
      </header>

      <section className="flex flex-col items-center justify-center">
        <img
        src="/logo.png"
        alt="WhiskersStack Logo"
        className="w-48 h-48 mx-auto mb-6 drop-shadow-[0_0_12px_#f0f]"
        />

        <p className="mt-4 text-base max-w-md text-center text-zinc-300">
        Built by a curious dev powered by caffeine, cat energy, and clever ideas.
        Blending code, creativity, and cute chaos one stack at a time.
        </p>

        <div className="mt-6 flex gap-4">
        <a
          href="#"
          className="bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-pink-500 hover:to-indigo-500 font-semibold px-6 py-2 rounded-xl shadow-md transition ring-2 ring-fuchsia-400 shadow-lg">
          Explore Projects
        </a>
        <a
          href="#"
          className="bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-pink-500 hover:to-indigo-500 font-semibold px-6 py-2 rounded-xl shadow-md transition ring-2 ring-fuchsia-400 shadow-lg">

          Learn More
        </a>
        </div>
      </section>

      <footer className="mt-16 text-center text-sm text-zinc-500">
        <p>🧶 Elegant code. Sharp claws. &copy; 2025 WhiskersStack</p>
      </footer>
      </main>
    </div>
  );
}

export default App;

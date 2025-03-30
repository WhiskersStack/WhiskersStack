import './App.css'


//import PixelCat from "./components/PixelCat";

function App() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 to-rose-100 text-orange-800 overflow-auto">
      <main className="px-6 py-10 max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-2 drop-shadow-sm">WhiskersStack</h1>
          <p className="text-lg italic">Where curiosity compiles the code.</p>
        </header>

        <section className="flex flex-col items-center justify-center">
          <img
  src="/logo.png"
  alt="WhiskersStack Logo"
  className="w-48 h-48 mx-auto mb-6 drop-shadow-lg"
/>

          <p className="mt-4 text-base max-w-md text-center">
            Built by a curious dev powered by caffeine, cat energy, and clever ideas. Blending code, creativity, and cute chaos one stack at a time.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-xl shadow transition"
            >
              Explore Projects
            </a>
            <a
              href="#"
              className="border border-orange-300 hover:border-orange-500 text-orange-600 font-semibold px-6 py-2 rounded-xl transition"
            >
              Learn More
            </a>
          </div>
        </section>

        <footer className="mt-16 text-center text-sm text-orange-500">
          <p>🧶 Elegant code. Sharp claws. &copy; 2025 WhiskersStack</p>
        </footer>
      </main>
    </div>
  );
}

export default App;


import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between text-slate-400 text-sm">
          <div>© {new Date().getFullYear()} Synthetica. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="/test" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

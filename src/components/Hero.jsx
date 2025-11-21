import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-10">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live preview
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            A modern, editorial landing for your next launch
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Clean typography, minimalist layout, and interactive 3D to make it pop. Built with React, Tailwind, and Spline.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="px-5 py-3 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-200 transition-colors">View pricing</a>
            <a href="#contact" className="px-5 py-3 rounded-md bg-slate-800/70 border border-white/15 text-white hover:bg-slate-800 transition-colors">Contact sales</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950" />
    </section>
  )
}

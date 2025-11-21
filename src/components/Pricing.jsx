export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: 'Free',
      desc: 'Perfect to explore the vibe',
      features: ['Basic components', 'Email support', 'Community access'],
      cta: 'Get started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$19',
      period: '/mo',
      desc: 'For indie builders and teams',
      features: ['All components', 'Priority support', 'Commercial license'],
      cta: 'Buy Pro',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'Security, SSO and SLAs',
      features: ['Design tokens', 'Onboarding', 'Dedicated manager'],
      cta: 'Talk to sales',
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="relative py-24 bg-slate-950">
      <div className="absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Pick the plan that fits. Upgrade any time.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.popular ? 'border-blue-400/40 bg-gradient-to-b from-blue-500/10 to-blue-500/0' : 'border-white/10 bg-white/5'} p-6` }>
              <div className="flex items-baseline gap-2">
                <h3 className="text-white text-xl font-medium">{t.name}</h3>
                {t.popular && <span className="text-xs px-2 py-0.5 rounded-full bg-blue-600 text-white">Popular</span>}
              </div>
              <p className="mt-2 text-slate-300 text-sm">{t.desc}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl text-white font-semibold">{t.price}</span>
                {t.period && <span className="text-slate-400">{t.period}</span>}
              </div>
              <ul className="mt-6 space-y-2 text-slate-300 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-flex px-4 py-2 rounded-md font-medium transition-colors ${t.popular ? 'bg-white text-slate-900 hover:bg-slate-200' : 'bg-slate-800/70 text-white border border-white/15 hover:bg-slate-800'}`}>{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

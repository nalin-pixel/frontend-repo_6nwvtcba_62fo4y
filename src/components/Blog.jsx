import { useEffect, useState } from 'react'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/blogposts?limit=3`)
        if (res.ok) {
          const data = await res.json()
          setPosts(data.items || [])
        }
      } catch (e) {
        // silent fail, show placeholders
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const placeholders = [
    { title: 'Design systems at scale', excerpt: 'How we build consistent UIs across platforms.', author: 'Team', tags:['design','scale'] },
    { title: 'Motion as meaning', excerpt: 'Using animation to clarify, not distract.', author: 'Editorial', tags:['motion','ux'] },
    { title: 'The future is 3D', excerpt: 'Why spatial interfaces are here to stay.', author: 'Research', tags:['3d','future'] },
  ]

  const list = loading ? placeholders : (posts.length ? posts : placeholders)

  return (
    <section id="blog" className="py-24 bg-slate-950/95">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">From the journal</h2>
          <p className="mt-3 text-slate-300">Insights on product, design and engineering.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <article key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="text-xs text-slate-400">{p.tags?.[0] || 'editorial'}</div>
              <h3 className="mt-2 text-xl text-white font-medium group-hover:underline">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{p.excerpt}</p>
              <div className="mt-4 text-slate-400 text-sm">By {p.author}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

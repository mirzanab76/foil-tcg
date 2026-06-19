type Step = { no: string; title: string; desc: string }
type Card = { name: string; desc: string }
type Tier = { name: string; desc: string; tone: string }
type Stat = { value: string; label: string }

const STEPS: Step[] = [
  { no: "01", title: "Discover", desc: "Browse thousands of cards from every era and set." },
  { no: "02", title: "Authenticate", desc: "Every card is verified and grade-sealed by experts." },
  { no: "03", title: "Collect", desc: "Build your vault and showcase your rarest pulls." },
  { no: "04", title: "Trade", desc: "Trade safely with collectors around the world." },
]

const SETS: Card[] = [
  { name: "Grand Voyage", desc: "The flagship set, led by the Straw Hat captain." },
  { name: "Legends Foil", desc: "Full-art holographic reprints of fan favorites." },
  { name: "Secret Vault", desc: "One-of-one chase cards, sequentially numbered." },
]

const TIERS: Tier[] = [
  { name: "Common", desc: "The heart of every deck.", tone: "text-stone-200" },
  { name: "Rare", desc: "Foil-stamped and ready to shine.", tone: "text-sky-200" },
  { name: "Super Rare", desc: "Full-art holo with signature finishes.", tone: "text-violet-200" },
  { name: "Secret Rare", desc: "Numbered, sealed, and almost mythical.", tone: "text-amber-200" },
]

const STATS: Stat[] = [
  { value: "2.4M", label: "cards traded" },
  { value: "180+", label: "sets catalogued" },
  { value: "99.99%", label: "authentication accuracy" },
  { value: "120K", label: "active collectors" },
]

export function Sections() {
  return (
    <div className="w-screen text-[#f0ead9]">
      <section className="flex h-screen w-screen flex-col items-center justify-center px-8 text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-amber-200/80">FOIL · Premium Trading Card Game</p>
        <h1 className="font-display max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
          Collect legends,
          <br />
          <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-sky-300 bg-clip-text text-transparent">
            in every dimension.
          </span>
        </h1>
        <p className="mt-7 max-w-xl text-lg text-white/60">
          Own, grade, and trade authentic trading cards rendered in living holographic detail,
          from your first pull to your one-of-one grail.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-amber-200 px-7 py-3 font-medium text-black transition hover:bg-amber-100">
            Browse the vault
          </button>
          <button className="rounded-full border border-white/20 px-7 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10">
            Start collecting
          </button>
        </div>
      </section>

      <section className="flex h-screen w-screen items-center px-8 md:px-20">
        <div className="max-w-lg">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-200/80">The platform</p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Where collectors become captains.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            FOIL brings the thrill of the pull and the pride of the collection into one place,
            with every card authenticated, graded, and displayed in stunning 3D.
          </p>
        </div>
      </section>

      <section className="flex h-screen w-screen items-center justify-end px-8 md:px-20">
        <div className="max-w-lg text-right">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-200/80">Anatomy of a card</p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Engineered to be coveted.
          </h2>
          <ul className="mt-8 space-y-4 text-white/65">
            <li>Mirror-foil borders and full-art holographic finishes.</li>
            <li>Sequential numbering on every chase card.</li>
            <li>Tamper-proof authentication on the grade seal.</li>
          </ul>
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col justify-center px-8 md:px-20">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-200/80">How it works</p>
        <h2 className="font-display max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">From pull to vault.</h2>
        <div className="mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.no}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition hover:border-amber-300/40"
            >
              <div className="font-display text-sm font-semibold text-amber-200/80">{step.no}</div>
              <h3 className="font-display mt-3 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-white/55">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col justify-center px-8 md:px-20">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-200/80">Featured sets</p>
        <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">Sets worth chasing.</h2>
        <div className="mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {SETS.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition hover:border-amber-300/40"
            >
              <h3 className="font-display text-2xl text-amber-100">{s.name}</h3>
              <p className="mt-3 text-white/55">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col justify-center px-8 md:px-20">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-200/80">Rarity tiers</p>
        <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">Every pull has a pulse.</h2>
        <div className="mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition hover:border-white/30"
            >
              <h3 className={`font-display text-2xl ${tier.tone}`}>{tier.name}</h3>
              <p className="mt-3 text-white/55">{tier.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex h-screen w-screen items-center px-8 md:px-20">
        <div className="max-w-lg">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-200/80">The marketplace</p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Trade with confidence.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Secure escrow, instant grade verification, and transparent pricing mean every trade is
            as safe as it is exciting. No bots, no fakes, no surprises.
          </p>
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col items-center justify-center px-8">
        <p className="mb-12 text-xs uppercase tracking-[0.4em] text-amber-200/80">The vault in numbers</p>
        <div className="grid w-full max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display bg-gradient-to-b from-white to-white/50 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 text-sm text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col items-center justify-center px-8 text-center">
        <blockquote className="font-display max-w-3xl text-3xl font-medium leading-snug tracking-tight md:text-5xl">
          "The most beautiful way to collect cards I have ever seen."
        </blockquote>
        <p className="mt-6 text-white/50">- The Collector's Press</p>
        <p className="mt-16 text-xs uppercase tracking-[0.4em] text-white/40">Trusted by</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-display text-lg font-semibold text-white/70">
          <span>CardLadder</span>
          <span>TCGVault</span>
          <span>GradeHouse</span>
          <span>DeckMasters</span>
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col items-center justify-center px-8 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-200/80">Authenticity, guaranteed</p>
        <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">Real cards. Verified forever.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          Every card is graded by certified experts and sealed with a tamper-proof certificate,
          so its condition and provenance stay verifiable for as long as you own it.
        </p>
      </section>

      <section className="flex h-screen w-screen flex-col justify-between px-8 pb-12 pt-32 md:px-20">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h2 className="font-display max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
            Your collection awaits.
          </h2>
          <p className="mt-5 max-w-xl text-white/55">
            Open your first pack, claim your grails, and set sail with collectors worldwide.
          </p>
          <button className="mt-9 rounded-full bg-gradient-to-r from-amber-200 to-orange-300 px-9 py-4 text-lg font-semibold text-black transition hover:opacity-90">
            Start collecting
          </button>
        </div>
        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center">
          <span className="font-display font-extrabold tracking-[0.3em] text-amber-200">FOIL</span>
          <div className="flex gap-8">
            <a href="#">Vault</a>
            <a href="#">Sets</a>
            <a href="#">Marketplace</a>
            <a href="#">Contact</a>
          </div>
          <span className="text-white/30">(c) 2026 Foil TCG. All rights reserved.</span>
        </div>
      </section>
    </div>
  )
}

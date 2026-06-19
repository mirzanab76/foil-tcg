export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4">
      <nav className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-7 py-3 backdrop-blur-xl">
        <span className="font-display text-lg font-extrabold tracking-[0.3em] text-amber-200">FOIL</span>
        <div className="hidden gap-8 text-sm text-white/60 md:flex">
          <a className="transition hover:text-amber-200" href="#">Vault</a>
          <a className="transition hover:text-amber-200" href="#">Sets</a>
          <a className="transition hover:text-amber-200" href="#">Marketplace</a>
        </div>
        <button className="rounded-full border border-amber-300/40 px-5 py-2 text-sm font-medium text-amber-100 transition hover:bg-amber-300/10">
          Start collecting
        </button>
      </nav>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-cream/5 py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-8 items-baseline">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl text-cream">Nurdin</span>
            <span className="font-display italic text-2xl text-gold">Art</span>
          </div>
          <p className="mt-3 text-cream/40 text-sm max-w-[40ch]">
            Май менен сүрөттөр — картины маслом. Бишкек, Кыргызстан.
          </p>
        </div>

        <div className="md:col-span-4 md:col-start-7 font-mono text-[11px] tracking-wider uppercase text-cream/40 space-y-2">
          <div>
            <a href="https://wa.me/996700797313" target="_blank" rel="noreferrer noopener" className="hover:text-gold transition-colors">
              wa.me / +996 700 797 313
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/kartina_bishkek24/" target="_blank" rel="noreferrer noopener" className="hover:text-gold transition-colors">
              instagram / kartina_bishkek24
            </a>
          </div>
        </div>

        <div className="md:col-span-3 font-mono text-[10px] tracking-widest uppercase text-cream/30">
          © {new Date().getFullYear()} Nurdin Art
        </div>
      </div>
    </footer>
  )
}

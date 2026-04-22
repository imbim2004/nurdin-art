import { useEffect, useState } from 'react'
import { List, X, WhatsappLogo } from '@phosphor-icons/react'

const WA = 'https://wa.me/996700797313?text=Здравствуйте!%20Хочу%20записаться%20на%20мастер-класс.'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#how', label: 'Мастер-класс' },
    { href: '#works', label: 'Работы' },
    { href: '#about', label: 'Художник' }
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-oil ${
        scrolled
          ? 'bg-ink/85 backdrop-blur-md border-b border-cream/5 py-4'
          : 'bg-transparent py-6'
      }`}
      style={{ willChange: scrolled ? 'backdrop-filter' : 'auto' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl md:text-3xl tracking-tight text-cream">Nurdin</span>
          <span className="font-display italic text-xl md:text-2xl text-gold">Art</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-cream/70 hover:text-gold transition-colors duration-500 ease-oil"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WA}
          target="_blank"
          rel="noreferrer noopener"
          className="hidden md:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-gold text-ink hover:bg-cream transition-all duration-500 ease-oil font-medium"
        >
          <WhatsappLogo size={16} weight="fill" />
          Записаться
        </a>

        <button aria-label="Меню" onClick={() => setOpen(!open)} className="md:hidden text-cream p-2">
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-inkDeep border-t border-cream/5">
          <nav className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-cream/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-full bg-gold text-ink self-start font-medium"
            >
              <WhatsappLogo size={16} weight="fill" />
              Записаться
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

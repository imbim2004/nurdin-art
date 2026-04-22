import { ArrowDown } from '@phosphor-icons/react'

const WA = 'https://wa.me/996700797313?text=Здравствуйте!%20Хочу%20записаться%20на%20мастер-класс.'

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/gen/hero.jpg"
          alt=""
          className="w-full h-full object-cover"
          decoding="async"
          width={1024}
          height={1024}
          {...{ fetchpriority: 'high' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(13,22,36,0)_0%,rgba(13,22,36,0.95)_70%)]" />

        <div
          className="lamp absolute"
          style={{
            top: '8%',
            right: '12%',
            width: '520px',
            height: '520px',
            background:
              'radial-gradient(circle, rgba(212,162,76,0.35) 0%, rgba(212,162,76,0.12) 30%, transparent 60%)',
            filter: 'blur(24px)'
          }}
        />

        <div
          className="varnish absolute inset-y-0 left-0 w-1/3 pointer-events-none"
          style={{
            background:
              'linear-gradient(100deg, transparent 30%, rgba(242,237,227,0.18) 50%, transparent 70%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 min-h-[100dvh] grid md:grid-cols-12 items-end pb-20 md:pb-28 pt-32">
        <div className="md:col-span-8 lg:col-span-7">
          <div
            className="reveal-up mb-6 flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-gold/80"
            style={{ ['--d' as any]: '200ms' }}
          >
            <span className="block w-8 h-px bg-gold/60" />
            Арт-пикник · Бишкек · 15 апреля
          </div>

          <h1
            className="reveal-up font-display text-[2.8rem] leading-[0.98] md:text-[5rem] md:leading-[0.95] tracking-tightest text-cream"
            style={{ ['--d' as any]: '350ms' }}
          >
            Два часа,
            <br />
            холст и масло.
            <br />
            <em className="not-italic text-gold font-normal">Ты — художник.</em>
          </h1>

          <p
            className="reveal-up mt-8 max-w-[50ch] text-lg md:text-xl text-cream/70 leading-relaxed"
            style={{ ['--d' as any]: '650ms' }}
          >
            Открытые мастер-классы по живописи маслом в Бишкеке. Приходи, бери мастихин — и уходишь с настоящей
            картиной, которую написал сам. Даже если никогда не пробовал.
          </p>

          <div
            className="reveal-up mt-10 flex flex-wrap items-center gap-4"
            style={{ ['--d' as any]: '850ms' }}
          >
            <a
              href={WA}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gold text-ink text-sm tracking-wide font-medium hover:bg-cream transition-all duration-500 ease-oil"
            >
              Записаться на 15 апреля
              <span className="block w-0 group-hover:w-6 transition-all duration-500 ease-oil overflow-hidden">
                →
              </span>
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-cream/25 text-cream/90 text-sm tracking-wide hover:border-cream/60 transition-all duration-500 ease-oil"
            >
              Как это проходит
            </a>
          </div>
        </div>

        {/* Right side — social proof facts, not sales */}
        <div
          className="reveal-up hidden md:block md:col-span-4 lg:col-span-5 md:pl-12 font-mono text-[11px] text-cream/40 tracking-wider uppercase"
          style={{ ['--d' as any]: '1000ms' }}
        >
          <div className="space-y-8 md:border-l md:border-cream/10 md:pl-8">
            <div>
              <div className="text-gold/80 mb-1">Группа</div>
              <div className="text-cream/80 font-sans text-base normal-case tracking-normal">
                до 10 человек · тёплая студия в центре Бишкека
              </div>
            </div>
            <div>
              <div className="text-gold/80 mb-1">Всё включено</div>
              <div className="text-cream/80 font-sans text-base normal-case tracking-normal">
                холст 30×40 · масло · кисти · мастихин · фартук
              </div>
            </div>
            <div>
              <div className="text-gold/80 mb-1">Вы уносите</div>
              <div className="text-cream/80 font-sans text-base normal-case tracking-normal">
                свою законченную картину на подрамнике
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#how"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/50 hover:text-gold transition-colors flex flex-col items-center gap-2 group"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}

import { Palette, ClockCountdown, SmileyMeh, Heart } from '@phosphor-icons/react'

const WA = 'https://wa.me/996700797313?text=Здравствуйте!%20Хочу%20записаться%20на%20мастер-класс.'

const STEPS = [
  {
    icon: SmileyMeh,
    tag: 'Шаг 1',
    ru: 'Приходишь в студию',
    body: 'Тёплое освещение, запах масла, настоящие мольберты. Группа — до 10 человек, каждому своё рабочее место.'
  },
  {
    icon: ClockCountdown,
    tag: 'Шаг 2',
    ru: 'Вместе выбираем сюжет',
    body: 'Пейзаж, цветы, абстракция — на любой уровень. Я показываю технику, рассказываю про композицию и цвет.'
  },
  {
    icon: Palette,
    tag: 'Шаг 3',
    ru: 'Пишешь маслом 2 часа',
    body: 'Первые мазки — самые страшные, но ты справишься. Я подхожу, помогаю, направляю. Никто не уходит с «не получилось».'
  },
  {
    icon: Heart,
    tag: 'Шаг 4',
    ru: 'Забираешь свою картину',
    body: 'На подрамнике, подписанная твоим именем, упакованная. Остаётся с тобой — на стене, в памяти, как напоминание что ты смог.'
  }
]

export function HowItWorks() {
  return (
    <section id="how" className="relative py-28 md:py-40 border-t border-cream/5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/works/08-studio-atmosphere.jpg"
          alt=""
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[50%] h-[120%] object-cover opacity-[0.10]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/85 to-ink" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Left — section header + CTA */}
          <div className="md:col-span-5">
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold/80 mb-6 flex items-center gap-3">
              <span className="block w-6 h-px bg-gold/60" />
              01 · Как проходит мастер-класс
            </div>
            <h2 className="font-display text-4xl md:text-[4rem] leading-[0.95] tracking-tight text-cream">
              Не хобби.
              <br />
              <em className="text-gold">Тишина,</em>
              <br />
              которая работает.
            </h2>
            <p className="mt-8 text-cream/60 text-lg leading-relaxed max-w-[42ch]">
              Большинство приходит уставшими — с работы, от телефона, от думающей головы.
              Уходят с картиной, улыбкой и ощущением «я могу». Это не преувеличение — это
              в каждом отзыве.
            </p>

            <div className="mt-12 p-6 md:p-7 rounded-[2.5rem] border border-gold/25 bg-inkDeep/40">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-3">
                Ближайший мастер-класс
              </div>
              <div className="font-display text-3xl md:text-4xl text-cream leading-tight">
                15 апреля — арт-пикник
              </div>
              <div className="text-cream/50 text-sm mt-1">
                Бишкек · группа до 10 · всё включено
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gold text-ink text-sm font-medium hover:bg-cream transition-all duration-500 ease-oil"
              >
                Записаться — напишите «МК»
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right — 4 steps */}
          <div className="md:col-span-7 md:pl-12 space-y-10 md:space-y-14">
            {STEPS.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={s.ru} className="scroll-up">
                  <div className="grid grid-cols-[auto_1fr] gap-6 md:gap-8 items-start">
                    <div className="pt-1 text-gold/90">
                      <Icon size={28} weight="light" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-cream/40 mb-2">
                        {s.tag}
                      </div>
                      <div className="font-display text-2xl md:text-3xl text-cream leading-tight mb-3">
                        {s.ru}
                      </div>
                      <p className="text-cream/55 leading-relaxed max-w-[48ch]">{s.body}</p>
                    </div>
                  </div>
                </div>
              )
            })}

            <div className="pt-10 md:pt-14 border-t border-cream/10">
              <p className="text-cream/55 text-sm italic leading-relaxed max-w-[56ch]">
                «Сегодня был не просто мастер-класс — это было про состояние. Люди пришли уставшие,
                ушли — с улыбкой и картиной, которую нарисовали сами».
              </p>
              <p className="text-cream/30 text-xs tracking-wider uppercase mt-3 font-mono">— отзыв с прошлого МК</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

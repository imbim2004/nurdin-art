import { Reveal } from './Reveal'

type Work = {
  src: string
  title: string
  medium: string
  size?: string
}

const WORKS: Work[] = [
  {
    src: '/works/01-starry-night.jpg',
    title: 'Звёздная ночь',
    medium: 'Авторская интерпретация Ван Гога',
    size: 'Холст · Масло · 60×90 см'
  },
  {
    src: '/works/02-kyrgyz-mountain.jpg',
    title: 'Горный ручей',
    medium: 'Ала-Тоо, серия «Кыргызстан»',
    size: 'Холст · Масло · 70×100 см'
  },
  {
    src: '/works/03-misty-lake.jpg',
    title: 'Туман над Ысык-Кёлем',
    medium: 'Атмосферный пейзаж',
    size: 'Холст · Масло · 50×80 см'
  },
  {
    src: '/works/06-red-vineyard.jpg',
    title: 'Красные виноградники',
    medium: 'Авторская интерпретация Ван Гога',
    size: 'Холст · Масло · 60×80 см'
  },
  {
    src: '/works/05-sunflowers-vibrant.jpg',
    title: 'Подсолнухи · День',
    medium: 'Серия цветочных натюрмортов',
    size: 'Холст · Масло · 50×70 см'
  },
  {
    src: '/works/04-sunflowers-gold.jpg',
    title: 'Подсолнухи · Вечер',
    medium: 'Серия цветочных натюрмортов',
    size: 'Холст · Масло · 50×70 см'
  }
]

const WA = 'https://wa.me/996700797313?text=Здравствуйте!%20Интересует%20работа%20из%20каталога.'

export function Works() {
  return (
    <section id="works" className="relative py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-28">
          <div className="md:col-span-5">
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold/80 mb-6 flex items-center gap-3">
              <span className="block w-6 h-px bg-gold/60" />
              02 · Я пишу сам
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight text-cream">
              Вот то, <em className="text-gold">с чем</em>
              <br />я приду на&nbsp;мастер-класс
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 self-end">
            <p className="text-cream/60 text-lg leading-relaxed max-w-[52ch]">
              Несколько работ из моей собственной серии — чтобы ты понимал(а), кто будет вести мастер-класс.
              Любую можно купить с&nbsp;собой или заказать повтор в&nbsp;другом размере — просто напиши в&nbsp;WhatsApp.
            </p>
          </div>
        </div>

        {/* Gallery — asymmetric bento */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-5">
          <Reveal mode="knife" className="col-span-2 md:col-span-4 md:row-span-2">
            <Painting work={WORKS[0]} large />
          </Reveal>
          <Reveal mode="settle" delay={120} className="col-span-1 md:col-span-2">
            <Painting work={WORKS[1]} />
          </Reveal>
          <Reveal mode="settle" delay={240} className="col-span-1 md:col-span-2">
            <Painting work={WORKS[2]} />
          </Reveal>
          <Reveal mode="settle" delay={80} className="col-span-2 md:col-span-2">
            <Painting work={WORKS[3]} />
          </Reveal>
          <Reveal mode="settle" delay={200} className="col-span-1 md:col-span-2">
            <Painting work={WORKS[4]} />
          </Reveal>
          <Reveal mode="settle" delay={320} className="col-span-1 md:col-span-2">
            <Painting work={WORKS[5]} />
          </Reveal>
        </div>

        {/* Buy / commission line — one soft CTA, no separate section */}
        <div className="mt-16 md:mt-24 p-6 md:p-8 rounded-[2.5rem] border border-cream/10 bg-inkDeep/40 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-display text-2xl md:text-3xl text-cream leading-tight">
              Понравилась работа?
            </div>
            <p className="mt-2 text-cream/55 text-sm md:text-base max-w-[56ch]">
              Пишу картины на заказ: ваш сюжет, ваш размер, масло на холсте. Срок — от 2&nbsp;недель.
              Доставляю по&nbsp;Бишкеку и Кыргызстану.
            </p>
          </div>
          <a
            href={WA}
            target="_blank"
            rel="noreferrer noopener"
            className="shrink-0 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all duration-500 ease-oil text-sm font-medium"
          >
            Написать по картине
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Painting({ work, large = false }: { work: Work; large?: boolean }) {
  return (
    <figure className="group relative impasto rounded-[2px] overflow-hidden bg-inkDeep">
      <div className={`relative ${large ? 'aspect-[4/5]' : 'aspect-[4/5]'}`}>
        <img
          src={work.src}
          alt={work.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-oil group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-oil">
        <div className="font-display text-xl md:text-2xl text-cream leading-tight">{work.title}</div>
        <div className="mt-1 text-cream/60 text-xs md:text-sm">{work.medium}</div>
        {work.size && (
          <div className="mt-2 font-mono text-[10px] tracking-wider uppercase text-gold/70">{work.size}</div>
        )}
      </figcaption>
    </figure>
  )
}

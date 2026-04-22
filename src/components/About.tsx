import { Reveal } from './Reveal'
import { InstagramLogo, WhatsappLogo, MapPin } from '@phosphor-icons/react'

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 border-t border-cream/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-6">
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold/80 mb-6 flex items-center gap-3">
              <span className="block w-6 h-px bg-gold/60" />
              03 · Художник
            </div>
            <Reveal>
              <h2 className="font-display text-4xl md:text-[4rem] leading-[0.95] tracking-tight text-cream">
                Нурдин
                <br />
                <em className="text-gold">художник и&nbsp;ведущий</em>
                <br />
                из Бишкека
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 text-cream/65 text-lg leading-relaxed max-w-[52ch]">
                Пишу маслом больше десяти лет — пейзажи Ала-Тоо, цветочные натюрморты, интерпретации
                классиков. Параллельно веду мастер-классы: мне важно показать другим, что живопись — это
                не про талант, а про час-два тишины и первый мазок, который не так страшен, как кажется.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <blockquote className="mt-10 pl-6 border-l-2 border-gold/40 font-display italic text-xl md:text-2xl text-cream/85 leading-snug max-w-[44ch]">
                «Искусство — это способ передать то, что не помещается в слова.
                Что ты чувствуешь, когда смотришь на&nbsp;эту картину?»
              </blockquote>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={200}>
              <div className="space-y-8">
                <ContactRow
                  icon={WhatsappLogo}
                  label="WhatsApp"
                  value="+996 700 797 313"
                  href="https://wa.me/996700797313"
                  sub="Запись на мастер-класс · заказ картины · вопросы"
                />
                <ContactRow
                  icon={InstagramLogo}
                  label="Instagram"
                  value="@kartina_bishkek24"
                  href="https://www.instagram.com/kartina_bishkek24/"
                  sub="Процесс мастер-классов · готовые работы"
                />
                <ContactRow
                  icon={MapPin}
                  label="Студия"
                  value="Бишкек, Кыргызстан"
                  sub="Адрес высылаю в WhatsApp после записи"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  sub
}: {
  icon: any
  label: string
  value: string
  href?: string
  sub: string
}) {
  const inner = (
    <div className="group grid grid-cols-[auto_1fr] gap-5 items-center">
      <div className="w-12 h-12 rounded-full border border-cream/15 grid place-items-center text-gold/80 group-hover:border-gold/50 group-hover:text-gold transition-all duration-500 ease-oil">
        <Icon size={20} weight="light" />
      </div>
      <div>
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-cream/40">{label}</div>
        <div className="font-display text-xl md:text-2xl text-cream mt-0.5">{value}</div>
        <div className="text-cream/45 text-sm mt-1">{sub}</div>
      </div>
    </div>
  )
  return href ? (
    <a href={href} target="_blank" rel="noreferrer noopener" className="block">
      {inner}
    </a>
  ) : (
    inner
  )
}

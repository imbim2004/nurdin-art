import { CSSProperties, ReactNode } from 'react'

type Mode = 'settle' | 'knife' | 'brush'

// Uses `animation-timeline: view()` via .scroll-* classes — modern browsers get
// real scroll-driven animations, older browsers just render content at final state.
// No IntersectionObserver, no FOUC, no stuck-hidden elements.
const MODE_CLASS: Record<Mode, string> = {
  settle: 'scroll-up',
  knife: 'scroll-knife',
  brush: 'scroll-up'
}

export function Reveal({
  children,
  mode = 'settle',
  delay = 0,
  className = '',
  as: Tag = 'div'
}: {
  children: ReactNode
  mode?: Mode
  delay?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
}) {
  const C = Tag as any
  const style: CSSProperties = delay ? { ['--d' as any]: `${delay}ms` } : {}
  return (
    <C className={`${MODE_CLASS[mode]} ${className}`} style={style}>
      {children}
    </C>
  )
}

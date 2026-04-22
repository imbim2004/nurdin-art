import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Works } from './components/Works'
import { About } from './components/About'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="grain min-h-screen bg-ink text-cream font-sans">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Works />
        <About />
      </main>
      <Footer />
    </div>
  )
}

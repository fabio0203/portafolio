import { useReducedMotion } from './hooks/useReducedMotion'
import { useLenis } from './hooks/useLenis'
import { CustomCursor } from './components/ui/CustomCursor'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { CaseStudies } from './components/sections/CaseStudies'
import { Projects } from './components/sections/Projects'
import { Services } from './components/sections/Services'
import { Contact } from './components/sections/Contact'

export default function App() {
  const reduced = useReducedMotion()
  useLenis(reduced)

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

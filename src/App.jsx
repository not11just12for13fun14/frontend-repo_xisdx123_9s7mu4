import PortfolioNavbar from './components/PortfolioNavbar';
import PortfolioHero from './components/PortfolioHero';
import ParallaxSection from './components/ParallaxSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <PortfolioNavbar />
      <main>
        <PortfolioHero />

        <ParallaxSection
          id="about"
          eyebrow="About"
          title="Crafting immersive web experiences"
          subtitle="I blend clean engineering with 3D and motion to build interfaces that feel alive. Everything here is fully editable in code so you can update projects, skills, and experience any time."
          tint="from-fuchsia-50 to-transparent"
        >
          <div className="mx-auto max-w-3xl text-center text-gray-700">
            <p>
              Hi, I’m <span className="font-semibold">Surya Venkata Karthikeya Yelamanchili</span>. I love creating delightful, smooth, and performant UIs with React, Framer Motion, and 3D elements from Spline/Three.js. Scroll to see animations and sections glide into view.
            </p>
          </div>
        </ParallaxSection>

        <ParallaxSection
          id="skills"
          eyebrow="Skills"
          title="Tools I work with"
          subtitle="Add or edit this list anytime — visitors can only view, not edit."
          tint="from-indigo-50 to-transparent"
        >
          <Skills />
        </ParallaxSection>

        <ParallaxSection
          id="projects"
          eyebrow="Projects"
          title="Selected work"
          subtitle="Replace the cards with your real projects, links, and code."
          tint="from-cyan-50 to-transparent"
        >
          <Projects />
        </ParallaxSection>

        <ParallaxSection
          id="experience"
          eyebrow="Experience"
          title="Where I’ve contributed"
          subtitle="Timeline of roles and impact. Fully editable by you."
          tint="from-amber-50 to-transparent"
        >
          <Experience />
        </ParallaxSection>

        <ParallaxSection
          id="contact"
          eyebrow="Contact"
          title="Let’s build something memorable"
          subtitle="Drop a message or reach me on socials."
          tint="from-rose-50 to-transparent"
        >
          <Contact />
        </ParallaxSection>
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Surya Venkata Karthikeya Yelamanchili</footer>
    </div>
  )
}

export default App

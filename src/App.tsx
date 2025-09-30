import { Route, Routes, NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProjectPage from './pages/ProjectPage'

function Logo() {
  return (
    <Link to="/" className="font-semibold tracking-tight text-xl">
      Manuel Campano
    </Link>
  )
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = saved ? saved === 'dark' : prefersDark
    setIsDark(shouldBeDark)
    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  )
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-neutral-200/60 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-950/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-6">
          <NavLink to="/profile" className={({ isActive }) => `text-sm ${isActive ? 'font-semibold' : 'text-neutral-600 dark:text-neutral-300'}`}>Profile</NavLink>
          <a href="https://github.com/mansoyoro" target="_blank" rel="noreferrer" className="text-sm text-neutral-600 dark:text-neutral-300">GitHub</a>
          <a href="https://linkedin.com/in/manuel-campano2" target="_blank" rel="noreferrer" className="text-sm text-neutral-600 dark:text-neutral-300">LinkedIn</a>
          <a href="mailto:mcastronomia@gmail.com" className="text-sm text-neutral-600 dark:text-neutral-300">Email</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative h-[70svh] w-full overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-800/70 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 pt-32 flex items-center min-h-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Manuel Campano
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed">
            Mobile App Developer
          </p>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl">
            I am a developer with a background in science, psychology, and the arts, passionate about creating applications that combine creativity, technology, and real-world impact.
          </p>
          <div className="mt-8">
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 bg-white text-neutral-900 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

type Project = {
  title: string
  slug: string
  image: string
  blurb: string
}

const projects: Project[] = [
  {
    title: 'CanvaKeys App',
    slug: 'canvakeys',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    blurb: 'Pitch detection app for Android with real-time piano visualization and color-coded notes.',
  },
  {
    title: 'TurnFlow App',
    slug: 'turnflow',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
    blurb: 'Functional MVP for turn management and notifications built in Flutter.',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition duration-300">
          <p className="text-white text-lg font-medium mb-4 leading-relaxed">
            {project.blurb}
          </p>
          <Link 
            to={`/projects/${project.slug}`} 
            className="inline-flex items-center px-6 py-3 bg-white text-neutral-900 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
          >
            View Project Details
          </Link>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm">Mobile App Development</p>
      </div>
    </div>
  )
}

function MainView() {
  return (
    <main>
      <Hero />
      <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Mobile applications that showcase my development skills and passion for creating meaningful user experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </main>
  )
}

function ProfileView() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Profile</h1>
      <p className="mt-6 text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
        {`I began my journey in the arts in 2013, traveling and collaborating on different creative projects around the world. Over time, I realized I wanted to contribute in a more specific and measurable way, which led me to complete high school in 2019 with a focus on hard sciences, developing a strong interest in both science and philosophy.
I started studying Biology at Sussex University, where I explored genetics, neuroscience, and other subjects that fascinated me, such as history, philosophy, and anthropology. Guided by my professors, I eventually decided to shift my focus and, in 2023, graduated with an Honours Degree in Psychology and Anthropology from Goldsmiths University.
While gaining work experience as a teacher and coach, I also discovered my passion for technology. What began with building simple websites and experimenting with music production soon grew into a deep interest in programming, audio plug-ins, and mobile applications. I realized that software development allowed me to bring together my scientific background, my creativity, and my curiosity for innovation.
Today, I am completing a two-year course in Multiplatform Mobile App Development at MasterD, where I am building a strong foundation in professional coding practices. My goal is to create applications that combine creativity and technology to make a meaningful difference in the world.`}
      </p>
    </main>
  )
}

export default function App() {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </div>
  )
}

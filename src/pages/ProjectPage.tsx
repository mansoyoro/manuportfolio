import { useParams, Link } from 'react-router-dom'
import data from '../assets/projects.json'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = data.projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p>Project not found. <Link to="/" className="underline">Go back</Link></p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">{project.title}</h1>
      <img src={project.image} alt={project.title} className="mt-6 rounded-xl border border-neutral-200/70 dark:border-neutral-800/70" />

      {project.video && (
        <video
          className="mt-6 w-full rounded-xl border border-neutral-200/70 dark:border-neutral-800/70"
          controls
          preload="metadata"
        >
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <p className="mt-6 whitespace-pre-line text-neutral-700 dark:text-neutral-300">{project.long}</p>
    </main>
  )
}

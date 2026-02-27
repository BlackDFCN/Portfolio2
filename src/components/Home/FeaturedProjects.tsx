import { getAllProjects } from '@/lib/projects';
import { ProjectCard, Project } from './ProjectCard';
import Link from 'next/link';

export default async function FeaturedProjects() {
  const projects: Project[] = (await getAllProjects()).slice(0, 3);
  // Mostrar siempre 3 cartas (proyectos o placeholders)
  const numCards = 3;
  const placeholders = Array.from({ length: numCards - projects.length });
  return (
    <section
      id="proyectos"
      className="w-full max-w-6xl mx-auto py-20 px-4 relative z-10"
      aria-labelledby="proyectos-destacados-title"
    >
      <div className="mb-6 md:mb-8 text-center">
        <span className="uppercase tracking-widest text-[#2563eb] text-sm md:text-base font-semibold mb-2 inline-block letter-spacing-[0.2em]">
          PROYECTOS DESTACADOS
        </span>
        <h2 id="proyectos-destacados-title" className="text-3xl md:text-5xl font-extrabold text-[#232a3a] dark:text-white mb-3 drop-shadow-lg">
          Algunos <span className="text-[#2563eb]">proyectos clave</span>
        </h2>
        <p className="text-[#232a3a] dark:text-white max-w-2xl mx-auto font-medium text-base md:text-lg">
          Proyectos recientes que reflejan mi experiencia profesional.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project: Project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
        {placeholders.map((_, idx) => (
          <div
            key={`placeholder-${idx}`}
            className="rounded-2xl border-2 border-[#2563eb]/10 bg-white dark:bg-neutral-900 shadow-lg flex flex-col h-full opacity-60 min-h-[440px]"
          >
            <div className="relative w-full aspect-[16/9] bg-[#f3f4f6] dark:bg-neutral-800 flex items-center justify-center border-b-2 border-[#2563eb]/10">
              <span className="text-gray-300 text-3xl">—</span>
            </div>
            <div className="flex-1 flex flex-col p-6 gap-2 items-center justify-center">
              <div className="h-6 w-2/3 bg-gray-200 dark:bg-neutral-700 rounded mb-2" />
              <div className="h-4 w-1/2 bg-gray-100 dark:bg-neutral-800 rounded mb-4" />
              <div className="flex gap-2 mb-4">
                <span className="h-6 w-12 bg-gray-100 dark:bg-neutral-800 rounded-full" />
                <span className="h-6 w-12 bg-gray-100 dark:bg-neutral-800 rounded-full" />
              </div>
              <div className="h-10 w-full bg-[#2563eb]/20 rounded-lg mt-2" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/proyectos"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2563eb] text-white font-bold text-lg shadow transition-transform duration-200 hover:bg-[#1e40af] focus:bg-[#1e40af] hover:-translate-y-1 hover:scale-105 focus:-translate-y-1 focus:scale-105 gap-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V5a2 2 0 012-2h3.28a2 2 0 011.42.59l1.42 1.42A2 2 0 0012.72 5H19a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17h6" />
          </svg>
          Catálogo completo
        </Link>
      </div>
    </section>
  );
}

import { getAllProjects } from '@/lib/projects';
import { ProjectCard, Project } from './ProjectCard';
import Link from 'next/link';

export default async function FeaturedProjects() {
  const projects: Project[] = (await getAllProjects()).slice(0, 3);
  const emptyCards = Array.from({ length: 3 - projects.length });
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
          Proyectos <span className="text-[#2563eb]">Clave</span>
        </h2>
        <p className="text-[#232a3a] dark:text-white max-w-2xl mx-auto font-medium text-base md:text-lg">
          Proyectos recientes que reflejan mi experiencia profesional.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {projects.map((project: Project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
        {emptyCards.map((_, idx) => (
          <div
            key={`empty-card-${idx}`}
            className="rounded-xl border-2 border-[#2563eb] bg-white dark:bg-neutral-900 shadow flex flex-col h-full min-h-[440px] opacity-60 items-center justify-center p-8"
          >
            <div className="flex flex-col items-center justify-center w-full h-full">
              <span className="text-gray-300 text-5xl mb-4">—</span>
              <span className="text-gray-400 text-base">Espacio disponible</span>
            </div>
          </div>
        ))}
      </div>
      <hr className="mb-4 border-[#2563eb]/20 w-full max-w-2xl mx-auto" />
      <div className="flex justify-center max-w-2xl mx-auto mb-4">
        <Link
          href="/proyectos"
          className="font-bold underline underline-offset-4 text-[#2563eb] dark:text-[#2563eb] hover:text-[#1e40af] dark:hover:text-[#1e40af] transition-colors text-lg px-1 py-2"
        >
          Ver catálogo completo
        </Link>
      </div>
    </section>
  );
}

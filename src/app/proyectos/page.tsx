
import { getAllProjects } from '@/lib/projects';
import Link from 'next/link';
import { ProjectCard, Project } from '@/components/Home/ProjectCard';

export default async function ProyectosPage() {
  const projects = await getAllProjects();
  const CARDS_PER_ROW = 3;
  // Agrupar proyectos en filas de 3
  const rows = [];
  for (let i = 0; i < projects.length; i += CARDS_PER_ROW) {
    rows.push(projects.slice(i, i + CARDS_PER_ROW));
  }
  // Si no hay proyectos, mostrar una fila vacía
  if (rows.length === 0) rows.push([]);
  return (
    <main className="w-full max-w-6xl mx-auto py-20 px-4 relative z-10">
      <div className="mb-6 md:mb-8 text-center">
        <span className="uppercase tracking-widest text-[#2563eb] text-sm md:text-base font-semibold mb-2 inline-block letter-spacing-[0.2em]">
          PROYECTOS
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#232a3a] dark:text-white mb-3 drop-shadow-lg">
          Todos los <span className="text-[#2563eb]">proyectos</span>
        </h1>
        <p className="text-[#232a3a] dark:text-white max-w-2xl mx-auto font-medium text-base md:text-lg">
          Explora los proyectos desarrollados con tecnologías modernas y buenas prácticas.
        </p>
      </div>
      <section aria-label="Listado de proyectos">
        <div className="flex flex-col gap-8">
          {rows.map((row, rowIdx) => {
            const placeholders = Array.from({ length: CARDS_PER_ROW - row.length });
            return (
              <ul key={rowIdx} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {row.map((project) => (
                  <li key={project.slug}>
                    <ProjectCard project={project as Project} />
                  </li>
                ))}
                {placeholders.map((_, idx) => (
                  <li
                    key={`placeholder-${rowIdx}-${idx}`}
                    className="rounded-2xl border-2 border-[#2563eb]/10 bg-white dark:bg-neutral-900 shadow-lg flex flex-col h-full opacity-60"
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
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      </section>
    </main>
  );
}

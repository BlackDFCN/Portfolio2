import { HiOfficeBuilding } from 'react-icons/hi';
import { FiUser, FiClock, FiCalendar } from 'react-icons/fi';
import Link from 'next/link';

export type Project = {
  slug: string;
  title: string;
  company: string;
  role: string;
  date: string;
  duration: string;
  location: string;
  description: string;
  problem: string;
  solution: string;
  results: string;
  technologies: string[];
  repository: string;
  image: string;
  demo: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="rounded-xl border-2 border-[#2563eb] bg-white dark:bg-neutral-900 shadow flex flex-col justify-between h-full min-h-[440px] transition-all hover:scale-[1.03] hover:shadow-[0_0_0_6px_rgba(37,99,235,0.10)] focus:scale-[1.03] cursor-pointer overflow-hidden mb-0"
    >
      {/* Imagen con aspect ratio fijo y fondo */}
      <div className="relative w-full aspect-[16/7] bg-white dark:bg-neutral-900 flex items-center justify-center border-b-2 border-[#2563eb]/10">
        {project.image ? (
          <img
            src={project.image.startsWith('/') ? project.image : `/projects/${project.image}`}
            alt={project.title}
            className="object-contain w-auto h-24 max-h-full mx-auto my-2"
            style={{ maxWidth: '80%', maxHeight: '80%' }}
            loading="lazy"
            width={200}
            height={96}
            decoding="async"
          />
        ) : (
          <span className="text-gray-400 text-sm">Sin imagen</span>
        )}
      </div>
      {/* Contenido */}
      <div className="flex-1 flex flex-col p-6 gap-2 pb-0">
        <div className="flex flex-col flex-1">
          <div>
            <h3 className="text-lg font-extrabold text-[#232a3a] dark:text-white mb-2 line-clamp-1" style={{marginTop: '-1.1rem'}}>
              <Link href={`/proyectos/${project.slug}`}>{project.title}</Link>
            </h3>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex flex-col gap-0.5">
              <div className="flex flex-wrap gap-3 items-center">
                {project.company && (
                  <span className="flex items-center gap-1"><HiOfficeBuilding className="inline-block text-[15px] align-middle" /> <span className="font-semibold">{project.company}</span></span>
                )}
                {project.role && (
                  <span className="flex items-center gap-1"><FiUser className="inline-block text-[14px] align-middle" /> {project.role}</span>
                )}
              </div>
              <div className="flex flex-wrap gap-3 items-center mt-0.5">
                {project.duration && (
                  <span className="flex items-center gap-1"><FiClock className="inline-block text-[13px] align-middle" /> {project.duration}</span>
                )}
                {project.date && (
                  <span className="flex items-center gap-1"><FiCalendar className="inline-block text-[13px] align-middle" /> {project.date}</span>
                )}
              </div>
            </div>
            <hr className="my-2 border-t border-[#2563eb]/10 dark:border-white/10" />
            <p className="mb-2 text-sm text-[#232a3a] dark:text-white line-clamp-6 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical' }}>
              {project.description}
            </p>
            <hr className="my-2 border-t border-[#2563eb]/10 dark:border-white/10" />
          </div>
          <div className="mt-auto mb-6 flex flex-col items-start min-h-[60px] justify-end" style={{marginTop: 'auto'}}>
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-nowrap gap-1 overflow-hidden w-full">
                {project.technologies.slice(0, 3).map((tech: string) => (
                  <span
                    key={tech}
                    className="whitespace-nowrap px-2 py-0.5 rounded border text-gray-500 dark:text-gray-400 border-gray-500 dark:border-gray-400 bg-transparent font-semibold text-xs"
                    style={{ fontSize: '0.78rem', lineHeight: '1.1' }}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="whitespace-nowrap px-2 py-0.5 rounded border text-gray-500 dark:text-gray-400 border-gray-500 dark:border-gray-400 bg-transparent font-semibold text-xs ml-1" style={{ fontSize: '0.78rem', lineHeight: '1.1' }}>+{project.technologies.length - 3}</span>
                )}
              </div>
            )}
            <Link
              href={`/proyectos/${project.slug}`}
              className="inline-flex mt-3 px-0 py-0 text-gray-500 dark:text-gray-400 font-bold text-base w-auto underline underline-offset-2"
              style={{ minHeight: 'unset' }}
            >
              Ver proyecto completo
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

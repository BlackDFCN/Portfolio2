import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function getAllProjects() {
  const projectsDir = path.join(process.cwd(), 'content/projects');
  const files = await fs.readdir(projectsDir);
  const projects = await Promise.all(
    files.filter((file) => file.endsWith('.mdx')).map(async (file) => {
      const fullPath = path.join(projectsDir, file);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const { data } = matter(fileContents);
      const slug = file.replace(/\.mdx$/, '');
      return {
        slug,
        title: typeof data.title === 'string' ? data.title.trim() : '',
        company: typeof data.company === 'string' ? data.company.trim() : '',
        role: typeof data.role === 'string' ? data.role.trim() : '',
        date: typeof data.date === 'string' ? data.date : '',
        duration: typeof data.duration === 'string' ? data.duration.trim() : '',
        location: typeof data.location === 'string' ? data.location.trim() : '',
        description: typeof data.description === 'string' ? data.description.trim() : '',
        problem: typeof data.problem === 'string' ? data.problem.trim() : '',
        solution: typeof data.solution === 'string' ? data.solution.trim() : '',
        results: typeof data.results === 'string' ? data.results.trim() : '',
        technologies: Array.isArray(data.technologies) ? data.technologies.filter((t) => typeof t === 'string') : [],
        repository: typeof data.repository === 'string' ? data.repository.trim() : '',
        image: typeof data.image === 'string' ? data.image.trim() : '',
        demo: typeof data.demo === 'string' ? data.demo.trim() : '',
      };
    })
  );
  // Filtrar proyectos vacíos o de plantilla (sin título y sin descripción)
  return projects
    .filter(p => p.title && p.title !== '' && p.description && p.description !== '')
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

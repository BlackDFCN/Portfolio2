export default function ProjectsSection() {
  return (
    <section className="py-12 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-2">Proyectos / Portafolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ejemplo de proyecto */}
        <div className="rounded-lg bg-[#18181b] p-6 shadow-md text-left">
          <h3 className="text-lg font-semibold mb-1">Nombre Proyecto</h3>
          <p className="text-sm mb-2">Descripción, rol, tecnologías.</p>
          <div className="flex gap-2">
            <a href="#" className="text-[#06b6d4] hover:text-[#3b82f6]">Demo</a>
            <a href="#" className="text-[#06b6d4] hover:text-[#3b82f6]">Repositorio</a>
          </div>
        </div>
      </div>
    </section>
  );
}

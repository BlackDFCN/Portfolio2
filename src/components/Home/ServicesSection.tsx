export default function ServicesSection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 md:py-24 px-4 text-center" id="servicios">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">¿Qué puedo hacer por tu negocio?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        <div className="bg-neutral-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-[#3b82f6] mb-2">Desarrollo Web a Medida</h3>
          <p className="text-neutral-300">Sitios y sistemas modernos, rápidos y seguros, adaptados a tus necesidades.</p>
        </div>
        <div className="bg-neutral-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-[#3b82f6] mb-2">Automatización de Procesos</h3>
          <p className="text-neutral-300">Optimiza tareas repetitivas y ahorra tiempo con soluciones inteligentes.</p>
        </div>
        <div className="bg-neutral-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-[#3b82f6] mb-2">Integraciones y APIs</h3>
          <p className="text-neutral-300">Conecta tus sistemas y plataformas para potenciar tu negocio.</p>
        </div>
        <div className="bg-neutral-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-[#3b82f6] mb-2">Consultoría en Escalabilidad y Seguridad</h3>
          <p className="text-neutral-300">Asegura el crecimiento y la protección de tu información.</p>
        </div>
      </div>
    </section>
  );
}

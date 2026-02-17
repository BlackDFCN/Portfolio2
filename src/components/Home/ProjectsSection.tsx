export default function ProjectsSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 md:py-24 px-4" id="proyectos">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Proyecto 1 */}
        <div className="bg-neutral-800 rounded-xl p-6 shadow-lg flex flex-col">
          <img src="/projects/proyecto1.png" alt="Proyecto 1" className="rounded-lg mb-4 object-cover h-40 w-full" />
          <h3 className="text-xl font-semibold text-[#3b82f6] mb-2">Sistema de Reservas para Restaurante</h3>
          <p className="text-neutral-300 flex-1">Automatización de reservas, gestión de mesas y notificaciones en tiempo real. +30% eficiencia operativa.</p>
          <a href="#" className="mt-4 text-[#3b82f6] hover:underline font-bold">Ver más</a>
        </div>
        {/* Proyecto 2 */}
        <div className="bg-neutral-800 rounded-xl p-6 shadow-lg flex flex-col">
          <img src="/projects/proyecto2.png" alt="Proyecto 2" className="rounded-lg mb-4 object-cover h-40 w-full" />
          <h3 className="text-xl font-semibold text-[#3b82f6] mb-2">Panel de Control para Pymes</h3>
          <p className="text-neutral-300 flex-1">Dashboard personalizado, integración de ventas y reportes automáticos. Escalable y seguro.</p>
          <a href="#" className="mt-4 text-[#3b82f6] hover:underline font-bold">Ver más</a>
        </div>
        {/* Proyecto 3 */}
        <div className="bg-neutral-800 rounded-xl p-6 shadow-lg flex flex-col">
          <img src="/projects/proyecto3.png" alt="Proyecto 3" className="rounded-lg mb-4 object-cover h-40 w-full" />
          <h3 className="text-xl font-semibold text-[#3b82f6] mb-2">E-commerce Integrado</h3>
          <p className="text-neutral-300 flex-1">Tienda online con pasarela de pagos, automatización de inventario y analítica avanzada.</p>
          <a href="#" className="mt-4 text-[#3b82f6] hover:underline font-bold">Ver más</a>
        </div>
      </div>
    </section>
  );
}

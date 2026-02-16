import { useAbout } from '@/features/home/hooks/useAbout';


export default function AboutSection() {
  return (
    <section className="py-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 animate-fade-in" id="sobre-mi">
      {/* Avatar/foto profesional */}
      <img src="/avatar.png" alt="Bastián Tapia" className="w-32 h-32 rounded-full mb-6 md:mb-0 shadow-lg object-cover md:mr-8" />
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4 text-[#3b82f6]">Sobre Mí</h2>
        <p className="text-lg text-neutral-300 mb-4">
          Ingeniero en Ejecución en Informática con formación en Telecomunicaciones y experiencia en desarrollo Full Stack, automatización de procesos y gestión de infraestructura.
          Especializado en crear soluciones escalables y seguras, integrando frontend, backend, bases de datos y entornos cloud, con enfoque en rendimiento, UX y mantenibilidad.
        </p>
        <ul className="list-disc pl-6 text-neutral-200 mb-4">
          <li>Mentalidad analítica y aprendizaje continuo</li>
          <li>Capacidad de aportar valor en entornos ágiles</li>
          <li>Experiencia liderando proyectos personales y colaborativos</li>
          <li>Implementación de sistemas multilenguaje, automatización y paneles administrativos</li>
        </ul>
      </div>
    </section>
  );
}


"use client";
import { FaCode, FaCloud, FaLock } from 'react-icons/fa';

// ...existing code...
const SERVICES = [
  {
    icon: <FaCode className="text-3xl md:text-4xl text-[#2563eb] mb-3" />,
    badge: "Full Stack",
    title: "Desarrollo Web Full Stack",
    description:
      "Diseño y desarrollo de sitios y sistemas web a medida, utilizando tecnologías modernas como React, Next.js y Node.js. Experiencia en frontend y backend para entregar soluciones robustas, escalables y seguras.",
  },
  {
    icon: <FaCloud className="text-3xl md:text-4xl text-[#2563eb] mb-3" />,
    badge: "Automatización",
    title: "Automatización de Procesos Digitales",
    description:
      "Implementación de soluciones para automatizar tareas y flujos de trabajo, integrando plataformas y servicios (Discord, Telegram, APIs, tareas repetitivas) para mejorar la eficiencia operativa.",
  },
  {
    icon: <FaLock className="text-3xl md:text-4xl text-[#2563eb] mb-3" />,
    badge: "Integración",
    title: "Integración de Sistemas y APIs",
    description:
      "Conexión e integración de plataformas, servicios y APIs para centralizar información, facilitar la interoperabilidad y potenciar el crecimiento digital de tu empresa.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="w-full max-w-6xl mx-auto py-12 px-4 z-10 flex flex-col items-center"
    >
      <div className="mb-6 md:mb-8 text-center">
        <span className="uppercase tracking-widest text-[#2563eb] text-sm md:text-base font-semibold mb-3 drop-shadow-sm">¡SERVICIOS!</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#232a3a] dark:text-white mb-3 drop-shadow-lg">
          <span className="text-[#232a3a] dark:text-white">Servicios</span> <span className="text-[#2563eb]">Profesionales</span>
        </h2>
        <p className="text-lg md:text-xl text-[#232a3a] dark:text-neutral-300 max-w-3xl mx-auto font-semibold leading-relaxed">
          Servicios reales que reflejan mi experiencia desarrollando <span className="text-[#2563eb] font-bold">tecnología innovadora</span> y segura, siempre alineada a los <span className="text-[#2563eb] font-bold">objetivos</span> de cada empresa.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 w-full">
        {SERVICES.map((service, idx) => (
          <div
            key={service.title}
            className="rounded-xl border-2 border-[#2563eb]/60 bg-white dark:bg-neutral-900 shadow flex flex-col justify-between h-full min-h-[440px] transition-all hover:scale-[1.03] hover:shadow-[0_0_0_8px_rgba(37,99,235,0.10)] focus:scale-[1.03] cursor-pointer overflow-hidden mb-0 px-6 py-0 pb-0"
          >
            <div className="flex flex-col flex-1 p-6 gap-2 pb-0 items-center text-center">
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-[#2563eb] bg-transparent border border-[#2563eb] tracking-widest uppercase mb-2" style={{letterSpacing: '.1em'}}>
                {service.badge}
              </span>
              <div className="mb-3 mt-1 drop-shadow-md text-4xl">{service.icon}</div>
              <h3 className="text-lg font-extrabold text-[#232a3a] dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-base text-[#232a3a] dark:text-neutral-200 mb-0 font-medium">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <hr className="mb-4 border-[#2563eb]/20 w-full max-w-2xl mx-auto" />
      <div className="flex justify-center max-w-2xl mx-auto mb-4">
        <a
          href="#contacto"
          className="font-bold underline underline-offset-4 text-[#2563eb] dark:text-[#2563eb] hover:text-[#1e40af] dark:hover:text-[#1e40af] transition-colors text-lg px-1 py-2"
        >
          ¿Tienes un reto? ¡Hablemos!
        </a>
      </div>
    </section>
  );
}

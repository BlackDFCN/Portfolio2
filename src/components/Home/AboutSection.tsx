"use client";
import { Award, Heart, Mountain } from "lucide-react";


const AboutSection = () => {
  return (
    <section id="sobre-mi" className="w-full max-w-6xl mx-auto py-16 md:py-24 px-4 pt-24 scroll-mt-24 relative z-10">
      <div>
        {/* Encabezado de la sección Sobre mí */}
        <div className="mb-12 text-center">
          <span className="uppercase tracking-widest text-[#2563eb] text-xs font-semibold">SOBRE MÍ</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#232a3a] dark:text-white mt-2 mb-4">
            Perfil <span className="text-[#2563eb]">Profesional</span>
          </h2>
          <p className="text-[#232a3a] dark:text-neutral-300 max-w-3xl mx-auto font-medium text-lg text-center mb-4">
            Ingeniero en computación e informática, especializado en el desarrollo de soluciones digitales innovadoras y seguras. Mi enfoque combina excelencia técnica y atención al detalle para crear experiencias de usuario sobresalientes.
          </p>
          {/* Frase destacada */}
          <span className="block text-xs md:text-sm text-[#3b82f6] dark:text-[#60a5fa] mt-6 text-center italic">Transformo ideas en productos digitales robustos y escalables.</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Tarjeta: Certificaciones y Estudios */}
          <div className="bg-white dark:bg-neutral-900 border border-[#232a3a] rounded-2xl p-8 shadow-lg flex flex-col items-start relative transition-all hover:scale-[1.03] hover:shadow-[0_0_0_6px_rgba(37,99,235,0.10)] focus:scale-[1.03] cursor-pointer">
            <Award className="w-7 h-7 text-[#2563eb] mb-4" />
            <h3 className="text-lg font-bold text-[#232a3a] dark:text-white mb-4">Certificaciones y Estudios</h3>
            <ul className="text-[#232a3a] dark:text-neutral-400 text-base space-y-1">
              <li>• Ingeniero en Computación e Informática</li>
              <li>• Certificación AWS Cloud Practitioner</li>
              <li>• Certificación Google Cloud</li>
              <li>• Curso DevOps y Automatización</li>
            </ul>
          </div>
          {/* Tarjeta: Valores */}
          <div className="bg-white dark:bg-neutral-900 border border-[#232a3a] rounded-2xl p-8 shadow-lg flex flex-col items-start relative transition-all hover:scale-[1.03] hover:shadow-[0_0_0_6px_rgba(37,99,235,0.10)] focus:scale-[1.03] cursor-pointer">
            <Heart className="w-7 h-7 text-[#2563eb] mb-4" />
            <h3 className="text-lg font-bold text-[#232a3a] dark:text-white mb-4">Valores</h3>
            <ul className="text-[#232a3a] dark:text-neutral-400 text-base space-y-1">
              <li>• Excelencia técnica</li>
              <li>• Innovación y creatividad</li>
              <li>• Calidad y seguridad</li>
              <li>• Trabajo en equipo</li>
              <li>• Orientación a la experiencia del usuario</li>
            </ul>
          </div>
          {/* Tarjeta: Hobbies */}
          <div className="bg-white dark:bg-neutral-900 border border-[#232a3a] rounded-2xl p-8 shadow-lg flex flex-col items-start relative transition-all hover:scale-[1.03] hover:shadow-[0_0_0_6px_rgba(37,99,235,0.10)] focus:scale-[1.03] cursor-pointer">
            <Mountain className="w-7 h-7 text-[#2563eb] mb-4" />
            <h3 className="text-lg font-bold text-[#232a3a] dark:text-white mb-4">Hobbies</h3>
            <ul className="text-[#232a3a] dark:text-neutral-400 text-base space-y-1">
              <li>• Trekking</li>
              <li>• Fotografía</li>
              <li>• Ciencia ficción</li>
              <li>• Automatización de procesos</li>
            </ul>
          </div>
        </div>
        {/* Separador visual */}
        <div className="w-full max-w-5xl mx-auto my-3 border-t border-[#2563eb]/20"></div>
        {/* Frase final */}
        <p className="text-[#232a3a] dark:text-neutral-300 max-w-2xl mx-auto font-medium text-lg text-center mt-6 mb-6">
          Comprometido con la calidad y la innovación.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;

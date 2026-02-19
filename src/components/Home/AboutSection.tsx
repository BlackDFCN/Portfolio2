
export default function AboutSection() {
  return (
    <section id="sobre-mi" className="relative z-10 w-full max-w-7xl mx-auto px-2 md:px-0 mt-16 mb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Avatar y datos personales */}
      <div className="flex flex-col gap-6 bg-[#101926]/80 rounded-2xl shadow-xl p-8 items-center md:items-start border border-[#1e293b]/40">
        <div className="relative flex flex-col items-center w-full">
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#2196f3] via-[#3b82f6] to-[#00eaff] p-1 mb-2 shadow-lg">
            <img
              src="/avatar.png"
              alt="Bastián Tapia"
              className="w-full h-full rounded-full object-cover border-4 border-[#101926]"
            />
          </div>
          <span className="mt-2 mb-4 bg-[#18212b] px-4 py-1 rounded-full flex items-center gap-2 text-xs font-bold text-[#2de38c] shadow border border-[#1e293b]/40">
            <span className="h-3 w-3 rounded-full bg-green-500 inline-block"></span> DISPONIBLE
          </span>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center gap-3 bg-[#18212b] rounded-xl px-4 py-3 text-base text-[#b6c9e1] font-semibold border border-[#1e293b]/40">
            <span className="text-[#2de38c] text-lg"> <svg xmlns='http://www.w3.org/2000/svg' className='inline w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z' /><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' /></svg></span>
            Santiago, Chile
          </div>
          <div className="flex items-center gap-3 bg-[#18212b] rounded-xl px-4 py-3 text-base text-[#b6c9e1] font-semibold border border-[#1e293b]/40">
            <span className="text-[#2196f3] text-lg"> <svg xmlns='http://www.w3.org/2000/svg' className='inline w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 11c0-1.657 2.686-3 6-3s6 1.343 6 3-2.686 3-6 3-6-1.343-6-3z' /><circle cx='12' cy='11' r='3' /></svg></span>
            Español / Inglés
          </div>
        </div>
      </div>

      {/* Sobre mí principal */}
      <div className="md:col-span-2 flex flex-col gap-6 bg-[#101926]/80 rounded-2xl shadow-xl p-8 border border-[#1e293b]/40">
        <h2 className="uppercase tracking-widest text-[#2de38c] text-sm font-bold mb-1">Sobre mí</h2>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
          Arquitecto de experiencias digitales y <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2196f3] via-[#3b82f6] to-[#2de38c]">soluciones escalables.</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#b6c9e1] text-base">
          <p>
            Con más de 5 años transformando ideas complejas en productos fluidos. Mi enfoque trasciende el código: busco generar valor real a través de una <span className="font-bold text-white">ingeniería de software sólida</span> y orientada a resultados.
          </p>
          <p>
            Lidero el desarrollo de plataformas de alto tráfico, priorizando la <span className="font-bold text-white">mantenibilidad</span> y una <span className="font-bold text-white">experiencia de usuario</span> que defina el estándar del mercado.
          </p>
        </div>
      </div>

      {/* Cards de skills */}
      <div className="col-span-1 md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-6 w-full mt-2">
        <div className="bg-[#101926]/80 rounded-2xl shadow-lg p-6 flex flex-col gap-2 border border-[#1e293b]/40">
          <span className="text-[#2de38c] text-2xl mb-2"><svg xmlns='http://www.w3.org/2000/svg' className='inline w-7 h-7' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m4 0h-1v-4h-1m4 0h-1v-4h-1' /></svg></span>
          <h3 className="font-bold text-white text-lg">Filosofía Técnica</h3>
          <p className="text-[#b6c9e1] text-sm">Código limpio, modular y preparado para el crecimiento orgánico.</p>
        </div>
        <div className="bg-[#101926]/80 rounded-2xl shadow-lg p-6 flex flex-col gap-2 border border-[#1e293b]/40">
          <span className="text-[#2de38c] text-2xl mb-2"><svg xmlns='http://www.w3.org/2000/svg' className='inline w-7 h-7' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' /></svg></span>
          <h3 className="font-bold text-white text-lg">Mentalidad Ágil</h3>
          <p className="text-[#b6c9e1] text-sm">Iteración rápida y entrega continua basada en datos reales.</p>
        </div>
        <div className="bg-[#101926]/80 rounded-2xl shadow-lg p-6 flex flex-col gap-2 border border-[#1e293b]/40">
          <span className="text-[#3b82f6] text-2xl mb-2"><svg xmlns='http://www.w3.org/2000/svg' className='inline w-7 h-7' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 17v-2a4 4 0 014-4h4a4 4 0 014 4v2' /><circle cx='9' cy='7' r='4' /></svg></span>
          <h3 className="font-bold text-white text-lg">Resolución Crítica</h3>
          <p className="text-[#b6c9e1] text-sm">Capacidad analítica para desglosar problemas complejos en soluciones.</p>
        </div>
        <div className="bg-[#101926]/80 rounded-2xl shadow-lg p-6 flex flex-col gap-2 border border-[#1e293b]/40">
          <span className="text-[#2de38c] text-2xl mb-2"><svg xmlns='http://www.w3.org/2000/svg' className='inline w-7 h-7' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m4 0h-1v-4h-1m4 0h-1v-4h-1' /></svg></span>
          <h3 className="font-bold text-white text-lg">Visión de Negocio</h3>
          <p className="text-[#b6c9e1] text-sm">Entiendo los objetivos comerciales detrás de cada línea de código.</p>
        </div>
      </div>

      {/* Technical stack */}
      <div className="col-span-1 md:col-span-4 bg-[#101926]/80 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-4 border border-[#1e293b]/40 mt-2">
        <span className="flex items-center gap-2 text-[#b6c9e1] font-bold tracking-widest text-xs uppercase mb-2 md:mb-0">
          <svg xmlns='http://www.w3.org/2000/svg' className='inline w-5 h-5 text-[#2196f3]' fill='none' viewBox='0 0 24 24' stroke='currentColor'><rect width='20' height='14' x='2' y='5' rx='2' /><path d='M2 7h20' /></svg>
          Technical Stack
        </span>
        <div className="flex flex-wrap gap-2">
          {["React.js","Node.js","TypeScript","AWS","Next.js","PostgreSQL","Docker"].map((skill) => (
            <span
              key={skill}
              className="bg-[#18212b] text-[#2196f3] px-4 py-1 rounded-full text-xs font-semibold border border-[#1e293b]/40 tracking-wide transition-all duration-200 hover:bg-[#2196f3] hover:text-white shadow hover:scale-105 cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

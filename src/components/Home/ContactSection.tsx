export default function ContactSection() {
  return (
    <section className="py-12 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-2">Contacto</h2>
      <form className="flex flex-col gap-3 mb-4">
        <input type="text" placeholder="Nombre" className="px-4 py-2 rounded border border-[#2c2c34] bg-[#18181b] text-white" />
        <input type="email" placeholder="Correo" className="px-4 py-2 rounded border border-[#2c2c34] bg-[#18181b] text-white" />
        <textarea placeholder="Mensaje" className="px-4 py-2 rounded border border-[#2c2c34] bg-[#18181b] text-white" />
        <button type="submit" className="px-6 py-2 rounded bg-[#3b82f6] text-white font-semibold">Enviar</button>
      </form>
      <div className="flex justify-center gap-4">
        <a href="https://linkedin.com/in/bastiantapia07" className="text-[#06b6d4] hover:text-[#3b82f6]">LinkedIn</a>
        <a href="https://github.com/BlackDFCN" className="text-[#06b6d4] hover:text-[#3b82f6]">GitHub</a>
        <a href="mailto:bastian@correo.com" className="text-[#06b6d4] hover:text-[#3b82f6]">Correo</a>
        <a href="https://wa.me/56959800748" className="text-[#06b6d4] hover:text-[#3b82f6]">WhatsApp</a>
      </div>
    </section>
  );
}

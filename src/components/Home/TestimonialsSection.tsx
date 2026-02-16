export default function TestimonialsSection() {
  return (
    <section className="py-12 max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-2">Testimonios / Referencias</h2>
      <div className="space-y-4 mt-4">
        {/* Ejemplo de testimonio */}
        <blockquote className="bg-[#18181b] text-[#c7c7c7] p-4 rounded-lg shadow">
          <p>"Comentario de cliente/colega sobre el trabajo realizado."</p>
          <footer className="mt-2 text-xs text-[#60a5fa]">Nombre - Rol - Empresa</footer>
        </blockquote>
      </div>
    </section>
  );
}

import React from 'react';
import { notFound } from 'next/navigation';

// Simulación de datos, reemplaza por fetch real o MDX
const projects = [
  { slug: 'sistema-reservas', title: 'Sistema de Reservas para Restaurante' },
  { slug: 'panel-pymes', title: 'Panel de Control para Pymes' },
  { slug: 'ecommerce-integrado', title: 'E-commerce Integrado' },
];

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-neutral-400 max-w-2xl mx-auto">Detalle completo del proyecto: problema, solución, tecnologías, resultados, imágenes/demo, testimonio y CTA.</p>
    </main>
  );
}

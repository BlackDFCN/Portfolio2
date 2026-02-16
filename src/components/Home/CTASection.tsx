"use client";
import { Button } from '@/components/ui/Button';

export function CTASection() {
  return (
    <section className="py-16 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">¿Listo para colaborar?</h2>
      <Button href="#contacto" size="xl" className="animate-pulse">
        ¡Contáctame!
      </Button>
    </section>
  );
}

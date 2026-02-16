import { useMethodology } from '@/features/home/hooks/useMethodology';

export function MethodologySection() {
  const { methodology } = useMethodology();
  return (
    <section className="py-12 max-w-3xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Metodología</h2>
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
        {methodology}
      </p>
    </section>
  );
}

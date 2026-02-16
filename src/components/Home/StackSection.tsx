import { useStack } from '@/features/home/hooks/useStack';

export function StackSection() {
  const { stack } = useStack();
  return (
    <section className="py-12 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Stack Tecnológico</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {stack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
            <span className="text-sm text-gray-700 dark:text-gray-200">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

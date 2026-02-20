import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-[#232a3a] bg-white dark:bg-neutral-900 mt-12">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col items-center text-center gap-2">
        <span className="font-extrabold tracking-tight text-lg text-[#2563eb] dark:text-[#3b82f6]">Bastian Tapia</span>
        <div className="text-xs font-semibold text-[#232a3a] dark:text-[#c7c7c7] tracking-widest uppercase mb-2">Full Stack Developer</div>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-2 text-sm">
          <a href="mailto:bastiantapia.dev@gmail.com" className="text-[#3b82f6] hover:underline">Email</a>
          <span className="text-[#232a3a] dark:text-[#c7c7c7] select-none">·</span>
          <a href="https://wa.me/56959800748" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">WhatsApp</a>
          <span className="text-[#232a3a] dark:text-[#c7c7c7] select-none">·</span>
          <a href="https://linkedin.com/in/bastiantapia07" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">LinkedIn</a>
          <span className="text-[#232a3a] dark:text-[#c7c7c7] select-none">·</span>
          <a href="https://github.com/BlackDFCN" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">GitHub</a>
        </div>
        <div className="text-[#7b7b7b] dark:text-[#bdbdbd] text-xs font-medium tracking-wide mt-2">
          © {new Date().getFullYear()} Bastian Tapia. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="border-t border-[#232a3a]/10 dark:border-[#232a3a]/30 bg-white dark:bg-[#0c0c0c] mt-12 z-10 relative">
      <div className="max-w-4xl mx-auto px-6 py-3 flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left gap-2 md:gap-0">
        <div className="flex flex-col md:flex-row md:items-center md:gap-2 w-full md:w-auto">
          <span className="font-extrabold tracking-tight text-lg text-[#232a3a] dark:text-[#f8fafc]">Bastian Tapia</span>
          <span className="hidden md:inline-block text-xs font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase ml-2 border-l border-gray-200 dark:border-gray-700 pl-3">Full Stack Developer</span>
        </div>
        <div className="flex items-center justify-center md:justify-end gap-3 mt-1 md:mt-0 w-full md:w-auto">
          <a href="mailto:bastiantapia.dev@gmail.com" className="group text-gray-400 hover:text-[#2563eb] dark:hover:text-[#60a5fa] transition-all duration-200" title="Email">
            <FaEnvelope className="text-xl group-hover:scale-110 group-hover:drop-shadow group-focus:scale-110 transition-transform duration-200" />
            <span className="sr-only md:not-sr-only md:hidden ml-2">Email</span>
          </a>
          <a href="https://wa.me/56959800748" target="_blank" rel="noopener noreferrer" className="group text-gray-400 hover:text-[#2563eb] dark:hover:text-[#60a5fa] transition-all duration-200" title="WhatsApp">
            <FaWhatsapp className="text-xl group-hover:scale-110 group-hover:drop-shadow group-focus:scale-110 transition-transform duration-200" />
            <span className="sr-only md:not-sr-only md:hidden ml-2">WhatsApp</span>
          </a>
          <a href="https://linkedin.com/in/bastiantapia07" target="_blank" rel="noopener noreferrer" className="group text-gray-400 hover:text-[#2563eb] dark:hover:text-[#60a5fa] transition-all duration-200" title="LinkedIn">
            <FaLinkedin className="text-xl group-hover:scale-110 group-hover:drop-shadow group-focus:scale-110 transition-transform duration-200" />
            <span className="sr-only md:not-sr-only md:hidden ml-2">LinkedIn</span>
          </a>
          <a href="https://github.com/BlackDFCN" target="_blank" rel="noopener noreferrer" className="group text-gray-400 hover:text-[#2563eb] dark:hover:text-[#60a5fa] transition-all duration-200" title="GitHub">
            <FaGithub className="text-xl group-hover:scale-110 group-hover:drop-shadow group-focus:scale-110 transition-transform duration-200" />
            <span className="sr-only md:not-sr-only md:hidden ml-2">GitHub</span>
          </a>
        </div>
        <div className="w-full md:w-auto mt-2 md:mt-0 text-[11px] text-gray-400 dark:text-gray-500 font-medium tracking-wide md:text-right text-center border-t border-gray-100 dark:border-gray-800 pt-2 md:border-0 md:pt-0">
          © {new Date().getFullYear()} Bastian Tapia. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-[#2c2c34] bg-[#0c0c0c] dark:border-[#2c2c34] dark:bg-[#0c0c0c] mt-12">
      <div className="section-container py-8 flex flex-col items-center text-center gap-3">
        <Link href="/" className="flex items-center gap-2 justify-center mb-2">
          <span className="relative h-6 w-6">
            <Image src="/icon-negro.svg" alt="Logo" width={24} height={24} className="block dark:hidden" />
            <Image src="/icon-blanco.svg" alt="Logo" width={24} height={24} className="hidden dark:block" />
          </span>
          <span className="text-[#ffffff] dark:text-[#ffffff] font-bold tracking-wide text-lg">BASTIANDEV</span>
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm mb-2">
          <Link className="footer-social-link hover:text-[#3b82f6] transition-colors" href="https://wa.me/56959800748" target="_blank" rel="noopener noreferrer">WhatsApp</Link>
          <span className="select-none text-[#3a3a42] dark:text-[#3a3a42]">·</span>
          <Link className="footer-social-link hover:text-[#3b82f6] transition-colors" href="https://linkedin.com/in/bastiantapia07" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          <span className="select-none text-[#3a3a42] dark:text-[#3a3a42]">·</span>
          <Link className="footer-social-link hover:text-[#3b82f6] transition-colors" href="https://github.com/BlackDFCN" target="_blank" rel="noopener noreferrer">GitHub</Link>
        </div>
        <div className="text-[#c7c7c7] text-xs">
          © {new Date().getFullYear()} Bastian Tapia. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

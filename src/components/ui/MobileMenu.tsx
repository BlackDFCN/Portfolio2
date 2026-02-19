"use client";
import { useState } from "react";
import Link from "next/link";
import GlobalBackground from '@/components/ui/GlobalBackground';
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
// import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        aria-label="Abrir menú"
        className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="block w-6 h-0.5 bg-[#3b82f6] mb-1 rounded transition-all" style={{transform: open ? 'rotate(45deg) translateY(7px)' : 'none'}}></span>
        <span className={`block w-6 h-0.5 bg-[#3b82f6] mb-1 rounded transition-all ${open ? 'opacity-0' : ''}`}></span>
        <span className="block w-6 h-0.5 bg-[#3b82f6] rounded transition-all" style={{transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none'}}></span>
      </button>
      {open && (
        <div className="fixed inset-0 z-[9999] flex">
          {/* Panel lateral con fondo global animado */}
          <div className="relative ml-auto w-3/4 max-w-xs h-screen p-6 flex flex-col animate-fade-in-right overflow-hidden border-l border-[#2c2c34]">
            {/* Fondo sólido según tema */}
            <div className="absolute inset-0 z-0 bg-white dark:bg-[#0c0c0c]" />
            {/* Contenido del menú */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              {/* Header menú */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-[#3b82f6]">Menú</span>
                <button onClick={() => setOpen(false)} aria-label="Cerrar menú" className="text-2xl text-[#3b82f6]">×</button>
              </div>
              {/* Avatar y nombre */}
              <div className="flex flex-col items-center mt-2 mb-6">
                <img src="/avatar.png" alt="Bastián Tapia" className="w-20 h-20 rounded-full shadow-lg object-cover border-2 border-[#3b82f6] bg-white dark:bg-[#0c0c0c]" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Bastian+Tapia&background=2196f3&color=fff'; }} />
                <span className="mt-2 text-lg font-bold text-[#18181b] dark:text-white drop-shadow">Bastián Tapia</span>
                <span className="text-xs text-[#3b82f6] font-semibold drop-shadow">Full Stack Developer</span>
              </div>
              <hr className="my-2 border-[#2c2c34] opacity-30" />
              {/* Navegación */}
              <nav className="flex flex-col gap-6 mb-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-semibold text-[#c7c7c7] hover:text-[#3b82f6] transition-colors text-center"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <hr className="my-2 border-[#2c2c34] opacity-30" />
              {/* Redes sociales abajo, espacio simétrico */}
              <div className="flex items-center justify-center gap-4 mb-2">
                <a href="https://linkedin.com/in/bastiantapia07" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#3b82f6] text-2xl">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/BlackDFCN" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#3b82f6] text-2xl">
                  <FaGithub />
                </a>
                <a href="mailto:bastiantapia.dev@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="text-[#3b82f6] text-2xl">
                  <FaEnvelope />
                </a>
                <a href="https://wa.me/56959800748" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[#3b82f6] text-2xl">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Animación movida a globals.css */}
    </div>
  );
}

# Guía de Arquitectura Profesional: Portfolio Modular (Feature-Sliced + Next.js 16+)

---

## 1. Estructura Base

```
src/
├─ app/                # App Router (páginas y layouts)
├─ components/         # Componentes UI y específicos por feature/página
│    ├─ ui/            # Componentes reutilizables
│    └─ [Feature]/     # Componentes por feature/página
├─ features/           # Lógica y hooks por feature
│    └─ [Feature]/     # Hooks y tipos por feature
├─ hooks/              # Hooks globales
├─ lib/                # Utilidades y loaders
├─ content/            # Contenido estático/MDX
├─ styles/             # Estilos globales
└─ public/             # Imágenes y assets
```

---

## 2. Agregar una nueva página

1. Crea la carpeta de la página en `src/app/`:
   - Ejemplo: `src/app/servicios/page.tsx`
2. Si la página requiere layout propio, crea `layout.tsx` en la misma carpeta.
3. Crea componentes específicos en `src/components/[NombrePagina]/` si la UI es compleja.
4. Agrega hooks y lógica en `src/features/[nombre]/` si la página tiene lógica propia.
5. Importa y compón los componentes en el `page.tsx` de la página.

---

## 3. Agregar una sección al Home

1. Crea el componente en `src/components/Home/` (ej: `NuevaSection.tsx`).
2. Si tiene lógica, crea el hook en `src/features/home/hooks/` (ej: `useNuevaSection.ts`).
3. Importa y usa el componente en `src/app/page.tsx`.

---

## 4. Componentes UI reutilizables

1. Crea el componente en `src/components/ui/` (ej: `Alert.tsx`).
2. Exporta desde `src/components/ui/index.ts` para importación centralizada.

---

## 5. Lógica/estado global

1. Crea el hook en `src/hooks/` (ej: `useAuth.ts`).
2. Si es un contexto, crea el provider y envuélvelo en `src/app/layout.tsx`.

---

## 6. Assets e imágenes

- Coloca imágenes y SVG en `public/`.
- Accede desde cualquier componente con `/nombre.svg`.
- Usa `next/image` para optimización.

---

## 7. Buenas prácticas y escalabilidad

- Cada feature tiene su carpeta en `features/` y `components/`.
- No mezcles lógica de UI y negocio: hooks en `features/`, UI en `components/`.
- Usa TypeScript y tipa props y hooks.
- Usa TailwindCSS para estilos.
- Dark mode por defecto (`useTheme`).
- No acoples rutas ni imports absolutos: usa el alias `@` para importar desde `src/`.
- Barrel files (`index.ts`) para importar componentes y hooks de forma centralizada.
- Estructura y nombres claros, sin ambigüedades.

---

## 8. Responsive, UI moderna y accesibilidad

- 100% Responsive:
  - Usa clases Tailwind como `md:`, `lg:`, `xl:` para adaptar layouts y tamaños.
  - Utiliza `flex`, `grid`, `gap`, `min-w-0` para layouts fluidos.
  - Los componentes deben funcionar en móvil, tablet y escritorio.
  - Ejemplo: `className="py-8 px-4 md:px-8 lg:px-16"`.
- Dark Mode:
  - El modo oscuro es el default (`useTheme`).
  - Usa clases como `dark:bg-neutral-900` y `dark:text-white`.
  - Los SVG deben tener variantes para ambos modos.
- Accesibilidad:
  - Usa `aria-label`, `role`, y `tabIndex` en botones e inputs.
  - Contraste suficiente en textos y fondos.
  - Navegación por teclado y focus visible (`focus:outline-none`, `focus:ring`).
- Animaciones y transiciones:
  - Usa `transition-colors`, `duration-200`, `animate-fade-in`, etc.
  - Las animaciones deben ser suaves y no bloquear la interacción.
- Componentes reutilizables:
  - Los componentes UI (`ui/`) deben aceptar props para personalización.
  - Ejemplo: `<Button size="lg" className="w-full">Enviar</Button>`.
- Mobile first:
  - Diseña primero para móvil, luego adapta a desktop.
  - Usa `max-w-*`, `overflow-hidden`, y layouts verticales.
- Optimización:
  - Imágenes en `public/` deben ser optimizadas y usar `next/image`.
  - Usa `min-h-screen` en el body para evitar scrolls innecesarios.
- Preview local:
  - Siempre revisa en varios tamaños de pantalla (`npm run dev`).

---

## 9. Tamaños fijos vs fluidos

- Tamaños fluidos (recomendado):
  - Usa `w-full`, `max-w-*`, `min-w-0`, `flex-1`, `grid-cols-*` para que los elementos se adapten a cualquier pantalla.
  - Los textos, layouts, botones y tarjetas deben ser flexibles.
  - Ejemplo: `className="max-w-xl w-full px-4"`.
- Tamaños fijos (solo cuando necesario):
  - Úsalos para íconos, imágenes, avatares o elementos que requieren proporción exacta.
  - Ejemplo: `className="w-12 h-12"` para un ícono.
  - Evita tamaños fijos en layouts, containers o textos.
- Breakpoints y adaptabilidad:
  - Usa Tailwind `md:`, `lg:`, `xl:` para cambiar tamaños según el dispositivo.
  - Ejemplo: `className="w-16 h-16 md:w-24 md:h-24"`.
- Resumen:
  - Prioriza siempre la flexibilidad y adaptabilidad.
  - Solo fija tamaños si es indispensable para la UI.

---

## 10. Ejemplo de componente responsive

```tsx
// src/components/ui/Card.tsx
import React from 'react';
import clsx from 'clsx';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={clsx('rounded-lg bg-neutral-800 p-6 shadow-md w-full max-w-md mx-auto', className)}>
      {children}
    </div>
  );
}
```
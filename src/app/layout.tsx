import React from 'react';
import '../styles/globals.css';
import Header from '@/components/ui/Header';
import StarfieldBackground from '@/components/ui/StarfieldBackground';
import { Footer } from '@/components/ui/Footer';
import { ThemeProvider } from '@/hooks/useTheme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <StarfieldBackground />
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

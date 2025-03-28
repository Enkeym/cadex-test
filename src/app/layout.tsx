import { Metadata } from 'next';
import React from 'react';
import './globals.css';

// SEO-мётки на уровне всего сайта
export const metadata: Metadata = {
  title: 'CADEX Test | Next.js + TS',
  description: 'Пример выполнения тестового задания на Next.js',
  openGraph: {
    title: 'CADEX Test | Next.js + TS',
    description: 'Демонстрационный проект.',
    url: 'https://your-hosted-url.com',
    siteName: 'CADEX Test',
    images: [
      {
        url: 'https://your-hosted-url.com/og-image.jpg',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CADEX Test | Next.js + TS',
    description: 'Демонстрационный проект.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <header style={styles.header}>
          <div style={styles.headerContent}>
            <h1 style={{ margin: 0 }}>CADEX Logo</h1>
            <nav>
              <a href="/">Главная</a> | <a href="/contact">Contact Us</a>
            </nav>
          </div>
        </header>

        <main style={styles.main}>
          {children}
        </main>

        <footer style={styles.footer}>
          <p>© 2025 CADEX Test. Все права защищены.</p>
        </footer>
      </body>
    </html>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    borderBottom: '1px solid #ccc',
    zIndex: 1000,
    padding: '0.5rem 0',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  main: {
    maxWidth: '1200px',
    margin: '2rem auto',
    padding: '0 1rem',
  },
  footer: {
    marginTop: '2rem',
    borderTop: '1px solid #ccc',
    padding: '1rem',
    textAlign: 'center',
  },
};

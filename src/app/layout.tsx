import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const noteSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'takapblog',
  description: 'takapblog',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body className={noteSansJP.className}>
        <div className="flex flex-col justify-between min-h-screen">
          <Header />
          <div className="container mx-auto mb-auto max-w-6xl py-8">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

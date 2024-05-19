import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import type { ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';
import './globals.css';

const noteSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400'] });
const ORIGIN = process.env.ORIGIN ?? '';
export const metadata: Metadata = {
  metadataBase: new URL(ORIGIN),
  title: 'takapblog-v3',
  description: 'takap*2の技術ブログv3です。主に技術に関する記事を投稿予定です',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html className="scroll-smooth" suppressHydrationWarning>
      <body className={noteSansJP.className}>
        <ThemeProvider enableSystem={false} attribute="class">
          <div className="flex min-h-screen flex-col justify-between">
            <Header />
            <div className="container mx-auto mb-auto max-w-6xl py-8">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

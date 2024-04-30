import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'takapblog',
  description: 'takapblog',
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="px-4">{children}</div>;
};

export default Layout;

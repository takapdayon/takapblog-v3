import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'takapblog',
  description: 'takapblog',
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'takap*2のプロフィール',
  description: 'takap*2のプロフィールです。主に作ったものや、好きなこと等載せてます',
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="px-4">{children}</div>;
};

export default Layout;

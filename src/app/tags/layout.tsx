import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'タグ一覧',
  description: 'タグの一覧です',
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="px-4">{children}</div>;
};

export default Layout;

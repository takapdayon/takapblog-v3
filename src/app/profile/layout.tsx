import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Profile | taka p*2',
  description: 'インフラエンジニアを経てWeb開発に取り組む、taka p*2 のプロフィールと取得資格を紹介します。',
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="px-4">{children}</div>;
};

export default Layout;

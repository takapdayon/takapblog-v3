'use client';

import dynamic from 'next/dynamic';
import { memo, type ReactNode } from 'react';
const ThemeIcon = dynamic(() => import('./Elements/ThemeIcon'), { ssr: false });
const MobileHeader = dynamic(() => import('./Elements/MobileHeader'), { ssr: false });

const TabElement = ({ href, children }: { href: string; children: ReactNode }) => (
  <a className="my-2 block font-medium" href={href}>
    {children}
  </a>
);

/**
 * hydrationエラーが起きる、直すと逐一renderされUI的によくないから許容
 * ref: https://github.com/pacocoursey/next-themes?tab=readme-ov-file#avoid-hydration-mismatch
 */
// eslint-disable-next-line react/display-name
export const Header = memo(() => {
  return (
    <header className="border-b border-border py-4 text-subtext">
      <div className="mx-auto flex max-w-6xl justify-between px-4">
        <nav className="mx-auto flex w-full items-center justify-between">
          <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold" href="/">
              taka p*2
            </a>
          </div>
          <div className="flex items-center overflow-hidden">
            <div className="h-fit">
              <div className="hidden flex-row items-center justify-end gap-4 sm:flex">
                <TabElement href="/">Top</TabElement>
                <TabElement href="/profile">Profile</TabElement>
                <TabElement href="/blogs">Blogs</TabElement>
              </div>
              <MobileHeader />
            </div>
            <div className="ml-6 border-l border-border pl-6">
              <ThemeIcon />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
});

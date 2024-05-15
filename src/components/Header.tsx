'use client';

import { useState, type ReactNode } from 'react';

const TabElement = ({
  href,
  isMobile = false,
  children,
}: {
  href: string;
  isMobile?: boolean;
  children: ReactNode;
}) => {
  return (
    <a
      className={`font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 ${isMobile ? 'my-2 block' : ''}`}
      href={href}
    >
      {children}
    </a>
  );
};

export const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className="border-b border-slate-200 py-4 text-slate-500 dark:border-slate-200/5">
      <div className="mx-auto flex max-w-6xl justify-between px-4">
        <nav className="mx-auto flex w-full items-center justify-between">
          <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold dark:text-white" href="/">
              taka p*2
            </a>
          </div>
          <div className="inline-block overflow-hidden">
            <div className="hidden flex-row items-center justify-end gap-5 sm:flex">
              <TabElement href="/">Top</TabElement>
              <TabElement href="/profile">Profile</TabElement>
              <TabElement href="/blogs">Blogs</TabElement>
            </div>
            <button
              onClick={() => setOpenNav(prev => !prev)}
              type="button"
              className="inline-block size-8 rounded-lg border shadow-sm sm:hidden"
            >
              {openNav ? (
                <span className="i-material-symbols-close"></span>
              ) : (
                <span className="i-material-symbols-dehaze-rounded"></span>
              )}
            </button>
            {openNav && (
              <div className="absolute right-8 z-10 mt-2 w-32 origin-top-right rounded-lg bg-white py-2 pl-4 shadow-lg sm:hidden">
                <TabElement isMobile href="/">
                  Top
                </TabElement>
                <TabElement isMobile href="/profile">
                  Profile
                </TabElement>
                <TabElement isMobile href="/blogs">
                  Blogs
                </TabElement>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

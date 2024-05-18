'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, type ReactNode } from 'react';

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
    <a className={`font-medium ${isMobile ? 'my-2 block' : ''}`} href={href}>
      {children}
    </a>
  );
};

export const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  //ref: https://github.com/pacocoursey/next-themes?tab=readme-ov-file#avoid-hydration-mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
              <button
                onClick={() => setOpenNav(prev => !prev)}
                type="button"
                className="inline-block size-8 rounded-lg border border-border shadow-sm sm:hidden"
              >
                {openNav ? (
                  <span className="i-material-symbols-close"></span>
                ) : (
                  <span className="i-material-symbols-dehaze-rounded"></span>
                )}
              </button>
              {openNav && (
                <div className="absolute right-24 z-10 mt-2 w-32 origin-top-right rounded-lg border border-border bg-card py-2 pl-4 shadow-lg sm:hidden">
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
            <div className="ml-6 border-l border-border pl-6">
              {theme === 'light' ? (
                <button
                  onClick={() => setTheme('dark')}
                  type="button"
                  className="inline-block size-8 rounded-lg border border-border shadow-sm"
                >
                  <span className="i-material-symbols-dark-mode-rounded"></span>
                </button>
              ) : (
                <button
                  onClick={() => setTheme('light')}
                  type="button"
                  className="inline-block size-8 rounded-lg border border-border shadow-sm"
                >
                  <span className="i-material-symbols-light-mode-rounded"></span>
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

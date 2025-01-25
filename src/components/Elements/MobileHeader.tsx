'use client';

import { useState, type ReactNode } from 'react';

const TabElement = ({ href, children }: { href: string; children: ReactNode }) => (
  <a className="my-2 block font-medium" href={href}>
    {children}
  </a>
);

const MobileHeader = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
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
          <TabElement href="/">Top</TabElement>
          <TabElement href="/profile">Profile</TabElement>
          <TabElement href="/blogs">Blogs</TabElement>
        </div>
      )}
    </>
  );
};

export default MobileHeader;

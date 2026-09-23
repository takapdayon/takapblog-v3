'use client';

import Link from 'next/link';
import { useState, type ReactNode } from 'react';

const TabElement = ({ href, children, onClick }: { href: string; children: ReactNode; onClick: () => void }) => (
  <Link className="my-2 block font-medium" href={href} onClick={onClick}>
    {children}
  </Link>
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
          <TabElement href="/" onClick={() => setOpenNav(false)}>
            Top
          </TabElement>
          <TabElement href="/profile" onClick={() => setOpenNav(false)}>
            Profile
          </TabElement>
          <TabElement href="/blogs" onClick={() => setOpenNav(false)}>
            Blogs
          </TabElement>
        </div>
      )}
    </>
  );
};

export default MobileHeader;

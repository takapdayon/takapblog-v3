import type { ReactNode } from 'react';

const TabElement = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <a
      className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
      href={href}
    >
      {children}
    </a>
  );
};

export const Header = () => {
  return (
    <header className="border-b border-slate-200 py-4 text-slate-500 dark:border-slate-200/5">
      <div className="mx-auto flex max-w-6xl justify-between px-4">
        <nav className="mx-auto w-full max-w-[85rem] sm:flex sm:items-center sm:justify-between" aria-label="Global">
          <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold dark:text-white" href="/">
              taka p*2
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white p-2 text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-transparent dark:text-white dark:hover:bg-white/10"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden size-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden size-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
          >
            <div className="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5">
              <TabElement href="/">Top</TabElement>
              <TabElement href="/profile">Profile</TabElement>
              <TabElement href="/blogs">Blogs</TabElement>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

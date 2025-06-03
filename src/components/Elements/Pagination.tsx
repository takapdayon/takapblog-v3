import { type AnchorHTMLAttributes, type ReactNode } from 'react';

const PaginationButton = ({
  active = false,
  children,
  ...props
}: { active?: boolean; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      className="focus:outline-hidden flex size-10 items-center justify-center rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      {...props}
    >
      {children}
    </a>
  );
};

export const Pagination = ({
  page = 1,
  total,
  skip,
  limit,
}: {
  page?: number;
  total: number;
  skip: number;
  limit: number;
}) => {
  const href = '/blogs/page/';
  const canPrevious = skip !== 0;
  const prevousPage = page - 1;

  const canNext = skip + limit < total;
  const nextPage = page + 1;

  return (
    <nav className="flex items-center justify-center gap-x-1" aria-label="Pagination">
      {canPrevious && (
        <>
          <PaginationButton href={`${href}${prevousPage}`}>
            <span className="i-material-symbols-chevron-left-rounded"></span>
          </PaginationButton>
          <PaginationButton href={`${href}${prevousPage}`}>{prevousPage}</PaginationButton>
        </>
      )}
      <PaginationButton active href={`${href}${page}`}>
        {page}
      </PaginationButton>
      {canNext && (
        <>
          <PaginationButton href={`${href}${nextPage}`}>{nextPage}</PaginationButton>
          <PaginationButton href={`${href}${nextPage}`}>
            <span className="i-material-symbols-chevron-right-rounded"></span>
          </PaginationButton>
        </>
      )}
    </nav>
  );
};

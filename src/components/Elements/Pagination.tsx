import { type AnchorHTMLAttributes, type ReactNode } from 'react';
import { tv } from 'tailwind-variants';

const paginationButtonClass = tv({
  base: 'flex size-10 items-center justify-center rounded-lg p-2 text-sm text-subtext hover:bg-button-hover hover:text-text',
  variants: {
    active: {
      true: 'bg-blue-500 text-white hover:bg-blue-600',
    },
  },
});

const PaginationButton = ({
  active = false,
  children,
  ...props
}: { active?: boolean; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a className={paginationButtonClass({ active })} {...props}>
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
    <nav className="flex items-center justify-center gap-x-2" aria-label="Pagination">
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

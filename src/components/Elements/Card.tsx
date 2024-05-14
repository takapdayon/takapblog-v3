import { Tag } from '@/components/Elements/Tag';
import type { TypeBlogSkeleton } from '@/types/contentful';
import type { Entry } from 'contentful';
import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  extendClass?: string;
};

export const Card = ({ children, extendClass }: CardProps) => {
  return (
    <div
      className={`mb-auto w-full rounded-xl border bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70 ${extendClass}`}
    >
      {children}
    </div>
  );
};

export const BlogCard = ({ item }: { item: Entry<TypeBlogSkeleton, undefined, string> }) => {
  return (
    <div
      key={item.fields.slug}
      className="row-span-3 grid w-full grid-rows-subgrid gap-2 rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70"
    >
      <div style={{ backgroundColor: `#${item.fields.color}` }} className="h-32 w-full rounded-t-xl" />
      <div className="p-4 md:p-5">
        <p className="text-sm text-gray-500 dark:text-neutral-400">{item.fields.publishedDate}</p>
        <h3 className="mt-1 font-bold text-gray-800 dark:text-white">
          <a className="no-underline hover:underline" href={`/blogs/${item.fields.slug}`}>
            {item.fields.title}
          </a>
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400">{item.fields.description}</p>
      </div>
      <div className="flex flex-wrap gap-1 px-5 pb-5 text-sm">
        {item.metadata.tags.map(tag => (
          <Tag key={tag.sys.id} tag={tag} />
        ))}
      </div>
    </div>
  );
};

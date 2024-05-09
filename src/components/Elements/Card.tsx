import { TypeBlogSkeleton } from '@/types/contentful';
import { Entry } from 'contentful';
import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return (
    <div className="mb-auto w-full p-6 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      {children}
    </div>
  );
};

export const BlogCard = ({ item }: { item: Entry<TypeBlogSkeleton, undefined, string> }) => {
  return (
    <div
      key={item.fields.slug}
      className="row-span-3 w-full gap-2 grid grid-rows-subgrid bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <div style={{ backgroundColor: `#${item.fields.color}` }} className="w-full h-32 rounded-t-xl" />
      <div className="p-4 md:p-5">
        <p className="text-sm text-gray-500 dark:text-neutral-400">{item.fields.publishedDate}</p>
        <h3 className="mt-1 font-bold text-gray-800 dark:text-white">
          <a className="no-underline hover:underline" href={`/blogs/${item.fields.slug}`}>
            {item.fields.title}
          </a>
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400">{item.fields.description}</p>
      </div>
      <div className="px-5 pb-5 flex flex-wrap gap-1 text-sm">
        {item.metadata.tags.map(tag => (
          <a className="no-underline" href={`/tags/${tag.sys.id}`}>
            <div className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white hover:underline">
              #{tag.sys.id}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

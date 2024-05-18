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
    <div className={`mb-auto w-full rounded-xl border border-border bg-card p-6 shadow-sm ${extendClass}`}>
      {children}
    </div>
  );
};

export const BlogCard = ({ item }: { item: Entry<TypeBlogSkeleton, undefined, string> }) => {
  return (
    <div
      key={item.fields.slug}
      className="row-span-3 grid w-full grid-rows-subgrid gap-2 rounded-xl border border-border bg-card shadow-sm"
    >
      <div style={{ backgroundColor: `#${item.fields.color}` }} className="h-32 w-full rounded-t-xl" />
      <div className="p-4 md:p-5">
        <p className="text-sm text-subtext">{item.fields.publishedDate}</p>
        <h3 className="mt-1 font-bold text-text">
          <a className="no-underline hover:underline" href={`/blogs/${item.fields.slug}`}>
            {item.fields.title}
          </a>
        </h3>
        <p className="mt-2 text-sm text-subtext">{item.fields.description}</p>
      </div>
      <div className="flex flex-wrap gap-1 px-5 pb-5 text-sm">
        {item.metadata.tags.map(tag => (
          <Tag key={tag.sys.id} tag={tag} />
        ))}
      </div>
    </div>
  );
};

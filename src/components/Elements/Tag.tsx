import type { Tag as CfTag, TagLink } from 'contentful';

const TAGS = '/tags';
export const Tag = ({ tag }: { tag: { sys: TagLink } | CfTag }) => (
  <a key={tag.sys.id} className="no-underline" href={`${TAGS}/${tag.sys.id}`}>
    <div className="inline-flex items-center gap-x-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm hover:underline dark:border-neutral-700 dark:bg-neutral-900 dark:text-white">
      <div className="flex items-end">
        <span className="i-material-symbols-tag-rounded" />
        <span>{tag.sys.id}</span>
      </div>
    </div>
  </a>
);

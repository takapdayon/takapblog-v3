import type { Tag as CfTag, TagLink } from 'contentful';

const TAGS = '/tags';
export const Tag = ({ tag }: { tag: { sys: TagLink } | CfTag }) => (
  <a key={tag.sys.id} className="no-underline" href={`${TAGS}/${tag.sys.id}`}>
    <div className="inline-flex items-center gap-x-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs shadow-sm">
      <div className="flex items-end font-medium text-subtext hover:underline">
        <span className="i-material-symbols-tag-rounded" />
        <span>{tag.sys.id}</span>
      </div>
    </div>
  </a>
);

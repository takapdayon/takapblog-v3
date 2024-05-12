import { cfClient } from '@/lib/contentfulClient';

const getTags = async () => {
  const tags = await cfClient.getTags();
  return tags;
};

const Page = async () => {
  const tags = await getTags();
  return (
    <div className="flex flex-wrap gap-1 pb-5 text-sm">
      {tags.items.map(tag => {
        return (
          <a key={tag.sys.id} className="no-underline" href={`/tags/${tag.sys.id}`}>
            <div className="inline-flex items-center gap-x-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm hover:underline dark:border-neutral-700 dark:bg-neutral-900 dark:text-white">
              <div className="flex items-center gap-1">
                <span className="i-material-symbols-tag-rounded" />
                <span>{tag.name}</span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Page;

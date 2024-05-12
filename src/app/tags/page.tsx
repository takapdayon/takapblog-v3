import { cfClient } from '@/lib/contentfulClient';

const getTags = async () => {
  const tags = await cfClient.getTags();
  return tags;
};

const Page = async () => {
  const tags = await getTags();
  return (
    <div className="pb-5 flex flex-wrap gap-1 text-sm">
      {tags.items.map(tag => {
        return (
          <a className="no-underline" href={`/tags/${tag.sys.id}`}>
            <div className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white hover:underline">
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

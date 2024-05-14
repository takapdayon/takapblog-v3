import { Tag } from '@/components/Elements/Tag';
import { cfClient } from '@/lib/contentfulClient';

const getTags = async () => {
  const tags = await cfClient.getTags();
  return tags;
};

const Page = async () => {
  const tags = await getTags();
  return (
    <div className="flex flex-wrap gap-1 pb-5 text-sm">
      {tags.items.map(tag => (
        <Tag key={tag.sys.id} tag={tag} />
      ))}
    </div>
  );
};

export default Page;

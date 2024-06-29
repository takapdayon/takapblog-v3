import { Tag } from '@/components/Elements/Tag';
import { createCfClient } from '@/lib/contentfulClient';
import { draftMode } from 'next/headers';

const getTags = async (isDraftModeEnabled: boolean) => {
  const tags = await createCfClient(isDraftModeEnabled).getTags();
  return tags;
};

const Page = async () => {
  const { isEnabled: isDraftModeEnabled } = draftMode();
  const tags = await getTags(isDraftModeEnabled);
  return (
    <div className="flex flex-wrap gap-1 pb-5 text-sm">
      {tags.items.map(tag => (
        <Tag key={tag.sys.id} tag={tag} />
      ))}
    </div>
  );
};

export default Page;

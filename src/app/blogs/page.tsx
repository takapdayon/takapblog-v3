import { getPosts } from '@/app/blogs/utils';
import { BlogCard } from '@/components/Elements/Card';
import { Pagination } from '@/components/Elements/Pagination';
import type { Metadata } from 'next';
import { draftMode } from 'next/headers';

export const metadata: Metadata = {
  title: '記事一覧',
  description: 'ブログ記事の一覧です',
};

const Page = async () => {
  const { isEnabled: isDraftModeEnabled } = draftMode();
  const posts = await getPosts(isDraftModeEnabled);
  return (
    <>
      <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.items.map(item => {
          return <BlogCard key={item.fields.slug} item={item} />;
        })}
      </div>
      <div className="my-12 flex items-center justify-center">
        <Pagination total={posts.total} skip={posts.skip} limit={posts.limit} />
      </div>
    </>
  );
};

export default Page;

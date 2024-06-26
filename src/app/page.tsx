import { BlogCard, Card } from '@/components/Elements/Card';
import { createCfClient } from '@/lib/contentfulClient';
import type { TypeBlogSkeleton } from '@/types/contentful';
import { draftMode } from 'next/headers';

const CONTENT_TYPE = 'blog';
const ORDER_PUBLISHED_DATE = '-fields.publishedDate';

const getNewestPosts = async (isDraftModeEnabled: boolean) => {
  const posts = await createCfClient(isDraftModeEnabled).getEntries<TypeBlogSkeleton>({
    content_type: CONTENT_TYPE,
    order: [ORDER_PUBLISHED_DATE],
    limit: 3,
  });
  return posts;
};

const Home = async () => {
  const { isEnabled: isDraftModeEnabled } = draftMode();
  const posts = await getNewestPosts(isDraftModeEnabled);
  return (
    <main className="px-4">
      <Card extendClass="flex flex-col items-center py-12">
        <div className="mb-4 inline-flex size-24 items-center justify-center rounded-full">
          <img className="rounded-full" src="/icon.png" alt="自分のicon" />
        </div>
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-text sm:text-3xl">taka p*2</h5>
        <p className="font-normal text-subtext">I&apos;m web engineer in Japan</p>
        <p className="font-normal text-subtext">仮想世界に生きてます</p>
      </Card>
      <h2 className="mb-4 mt-8 text-xl font-bold sm:text-2xl">
        <div className="flex items-center gap-1 text-text">
          <span className="i-material-symbols-article" />
          <span>最新記事</span>
        </div>
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.items.map(item => {
          return <BlogCard key={item.fields.slug} item={item} />;
        })}
      </div>
    </main>
  );
};

export default Home;

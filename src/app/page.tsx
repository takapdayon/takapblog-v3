import { BlogCard, Card } from '@/components/Elements/Card';
import { cfClient } from '@/lib/contentfulClient';
import { TypeBlogSkeleton } from '@/types/contentful';

const CONTENT_TYPE = 'blog';
const ORDER_PUBLISHED_DATE = '-fields.publishedDate';

const getNewestPosts = async () => {
  const posts = await cfClient.getEntries<TypeBlogSkeleton>({
    content_type: CONTENT_TYPE,
    order: [ORDER_PUBLISHED_DATE],
    limit: 3,
  });
  return posts;
};

const Home = async () => {
  const posts = await getNewestPosts();
  return (
    <main className="px-4">
      <Card extendClass="flex flex-col items-center py-12">
        <div className="w-24 h-24 inline-flex items-center justify-center rounded-full mb-4">
          <img className="rounded-full" src="/icon.png" alt="自分のicon" />
        </div>
        <h5 className="mb-2 text-xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
          taka p * 2
        </h5>
        <p className="font-normal text-gray-500 dark:text-gray-400">I'm web engineer in Japan</p>
        <p className="font-normal text-gray-500 dark:text-gray-400">仮想世界に生きてます</p>
      </Card>
      <h2 className="mt-8 mb-4 text-xl sm:text-2xl font-bold">
        <div className="flex items-center gap-1">
          <span className="i-material-symbols-article" />
          <span>最新記事</span>
        </div>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
        {posts.items.map(item => {
          return <BlogCard item={item} />;
        })}
      </div>
    </main>
  );
};

export default Home;

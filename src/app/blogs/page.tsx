import { BlogCard } from '@/components/Elements/Card';
import { cfClient } from '@/lib/contentfulClient';
import { TypeBlogSkeleton } from '@/types/contentful';

const CONTENT_TYPE = 'blog';
const ORDER_PUBLISHED_DATE = '-fields.publishedDate';

const getPosts = async () => {
  const posts = await cfClient.getEntries<TypeBlogSkeleton>({
    content_type: CONTENT_TYPE,
    order: [ORDER_PUBLISHED_DATE],
  });
  return posts;
};

const Page = async () => {
  const posts = await getPosts();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
      {posts.items.map(item => {
        return <BlogCard item={item} />;
      })}
    </div>
  );
};

export default Page;

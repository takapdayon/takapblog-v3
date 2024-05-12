import { BlogCard } from '@/components/Elements/Card';
import { cfClient } from '@/lib/contentfulClient';
import type { TypeBlogSkeleton } from '@/types/contentful';

const CONTENT_TYPE = 'blog';
const ORDER_PUBLISHED_DATE = '-fields.publishedDate';

const getPosts = async (id: string) => {
  const posts = await cfClient.getEntries<TypeBlogSkeleton>({
    content_type: CONTENT_TYPE,
    order: [ORDER_PUBLISHED_DATE],
    'metadata.tags.sys.id[all]': [id],
  });
  return posts;
};

export const generateStaticParams = async () => {
  const tags = await cfClient.getTags();
  return tags.items.map(tag => ({
    slug: tag.sys.id,
  }));
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const posts = await getPosts(params.slug);
  return (
    <>
      <h2 className="mb-6 text-xl font-bold sm:text-3xl">
        <div className="flex items-end gap-1">
          <span className="i-material-symbols-tag-rounded" />
          <span>{params.slug}</span>
        </div>
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.items.map(item => {
          return <BlogCard key={item.fields.slug} item={item} />;
        })}
      </div>
    </>
  );
};

export default Page;

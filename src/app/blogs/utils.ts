import { cfClient } from '@/lib/contentfulClient';
import type { TypeBlogSkeleton } from '@/types/contentful';

const CONTENT_TYPE = 'blog';
const ORDER_PUBLISHED_DATE = '-fields.publishedDate';

/**
 * order受けれるようにして引き上げてもよい
 */
export const getPosts = async () => {
  const posts = await cfClient.getEntries<TypeBlogSkeleton>({
    content_type: CONTENT_TYPE,
    order: [ORDER_PUBLISHED_DATE],
  });
  return posts;
};

export const getPost = async (slug: string) => {
  const posts = await getPosts();
  const post = posts.items.find(item => item.fields.slug === slug);
  return post;
};

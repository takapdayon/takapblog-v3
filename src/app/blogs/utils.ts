import { createCfClient } from '@/lib/contentfulClient';
import type { TypeBlogSkeleton } from '@/types/contentful';

const CONTENT_TYPE = 'blog';
const ORDER_PUBLISHED_DATE = '-fields.publishedDate';

export const getPosts = async (isDraftModeEnabled: boolean = false, page: number = 1, limit: number = 9) => {
  const skip = (page - 1) * limit;
  const posts = await createCfClient(isDraftModeEnabled).getEntries<TypeBlogSkeleton>({
    content_type: CONTENT_TYPE,
    order: [ORDER_PUBLISHED_DATE],
    limit,
    skip,
  });
  return posts;
};

export const getPost = async (slug: string, isDraftModeEnabled: boolean) => {
  const posts = await getPosts(isDraftModeEnabled);
  const post = posts.items.find(item => item.fields.slug === slug);
  return post;
};

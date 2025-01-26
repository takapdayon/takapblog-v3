import { createClient } from 'contentful';

export const createCfClient = (preview: boolean = false) => {
  const isPreview = process.env.IS_PREVIEW?.toLowerCase() === 'true';
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? '',
    accessToken:
      preview || isPreview ? process.env.CONTENTFUL_PREVIEW_TOKEN ?? '' : process.env.CONTENTFUL_DELIVERY_TOKEN ?? '',
    host: preview || isPreview ? 'preview.contentful.com' : undefined,
  });
};

import { createClient } from 'contentful';

export const createCfClient = (preview: boolean = false) =>
  createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? '',
    accessToken:
      preview || process.env.IS_PREVIEW
        ? process.env.CONTENTFUL_PREVIEW_TOKEN ?? ''
        : process.env.CONTENTFUL_DELIVERY_TOKEN ?? '',
    host: preview || process.env.IS_PREVIEW ? 'preview.contentful.com' : undefined,
  });

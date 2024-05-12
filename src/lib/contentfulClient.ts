import { createClient } from 'contentful';

export const cfClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN ?? '',
});

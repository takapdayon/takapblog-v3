'use client';

import { memo } from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  LineIcon,
  LineShareButton,
  TwitterShareButton,
  XIcon,
} from 'react-share';

// eslint-disable-next-line react/display-name
export const ShareButtons = memo(({ title }: { title: string | undefined }) => {
  const url = location.href;
  return (
    <div className="flex justify-end gap-4">
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon size={36} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <XIcon size={36} round />
      </TwitterShareButton>
      <LineShareButton url={url} title={title}>
        <LineIcon size={36} round />
      </LineShareButton>
      <HatenaShareButton url={url} title={title} windowWidth={660} windowHeight={460}>
        <HatenaIcon size={36} round />
      </HatenaShareButton>
    </div>
  );
});

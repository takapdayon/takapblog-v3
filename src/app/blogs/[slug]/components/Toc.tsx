import type { TypeBlogSkeleton } from '@/types/contentful';
import type { Entry } from 'contentful';
import Markdown from 'react-markdown';

export const Toc = ({ post }: { post: Entry<TypeBlogSkeleton, undefined, string> | undefined }) => {
  return (
    <>
      <div className="mb-4 text-lg font-bold text-text">目次</div>
      <ul className="list-inside list-none pl-1 leading-7">
        <Markdown
          allowedElements={['h2', 'h3', 'h4']}
          components={{
            h2: props => (
              <li
                style={{ '--text-color-hover': `#${post?.fields.color}` }}
                className="text-subtext hover:text-[--text-color-hover]"
              >
                <a href={`#${props.children?.toString()}`}>{props.children}</a>
              </li>
            ),
            h3: props => (
              <li
                style={{ '--text-color-hover': `#${post?.fields.color}` }}
                className="indent-6 text-subtext hover:text-[--text-color-hover]"
              >
                <a href={`#${props.children?.toString()}`}>{props.children}</a>
              </li>
            ),
            h4: props => (
              <li
                style={{ '--text-color-hover': `#${post?.fields.color}` }}
                className="indent-12 text-subtext hover:text-[--text-color-hover]"
              >
                <a href={`#${props.children?.toString()}`}>{props.children}</a>
              </li>
            ),
          }}
        >
          {post?.fields.content}
        </Markdown>
      </ul>
    </>
  );
};

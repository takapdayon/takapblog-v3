import { cfClient } from '@/lib/contentfulClient';
import { TypeBlogSkeleton } from '@/types/contentful';
import { Entry } from 'contentful';
import Markdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';

import { Card } from '@/components/Elements/Card';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CONTENT_TYPE = 'blog';
const ORDER_PUBLISHED_DATE = '-fields.publishedDate';

const getPosts = async () => {
  const posts = await cfClient.getEntries<TypeBlogSkeleton>({
    content_type: CONTENT_TYPE,
    order: [ORDER_PUBLISHED_DATE],
  });
  return posts;
};

export const generateStaticParams = async () => {
  const posts = await getPosts();
  return posts.items.map(post => ({
    slug: post.fields.slug,
  }));
};

const Content = ({ post }: { post: Entry<TypeBlogSkeleton, undefined, string> | undefined }) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeKatex]}
      className="prose prose-sm md:prose-base dark:prose-invert max-w-none"
      components={{
        code(props) {
          const { children, className, node, ref, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              style={coldarkDark}
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {post?.fields.content}
    </Markdown>
  );
};

const Toc = () => {
  // TODO: これと、プロフカードはつけてもいいかも
  return <></>;
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const posts = await getPosts();
  const post = posts.items.find(item => item.fields.slug === params.slug);
  return (
    <>
      <div className="px-4 pb-12 flex flex-col items-center">
        <h1 className="text-xl sm:text-3xl font-bold">{post?.fields.title}</h1>
        <div className="mt-6 flex w-full items-center justify-center gap-9">
          <div>
            <div className="mb-1 text-sm font-bold text-center">published</div>
            <div>{post?.fields.publishedDate}</div>
          </div>
          <div className="max-w-48 sm:max-w-96">
            <div className="mb-1 text-sm font-bold text-center">tags</div>
            <div className="flex flex-nowrap items-center gap-1 text-sm overflow-x-auto overflow-y-hidden">
              {post?.metadata.tags.map(tag => (
                <a className="no-underline" href={`/tags/${tag.sys.id}`}>
                  <div className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white hover:underline">
                    #{tag.sys.id}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sm:px-4">
        <Card>
          <Content post={post} />
        </Card>
      </div>
    </>
  );
};

export default Page;

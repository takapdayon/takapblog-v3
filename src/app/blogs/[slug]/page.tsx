import { cfClient } from '@/lib/contentfulClient';
import type { TypeBlogSkeleton } from '@/types/contentful';
import type { Entry } from 'contentful';
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
      className="prose prose-sm max-w-none md:prose-base dark:prose-invert"
      components={{
        h2: props => {
          return <h2 id={props.children?.toString()}>{props.children}</h2>;
        },
        h3: props => {
          return <h3 id={props.children?.toString()}>{props.children}</h3>;
        },
        h4: props => {
          return <h4 id={props.children?.toString()}>{props.children}</h4>;
        },
        code(props) {
          // eslint-disable-next-line
          const { children, className, node, ref, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter {...rest} PreTag="div" language={match[1]} style={coldarkDark}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
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

const Toc = ({ post }: { post: Entry<TypeBlogSkeleton, undefined, string> | undefined }) => {
  return (
    <>
      <div className="mb-4 text-lg font-bold">目次</div>
      <ul className="list-inside list-none pl-1 leading-7 ">
        <Markdown
          allowedElements={['h2', 'h3', 'h4']}
          components={{
            h2: props => (
              <li className="text-slate-500 hover:text-sky-500">
                <a href={`#${props.children?.toString()}`}>{props.children}</a>
              </li>
            ),
            h3: props => (
              <li className="indent-6 text-slate-500 hover:text-sky-500">
                <a href={`#${props.children?.toString()}`}>{props.children}</a>
              </li>
            ),
            h4: props => (
              <li className="indent-12 text-slate-500 hover:text-sky-500">
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

const Page = async ({ params }: { params: { slug: string } }) => {
  const posts = await getPosts();
  const post = posts.items.find(item => item.fields.slug === params.slug);
  return (
    <>
      <div className="flex flex-col items-center px-4 pb-20 pt-12">
        <h1 className="text-xl font-bold sm:text-3xl">{post?.fields.title}</h1>
        <div className="mt-6 flex w-full items-center justify-center gap-9">
          <div>
            <div className="mb-1 text-center text-sm font-bold text-slate-500">published</div>
            <div className="text-slate-500">{post?.fields.publishedDate}</div>
          </div>
          <div className="max-w-48 sm:max-w-96">
            <div className="mb-1 text-center text-sm font-bold text-slate-500">tags</div>
            <div className="flex flex-nowrap items-center gap-1 overflow-x-auto overflow-y-hidden text-sm">
              {post?.metadata.tags.map(tag => (
                <a key={tag.sys.id} className="no-underline" href={`/tags/${tag.sys.id}`}>
                  <div className="inline-flex items-center gap-x-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm hover:underline dark:border-neutral-700 dark:bg-neutral-900 dark:text-white">
                    <div className="flex items-end">
                      <span className="i-material-symbols-tag-rounded text-slate-500" />
                      <span className="text-slate-500">{tag.sys.id}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 sm:px-4">
        <Card extendClass="col-span-4 lg:col-span-3">
          <Content post={post} />
        </Card>
        <div className="invisible h-full lg:visible">
          <Card extendClass="px-4 sticky top-4">
            <Toc post={post} />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Page;

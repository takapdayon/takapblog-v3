import type { TypeBlogSkeleton } from '@/types/contentful';
import type { Entry } from 'contentful';
import Markdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';

import { Toc } from '@/app/blogs/[slug]/components/Toc';
import { Card } from '@/components/Elements/Card';
import { Tag } from '@/components/Elements/Tag';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { LinkCard } from '@/app/blogs/[slug]/components/LinkCard';
import { getPost, getPosts } from '@/app/blogs/utils';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { draftMode } from 'next/headers';
import rehypeRaw from 'rehype-raw';
import RemarkGithubAlerts from 'remark-alerts';
import remarkBreaks from 'remark-breaks';

const ShareButtons = dynamic(() => import('./components/ShareButton'), { ssr: false });
const Mermaid = dynamic(() => import('./components/Mermaid'), { ssr: false });

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const { isEnabled: isDraftModeEnabled } = draftMode();
  const post = await getPost(params.slug, isDraftModeEnabled);
  return {
    title: post?.fields.title,
    description: post?.fields.description,
    openGraph: {
      url: `/blogs/${post?.fields.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
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
      remarkPlugins={[remarkGfm, RemarkGithubAlerts, remarkBreaks]}
      rehypePlugins={[rehypeKatex, rehypeRaw]}
      className="prose prose-sm max-w-none dark:prose-invert md:prose-base"
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
          if (className === 'language-mermaid') {
            return <Mermaid>{children}</Mermaid>;
          }
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
        p: ({ node, ...props }) => {
          const child = node?.children[0];
          if (
            node?.children.length === 1 &&
            child?.type === 'element' &&
            child.tagName === 'a' &&
            typeof child.properties?.href === 'string' &&
            child.children[0].type === 'text' &&
            child.properties.href === child.children[0].value
          ) {
            return (
              <div className="my-4">
                <LinkCard href={child.properties.href} />
              </div>
            );
          }

          return <p {...props} />;
        },
      }}
    >
      {post?.fields.content}
    </Markdown>
  );
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const { isEnabled: isDraftModeEnabled } = draftMode();
  const post = await getPost(params.slug, isDraftModeEnabled);

  return (
    <>
      <div className="flex flex-col items-center px-4 pb-20 pt-12">
        <h1 className="text-xl font-bold text-text sm:text-3xl">{post?.fields.title}</h1>
        <div className="mt-6 flex w-full items-center justify-center gap-9">
          <div>
            <div className="mb-1 text-center text-sm font-bold text-subtext">published</div>
            <div className="text-subtext">{post?.fields.publishedDate}</div>
          </div>
          <div className="max-w-48 sm:max-w-96">
            <div className="mb-1 text-center text-sm font-bold text-subtext">tags</div>
            <div className="flex flex-nowrap items-center gap-1 overflow-x-auto overflow-y-hidden text-sm">
              {post?.metadata.tags.map(tag => <Tag key={tag.sys.id} tag={tag} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 sm:px-4">
        <Card extendClass="col-span-4 lg:col-span-3">
          <Content post={post} />
          <div className="mt-12">
            <ShareButtons title={post?.fields.title} />
          </div>
        </Card>
        <div className="hidden h-full lg:block">
          <Card extendClass="px-4 sticky top-4">
            <Toc post={post} />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Page;

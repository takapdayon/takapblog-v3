import { getPost } from '@/app/blogs/utils';
import { ImageResponse } from 'next/og';

export const revalidate = 'force-cache';
export const runtime = 'nodejs';

export const alt = 'OGP画像';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
const ORIGIN = process.env.ORIGIN ?? '';

const image = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: `#${post?.fields.color}`,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '90%',
            height: '80%',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#000000',
              textAlign: 'left',
            }}
          >
            {post?.fields.title}
          </h1>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              marginRight: '36px',
            }}
          >
            <img
              style={{
                marginBottom: '20px',
                borderRadius: '100%',
              }}
              src={`${ORIGIN}/icon.png`}
              width="100px"
              height="100px"
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
};

export default image;

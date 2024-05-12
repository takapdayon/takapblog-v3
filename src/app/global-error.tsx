'use client';

import { DotGothic16 } from 'next/font/google';
const dotGothic16 = DotGothic16({ subsets: ['latin'], weight: '400' });

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html>
      <body className={`${dotGothic16.className}`}>
        <div className={`${dotGothic16.className} flex flex-col items-center`}>
          <title className="my-20 text-5xl text-red-500">500 ぶっ壊れた</title>
          <p className="mb-2">ガハハ、壊れちゃったみたい</p>
          <button className="text-blue-400" onClick={() => reset()}>
            再トライする
          </button>
        </div>
      </body>
    </html>
  );
}

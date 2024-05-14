import { DotGothic16 } from 'next/font/google';
import Link from 'next/link';
const dotGothic16 = DotGothic16({ subsets: ['latin'], weight: '400' });

const NotFound = () => {
  return (
    <div className={`${dotGothic16.className} flex flex-col items-center`}>
      <h2 className="my-20 text-5xl text-red-500">404 Not Found</h2>
      <p className="mb-2">その仮想世界はまだないみたい...</p>
      <Link className="text-blue-400" href="/">
        現実世界に戻る
      </Link>
    </div>
  );
};

export default NotFound;

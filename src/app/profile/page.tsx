import { DotGothic16 } from 'next/font/google';
import Link from 'next/link';

const dotGothic16 = DotGothic16({ subsets: ['latin'], weight: '400' });

const Page = () => {
  return (
    <div className={`${dotGothic16.className} flex flex-col items-center`}>
      <h2 className="my-20 text-5xl text-yellow-500">工事中</h2>
      <p className="mb-2">この世界を現在構築中。いつかプロフィールってのができるよ</p>
      <Link className="text-blue-400" href="/">
        現実世界に戻る
      </Link>
      {/* <div className="flex flex-col gap-y-8">
        <Card>
          <h3 className="mb-8 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">profile</h3>
          <p className="mt-1 font-normal text-gray-500 dark:text-gray-400">
            しがないWebエンジニア。楽しいことをして生きていきたい...(切実)
          </p>
          <p className="mt-1 font-normal text-gray-500 dark:text-gray-400">
            元々インフラエンジニアとしてサーバ・ルータをガチャガチャする日々から、Web周りをガチャガチャする人に
          </p>
          <p className="mt-1 font-normal text-gray-500 dark:text-gray-400">
            毎日Web周りの何かしらをてきとーに弄ってます。
          </p>
        </Card>
        <Card>
          <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">made</h3>
          <p className="font-normal text-gray-500 dark:text-gray-400">作りました！いっぱい作りたーい！</p>
        </Card>
        <Card>
          <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">like</h3>
          <p className="font-normal text-gray-500 dark:text-gray-400">こーれ好きです！</p>
        </Card>
        <Card>
          <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">contact</h3>
          <p className="font-normal text-gray-500 dark:text-gray-400">
            お問い合わせはtwitterのDM(あまり見ない)か、以下(もっと見ない)から :onasyasu:
          </p>
        </Card>
      </div> */}
    </div>
  );
};

export default Page;

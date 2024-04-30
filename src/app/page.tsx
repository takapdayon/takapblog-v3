import { Card } from '@/components/Elements/Card';

const Home = () => {
  return (
    <main className="px-4">
      <Card>
        <div className="w-24 h-24 inline-flex items-center justify-center rounded-full mb-4">
          <img className="rounded-full" src="/icon.png" alt="自分のicon" />
        </div>
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">taka p * 2</h5>
        </a>
        <p className="font-normal text-gray-500 dark:text-gray-400">I'm web engineer in Japan</p>
        <p className="font-normal text-gray-500 dark:text-gray-400">常に現実逃避。現実は敵!</p>
      </Card>
    </main>
  );
};

export default Home;

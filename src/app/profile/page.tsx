import Image from 'next/image';
import Link from 'next/link';

const qualifications = [
  {
    name: '応用情報技術者試験',
    status: '合格',
  },
  {
    name: '情報処理安全確保支援士試験',
    status: '合格',
  },
  {
    name: 'ネットワークスペシャリスト試験',
    status: '合格',
  },
  {
    name: 'AWS Certified Solutions Architect - Associate',
    status: '認定',
  },
] as const;

const links = [
  {
    href: 'https://github.com/takapdayon',
    icon: 'i-simple-icons-github',
    label: 'GitHub',
    description: 'コードと制作物',
  },
  { href: 'https://twitter.com/takapdayon', icon: 'i-simple-icons-x', label: 'X', description: '日々のつぶやき' },
  { href: 'https://zenn.dev/takapy11820', icon: 'i-simple-icons-zenn', label: 'Zenn', description: '技術記事' },
] as const;

const ProfilePage = () => {
  return (
    <main>
      <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="h-28 bg-gradient-to-br from-sky-400 via-indigo-400 to-violet-500 sm:h-36" />
        <div className="px-6 pb-8 sm:px-10 sm:pb-10">
          <Image
            className="-mt-14 rounded-full border-4 border-card bg-card shadow-md sm:-mt-16"
            src="/icon.png"
            width={128}
            height={128}
            priority
            alt="taka p*2のアイコン"
          />
          <div className="mt-5 sm:flex sm:items-end sm:justify-between sm:gap-8">
            <div>
              <p className="mb-2 text-sm font-medium text-sky-600 dark:text-sky-400">PROFILE</p>
              <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">taka p*2</h1>
            </div>
            <div className="mt-5 flex shrink-0 flex-wrap gap-3 sm:mt-0">
              <Link
                className="inline-flex items-center gap-2 rounded-lg bg-text px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
                href="/blogs"
              >
                記事を読む
                <span className="i-material-symbols-arrow-forward-rounded size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:grid sm:grid-cols-[180px_1fr] sm:gap-10">
        <h2 className="text-xl font-bold text-text">About me</h2>
        <div className="mt-4 space-y-4 leading-8 text-subtext sm:mt-0">
          <p>しがないWebエンジニア。楽しいことをして生きていきたい人です。</p>
          <p>
            以前はインフラエンジニアとしてサーバーやルーターを触り、今はWebの周りをガチャガチャしています。このブログでは、試してわかったことや躓いたことを、未来の自分と同じ誰かのために残しています。
          </p>
          <p>気になったものをなにかしらを作ったり、学んだりしています。</p>
        </div>
      </section>

      <section className="border-t border-border py-12 sm:grid sm:grid-cols-[180px_1fr] sm:gap-10">
        <div>
          <h2 className="text-xl font-bold text-text">Qualifications</h2>
          <p className="mt-2 text-sm text-subtext">取得資格</p>
        </div>
        <div className="mt-5 grid gap-4 sm:mt-0">
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6">
            <h3 className="font-semibold text-text">Qualifications</h3>
            <ul className="mt-4 space-y-3">
              {qualifications.map(qualification => (
                <li key={qualification.name} className="flex items-center gap-3 text-sm">
                  <span
                    className="i-material-symbols-workspace-premium-outline size-5 shrink-0 text-sky-500"
                    aria-hidden="true"
                  />
                  <span className="font-medium text-text">{qualification.name}</span>
                  <span className="ml-auto shrink-0 text-subtext">{qualification.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-12 sm:grid sm:grid-cols-[180px_1fr] sm:gap-10">
        <div>
          <h2 className="text-xl font-bold text-text">Find me</h2>
          <p className="mt-2 text-sm text-subtext">Webのどこかで</p>
        </div>
        <div className="mt-5 sm:mt-0">
          <p className="mb-4 text-sm leading-6 text-subtext">
            技術や個人開発についての発信をしています。気軽な連絡はXからどうぞ。
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {links.map(link => (
              <a
                key={link.label}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-md"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={`${link.icon} size-6 text-text`} aria-hidden="true" />
                <span className="min-w-0">
                  <span className="flex items-center gap-1 font-medium text-text">
                    {link.label}
                    <span
                      className="i-material-symbols-arrow-outward-rounded size-4 text-subtext transition group-hover:text-sky-500"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="block text-xs text-subtext">{link.description}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;

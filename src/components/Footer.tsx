const FooterIcon = ({ uri, name }: { uri: string; name: string }) => {
  return (
    <a href={uri} target="_blank" rel="noopener noreferrer">
      <span className={`${name} h-5 w-5`}></span>
    </a>
  );
};

export const Footer = () => {
  return (
    <footer className="py-4 border-t border-slate-200 dark:border-slate-200/5 text-slate-500">
      <div className="text-center flex justify-center space-x-2">
        <FooterIcon uri="https://twitter.com/takapdayon" name="i-simple-icons-x" />
        <FooterIcon uri="https://github.com/takapdayon" name="i-simple-icons-github" />
        <FooterIcon uri="https://zenn.dev/takapy11820" name="i-simple-icons-zenn" />
      </div>
      <div className="text-center">
        <p>© 2024 taka p*2. All rights reserved.</p>
      </div>
    </footer>
  );
};

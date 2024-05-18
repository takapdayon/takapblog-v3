const FooterIcon = ({ uri, name }: { uri: string; name: string }) => {
  return (
    <a href={uri} target="_blank" rel="noopener noreferrer">
      <span className={`${name} size-5`}></span>
    </a>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t border-border py-4 text-subtext">
      <div className="flex justify-center space-x-2 text-center">
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

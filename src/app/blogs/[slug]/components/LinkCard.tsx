import ogs from 'open-graph-scraper';

export const LinkCard = async ({ href }: { href: string }) => {
  const { result } = await ogs({ url: href });
  const parsedUrl = new URL(href);
  const favicon = `http://www.google.com/s2/favicons?domain=${parsedUrl.hostname}`;
  return (
    <>
      {result.error ? (
        <a href={href}>{href}</a>
      ) : (
        <a className="not-prose flex h-32 overflow-hidden rounded-lg border border-border" href={href}>
          <div className="my-auto w-full flex-1 p-4">
            <h1 className="line-clamp-1 break-words text-lg font-bold">{result.ogTitle ?? result.requestUrl}</h1>
            <div className="mt-1 line-clamp-2 break-words text-xs text-subtext">{result.ogDescription ?? ''}</div>
            <div className="mt-2 flex items-center gap-2">
              <img className="size-3" src={favicon} alt="favicon" />
              <span className="line-clamp-1 text-xs">{parsedUrl.hostname}</span>
            </div>
          </div>
          {result.ogImage &&
            result.ogImage[0]?.url &&
            (result.ogImage[0]?.url.startsWith('http://') || result.ogImage[0]?.url.startsWith('https://')) && (
              <div className="h-32 max-w-52 rounded-r-lg max-sm:w-32">
                <img
                  className="size-full object-cover"
                  src={result.ogImage[0].url}
                  alt={result.ogImage[0]?.alt ?? 'ogImage'}
                />
              </div>
            )}
        </a>
      )}
    </>
  );
};

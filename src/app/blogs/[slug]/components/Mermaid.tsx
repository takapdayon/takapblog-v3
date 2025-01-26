'use client';

import mermaid from 'mermaid';
import { useTheme } from 'next-themes';
import { useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';

// eslint-disable-next-line react/display-name
const Mermaid = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useLayoutEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: theme === 'dark' ? 'dark' : 'default',
    });
  });

  useEffect(() => {
    if (ref.current) {
      mermaid.run({ nodes: [ref.current] });
    }
  }, []);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: theme === 'dark' ? 'dark' : 'default',
    });
    mermaid.contentLoaded();
  }, [theme]);

  return (
    <div className="mermaid" ref={ref} key={theme}>
      {children}
    </div>
  );
};

export default Mermaid;

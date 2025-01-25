'use client';

import { useTheme } from 'next-themes';

const ThemeIcon = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme === 'light' ? (
        <button
          onClick={() => setTheme('dark')}
          type="button"
          className="inline-block size-8 rounded-lg border border-border shadow-sm"
        >
          <span className="i-material-symbols-dark-mode-rounded"></span>
        </button>
      ) : (
        <button
          onClick={() => setTheme('light')}
          type="button"
          className="inline-block size-8 rounded-lg border border-border shadow-sm"
        >
          <span className="i-material-symbols-light-mode-rounded"></span>
        </button>
      )}
    </>
  );
};

export default ThemeIcon;

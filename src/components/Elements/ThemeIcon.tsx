'use client';

import { useTheme } from 'next-themes';

const ThemeIcon = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label="カラーテーマを切り替える"
      className="inline-flex size-8 items-center justify-center rounded-lg border border-border shadow-sm"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      type="button"
    >
      <span className="i-material-symbols-dark-mode-rounded dark:hidden" aria-hidden="true" />
      <span className="i-material-symbols-light-mode-rounded hidden dark:inline" aria-hidden="true" />
    </button>
  );
};

export default ThemeIcon;

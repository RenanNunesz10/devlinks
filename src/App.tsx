import { useEffect, useState } from 'react';
import { LinkButton } from './components/LinkButton';
import { Profile } from './components/Profile';
import { SocialLinks } from './components/SocialLinks';
import { ThemeToggle } from './components/ThemeToggle';
import { links } from './data/links';
import { profile } from './data/profile';
import { socials } from './data/socials';
import type { Theme } from './types';

const STORAGE_KEY = 'devlinks-theme';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  return 'dark';
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-6 px-4 py-10 sm:max-w-lg sm:py-16">
      <div className="flex w-full justify-end">
        <ThemeToggle theme={theme} onToggle={handleToggle} />
      </div>

      <Profile profile={profile} />

      <section className="flex w-full flex-col gap-3" aria-label="Links">
        {links.map((link) => (
          <LinkButton key={link.id} link={link} />
        ))}
      </section>

      <SocialLinks items={socials} />
    </main>
  );
}

export default App;

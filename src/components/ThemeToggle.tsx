import { Moon, Sun } from '@phosphor-icons/react';
import type { Theme } from '../types';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      onClick={onToggle}
      aria-label="Tema escuro"
      aria-checked={isDark}
      className="relative inline-flex h-9 w-[4.5rem] shrink-0 items-center justify-between rounded-full border border-border bg-surface px-2 text-muted shadow-sm transition-colors hover:bg-surface-hover"
    >
      {/* Ícones fixos no trilho: sol à esquerda, lua à direita */}
      <Sun size={16} weight="fill" aria-hidden="true" />
      <Moon size={16} weight="fill" aria-hidden="true" />

      {/* Bolinha que desliza para o lado do tema ativo */}
      <span
        aria-hidden="true"
        className={`absolute top-1/2 left-[3px] flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md transition-transform duration-300 ease-out motion-reduce:transition-none ${
          isDark ? 'translate-x-9' : 'translate-x-0'
        }`}
      >
        {isDark ? <Moon size={16} weight="fill" /> : <Sun size={16} weight="fill" />}
      </span>
    </button>
  );
}

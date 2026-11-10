import type { ReactElement } from 'react';
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from '@phosphor-icons/react';
import type { SocialItem } from '../types';

interface SocialLinksProps {
  items: SocialItem[];
}

const icons: Record<SocialItem['icon'], (props: { size: number; weight?: 'bold' | 'fill' }) => ReactElement> = {
  github: ({ size }) => <GithubLogo size={size} weight="fill" />,
  linkedin: ({ size }) => <LinkedinLogo size={size} weight="fill" />,
  instagram: ({ size }) => <InstagramLogo size={size} weight="fill" />,
  twitter: ({ size }) => <XLogo size={size} weight="fill" />,
  youtube: ({ size }) => <YoutubeLogo size={size} weight="fill" />,
};

export function SocialLinks({ items }: SocialLinksProps) {
  return (
    <nav aria-label="Redes sociais">
      <ul className="flex items-center justify-center gap-4">
        {items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-hover focus-visible:outline-none"
              >
                <Icon size={22} />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

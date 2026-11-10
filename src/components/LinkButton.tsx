import type { LinkItem } from '../types';

interface LinkButtonProps {
  link: LinkItem;
}

export function LinkButton({ link }: LinkButtonProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-lg border border-border bg-surface px-4 py-3 text-center text-sm font-medium text-foreground transition-colors hover:bg-surface-hover focus-visible:outline-none"
    >
      {link.label}
    </a>
  );
}

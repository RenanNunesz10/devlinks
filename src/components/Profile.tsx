import type { ProfileData } from '../types';

interface ProfileProps {
  profile: ProfileData;
}

export function Profile({ profile }: ProfileProps) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <img
        src={profile.avatarUrl}
        alt={profile.avatarAlt}
        width={96}
        height={96}
        className="h-24 w-24 rounded-full border-2 border-border object-cover"
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-foreground">{profile.name}</h1>
        <p className="text-sm text-muted">{profile.username}</p>
      </div>
    </header>
  );
}

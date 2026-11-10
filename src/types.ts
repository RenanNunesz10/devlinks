export type Theme = 'light' | 'dark';

export interface ProfileData {
  name: string;
  username: string;
  avatarUrl: string;
  avatarAlt: string;
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface SocialItem {
  id: string;
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'instagram' | 'twitter' | 'youtube';
}

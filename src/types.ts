export interface ProgramResource {
  name: string;
  url: string;
}

export interface StorybookResource {
  title: string;
  author: string;
}

export interface MediaResource {
  title: string;
  platform: string;
  description: string;
  url: string;
}

export interface PartnershipItem {
  name: string;
  description: string;
  websiteUrl?: string;
}

export interface ContextSection {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badgeColor?: string;
  iconName?: string;
  imageUrl?: string;
  imageAlt?: string;
  secondaryImageUrl?: string;
  secondaryImageAlt?: string;
  understanding: {
    paragraphs: string[];
  };
  impact: {
    paragraphs: string[];
  };
  policy: {
    paragraphs: string[];
  };
  strategies: string[];
  partnerships: PartnershipItem[];
  resources: {
    programs: ProgramResource[];
    storybooks: StorybookResource[];
    media: MediaResource[];
    pedagogicalSynthesis: string;
  };
}

export interface ReferenceItem {
  id: string;
  apaFormatted: string;
  url?: string;
}

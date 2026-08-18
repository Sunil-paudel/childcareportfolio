export interface SociologicalTheory {
  theorist: string;
  year: string;
  theoryName: string;
  keyConcepts: string[];
  applicationToECE: string;
  quoteOrCoreIdea: string;
}

export interface PolicyInitiative {
  title: string;
  governingBody: string;
  timeframe: string;
  keyStatistics: string;
  impactOnECE: string;
  critiqueOrGap?: string;
}

export interface PracticeStrategy {
  id: string;
  title: string;
  summary: string;
  theoreticalBasis: string;
  classroomApplication: string[];
  educatorReflectionPrompt: string;
}

export interface CommunityPartner {
  name: string;
  role: string;
  scope: string;
  serviceOfferings: string[];
  collaborationModel: string;
  websiteUrl: string;
}

export interface StorybookResource {
  title: string;
  author: string;
  ageRange: string;
  coverDescription?: string;
  theme: string;
  pedagogicalPrompt: string;
}

export interface MediaResource {
  title: string;
  creatorOrPlatform: string;
  type: 'Video' | 'Show' | 'Podcast' | 'Interactive';
  url: string;
  description: string;
  howToUseInPractice: string;
}

export interface ProgramResource {
  name: string;
  organization: string;
  url: string;
  description: string;
  keyBenefitsForServices: string;
}

export interface ContextSection {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badgeColor: string;
  iconName: string;
  imageUrl?: string;
  imageAlt?: string;
  secondaryImageUrl?: string;
  secondaryImageAlt?: string;
  understanding: {
    definition: string;
    australianContext: string;
    theories: SociologicalTheory[];
    evolvingNature: string;
  };
  impact: {
    childDevelopment: string;
    familyDynamics: string;
    ececImplications: string;
    hiddenDisadvantages: string;
  };
  policy: {
    nationalStrategies: PolicyInitiative[];
    systemicChallenges: string;
    practiceImplications: string;
  };
  strategies: PracticeStrategy[];
  partnerships: CommunityPartner[];
  resources: {
    programs: ProgramResource[];
    storybooks: StorybookResource[];
    media: MediaResource[];
    pedagogicalSynthesis: string;
  };
}

export interface ReferenceItem {
  id: string;
  authors: string;
  year: string;
  title: string;
  source: string;
  url?: string;
  apaFormatted: string;
  relatedContextIds: string[];
}

export interface TranscriptSection {
  sectionId: string;
  title: string;
  durationApprox: string;
  timestamp: string;
  speaker: string;
  content: string;
}

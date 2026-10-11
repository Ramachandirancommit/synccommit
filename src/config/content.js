export const navigation = [
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Careers', to: '/careers' },
];

export const moreNavigation = [
  { label: 'Vision & mission', to: '/vision-mission' },
  { label: 'Technology ecosystem', to: '/ecosystem' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Upcoming projects', to: '/upcoming-projects' },
  { label: 'Team & collaboration', to: '/team' },
  { label: 'Contact', to: '/contact' },
];

// Self-created local SVG illustrations fill image slots until approved company photography is available.
export const images = {
  homeSlides: [
    { src: '/images/events/event-moment-01.svg', alt: 'Abstract illustration of ideas connecting around a shared goal.', title: 'Ideas are better shared.', label: 'Original SyncCommit illustration' },
    { src: '/images/events/event-moment-02.svg', alt: 'Abstract illustration representing a digital learning meetup.', title: 'Make room for curiosity.', label: 'Original SyncCommit illustration' },
    { src: '/images/team/team-collaboration.svg', alt: 'Abstract illustration of a connected collaborative workspace.', title: 'Build the next thing together.', label: 'Original SyncCommit illustration' },
  ],
  pageHeroes: {
    about: { src: '/images/hero/technology-network.svg', alt: 'Original abstract illustration representing the SyncCommit technology network.' },
    services: { src: '/images/hero/technology-network.svg', alt: 'Original abstract illustration representing connected services and technology.' },
    projects: { src: '/images/hero/technology-network.svg', alt: 'Original abstract illustration representing connected project ideas.' },
    vision: { src: '/images/hero/technology-network.svg', alt: 'Original abstract illustration representing technology with purpose.' },
    ecosystem: { src: '/images/hero/technology-network.svg', alt: 'Original abstract illustration representing a connected technology ecosystem.' },
    team: { src: '/images/hero/technology-network.svg', alt: 'Original abstract illustration representing collaboration and connected work.' },
    events: { src: '/images/hero/technology-network.svg', alt: 'Original abstract illustration representing connected ideas at an event.' },
    careers: { src: '/images/hero/technology-network.svg', alt: 'Original abstract illustration representing opportunity and connected work.' },
    contact: { src: '/images/hero/technology-network.svg', alt: 'Original abstract illustration representing a connected conversation.' },
    achievements: { src: '/images/milestones/achievement.svg', alt: 'Original illustrative trophy artwork; not a claim of an actual award.' },
    upcoming: { src: '/images/upcoming/upcoming-project.svg', alt: 'Original abstract illustration representing ideas in progress; not a project announcement.' },
    privacy: { src: '/images/hero/technology-network.svg', alt: 'Original abstract technology illustration.' },
    terms: { src: '/images/hero/technology-network.svg', alt: 'Original abstract technology illustration.' },
  },
};

// Illustrative ideas only; no client engagements or delivery claims are represented here.
export const projects = [
  {
    slug: 'responsible-ai-assistant',
    title: 'Responsible AI assistant',
    category: 'Artificial intelligence',
    status: 'Concept',
    summary: 'An illustrative concept for a grounded assistant that helps teams find answers in their own approved knowledge.',
    description: 'This sample project direction explores retrieval, permissions, source citations, and human review. It is a concept, not a shipped product or customer engagement.',
    image: '/images/projects/responsible-ai-assistant.svg',
    imageAlt: 'Original illustrative interface artwork for the responsible AI assistant concept.',
    tags: ['AI', 'Knowledge tools', 'Human review'],
  },
  {
    slug: 'workflow-copilot',
    title: 'Workflow copilot',
    category: 'Artificial intelligence',
    status: 'Concept',
    summary: 'An illustrative concept for reducing repetitive steps while keeping people in control of important decisions.',
    description: 'This sample project direction considers connected workflows, transparent automation, and clear approval steps. It is a concept, not a live system or measured result.',
    image: '/images/projects/workflow-copilot.svg',
    imageAlt: 'Original illustrative flow diagram artwork for the workflow copilot concept.',
    tags: ['AI', 'Automation', 'Product design'],
  },
  {
    slug: 'connected-service-experience',
    title: 'Connected service experience',
    category: 'Digital products',
    status: 'Sample direction',
    summary: 'A sample direction for making complex service journeys clearer across digital touchpoints.',
    description: 'This representative design direction shows how research, journey mapping, and interface design might come together. No customer or delivery is implied.',
    image: '/images/projects/service-experience.svg',
    imageAlt: 'Original illustrative interface artwork for a connected digital service concept.',
    tags: ['Digital product', 'Experience design'],
  },
  {
    slug: 'ecommerce-experience-concept',
    title: 'E-commerce experience',
    category: 'E-commerce',
    status: 'Concept',
    summary: 'A sample commerce concept focused on clearer discovery, product comparison, and checkout steps.',
    description: 'An illustrative product direction only. No store, client engagement, conversion improvement, or completed delivery is claimed.',
    image: '/images/projects/ecommerce-experience.svg',
    imageAlt: 'Original illustrative shopping interface artwork for the e-commerce concept.',
    tags: ['E-commerce', 'Digital product', 'Experience design'],
  },
  {
    slug: 'hr-management-concept',
    title: 'HR management workspace',
    category: 'People operations',
    status: 'Concept',
    summary: 'A sample HR workspace concept for bringing common people-operations tasks into a clearer flow.',
    description: 'An illustrative product direction only. It is not a live HR system, does not process employee records, and has no associated organization or measured outcome.',
    image: '/images/projects/hr-management.svg',
    imageAlt: 'Original illustrative people operations dashboard artwork for the HR concept.',
    tags: ['HR management', 'Workflow', 'Digital product'],
  },
  {
    slug: 'hospital-health-application-concept',
    title: 'Hospital health application',
    category: 'Healthcare',
    status: 'Concept',
    summary: 'A sample hospital app concept for simpler appointment preparation and care navigation.',
    description: 'An illustrative concept only, not a clinical tool or hospital deployment. It does not provide medical advice, access patient information, or claim clinical validation.',
    image: '/images/projects/hospital-health-app.svg',
    imageAlt: 'Original illustrative mobile interface artwork for the hospital app concept; not clinical guidance.',
    tags: ['Healthcare', 'Mobile application', 'Patient experience'],
  },
];

export const technologyEcosystem = [
  { name: 'AWS', label: 'Cloud platform', icon: 'cloud' },
  { name: 'Cloudflare', label: 'Cloud & edge platform', icon: 'cloud' },
  { name: 'React', label: 'UI technology', icon: 'code' },
  { name: 'OpenAI Codex', label: 'AI development tool', icon: 'ai' },
  { name: 'Google Play', label: 'Store listing not configured', icon: 'play', marketplace: true },
  { name: 'Apple App Store', label: 'Store listing not configured', icon: 'mobile', marketplace: true },
];
export const appStoreLinks = { googlePlay: null, appleAppStore: null };

// No confirmed company events or published dates have been supplied yet.
export const events = [];
// No verified awards, metrics, certifications, or milestones have been supplied yet.
export const achievements = [];
// No confirmed or publicly announced upcoming projects have been supplied yet.
export const upcomingProjects = [];
// No employee profile details or approved team photographs have been supplied yet.
export const teamProfiles = [];
// No approved open job requisitions have been supplied yet.
export const jobOpenings = [];

export const homeSlides = images.homeSlides;

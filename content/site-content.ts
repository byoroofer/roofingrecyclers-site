import type { LeadInquiryType } from "@/types/lead";
import type {
  FaqItem,
  NavItem,
  PageHeroContent,
  ProcessStep,
  StakeholderCard,
  StatItem,
  TimelineItem,
  ValueCard,
} from "@/types/site";

export const primaryNavigation: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Solutions", href: "/solutions" },
  { label: "Impact", href: "/impact" },
  { label: "Partners", href: "/partners" },
  { label: "Capital Partners", href: "/investors" },
  { label: "Contact", href: "/contact" },
];

export const secondaryNavigation: NavItem[] = [
  { label: "Contractors", href: "/contractors" },
  { label: "Manufacturers", href: "/manufacturers" },
  { label: "Municipalities", href: "/municipalities" },
  { label: "Certification", href: "/certification" },
  { label: "Policy", href: "/policy" },
  { label: "Locations", href: "/locations" },
  { label: "News", href: "/news" },
];

export const allSitePaths = [
  "/",
  ...primaryNavigation.map((item) => item.href),
  ...secondaryNavigation.map((item) => item.href),
];

export const heroStats: StatItem[] = [
  {
    value: "Millions",
    label: "of tons still trapped in disposal channels",
    detail:
      "Asphalt shingles represent a large, under-recovered waste stream with national infrastructure implications.",
  },
  {
    value: "Dual-sided",
    label: "economics from intake to output",
    detail:
      "The business model is designed around waste-handling value, processed material value, and future downstream integration.",
  },
  {
    value: "Regional",
    label: "hub strategy built for repeatable scale",
    detail:
      "Facility density, logistics coordination, and partner expansion are meant to compound together over time.",
  },
];

export const problemCards: ValueCard[] = [
  {
    title: "Landfill burden",
    description:
      "A large roofing waste stream still moves through fragmented disposal channels that create cost, congestion, and lost value.",
  },
  {
    title: "Missed material value",
    description:
      "Shingles contain asphaltic value that can support paving-related use cases instead of remaining stranded waste.",
  },
  {
    title: "Domestic resource relevance",
    description:
      "Recovered material can strengthen regional infrastructure supply, circular manufacturing logic, and petroleum-offset framing.",
  },
  {
    title: "Category white space",
    description:
      "The market opportunity is real, but the operating infrastructure and national brand leadership remain underbuilt.",
  },
];

export const modelSteps: ProcessStep[] = [
  {
    eyebrow: "01",
    title: "Inbound material capture",
    description:
      "Roofing contractors, facilities, and public-sector partners direct tear-off shingles into a structured intake pathway.",
  },
  {
    eyebrow: "02",
    title: "Sorting and processing",
    description:
      "Material is evaluated, prepared, and processed into recycled asphalt shingle feedstock with quality controls in mind.",
  },
  {
    eyebrow: "03",
    title: "Downstream product integration",
    description:
      "Recovered material is positioned for paving and related product pathways where infrastructure demand can absorb real volume.",
  },
  {
    eyebrow: "04",
    title: "Regional network expansion",
    description:
      "Operating hubs, logistics partners, and capital alignment create the platform for broader multi-market scale.",
  },
];

export const stakeholderCards: StakeholderCard[] = [
  {
    title: "Roofing Contractors",
    description:
      "A more intelligent disposal pathway with sustainability credibility, operational structure, and future participation upside.",
    bullets: [
      "Lower dependence on landfill-only disposal",
      "Stronger customer and municipal sustainability narrative",
      "Future certification and network participation potential",
    ],
    href: "/contractors",
  },
  {
    title: "Manufacturers",
    description:
      "A serious circular-material partner for stewardship strategy, recovery alignment, and broader ecosystem participation.",
    bullets: [
      "Expanded waste-diversion positioning",
      "Potential feedstock and recovery collaboration",
      "Long-term category leadership alignment",
    ],
    href: "/manufacturers",
  },
  {
    title: "Municipalities / Landfills",
    description:
      "A route toward landfill relief, diversion performance, and public-value outcomes tied to infrastructure instead of simple disposal.",
    bullets: [
      "Reduced pressure on local disposal channels",
      "Better alignment with diversion goals",
      "Public-private partnership opportunities",
    ],
    href: "/municipalities",
  },
  {
    title: "Capital Partners",
    description:
      "An underbuilt industrial category sitting at the intersection of waste, infrastructure, logistics, and materials.",
    bullets: [
      "Large persistent feedstock opportunity",
      "Hub expansion and network-density logic",
      "Founder with sector credibility and access",
    ],
    href: "/investors",
  },
  {
    title: "Strategic Operators",
    description:
      "A platform opportunity for processors, recyclers, logistics groups, and regional operating partners who want real infrastructure leverage.",
    bullets: [
      "Clear role inside a larger operating system",
      "Potential recurring-volume partnerships",
      "National platform adjacency over time",
    ],
    href: "/partners",
  },
];

export const impactMetrics: StatItem[] = [
  {
    value: "250K+",
    label: "illustrative annual regional throughput capacity",
    detail:
      "A planning placeholder for how a scaled hub model could communicate processing potential once live reporting is active.",
  },
  {
    value: "Millions",
    label: "of square feet of roofing represented",
    detail:
      "A future contractor-native metric designed to translate tonnage into a more intuitive operational lens.",
  },
  {
    value: "Petroleum",
    label: "offset framing for recovered material value",
    detail:
      "An impact layer intended to connect recycled shingles with broader resource-efficiency outcomes.",
  },
  {
    value: "Regional",
    label: "landfill relief and infrastructure upside",
    detail:
      "Diversion, logistics, and downstream utilization are meant to be measured together rather than treated as separate stories.",
  },
];

export const whyNowBullets = [
  "Infrastructure demand and paving-market relevance make asphalt shingle recovery more strategically important than a generic recycling story.",
  "Landfill pressure, procurement scrutiny, and sustainability expectations are increasing the value of measurable diversion pathways.",
  "The category remains fragmented enough that disciplined execution, regional density, and partner trust can still create outsized early advantage.",
  "Founder access across roofing, construction, insurance-claims context, and policy engagement creates a credible path to market entry.",
];

export const founderHighlights = [
  "Roofing and restoration industry credibility",
  "Construction and insurance-claims operating perspective",
  "Policy and regulatory engagement experience",
  "Relationship-driven contractor and stakeholder network access",
];

export const ctaSegments = [
  { label: "I'm an Investor", href: "/contact?type=investor" },
  { label: "I'm a Contractor", href: "/contact?type=contractor" },
  { label: "I'm a Manufacturer", href: "/contact?type=manufacturer" },
  { label: "I'm a Municipality / Landfill Partner", href: "/contact?type=municipality" },
  { label: "I'm a Strategic Partner", href: "/contact?type=strategic-partner" },
];

export const faqItems: FaqItem[] = [
  {
    question: "Is Roofing Recyclers just a disposal company?",
    answer:
      "No. The thesis is broader: recover roofing waste, convert it into infrastructure value, and build the regional operating network around that material flow.",
  },
  {
    question: "Is this only an environmental story?",
    answer:
      "No. The company is framed around landfill diversion and petroleum-offset logic, but also around industrial economics, logistics, and downstream materials relevance.",
  },
  {
    question: "Who should reach out now?",
    answer:
      "Investors, contractors, manufacturers, municipalities, landfill operators, logistics groups, processors, and media or policy stakeholders can all use the current intake routes.",
  },
];

export const aboutHero: PageHeroContent = {
  eyebrow: "Mission and momentum",
  title: "Building the public foundation for a category-defining industrial company.",
  description:
    "Roofing Recyclers is being built to connect roofing waste recovery, landfill diversion, materials processing, and downstream infrastructure value inside one scalable platform.",
};

export const aboutPillars: ValueCard[] = [
  {
    title: "Economic logic first",
    description:
      "The opportunity matters because it can be operationally valuable, not because it sounds good in a brochure.",
  },
  {
    title: "Industrial execution over concept slides",
    description:
      "This model depends on real intake, real processing discipline, real logistics, and real offtake relationships.",
  },
  {
    title: "National ambition with regional sequencing",
    description:
      "The company can expand through repeatable hubs and partner density rather than pretending national scale appears overnight.",
  },
];

export const aboutVisionTimeline: TimelineItem[] = [
  {
    title: "Phase 1: partner alignment",
    description:
      "Validate intake relationships, processing pathways, and stakeholder trust inside the first target markets.",
  },
  {
    title: "Phase 2: regional density",
    description:
      "Grow through repeatable hub logic, stronger logistics coordination, and larger-volume participation programs.",
  },
  {
    title: "Phase 3: downstream integration",
    description:
      "Deepen ties into paving products, asphalt ecosystem relationships, and broader national infrastructure relevance.",
  },
];

export const howItWorksHero: PageHeroContent = {
  eyebrow: "Operational model",
  title: "A practical recycling system designed to scale like infrastructure.",
  description:
    "The operating model is built around managed intake, processing discipline, downstream product logic, and regional network buildout.",
};

export const hubStrategyItems = [
  "Contractor and facility intake relationships that can generate recurring volume",
  "Sorting, contamination management, and processing protocols built for consistency",
  "Logistics coordination across waste movement, processing, and downstream delivery",
  "Regional market selection based on density, partner readiness, and product-pathway fit",
];

export const operatingPrinciples: ValueCard[] = [
  {
    title: "Managed intake",
    description:
      "Volume matters, but disciplined intake standards matter more if the output is going to support real downstream use.",
  },
  {
    title: "Traceable processing",
    description:
      "Processing quality, contamination controls, and reporting are core trust layers for contractors, municipalities, and manufacturers.",
  },
  {
    title: "Demand-linked expansion",
    description:
      "New regions should be opened where supply, logistics, and downstream utilization can reinforce one another.",
  },
];

export const solutionsHero: PageHeroContent = {
  eyebrow: "Audience-specific value",
  title: "Each stakeholder needs a reason to care that matches their real incentives.",
  description:
    "Roofing Recyclers is meant to work commercially, operationally, and reputationally across the entire ecosystem, not only for one audience.",
};

export const solutionDetailCards: StakeholderCard[] = [
  {
    title: "Contractors",
    description:
      "A structured participation path that can support cleaner disposal, brand differentiation, and more credible sustainability positioning.",
    bullets: [
      "Operationally cleaner disposal channel",
      "Client-facing sustainability signal",
      "Future participation and certification layers",
    ],
    href: "/contractors",
  },
  {
    title: "Manufacturers",
    description:
      "A credible partner in circular-material strategy with room for recovery alignment and category-shaping collaboration.",
    bullets: [
      "Waste-diversion strategy support",
      "Material stewardship narrative",
      "Strategic ecosystem partnership options",
    ],
    href: "/manufacturers",
  },
  {
    title: "Municipalities and Landfills",
    description:
      "A path toward reduced disposal burden, measurable diversion, and better public-value storytelling around infrastructure.",
    bullets: [
      "Landfill pressure relief",
      "Public-sector sustainability relevance",
      "Regional partnership opportunities",
    ],
    href: "/municipalities",
  },
  {
    title: "Paving and Asphalt Ecosystem",
    description:
      "Recovered shingle feedstock can become more strategic when connected to regional processing discipline and offtake planning.",
    bullets: [
      "Feedstock relevance",
      "Supply-chain resilience framing",
      "Longer-term product integration potential",
    ],
    href: "/partners",
  },
  {
    title: "Capital and Strategic Operators",
    description:
      "An early infrastructure platform with significant room for regional growth, operating leverage, and ecosystem expansion.",
    bullets: [
      "Underbuilt industrial category",
      "Hub-and-network scaling logic",
      "Execution wedge around relationships and access",
    ],
    href: "/investors",
  },
];

export const impactHero: PageHeroContent = {
  eyebrow: "Measured outcomes",
  title: "Impact should read like operational performance, not charity copy.",
  description:
    "Landfill diversion, petroleum-offset framing, and circular-economy language only matter if the company can prove real throughput and real material use.",
};

export const impactPillars: ValueCard[] = [
  {
    title: "Landfill diversion",
    description:
      "A measurable reduction pathway for one of the largest roofing waste streams in the market.",
  },
  {
    title: "Material resilience",
    description:
      "Recovered shingles can support a more resource-efficient downstream materials ecosystem.",
  },
  {
    title: "Regional economic value",
    description:
      "Processing hubs, hauling coordination, and downstream partnerships can create durable industrial activity at the local level.",
  },
];

export const futureDataTools: ValueCard[] = [
  {
    title: "Impact calculator",
    description:
      "Planned for live tonnage, petroleum-offset, and landfill-relief estimates tied to real reported activity.",
  },
  {
    title: "Location finder",
    description:
      "Planned for participating facilities, certified contractor routes, and future intake network visibility.",
  },
  {
    title: "Partner dashboards",
    description:
      "Planned for municipalities, contractors, and capital partners who need structured reporting and program visibility.",
  },
];

export const partnersHero: PageHeroContent = {
  eyebrow: "Network building",
  title: "The company gets stronger as the operating network gets denser.",
  description:
    "Roofing Recyclers is designed to align supply partners, processors, facilities, public stakeholders, and downstream materials relationships into one scalable system.",
};

export const partnerTypes = [
  "Roofing contractors and restoration networks",
  "Municipalities, counties, and landfill operators",
  "Manufacturers and stewardship-oriented materials partners",
  "Processing, recycling, hauling, and logistics operators",
  "Paving and downstream materials ecosystem partners",
  "Policy, nonprofit, and certification allies",
];

export const partnerEngagementSteps: TimelineItem[] = [
  {
    title: "Initial fit conversation",
    description:
      "Define whether the relationship is about supply, siting, logistics, downstream use, policy support, or strategic expansion.",
  },
  {
    title: "Regional opportunity mapping",
    description:
      "Review market density, waste flow, operating constraints, and where collaboration can create real leverage.",
  },
  {
    title: "Program design and rollout",
    description:
      "Move toward a more structured participation model, from pilot relationships to repeatable regional programs.",
  },
];

export const investorHero: PageHeroContent = {
  eyebrow: "Investor / capital partners",
  title: "An early industrial platform with infrastructure-scale upside.",
  description:
    "This is not positioned as a niche sustainability site. It is the public face of a regional-to-national materials recovery platform with real logistics, policy, and operating leverage.",
};

export const investorPoints = [
  "Large persistent waste stream with fragmented handling and uneven recovery infrastructure",
  "Potential economics on both inbound material capture and processed downstream value",
  "Hub expansion logic with network-density effects instead of one-off project economics",
  "Founder with roofing credibility, operating context, public-affairs fluency, and market access",
  "Room to build a trusted category leader in a space that is still structurally underdeveloped",
];

export const investorMoatCards: ValueCard[] = [
  {
    title: "Feedstock access",
    description:
      "Recurring intake relationships can become a defensible operating advantage when tied to trust, convenience, and volume discipline.",
  },
  {
    title: "Regional infrastructure density",
    description:
      "Once a region has aligned intake, processing, logistics, and offtake, the platform becomes harder to replicate with shallow competition.",
  },
  {
    title: "Cross-sector relationships",
    description:
      "Execution requires roofing credibility, public-sector fluency, and private-market coordination at the same time.",
  },
];

export const contactHero: PageHeroContent = {
  eyebrow: "Direct outreach",
  title: "Route the right conversation to the right part of the company.",
  description:
    "Use the inquiry form to send investor, contractor, manufacturer, municipality, partner, media, or policy-related outreach into one organized intake flow.",
};

export const contactRoutingCards: ValueCard[] = [
  {
    title: "Capital and strategic conversations",
    description:
      "For investors, family offices, funds, operators, and private groups evaluating the industrial thesis and growth strategy.",
  },
  {
    title: "Operational partnerships",
    description:
      "For contractors, processors, manufacturers, logistics partners, public agencies, and landfill or siting discussions.",
  },
  {
    title: "Media and policy outreach",
    description:
      "For speaking requests, interviews, thought leadership, public affairs discussions, and category-building conversations.",
  },
];

export const placeholderPageHeroes: Record<string, PageHeroContent> = {
  contractors: {
    eyebrow: "Contractor network",
    title: "A future participation layer for roofing contractors at serious scale.",
    description:
      "This route is reserved for contractor participation, recycling standards, certification pathways, and network growth.",
  },
  manufacturers: {
    eyebrow: "Manufacturer engagement",
    title: "Material stewardship and circular recovery at an industrial standard.",
    description:
      "This route will expand into manufacturer partnership paths, diversion strategy, and long-term materials collaboration.",
  },
  municipalities: {
    eyebrow: "Public-sector partnerships",
    title: "Diversion infrastructure with public-value logic.",
    description:
      "This route will support landfill, municipal, county, and regional infrastructure partnership discussions.",
  },
  certification: {
    eyebrow: "Future program layer",
    title: "Certification and participation standards are planned next.",
    description:
      "This route is reserved for contractor certification, participation standards, and partner verification pathways.",
  },
  policy: {
    eyebrow: "Policy and incentives",
    title: "Policy alignment matters when the category is this large.",
    description:
      "This route will support state-by-state adoption, legislative context, and future public-affairs resources.",
  },
  locations: {
    eyebrow: "Network footprint",
    title: "Regional hubs will matter more than generic coverage maps.",
    description:
      "This route is reserved for future facility, partner, and intake-location visibility as the network expands.",
  },
  news: {
    eyebrow: "Authority building",
    title: "Announcements, market education, and thought leadership will live here.",
    description:
      "This route is reserved for future news, policy updates, category commentary, and partnership stories.",
  },
};

export const placeholderRouteDetails: Record<
  string,
  { bullets: string[]; inquiryType?: LeadInquiryType }
> = {
  contractors: {
    inquiryType: "contractor",
    bullets: [
      "Future contractor intake and participation workflows",
      "Certification-ready program standards",
      "Regional contractor network growth",
    ],
  },
  manufacturers: {
    inquiryType: "manufacturer",
    bullets: [
      "Recovery strategy and stewardship collaboration",
      "Circular-material storytelling support",
      "Long-term ecosystem partnership planning",
    ],
  },
  municipalities: {
    inquiryType: "municipality",
    bullets: [
      "Landfill diversion and regional program design",
      "Public-private partnership exploration",
      "Future reporting and impact visibility layers",
    ],
  },
  certification: {
    bullets: [
      "Program requirements are still being shaped",
      "Reserved for future partner verification",
      "Will connect to the contractor network layer",
    ],
  },
  policy: {
    bullets: [
      "Reserved for legislative context and incentives",
      "Prepared for future state-by-state resource pages",
      "Will support public-sector and media education",
    ],
  },
  locations: {
    bullets: [
      "Reserved for future facility and intake visibility",
      "Prepared for location-finder expansion",
      "Will connect to reported regional growth",
    ],
  },
  news: {
    bullets: [
      "Reserved for company updates and market commentary",
      "Prepared for future resource and insight publishing",
      "Will support authority-building content over time",
    ],
  },
};

export const inquiryTypeOptions = [
  { value: "investor", label: "Investor / Capital Partner" },
  { value: "contractor", label: "Roofing Contractor" },
  { value: "manufacturer", label: "Manufacturer" },
  { value: "municipality", label: "Municipality / Public Sector" },
  { value: "landfill", label: "Landfill Operator" },
  { value: "strategic-partner", label: "Strategic Partner / Operator" },
  { value: "media", label: "Media / Speaking" },
  { value: "other", label: "Other" },
] as const;

export const organizationTypeOptions = [
  "Private company",
  "Public company",
  "Contractor network",
  "Manufacturer",
  "Municipality",
  "County / regional authority",
  "Landfill / waste operator",
  "Logistics / hauling group",
  "Investment firm",
  "Family office",
  "Nonprofit / policy organization",
  "Other",
];

export const interestAreaOptions = [
  "Capital partnership",
  "Material intake",
  "Municipal diversion program",
  "Manufacturer collaboration",
  "Regional operating partnership",
  "Media / speaking",
  "Policy discussion",
  "General inquiry",
];

export const usStateOptions = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

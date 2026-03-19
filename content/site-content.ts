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
    value: "10M+",
    label: "estimated tons still moving through disposal channels annually",
    detail:
      "The waste stream is large enough to justify real regional infrastructure, not just isolated recycling pilots.",
  },
  {
    value: "RAS",
    label: "turns processed shingles into paving-relevant feedstock",
    detail:
      "Recycled asphalt shingles connect roofing recovery to downstream asphalt applications when quality and specifications are managed carefully.",
  },
  {
    value: "Dual-sided",
    label: "economics built around intake value and output value",
    detail:
      "The business plan is designed to create leverage at the gate, through processing, and over time in downstream product channels.",
  },
];

export const problemCards: ValueCard[] = [
  {
    title: "Landfill burden",
    description:
      "A large roofing waste stream still moves through fragmented disposal channels that create cost, congestion, and lost value.",
  },
  {
    title: "Stranded asphaltic value",
    description:
      "Asphalt shingles contain material that can support paving-related pathways instead of remaining stranded as landfill waste.",
  },
  {
    title: "Public and private pressure",
    description:
      "Manufacturers, municipalities, contractors, and landfill operators all have reasons to seek more credible diversion pathways.",
  },
  {
    title: "Underbuilt infrastructure",
    description:
      "The market opportunity is real, but the operating network, public narrative, and trusted category leadership remain underbuilt.",
  },
];

export const modelSteps: ProcessStep[] = [
  {
    eyebrow: "01",
    title: "Inbound material capture",
    description:
      "Roofing contractors, facilities, manufacturers, and public-sector partners direct tear-off or cut-off shingles into a structured intake pathway.",
  },
  {
    eyebrow: "02",
    title: "Sorting and processing",
    description:
      "Material is evaluated, prepared, and processed into recycled asphalt shingle feedstock with contamination controls and quality discipline in mind.",
  },
  {
    eyebrow: "03",
    title: "RAS and downstream integration",
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
      "Stronger customer, municipal, and commercial sustainability narrative",
      "Future certification and network participation potential",
    ],
    href: "/contractors",
  },
  {
    title: "Manufacturers",
    description:
      "A serious circular-material partner for stewardship strategy, cut-off waste recovery, and broader ecosystem participation.",
    bullets: [
      "Expanded waste-diversion positioning",
      "Potential recovery and inbound-volume collaboration",
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
      "Better alignment with diversion and procurement goals",
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
    value: "10M+",
    label: "tons in the category-scale U.S. waste stream",
    detail:
      "A material stream this large supports a far bigger industrial conversation than a niche sustainability program.",
  },
  {
    value: "RAS",
    label: "links roofing waste to paving-product relevance",
    detail:
      "Processed shingles become economically more meaningful when they have a credible downstream use case instead of a disposal endpoint.",
  },
  {
    value: "Oil-offset",
    label: "logic is built into the founding thesis",
    detail:
      "The public site is prepared to report petroleum-offset metrics carefully once live operating data becomes available.",
  },
  {
    value: "Regional",
    label: "hub strategy is designed for repeatable rollout",
    detail:
      "The model depends on localized supply, logistics, and offtake relationships that can compound over time.",
  },
];

export const whyNowBullets = [
  "Infrastructure demand and paving-market relevance make asphalt shingle recovery more strategically important than a generic recycling story.",
  "Manufacturers, contractors, municipalities, and landfill operators all have incentive to support better recovery pathways when the operating model is credible.",
  "Procurement language, recycled-content interest, and domestic-material narratives can widen adoption without depending on one single policy outcome.",
  "Founder access across roofing networks, construction context, public affairs, and industry media creates a more realistic path to early traction.",
];

export const founderHighlights = [
  "Roofing and restoration industry credibility with contractor network access",
  "Construction and insurance-claims operating perspective",
  "Policy, legislative, and regulatory engagement experience",
  "Relationship-driven access across roofers, media, and strategic stakeholders",
];

export const founderStoryParagraphs = [
  "TJ Ware comes to Roofing Recyclers from roofing, restoration, construction, and insurance-claims work rather than from abstract sustainability branding. That operator lens matters in a category where contractor trust, material behavior, and field logistics determine whether supply actually shows up.",
  "His background also includes policy engagement, public-facing industry leadership, and relationship building across business leaders, trade voices, and public stakeholders. For a company that must align roofers, municipalities, manufacturers, landfills, and capital partners, that relationship density is part of the business plan.",
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
    question: "What is RAS?",
    answer:
      "RAS stands for recycled asphalt shingles. In practical terms, it is processed shingle material prepared for paving-related use rather than left as landfill waste.",
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
    "Roofing Recyclers is being built to connect roofing waste recovery, RAS processing, landfill diversion, and downstream infrastructure value inside one scalable platform.",
};

export const aboutPillars: ValueCard[] = [
  {
    title: "Economic logic first",
    description:
      "The opportunity matters because it can be operationally valuable, not because it sounds good in a brochure.",
  },
  {
    title: "Relationship-led execution",
    description:
      "This model depends on real intake, public-private coordination, real logistics, and real offtake relationships rather than concept slides alone.",
  },
  {
    title: "National ambition with regional sequencing",
    description:
      "The company can expand through repeatable hubs and partner density rather than pretending national scale appears overnight.",
  },
];

export const aboutVisionTimeline: TimelineItem[] = [
  {
    title: "Phase 1: supply and siting alignment",
    description:
      "Validate intake relationships, municipal or facility alignment, and processing pathways inside the first target markets.",
  },
  {
    title: "Phase 2: regional density and RAS credibility",
    description:
      "Grow through repeatable hub logic, stronger logistics coordination, and more credible downstream material positioning.",
  },
  {
    title: "Phase 3: downstream integration and reporting",
    description:
      "Deepen ties into paving products, asphalt ecosystem relationships, and the reporting layer needed for larger capital and public-sector conversations.",
  },
];

export const howItWorksHero: PageHeroContent = {
  eyebrow: "Operational model",
  title: "A practical recycling system designed to scale like infrastructure.",
  description:
    "The operating model is built around managed intake, RAS processing discipline, downstream product logic, and regional network buildout.",
};

export const hubStrategyItems = [
  "Contractor, facility, and manufacturer relationships that can generate recurring inbound volume",
  "Sorting, contamination management, and processing protocols built to support RAS credibility",
  "Municipal or landfill host logic where siting and environmental controls can be aligned early",
  "Regional market selection based on density, logistics, and downstream asphalt or paving fit",
];

export const operatingPrinciples: ValueCard[] = [
  {
    title: "Managed intake",
    description:
      "Volume matters, but disciplined intake standards matter more if the output is going to support real downstream use.",
  },
  {
    title: "Spec-aware processing",
    description:
      "Processing quality, contamination controls, and reporting are core trust layers for contractors, municipalities, manufacturers, and downstream users.",
  },
  {
    title: "Regulatory readiness",
    description:
      "Environmental controls, runoff considerations, and jurisdiction-specific requirements need to be addressed early, not after a site is built.",
  },
  {
    title: "Demand-linked expansion",
    description:
      "New regions should be opened where supply, logistics, and downstream utilization can reinforce one another.",
  },
];

export const rasValueCards: ValueCard[] = [
  {
    title: "RAS, in practical terms",
    description:
      "Recycled asphalt shingles are processed shingle millings prepared for paving-related use rather than left as landfill waste.",
  },
  {
    title: "Why it matters economically",
    description:
      "RAS creates a bridge between waste diversion and downstream material value, which is why the category can matter to operators and capital alike.",
  },
  {
    title: "Why processing discipline matters",
    description:
      "Contamination control, consistent sizing, and market-specific specifications determine whether recovered shingles become credible feedstock.",
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
      "Recovered shingle feedstock becomes more strategic when connected to regional processing discipline, specifications, and offtake planning.",
    bullets: [
      "RAS feedstock relevance",
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
    "Landfill diversion, petroleum-offset framing, and circular-economy language only matter if the company can prove real throughput and real RAS utilization.",
};

export const impactPillars: ValueCard[] = [
  {
    title: "Landfill diversion",
    description:
      "A measurable reduction pathway for one of the largest roofing waste streams in the market.",
  },
  {
    title: "Petroleum-offset logic",
    description:
      "Recovered shingles carry asphaltic value that can support a more resource-efficient downstream materials ecosystem.",
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
  "Roofing contractors, restoration groups, and large-volume material suppliers",
  "Municipalities, counties, transfer stations, and landfill operators",
  "Manufacturers, distributors, and stewardship-oriented materials partners",
  "Processing, recycling, hauling, and logistics operators",
  "Asphalt plants, pavers, and downstream materials ecosystem partners",
  "Policy, nonprofit, certification, and industry-association allies",
];

export const partnershipLeverageCards: ValueCard[] = [
  {
    title: "Supply-side partnerships",
    description:
      "Recurring inbound volume is built through roofers, distributors, manufacturers, and facilities that need a better outlet than disposal-only handling.",
  },
  {
    title: "Siting and municipal alignment",
    description:
      "Landfills, transfer stations, and municipalities can become meaningful partners when diversion goals and operating practicality line up.",
  },
  {
    title: "Downstream market access",
    description:
      "The stronger the paving, hauling, and asphalt relationships are, the more credible the material story becomes.",
  },
  {
    title: "Coalition and policy support",
    description:
      "Industry voices, associations, and public-affairs allies help translate a technical recycling story into a bigger infrastructure narrative.",
  },
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
    "This is not positioned as a niche sustainability site. It is the public face of a regional-to-national materials recovery platform built around RAS, logistics, policy fluency, and relationship-led execution.",
};

export const investorPoints = [
  "Estimated 10M+ ton annual shingle waste stream with low recovery and embedded asphaltic value",
  "RAS creates a bridge from roofing waste to paving-relevant feedstock and potential product integration",
  "Economic logic can exist at intake, through processing, and over time in downstream product channels",
  "Execution depends on municipal fit, regulatory fluency, and partner density as much as equipment",
  "Founder brings roofing credibility, public-affairs fluency, and industry relationship access in a still-underbuilt category",
];

export const businessPlanCards: ValueCard[] = [
  {
    title: "Intake economics",
    description:
      "A useful regional platform starts by becoming a better outlet for tear-off and cut-off shingles than landfill-only handling.",
  },
  {
    title: "Processing discipline",
    description:
      "Value depends on converting raw shingle volume into consistent, spec-aware material rather than just moving debris.",
  },
  {
    title: "Downstream offtake",
    description:
      "Paving and asphalt relationships are the bridge from waste diversion to product-market relevance.",
  },
  {
    title: "Vertical integration path",
    description:
      "The longer-term business plan contemplates tighter alignment with paving plants and finished-product channels where economics justify it.",
  },
];

export const regulatoryApproachCards: ValueCard[] = [
  {
    title: "Municipal and landfill alignment",
    description:
      "Siting and partnership models work better when host facilities, local governments, and diversion goals are aligned from the start.",
  },
  {
    title: "Public-affairs fluency",
    description:
      "The category can benefit from clear communication around landfill relief, recycled-content procurement, and domestic-material resilience.",
  },
  {
    title: "Careful compliance posture",
    description:
      "Execution depends on understanding environmental, runoff, and jurisdiction-specific requirements early, not treating regulation as an afterthought.",
  },
];

export const relationshipNetworkCards: ValueCard[] = [
  {
    title: "Roofing contractor reach",
    description:
      "The founding thesis is rooted in real relationships across roofing contractors, restoration leaders, and industry operators.",
  },
  {
    title: "Manufacturer and distributor access",
    description:
      "Conversations across the supply chain can surface inbound volume, partnership opportunities, and market intelligence earlier than cold market entry.",
  },
  {
    title: "Policy and regulator familiarity",
    description:
      "State-level legislative and regulatory familiarity supports a more realistic approach to category building and municipal conversations.",
  },
  {
    title: "Media and coalition building",
    description:
      "Conference visibility, trade credibility, and audience reach can accelerate trust, education, and coalition formation around the category.",
  },
];

export const investorMoatCards: ValueCard[] = [
  {
    title: "Feedstock control",
    description:
      "Recurring intake relationships become more defensible when they are tied to trust, convenience, volume discipline, and real downstream pathways.",
  },
  {
    title: "Regional infrastructure density",
    description:
      "Once a region has aligned intake, processing, logistics, and offtake, the platform becomes harder to replicate with shallow competition.",
  },
  {
    title: "Cross-sector access",
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

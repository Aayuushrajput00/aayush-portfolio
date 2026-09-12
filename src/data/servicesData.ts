export interface ServiceItem {
  number: string;
  name: string;
  description: string;
  startingPrice?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  priceUSD: string;
  priceINR: string;
  period: string;
  description: string;
  deliveryTime: string;
  features: string[];
  popular?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    name: "Product thinking",
    description:
      "Turning messy product questions into a clear direction, useful structure, and a path teams can actually move through.",
    startingPrice: "$399 / ₹29k",
  },
  {
    number: "02",
    name: "UX / UI design",
    description:
      "Designing calm, purposeful interfaces where hierarchy, interaction, and visual language work as one system.",
    startingPrice: "$799 / ₹59k",
  },
  {
    number: "03",
    name: "Design systems",
    description:
      "Building flexible rules, components, and patterns that help digital products feel consistent without feeling rigid.",
    startingPrice: "$599 / ₹45k",
  },
  {
    number: "04",
    name: "Web experiences",
    description:
      "Shaping modern websites with strong first impressions, thoughtful journeys, and details that earn attention.",
    startingPrice: "$899 / ₹69k",
  },
  {
    number: "05",
    name: "Prototype & refine",
    description:
      "Making ideas tangible early, testing the rough edges, and refining until the experience feels natural.",
    startingPrice: "$499 / ₹39k",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter UI",
    badge: "Quick MVP",
    priceUSD: "$499",
    priceINR: "₹24,999",
    period: "per project",
    deliveryTime: "3–5 Days Turnaround",
    description:
      "Ideal for startups, landing pages, or MVPs needing high-impact, conversion-focused UI design.",
    features: [
      "Custom Landing Page / Web UI",
      "Mobile Responsive Layouts",
      "Organized Figma Source Files",
      "Design Assets & SVG Icons Export",
      "2 Iteration Rounds included",
    ],
  },
  {
    id: "pro",
    name: "Complete UI/UX",
    badge: "Most Popular",
    priceUSD: "$1,199",
    priceINR: "₹59,999",
    period: "per project",
    deliveryTime: "1–2 Weeks Delivery",
    popular: true,
    description:
      "Full-scale UI/UX system for modern web products, mobile apps, or high-converting SaaS platforms.",
    features: [
      "End-to-End Multi-page UI/UX Design",
      "Custom Scalable Figma Design System",
      "Interactive Clickable Prototype",
      "User Flow & Information Architecture",
      "Developer Handoff with Design Tokens",
      "Priority Direct Slack/WhatsApp Support",
    ],
  },
  {
    id: "studio",
    name: "Full Studio & 3D",
    badge: "Custom Scope",
    priceUSD: "$2,499",
    priceINR: "₹1,19,999",
    period: "custom sprint",
    deliveryTime: "2–4 Weeks Sprint",
    description:
      "Enterprise design direction, 3D visual assets, spatial layouts, and ongoing sprint partnership.",
    features: [
      "Complete Product & Brand Ecosystem",
      "Custom 3D Models & Spatial Renders",
      "Micro-interactions & Motion Direction",
      "Advanced Design System & Documentation",
      "Live Frontend Implementation Review",
      "Ongoing Dedicated Collaboration",
    ],
  },
];

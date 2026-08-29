export interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    name: "Product thinking",
    description:
      "Turning messy product questions into a clear direction, useful structure, and a path teams can actually move through.",
  },
  {
    number: "02",
    name: "UX / UI design",
    description:
      "Designing calm, purposeful interfaces where hierarchy, interaction, and visual language work as one system.",
  },
  {
    number: "03",
    name: "Design systems",
    description:
      "Building flexible rules, components, and patterns that help digital products feel consistent without feeling rigid.",
  },
  {
    number: "04",
    name: "Web experiences",
    description:
      "Shaping modern websites with strong first impressions, thoughtful journeys, and details that earn attention.",
  },
  {
    number: "05",
    name: "Prototype & refine",
    description:
      "Making ideas tangible early, testing the rough edges, and refining until the experience feels natural.",
  },
];

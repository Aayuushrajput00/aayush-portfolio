export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  liveUrl?: string;
  figmaUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "delm-marketing",
    number: "01",
    category: "Client",
    name: "Delm Marketing",
    tagline: "Digital Marketing Agency Web Platform & High-Converting UI/UX System",
    description:
      "A complete, full-scale digital marketing agency website designed for Delm Marketing. Features interactive services catalog, real-time ROI stats card, client testimonials, course tracks, FAQ accordions, blog feed, and contact system.",
    col1Img1:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80",
    col1Img2:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=80",
    col2Img:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
    liveUrl: "#delm-marketing",
    figmaUrl:
      "https://www.figma.com/proto/Taxj7ugM7PXr7ot4z5ah8c/Untitled?node-id=0-1&t=4veZzsT57O4OmjGw-1",
  },
  {
    id: "nextlevel-studio",
    number: "02",
    category: "Client",
    name: "Nextlevel Studio",
    tagline: "Immersive 3D Digital Agency Platform & Spatial Brand Experience",
    description:
      "A comprehensive brand identity and 3D web experience built for Nextlevel Studio, showcasing experimental generative graphics, spatial layouts, and interactive digital art direction.",
    col1Img1:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    col1Img2:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    col2Img:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    liveUrl: "#",
  },
  {
    id: "aura-brand-identity",
    number: "03",
    category: "Personal",
    name: "Aura Brand Identity",
    tagline: "Futuristic Glassmorphic Brand & Physical-Digital Assets",
    description:
      "An exploratory design project delving into translucent materials, iridescent lighting, and futuristic tactile packaging systems crafted for next-gen spatial computing.",
    col1Img1:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    col1Img2:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    col2Img:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    liveUrl: "#",
  },
];

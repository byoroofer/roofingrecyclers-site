import type { PageHeroContent } from "@/types/site";

import { Reveal } from "@/components/site/reveal";

interface PageHeroProps {
  content: PageHeroContent;
}

export function PageHero({ content }: PageHeroProps) {
  return (
    <Reveal className="page-hero">
      <span className="eyebrow">{content.eyebrow}</span>
      <h1 className="display-title max-w-4xl">{content.title}</h1>
      <p className="section-copy max-w-3xl">{content.description}</p>
    </Reveal>
  );
}

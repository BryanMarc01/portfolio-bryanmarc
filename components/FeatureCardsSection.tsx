"use client";

import { featureCards } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { PortfolioFeatureCard } from "./PortfolioFeatureCard";

export function FeatureCardsSection() {
  const { t } = useLanguage();

  return (
    <section aria-label="Explora el sitio" className="relative bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureCards.map((card, i) => (
            <PortfolioFeatureCard
              key={card.id}
              data={card}
              index={i}
              title={t(card.title)}
              description={t(card.description)}
              cta={t(card.cta)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

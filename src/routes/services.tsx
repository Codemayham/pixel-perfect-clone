import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBanner, PageFrame, PageIntro } from "@/components/site";
import { services } from "@/lib/site-content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Electromechanical Services in Dubai | KSF" },
      { name: "description", content: "Explore HVAC, electrical, plumbing, mechanical, maintenance and building services from KSF Electromechanical Works L.L.C. in Dubai." },
      { property: "og:title", content: "Electromechanical Services in Dubai | KSF" },
      { property: "og:description", content: "Professional electromechanical solutions for building and project requirements." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageFrame>
      <PageIntro eyebrow="Our services" title="Technical services for buildings and projects." description="Professional electromechanical solutions for building and project requirements in Dubai, UAE." />
      <section className="content-section page-width">
        <div className="service-detail-list">
          {services.map((service, index) => (
            <article className="service-detail" key={service.title}>
              <span className="service-detail__number">0{index + 1}</span>
              <h2 className="service-detail__title">{service.title}</h2>
              <div className="service-detail__copy"><p>{service.description}</p><ul>{service.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul></div>
              <Button asChild variant="outline" className="service-detail__link"><a href="/contact">Request a Quote <ArrowUpRight aria-hidden="true" /></a></Button>
            </article>
          ))}
        </div>
      </section>
      <ContactBanner />
    </PageFrame>
  );
}
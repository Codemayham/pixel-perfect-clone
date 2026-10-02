import { createFileRoute } from "@tanstack/react-router";
import { ContactBanner, Eyebrow, PageFrame, PageIntro } from "@/components/site";
import engineerImage from "@/assets/ksf-electrical.jpg";
import pipingImage from "@/assets/ksf-piping.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About KSF Electromechanical Works L.L.C. | Dubai" },
      { name: "description", content: "Learn about KSF Electromechanical Works L.L.C., a Dubai-based electromechanical company focused on quality, safety and dependable technical support." },
      { property: "og:title", content: "About KSF Electromechanical Works L.L.C." },
      { property: "og:description", content: "Professional electromechanical solutions in Dubai, UAE." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageFrame>
      <PageIntro eyebrow="About KSF" title="Professional work. A reliable approach." description="KSF Electromechanical Works L.L.C. is based in Dubai, UAE and provides electromechanical services for building and commercial requirements." />
      <section className="content-section page-width editorial-grid">
        <img src={engineerImage} alt="Engineer inspecting electrical switchgear in a building services room" width={1024} height={768} fetchPriority="high" />
        <div className="editorial-copy"><Eyebrow>Company overview</Eyebrow><h2>Dependable engineering and technical solutions.</h2><p>Our approach is centered around professional execution, reliable technical support and delivering solutions aligned with client requirements. From building services to maintenance needs, we focus on clear communication and considered delivery.</p></div>
      </section>
      <section className="content-section content-section--white">
        <div className="page-width principle-grid">
          <article className="principle"><Eyebrow>01 · Our approach</Eyebrow><h3>Understand the requirement.</h3><p>We listen to project and operational needs, then discuss an appropriate way forward with the client.</p></article>
          <article className="principle"><Eyebrow>02 · Our commitment</Eyebrow><h3>Work with care.</h3><p>Professional execution, reliable technical support and attention to detail guide our work.</p></article>
          <article className="principle"><Eyebrow>03 · Quality & safety</Eyebrow><h3>Keep standards in focus.</h3><p>We place emphasis on quality workmanship, safety awareness and responsible work practices.</p></article>
        </div>
      </section>
      <section className="content-section page-width editorial-grid editorial-grid--reverse">
        <img src={pipingImage} alt="Mechanical piping in a commercial building plant room" width={1024} height={768} loading="lazy" />
        <div className="editorial-copy"><Eyebrow>Client focus</Eyebrow><h2>Solutions shaped around your needs.</h2><p>Every building and project has its own requirements. We aim to keep communication clear and our technical response aligned with each client’s priorities.</p><div className="values-list"><span>Quality</span><span>Reliability</span><span>Safety</span><span>Integrity</span><span>Customer satisfaction</span></div></div>
      </section>
      <ContactBanner />
    </PageFrame>
  );
}
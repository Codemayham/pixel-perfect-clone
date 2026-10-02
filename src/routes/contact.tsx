import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFrame, PageIntro, phoneLink, whatsappLink } from "@/components/site";
import { services } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact KSF Electromechanical Works L.L.C. | Dubai" },
      { name: "description", content: "Contact KSF Electromechanical Works L.L.C. in Dubai to discuss a project or technical requirement." },
      { property: "og:title", content: "Contact KSF Electromechanical Works L.L.C. | Dubai" },
      { property: "og:description", content: "Call, email or send an enquiry to KSF Electromechanical Works L.L.C." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <PageFrame>
      <PageIntro eyebrow="Contact KSF" title="Let’s work together." description="Have a project or technical requirement? Get in touch with KSF Electromechanical Works L.L.C." />
      <section className="content-section page-width contact-grid">
        <div className="contact-info">
          <div className="contact-info__item"><p className="contact-info__label">Phone</p><a href={phoneLink}>+971 50 2228678</a></div>
          <div className="contact-info__item"><p className="contact-info__label">Email</p><a href="mailto:baharuddinksf@gmail.com">baharuddinksf@gmail.com</a></div>
          <div className="contact-info__item"><p className="contact-info__label">Address</p><address>P.O. Box 377147<br />Dubai, United Arab Emirates</address></div>
          <div className="contact-info__item"><p className="contact-info__label">WhatsApp</p><a href={whatsappLink} target="_blank" rel="noreferrer">Available · Chat with KSF</a></div>
          <div className="contact-info__actions">
            <Button asChild variant="whatsapp" size="lg"><a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Chat on WhatsApp</a></Button>
            <Button asChild variant="brand" size="lg"><a href={phoneLink}><Phone aria-hidden="true" /> Call Now</a></Button>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} onChange={() => submitted && setSubmitted(false)}>
          <div className="contact-form__field"><label htmlFor="full-name">Full Name</label><input autoComplete="name" id="full-name" name="name" required /></div>
          <div className="contact-form__field"><label htmlFor="company">Company Name</label><input autoComplete="organization" id="company" name="company" /></div>
          <div className="contact-form__field"><label htmlFor="email">Email Address</label><input autoComplete="email" id="email" name="email" type="email" required /></div>
          <div className="contact-form__field"><label htmlFor="phone">Phone Number</label><input autoComplete="tel" id="phone" name="phone" type="tel" /></div>
          <div className="contact-form__field contact-form__field--wide"><label htmlFor="service">Service Required</label><select id="service" name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></div>
          <div className="contact-form__field contact-form__field--wide"><label htmlFor="details">Project Details</label><textarea id="details" name="details" required /></div>
          <Button type="submit" variant="brand" size="lg">Send Enquiry</Button>
          {submitted && <p className="form-notice" role="status">Thank you for your enquiry. The form is ready for an email connection; please contact KSF directly by phone, email or WhatsApp for now.</p>}
        </form>
      </section>
    </PageFrame>
  );
}
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const services = ["Carpet", "LVP", "Laminate", "Hardwood", "Tile", "Oddities"];

export default function Home() {
  return (
    <main>
      <section className="banner" aria-label="855 4 Carpet">
        <Image
          className="banner-image"
          src="/8554carpet-cover.png"
          alt="855 4 Carpet logo over a freshly carpeted living room"
          width={1944}
          height={720}
          priority
          sizes="100vw"
        />
      </section>

      <section className="intro">
        <p className="eyebrow">Homes &amp; commercial</p>
        <h1>Carpet, LVP &amp; tile installers serving the Southeast USA</h1>
        <p className="intro-text">
          Quality materials at <strong>rock bottom pricing.</strong>
        </p>
        <div className="actions">
          <a className="button button-primary" href="tel:+18554227738">
            <Phone aria-hidden="true" size={18} strokeWidth={2.4} />
            Call 855-4-CARPET
          </a>
          <Link className="button button-outline" href="/contact">
            Contact details
            <ArrowRight aria-hidden="true" size={18} strokeWidth={2.4} />
          </Link>
        </div>
      </section>

      <section className="services" aria-labelledby="services-title">
        <h2 id="services-title">What we install</h2>
        <ul className="service-grid">
          {services.map((service) => (
            <li key={service} className="service-card">
              {service}
            </li>
          ))}
        </ul>
      </section>

      <section className="notice">
        <p className="eyebrow">Coming soon</p>
        <h2>Our full website is on the way</h2>
        <p>
          Services, project gallery and more are coming soon. For now,
          we&rsquo;re just a phone call away.
        </p>
      </section>
    </main>
  );
}

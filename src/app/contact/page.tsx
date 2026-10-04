import type { Metadata } from "next";
import Image from "next/image";
import {
  Camera,
  Mail,
  MapPin,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Charles Eddie Winfield at 855 4 Carpet for residential and commercial flooring installation.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <article className="contact-card" aria-labelledby="contact-name">
        <section className="contact-brand-panel">
          <div>
            <Image
              className="contact-logo"
              src="/8554carpet-logo.jpg"
              alt="855 4 Carpet rocket logo"
              width={110}
              height={110}
              priority
            />
            <h1>
              855 <span>4 CARPET</span>
            </h1>
            <p className="contact-quote">
              Quality materials at <strong>rock bottom pricing.</strong>
            </p>
          </div>
          <p className="service-list">
            Carpet / LVP<br />
            Laminate • Hardwood • Tile • Oddities
          </p>
        </section>

        <section className="contact-details">
          <h2 id="contact-name">Charles “Eddie” Winfield</h2>

          <div className="phone-grid">
            <div className="phone-block">
              <p className="phone-label">Calls only</p>
              <a className="phone-link" href="tel:+18554227738">
                855-4-CARPET
              </a>
              <span className="phone-number">855-422-7738</span>
            </div>
            <div className="phone-block">
              <p className="phone-label">Eddie’s alternate</p>
              <a className="phone-link" href="tel:+18135667464">
                81-FLOORING
              </a>
              <span className="phone-number">813-566-7464</span>
            </div>
          </div>

          <div className="contact-lines">
            <a
              className="contact-line"
              href="https://maps.google.com/?q=505+Straight+St+Dalton+Georgia+30721"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin aria-hidden="true" size={21} />
              <span>505 Straight St • Dalton, Georgia 30721</span>
            </a>
            <a
              className="contact-line"
              href="mailto:505straightstreet@gmail.com"
            >
              <Mail aria-hidden="true" size={21} />
              <span>505straightstreet@gmail.com</span>
            </a>
          </div>

          <div className="social-links" aria-label="Social media">
            <a
              className="social-link"
              href="https://facebook.com/8554carpet"
              target="_blank"
              rel="noreferrer"
            >
              <UsersRound aria-hidden="true" size={17} />
              Facebook
            </a>
            <a
              className="social-link"
              href="https://instagram.com/8554carpet"
              target="_blank"
              rel="noreferrer"
            >
              <Camera aria-hidden="true" size={17} />
              Instagram
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function ComingSoon({ title }: { title: string }) {
  return (
    <main className="coming-soon">
      <div className="coming-soon-card">
        <p className="eyebrow">Coming soon</p>
        <h1>{title}</h1>
        <p className="coming-soon-text">
          We&rsquo;re putting the finishing touches on this page. In the
          meantime, give us a call or reach out for a free quote.
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
      </div>
    </main>
  );
}

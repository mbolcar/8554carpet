import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand" href="/" aria-label="855 4 Carpet home">
          <Image
            src="/8554carpet-logo.jpg"
            alt=""
            width={44}
            height={44}
            priority
          />
          <span>
            855 <span className="brand-accent">4</span> CARPET
          </span>
        </Link>
        <a className="nav-call" href="tel:+18554227738">
          <Phone aria-hidden="true" size={18} strokeWidth={2.5} />
          <span>855-4-CARPET</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

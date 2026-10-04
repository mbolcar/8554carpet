import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="footer-brand">
          855 <span className="brand-accent">4</span> CARPET
        </p>
        <p>Carpet • LVP • Laminate • Hardwood • Tile • Oddities</p>
        <p>
          <a href="tel:+18554227738">855-422-7738</a>
          {" · "}
          <Link href="/contact">Contact us</Link>
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()} 855 4 Carpet · Dalton, Georgia
        </p>
      </div>
    </footer>
  );
}

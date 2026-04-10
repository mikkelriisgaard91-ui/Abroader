import Link from "next/link";
import {
  groupChildren,
  navMainItems,
  type NavGroupItem,
  type NavLinkItem,
} from "@/lib/nav-structure";
import { EMPLOYERS_NAV } from "@/lib/employers";

function FooterNavGroup({ group }: { group: NavGroupItem }) {
  const children = groupChildren(group);
  const hubFirst = group.id !== "retreats";
  const hubLabel = group.id === "retreats" ? "All Retreats" : "Overview";
  const hubHref = group.hubHref;
  const showHubLink = Boolean(hubHref && group.id !== "remote-living");
  const hubItem = showHubLink && hubHref ? (
    <li key={hubHref}>
      <Link href={hubHref} className="site-footer__link">
        {hubLabel}
      </Link>
    </li>
  ) : null;
  const childItems = children.map((v) => (
    <li key={v.href}>
      <Link href={v.href} className="site-footer__link">
        {v.title}
      </Link>
    </li>
  ));

  return (
    <div className="site-footer__col">
      <h2 className="site-footer__heading">{group.label}</h2>
      <ul className="site-footer__list">
        {hubFirst ? (
          <>
            {hubItem}
            {childItems}
          </>
        ) : (
          <>
            {childItems}
            {hubItem}
          </>
        )}
      </ul>
    </div>
  );
}

function FooterNavLink({ item }: { item: NavLinkItem }) {
  return (
    <div className="site-footer__col">
      <h2 className="site-footer__heading">
        <Link href={item.href} className="site-footer__heading-link">
          {item.label}
        </Link>
      </h2>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <nav className="site-footer__grid" aria-label="Footer">
          <div className="site-footer__brand">
            <Link href="/" className="site-footer__brand-link" aria-label="Abroader home">
              <img src="/logo-abroader.png" alt="" className="site-footer__logo" width={160} height={40} />
            </Link>
            <p className="site-footer__tagline">Your life abroad starts here</p>
            <Link href={EMPLOYERS_NAV.href} className="site-footer__employers">
              {EMPLOYERS_NAV.label}
            </Link>
            <div className="site-footer__socials">
              <a
                href="https://www.tiktok.com/@abroader.io/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abroader on TikTok"
                className="site-footer__social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.83 1.55V6.79a4.85 4.85 0 0 1-1.06-.1z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/abroader.io/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abroader on Instagram"
                className="site-footer__social-link"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/abroader.io/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abroader on Facebook"
                className="site-footer__social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden>
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
          {navMainItems.map((item) =>
            item.kind === "group" ? (
              <FooterNavGroup key={item.id} group={item} />
            ) : (
              <FooterNavLink key={item.href} item={item} />
            ),
          )}
        </nav>

        <div className="site-footer__bottom">
          <p>
            © {year} Abroader — Your life abroad starts here
          </p>
        </div>

        <div className="site-footer__finale" aria-hidden="true">
          <img src="/footer-smile.png" alt="" width={354} height={320} />
        </div>
      </div>
    </footer>
  );
}

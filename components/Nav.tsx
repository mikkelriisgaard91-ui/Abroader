"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  startTransition,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type Dispatch,
  type SetStateAction,
} from "react";
import { EMPLOYERS_NAV, GET_CONTACTED_URL } from "@/lib/employers";
import {
  groupChildren,
  isGroupActive,
  isLinkItemActive,
  isPathActive,
  navMainItems,
  type NavGroupItem,
} from "@/lib/nav-structure";

const MOBILE_NAV_MQ = "(max-width: 1023px)";

function useIsMobileNavLayout() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia(MOBILE_NAV_MQ);
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia(MOBILE_NAV_MQ).matches,
    () => false,
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg className="site-nav__icon" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {open ? (
        <>
          <path d="M6 6l12 12M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="site-nav__drawer-close-icon" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`site-nav__chevron ${open ? "site-nav__chevron--open" : ""}`}
      viewBox="0 0 24 24"
      aria-hidden
      width={16}
      height={16}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

const HOVER_OPEN_MS = 80;
const HOVER_CLOSE_MS = 200;

function NavDesktopDropdown({
  group,
  pathname,
  openDropdownId,
  setOpenDropdownId,
}: {
  group: NavGroupItem;
  pathname: string;
  openDropdownId: string | null;
  setOpenDropdownId: Dispatch<SetStateAction<string | null>>;
}) {
  const open = openDropdownId === group.id;
  const active = isGroupActive(pathname, group);
  const children = groupChildren(group);
  const panelId = `nav-panel-${group.id}`;
  const triggerId = `nav-trigger-${group.id}`;
  const hoverOpenTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (hoverOpenTimer.current) clearTimeout(hoverOpenTimer.current);
      if (hoverCloseTimer.current) clearTimeout(hoverCloseTimer.current);
    };
  }, []);

  const clearHoverTimers = () => {
    if (hoverOpenTimer.current) clearTimeout(hoverOpenTimer.current);
    if (hoverCloseTimer.current) clearTimeout(hoverCloseTimer.current);
    hoverOpenTimer.current = null;
    hoverCloseTimer.current = null;
  };

  const isDesktopNav = () =>
    typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches;

  const handlePointerEnter = () => {
    if (!isDesktopNav()) return;
    clearHoverTimers();
    hoverOpenTimer.current = setTimeout(() => {
      setOpenDropdownId(group.id);
      hoverOpenTimer.current = null;
    }, HOVER_OPEN_MS);
  };

  const handlePointerLeave = () => {
    if (!isDesktopNav()) return;
    clearHoverTimers();
    hoverCloseTimer.current = setTimeout(() => {
      setOpenDropdownId((prev) => (prev === group.id ? null : prev));
      hoverCloseTimer.current = null;
    }, HOVER_CLOSE_MS);
  };

  const mega = group.id === "work" && children.length > 2;

  return (
    <div
      className="site-nav__dropdown"
      data-nav-dropdown={group.id}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <button
        type="button"
        id={triggerId}
        className={`site-nav__dropdown-trigger${active ? " site-nav__dropdown-trigger--active" : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={() => setOpenDropdownId(open ? null : group.id)}
      >
        <span>{group.label}</span>
        <ChevronIcon open={open} />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`site-nav__dropdown-panel${mega ? " site-nav__dropdown-panel--mega" : ""}`}
        hidden={!open}
      >
        {group.hubHref ? (
          <Link
            href={group.hubHref}
            className={`site-nav__dropdown-hub${isPathActive(pathname, group.hubHref) ? " site-nav__dropdown-hub--active" : ""}`}
            onClick={() => setOpenDropdownId(null)}
          >
            Overview
          </Link>
        ) : null}
        <ul className="site-nav__dropdown-list">
          {children.map((v) => {
            const childActive = isPathActive(pathname, v.href);
            return (
              <li key={v.href}>
                <Link
                  href={v.href}
                  className={`site-nav__dropdown-link${childActive ? " site-nav__dropdown-link--active" : ""}`}
                  onClick={() => setOpenDropdownId(null)}
                >
                  <span className="site-nav__dropdown-link-title">{v.title}</span>
                  <span className="site-nav__dropdown-link-desc">{v.description}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function NavDesktop({
  pathname,
  openDropdownId,
  setOpenDropdownId,
}: {
  pathname: string;
  openDropdownId: string | null;
  setOpenDropdownId: Dispatch<SetStateAction<string | null>>;
}) {
  return (
    <nav className="site-nav__links site-nav__links--desktop" aria-label="Main navigation">
      {navMainItems.map((item) => {
        if (item.kind === "link") {
          const active = isLinkItemActive(pathname, item);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`site-nav__link${active ? " site-nav__link--active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        }
        return (
          <NavDesktopDropdown
            key={item.id}
            group={item}
            pathname={pathname}
            openDropdownId={openDropdownId}
            setOpenDropdownId={setOpenDropdownId}
          />
        );
      })}
    </nav>
  );
}

function NavMobileAccordion({
  pathname,
  openAccordionId,
  setOpenAccordionId,
}: {
  pathname: string;
  openAccordionId: string | null;
  setOpenAccordionId: (id: string | null) => void;
}) {
  return (
    <nav className="site-nav__links site-nav__links--mobile" aria-label="Main navigation">
      {navMainItems.map((item) => {
        if (item.kind === "link") {
          const active = isLinkItemActive(pathname, item);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`site-nav__link${active ? " site-nav__link--active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        }

        const group = item;
        const expanded = openAccordionId === group.id;
        const active = isGroupActive(pathname, group);
        const children = groupChildren(group);

        return (
          <div key={group.id} className="site-nav__acc">
            <button
              type="button"
              className={`site-nav__acc-trigger${active ? " site-nav__acc-trigger--branch-active" : ""}`}
              aria-expanded={expanded}
              aria-controls={`acc-panel-${group.id}`}
              id={`acc-trigger-${group.id}`}
              onClick={() => setOpenAccordionId(expanded ? null : group.id)}
            >
              <span>{group.label}</span>
              <ChevronIcon open={expanded} />
            </button>
            <div
              id={`acc-panel-${group.id}`}
              role="region"
              aria-labelledby={`acc-trigger-${group.id}`}
              className="site-nav__acc-panel"
              hidden={!expanded}
            >
              {group.hubHref ? (
                <Link
                  href={group.hubHref}
                  className={`site-nav__acc-hub${isPathActive(pathname, group.hubHref) ? " site-nav__link--active" : ""}`}
                >
                  Overview
                </Link>
              ) : null}
              <ul className="site-nav__acc-list">
                {children.map((v) => {
                  const childActive = isPathActive(pathname, v.href);
                  return (
                    <li key={v.href}>
                      <Link
                        href={v.href}
                        className={`site-nav__acc-link${childActive ? " site-nav__link--active" : ""}`}
                        aria-current={childActive ? "page" : undefined}
                      >
                        <span className="site-nav__acc-link-row">
                          <span className="site-nav__acc-link-emoji" aria-hidden>
                            {v.emoji}
                          </span>
                          <span className="site-nav__acc-link-text">
                            <span className="site-nav__acc-link-title">{v.title}</span>
                            <span className="site-nav__acc-link-desc">{v.description}</span>
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </nav>
  );
}

function getFocusableIn(container: HTMLElement): HTMLElement[] {
  const nodes = container.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
  );
  return Array.from(nodes).filter((el) => {
    if (el.closest("[hidden],[inert]")) return false;
    const style = window.getComputedStyle(el);
    return style.visibility !== "hidden" && style.display !== "none";
  });
}

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobileNavLayout = useIsMobileNavLayout();
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const wasMenuOpenRef = useRef(false);

  useEffect(() => {
    startTransition(() => {
      setMenuOpen(false);
      setOpenDropdownId(null);
    });
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!openDropdownId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdownId(null);
    };
    const onDoc = (e: MouseEvent) => {
      const wrap = document.querySelector(`[data-nav-dropdown="${openDropdownId}"]`);
      if (wrap && !wrap.contains(e.target as Node)) setOpenDropdownId(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDoc);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDoc);
    };
  }, [openDropdownId]);

  useEffect(() => {
    if (!menuOpen || !isMobileNavLayout) {
      wasMenuOpenRef.current = false;
      return;
    }
    const drawer = drawerRef.current;
    if (!drawer) return;

    const inner = drawer.closest(".site-nav__inner");
    const brand = inner?.querySelector<HTMLElement>(".site-nav__brand");
    const menuBtn = inner?.querySelector<HTMLElement>(".site-nav__menu-btn");
    const suppressed: { el: HTMLElement; had: boolean; value: string | null }[] = [];
    for (const el of [brand, menuBtn]) {
      if (!el) continue;
      suppressed.push({ el, had: el.hasAttribute("tabindex"), value: el.getAttribute("tabindex") });
      el.tabIndex = -1;
    }

    const focusFirst = () => {
      getFocusableIn(drawer)[0]?.focus();
    };

    const justOpened = !wasMenuOpenRef.current;
    wasMenuOpenRef.current = true;
    let focusTimer: ReturnType<typeof setTimeout> | null = null;
    if (justOpened) {
      focusTimer = setTimeout(focusFirst, 120);
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const list = getFocusableIn(drawer);
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    drawer.addEventListener("keydown", onKeyDown);
    return () => {
      if (focusTimer) clearTimeout(focusTimer);
      drawer.removeEventListener("keydown", onKeyDown);
      suppressed.forEach(({ el, had, value }) => {
        if (!had) el.removeAttribute("tabindex");
        else if (value !== null) el.setAttribute("tabindex", value);
      });
    };
  }, [menuOpen, isMobileNavLayout]);

  return (
    <header className={`site-nav${menuOpen ? " site-nav--open" : ""}`}>
      <div className="site-nav__inner">
        <Link href="/" className="site-nav__brand" aria-label="Abroader home">
          <img src="/logo-abroader.png" alt="" className="site-nav__logo" />
        </Link>

        <div
          ref={drawerRef}
          className="site-nav__drawer"
          id="site-nav-menu"
          aria-hidden={isMobileNavLayout && !menuOpen ? true : undefined}
          {...(isMobileNavLayout && menuOpen
            ? { role: "dialog", "aria-modal": true, "aria-labelledby": "site-nav-drawer-title" }
            : {})}
          {...(isMobileNavLayout && !menuOpen ? { inert: true } : {})}
        >
          <div className="site-nav__drawer-header" aria-hidden={!isMobileNavLayout}>
            <h2 id="site-nav-drawer-title" className="site-nav__drawer-title">
              Menu
            </h2>
            <button
              type="button"
              className="site-nav__drawer-close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="site-nav__viewport site-nav__viewport--desktop">
            <NavDesktop pathname={pathname} openDropdownId={openDropdownId} setOpenDropdownId={setOpenDropdownId} />
          </div>
          <div className="site-nav__viewport site-nav__viewport--mobile">
            <NavMobileAccordion
              pathname={pathname}
              openAccordionId={openAccordionId}
              setOpenAccordionId={setOpenAccordionId}
            />
          </div>

          <div className="site-nav__actions">
            <Link
              href={EMPLOYERS_NAV.href}
              className={`site-nav__cta site-nav__cta--employers${pathname === EMPLOYERS_NAV.href || pathname.startsWith(`${EMPLOYERS_NAV.href}/`) ? " site-nav__cta--employers-active" : ""}`}
              aria-current={pathname === EMPLOYERS_NAV.href || pathname.startsWith(`${EMPLOYERS_NAV.href}/`) ? "page" : undefined}
            >
              {EMPLOYERS_NAV.label}
            </Link>
            <a
              href={GET_CONTACTED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="site-nav__cta site-nav__cta--contacted"
            >
              Get contacted
            </a>
          </div>
        </div>

        <button
          type="button"
          className="site-nav__menu-btn"
          aria-expanded={menuOpen}
          aria-controls="site-nav-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => {
            setMenuOpen((o) => {
              const next = !o;
              if (next && isMobileNavLayout) {
                const group = navMainItems.find(
                  (it): it is NavGroupItem => it.kind === "group" && isGroupActive(pathname, it),
                );
                setOpenAccordionId(group ? group.id : null);
              }
              return next;
            });
          }}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {menuOpen ? (
        <button type="button" className="site-nav__scrim" tabIndex={-1} aria-label="Close menu" onClick={() => setMenuOpen(false)} />
      ) : null}
    </header>
  );
}

import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import styles from './Header.module.css';

const links = [
  { to: '/recipes', label: 'Recipes' },
  { to: '/about', label: 'About' },
  { to: '/store', label: 'Store' },
  { to: '/work-with-me', label: 'Work With Me' },
  { to: '/croissant-crew', label: 'The Croissant Crew', arrow: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={clsx(styles.header, scrolled && styles.scrolled)}>
      <div className={clsx('container', styles.inner)}>
        <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
          alchenny <span aria-hidden="true">🍪</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => clsx(styles.link, isActive && styles.linkActive)}
            >
              {l.label}
              {l.arrow && <span className={styles.arrow}> ↗</span>}
            </NavLink>
          ))}
        </nav>

        <button
          className={styles.menuBtn}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={clsx(styles.mobilePanel, open && styles.mobileOpen)} aria-hidden={!open}>
        <nav className={styles.mobileNav} aria-label="Mobile">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {l.label}
              {l.arrow && <span className={styles.arrow}> ↗</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

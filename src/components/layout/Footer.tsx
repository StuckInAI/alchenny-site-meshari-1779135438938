import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Link to="/" className={styles.logo}>alchenny <span aria-hidden="true">🍪</span></Link>
            <p className={styles.tagline}>Classic French technique. Playful storytelling. An approachable love of dessert — from NYC.</p>
          </div>

          <div className={styles.col}>
            <div className="eyebrow">Explore</div>
            <ul className={styles.list}>
              <li><Link to="/recipes">Recipes</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/store">Store</Link></li>
              <li><Link to="/work-with-me">Work With Me</Link></li>
              <li><Link to="/croissant-crew">The Croissant Crew</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <div className="eyebrow">Contact</div>
            <ul className={styles.list}>
              <li><a href="mailto:partnerships@alchenny.com">partnerships@alchenny.com</a></li>
              <li><a href="mailto:hello@alchenny.com">hello@alchenny.com</a></li>
              <li><a href="mailto:alchenny@palettemgmt.com">alchenny@palettemgmt.com</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <div className="eyebrow">Follow</div>
            <div className={styles.social}>
              <a href="https://www.instagram.com/al.chenny/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://www.tiktok.com/@alchenny" target="_blank" rel="noreferrer" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.6 6.32a5.4 5.4 0 0 1-3.2-1.04 5.4 5.4 0 0 1-2.16-3.35h-3.2v13.06a2.55 2.55 0 1 1-2.55-2.55c.28 0 .55.04.8.13V9.27a5.85 5.85 0 1 0 5 5.79V9.62a8.6 8.6 0 0 0 5.31 1.83v-3.2c-.07 0-.13.07-.2.07z"/></svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={18} /></a>
              <a href="https://alchenny.substack.com" target="_blank" rel="noreferrer" aria-label="Substack"><Mail size={18} /></a>
              <a href="https://www.facebook.com/alchenny/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://www.linkedin.com/in/allison-chenny/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Alchenny LLC. All rights reserved.</p>
          <p className={styles.muted}>Designed with care in New York City.</p>
        </div>
      </div>
    </footer>
  );
}

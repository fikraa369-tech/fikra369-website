import { useEffect, useState } from 'react';
import { Globe2, Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { Brand } from './Brand';
import { useLanguage } from '../LanguageContext';

const nav = [
  { to: '/', ar: 'الرئيسية', en: 'Home' },
  { to: '/about', ar: 'من نحن', en: 'About' },
  { to: '/services', ar: 'الخدمات', en: 'Services' },
  { to: '/insights', ar: 'المعرفة', en: 'Insights' },
  { to: '/contact', ar: 'تواصل معنا', en: 'Contact' }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, toggleLanguage } = useLanguage();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Brand />
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              {item[lang]}
            </NavLink>
          ))}
          <NavLink to="/contact" className="button button--sm button--gold header-cta">
            {lang === 'ar' ? 'اطلب استشارة' : 'Request Consultation'}
          </NavLink>
        </nav>
        <div className="header-actions">
          <button className="language-button" onClick={toggleLanguage} aria-label="Switch language">
            <Globe2 size={18} />
            <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
          </button>
          <button className="menu-button" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

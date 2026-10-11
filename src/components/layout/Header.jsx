import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { moreNavigation, navigation } from '../../config/content.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const moreRef = useRef(null);
  const { pathname } = useLocation();
  const close = () => setOpen(false);
  useEffect(() => {
    close();
    if (moreRef.current) moreRef.current.open = false;
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="brand" to="/" aria-label="SyncCommit Technologies home" onClick={close}>
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span className="brand-name">synccommit<span>technologies</span></span>
        </Link>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`primary-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {navigation.map(({ label, to }) => <NavLink key={to} to={to} onClick={close} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>{label}</NavLink>)}
          <details className={`nav-dropdown${moreNavigation.some(({ to }) => pathname.startsWith(to)) ? ' active' : ''}`} ref={moreRef}>
            <summary>More <span aria-hidden="true">⌄</span></summary>
            <div className="nav-dropdown-menu">{moreNavigation.map(({ label, to }) => <NavLink key={to} to={to} onClick={close} className={({ isActive }) => `nav-dropdown-link${isActive ? ' active' : ''}`}>{label}</NavLink>)}</div>
          </details>
          <Link className="button button-small button-dark mobile-cta" to="/contact" onClick={close}>Let's talk <ArrowUpRight size={15} /></Link>
        </nav>
        <Link className="button button-small button-dark desktop-cta" to="/contact">Let's talk <ArrowUpRight size={15} /></Link>
      </div>
    </header>
  );
}

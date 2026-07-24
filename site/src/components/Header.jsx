import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { navigation } from '../data/siteData';

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);
  const close = () => setOpen(false);
  return <header className="site-header">
    <Link className="wordmark" to="/">CANDACE TANG</Link>
    <nav className="desktop-nav" aria-label="Main navigation">
      {navigation.map(({ label, to }) => <NavLink key={to} to={to}>{label}</NavLink>)}
    </nav>
    <button className="menu-button" aria-label="Open navigation menu" aria-expanded={open} onClick={() => setOpen(true)}><span /><span /><span /></button>
    {open && <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <div className="menu-scrim" onClick={close} />
      <div className="menu-panel">
        <span className="wordmark muted">CANDACE TANG</span>
        <button className="close-button" aria-label="Close navigation menu" onClick={close}>×</button>
        <nav aria-label="Mobile navigation">{navigation.map(({ label, to }) => <NavLink key={to} to={to} onClick={close}>{label}</NavLink>)}</nav>
      </div>
    </div>}
  </header>;
}

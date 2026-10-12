import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import OrderLink from '@/components/OrderLink';

const routes = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/menu', label: 'Nuestro pan' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/creadores', label: 'Creadores' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  useEffect(() => { setOpen(false); }, [location]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Panes con Pollo Ejemegsa, inicio" data-testid="link-brand-home">
          <img src="/logo-ejemegsa.png" alt="Logotipo de Panes con Pollo Ejemegsa" width="51" height="51" />
          <span><span className="brand-name">Ejemegsa</span><span className="brand-sub">Sabor jucuapense</span></span>
        </Link>
        <nav id="main-menu" className={`nav-links${open ? ' open' : ''}`} aria-label="Navegación principal">
          {routes.map(({ href, label }) => <Link key={href} href={href} aria-current={location === href ? 'page' : undefined} data-testid={`link-nav-${href === '/' ? 'inicio' : href.slice(1)}`}>{label}</Link>)}
          <OrderLink className="btn btn-primary nav-cta mobile-order">Hacer una consulta</OrderLink>
        </nav>
        <OrderLink className="btn btn-primary nav-cta desktop">Hacer una consulta</OrderLink>
        <button className="menu-toggle" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)} data-testid="button-menu-toggle">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}

import { type ReactNode } from 'react';
import { Link } from 'wouter';
import { ArrowUpRight } from 'lucide-react';
import Navigation from '@/components/navigation/Navigation';
import { siteConfig } from '@/data/siteConfig';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="site-shell"><a className="skip-link" href="#contenido">Saltar al contenido</a><Navigation />{children}<footer className="site-footer">
    <div className="container">
      <div className="footer-top">
        <div><Link href="/" className="footer-brand"><img src="/logo-ejemegsa.png" alt="" width="62" height="62" loading="lazy" /><span><strong>Panes con Pollo Ejemegsa</strong><p>{siteConfig.slogan}</p></span></Link></div>
        <div className="footer-col"><h3>Explorar</h3><div className="footer-links"><Link href="/nosotros">Nuestra identidad</Link><Link href="/menu">El pan con pollo</Link><Link href="/recursos">Guías para emprender</Link><Link href="/creadores">Creadores</Link><Link href="/contacto">Contacto</Link></div></div>
        <div className="footer-col"><h3>En nuestra comunidad</h3><div className="footer-links"><a href={siteConfig.social.facebook.url} target="_blank" rel="noopener noreferrer">Facebook · {siteConfig.social.facebook.label} <ArrowUpRight size={13} /></a><a href={siteConfig.social.instagram.url} target="_blank" rel="noopener noreferrer">Instagram · {siteConfig.social.instagram.label} <ArrowUpRight size={13} /></a><a href={siteConfig.social.tiktok.url} target="_blank" rel="noopener noreferrer">TikTok · {siteConfig.social.tiktok.label} <ArrowUpRight size={13} /></a></div><p className="footer-note">{siteConfig.location}</p></div>
      </div>
      <div className="footer-bottom"><span>Hecho con orgullo desde Jucuapa.</span><span>Tradición jucuapense en cada bocado.</span></div>
    </div>
  </footer></div>;
}

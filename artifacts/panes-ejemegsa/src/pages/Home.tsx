import { ArrowDown, ArrowRight, ArrowUpRight, Heart, MapPin } from 'lucide-react';
import { Link } from 'wouter';
import Seo from '@/components/Seo';
import OrderLink from '@/components/OrderLink';
import { siteConfig } from '@/data/siteConfig';

export default function Home() {
  return <><Seo title="Panes con pollo de Jucuapa" description="Conoce Panes con Pollo Ejemegsa: tradición jucuapense, sabor salvadoreño y una manera cercana de compartir desde Jucuapa." /><main id="contenido" className="page-main">
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy animate-in">
          <span className="eyebrow">Desde Jucuapa, con identidad</span>
          <h1>Un sabor que<br />se siente <em>de casa.</em></h1>
          <p>El pan con pollo, como se vive en Jucuapa: con tradición, cariño y ese orgullo salvadoreño que se comparte bocado a bocado.</p>
          <div className="hero-actions"><OrderLink /><Link href="/menu" className="btn btn-outline">Conoce nuestro pan <ArrowRight size={16} /></Link></div>
        </div>
        <div className="hero-art">
          <img className="hero-logo" src={`${import.meta.env.BASE_URL}logo-ejemegsa.png`} alt="Emblema de Ejemegsa con su pan con pollo, el volcán y la tradición jucuapense" width="1024" height="1024" fetchPriority="high" />
          <div className="hero-stamp">Jucuapa<small>EL SALVADOR</small></div>
        </div>
      </div>
    </section>
    <div className="marquee" aria-label="Tradición jucuapense en cada bocado">
      <div className="marquee-inner" aria-hidden="true">{Array.from({ length: 4 }, (_, i) => <span key={i}>Tradición jucuapense en cada bocado <i>✳</i> Pan con pollo hecho al estilo de Jucuapa <i>✳</i> Orgullo que se comparte <i>✳</i></span>)}</div>
    </div>
    <section className="section">
      <div className="container intro-grid">
        <div><span className="eyebrow">Más que un antojo</span><h2 className="intro-big">Una receta con <em>raíces.</em><br />Una mesa para compartir.</h2></div>
        <div className="intro-copy"><p>En Ejemegsa celebramos el pan con pollo al estilo jucuapense: un platillo querido, generoso y lleno de sabor que nos conecta con nuestra tierra y con quienes la llevan en el corazón.</p><p>Esta es una pequeña empresa con una gran historia por seguir escribiendo. Nos alegra que estés aquí.</p><Link href="/nosotros" className="btn btn-outline">Conoce nuestra esencia <ArrowRight size={16} /></Link></div>
      </div>
    </section>
    <section className="manifesto"><div className="container manifesto-inner"><div className="seal">Con raíces<br />en Jucuapa<span>EL SALVADOR</span></div><div><span className="eyebrow">La tradición nos reúne</span><h2>Tradición jucuapense<br />en cada bocado.</h2><p>Una manera sencilla de decir quiénes somos: un emprendimiento cercano, orgulloso de su origen y enamorado de un clásico de nuestra cocina.</p></div></div></section>
    <section className="section"><div className="container split-feature">
      <div className="feature-panel"><p className="feature-quote">“Hay sabores que siempre encuentran el camino de regreso a casa.”</p></div>
      <div className="feature-copy"><span className="eyebrow">Un clásico de nuestra mesa</span><h2>Conoce el pan con pollo</h2><p>Pan suave, pollo y los sabores que hacen de este platillo parte de nuestras celebraciones y reuniones. Descubre lo que representa en la tradición de Jucuapa.</p><Link href="/menu" className="btn btn-outline">Explorar nuestro producto <ArrowRight size={16} /></Link></div>
    </div></section>
    <section className="section" style={{ paddingTop: 0 }}><div className="container section-heading"><div><span className="eyebrow">Conversemos</span><h2>Lo bueno se comparte.</h2></div><Link href="/contacto" className="btn btn-dark">Encuéntranos <ArrowUpRight size={16} /></Link></div>
      <div className="container social-row">
        <a className="social-pill" href={siteConfig.social.facebook.url} target="_blank" rel="noopener noreferrer"><span className="social-icon">f</span><span>Facebook <strong>{siteConfig.social.facebook.label}</strong></span><ArrowUpRight size={15} /></a>
        <a className="social-pill" href={siteConfig.social.instagram.url} target="_blank" rel="noopener noreferrer"><span className="social-icon">ig</span><span>Instagram <strong>{siteConfig.social.instagram.label}</strong></span><ArrowUpRight size={15} /></a>
        <a className="social-pill" href={siteConfig.social.tiktok.url} target="_blank" rel="noopener noreferrer"><span className="social-icon">tk</span><span>TikTok <strong>{siteConfig.social.tiktok.label}</strong></span><ArrowUpRight size={15} /></a>
      </div>
    </section>
    <div className="container" style={{ padding: '16px 0 24px', color: '#737783', fontSize: '.8rem' }}><MapPin size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />{siteConfig.location} <span style={{ marginLeft: 15 }}><Heart size={13} style={{ verticalAlign: 'middle', marginRight: 5 }} />{siteConfig.slogan}</span><a href="#contenido" aria-label="Volver al inicio" style={{ float: 'right' }}><ArrowDown size={15} style={{ transform: 'rotate(180deg)' }} /></a></div>
  </main></>;
}

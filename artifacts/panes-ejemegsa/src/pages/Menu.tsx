import { ArrowRight, Utensils } from 'lucide-react';
import { Link } from 'wouter';
import Seo from '@/components/Seo';
import OrderLink from '@/components/OrderLink';

export default function Menu() {
  return <><Seo title="Pan con pollo al estilo jucuapense" description="Descubre el pan con pollo de Ejemegsa, un platillo querido de la tradición jucuapense y salvadoreña. Consulta por nuestros canales de contacto." /><main id="contenido" className="page-main">
    <header className="page-intro"><div className="container"><span className="eyebrow">El protagonista de nuestra mesa</span><h1>Pan con pollo,<br />a nuestra manera.</h1><p>Un clásico salvadoreño con raíces jucuapenses: generoso, familiar y hecho para disfrutarlo en buena compañía.</p></div></header>
    <section className="section"><div className="container"><article className="menu-product"><div className="menu-mark" aria-hidden="true"><span><Utensils size={66} strokeWidth={1.1} /></span></div><div className="menu-details"><span className="eyebrow">Nuestro producto</span><h2>Pan con pollo<br />estilo jucuapense</h2><p>El sabor de un platillo que acompaña reuniones, celebraciones y momentos de compartir. Esa combinación entrañable de pan, pollo y tradición salvadoreña que nos inspira todos los días.</p><p>Cada negocio tiene su toque; el nuestro empieza con el orgullo de ser de Jucuapa.</p><div className="menu-note">Para consultar disponibilidad, detalles o hacer una consulta, escríbenos directamente por nuestros canales.</div><div style={{ marginTop: 25 }}><OrderLink /></div></div></article></div></section>
    <section className="section" style={{ paddingTop: 0 }}><div className="container intro-grid"><div><span className="eyebrow">Un bocado con identidad</span><h2 className="intro-big">La tradición no se cuenta solo con palabras. También se <em>comparte.</em></h2></div><div className="intro-copy"><p>En Jucuapa, el pan con pollo es parte de una cultura de encuentro: se disfruta en familia, se lleva a las reuniones y se comparte con quienes queremos.</p><p>Nos enorgullece mantener viva esa costumbre desde nuestro pequeño emprendimiento.</p><Link href="/nosotros" className="btn btn-outline">Conoce nuestra esencia <ArrowRight size={16} /></Link></div></div></section>
    <section className="cta-band"><div className="container cta-inner"><div><h2>¿Quieres conversar sobre el menú?</h2><p>Contáctanos para hacer tu consulta.</p></div><OrderLink className="btn btn-dark" /></div></section>
  </main></>;
}

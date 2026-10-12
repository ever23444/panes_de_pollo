import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import OrderLink from '@/components/OrderLink';
import { siteConfig } from '@/data/siteConfig';

export default function Nosotros() {
  return <><Seo title="Nuestra identidad" description="Conoce la misión, visión y el orgullo jucuapense detrás de Panes con Pollo Ejemegsa, una tradición salvadoreña que se comparte." /><main id="contenido" className="page-main">
    <header className="page-intro"><div className="container"><span className="eyebrow">Nuestra historia empieza en casa</span><h1>Un emprendimiento<br />con raíces profundas.</h1><p>Somos Panes con Pollo Ejemegsa: un pequeño negocio de Jucuapa que lleva con orgullo la tradición de un sabor salvadoreño muy querido.</p></div></header>
    <section className="section"><div className="container intro-grid"><div><span className="eyebrow">De dónde venimos</span><h2 className="intro-big">Jucuapa no solo es nuestro lugar. Es parte de <em>lo que somos.</em></h2></div><div className="intro-copy"><p>El pan con pollo tiene un lugar especial en las mesas salvadoreñas. En Ejemegsa, ese gusto se encuentra con nuestra identidad jucuapense: cercana, orgullosa y hecha para compartir.</p><p>Creemos que emprender también es cuidar aquello que nos hace únicos y hacer espacio para que la tradición siga reuniéndonos.</p><div className="ornament" aria-hidden="true">✳　✳　✳</div></div></div></section>
    <section className="manifesto"><div className="container manifesto-inner"><div className="seal">Nuestra<br />esencia<span>JUCUAPA</span></div><div><span className="eyebrow">Lo que nos mueve</span><h2>{siteConfig.slogan}</h2><p>Nos inspira el orgullo por nuestra tierra, el cariño por la cocina salvadoreña y la oportunidad de compartir un platillo que sabe a encuentro.</p></div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">Lo que queremos cultivar</span><h2>Misión y visión</h2></div></div><div className="cards-two">
      <article className="value-card"><span className="number">01</span><h2>Nuestra misión</h2><p>Compartir el pan con pollo al estilo jucuapense y celebrar la tradición salvadoreña desde un emprendimiento cercano, orgulloso de sus raíces y comprometido con la calidad de cada bocado.</p></article>
      <article className="value-card"><span className="number">02</span><h2>Nuestra visión</h2><p>Crecer como un referente de sabor e identidad jucuapense, llevando nuestra tradición a más personas y haciendo de cada encuentro una ocasión para compartir.</p></article>
    </div></div></section>
    <section className="section" style={{ paddingTop: 0 }}><div className="container cta-inner"><div><span className="eyebrow">La tradición continúa</span><h2>Conoce lo que compartimos.</h2><p>Descubre nuestro pan con pollo y conversa con nosotros.</p></div><Link className="btn btn-outline" href="/menu">Ir a nuestro pan <ArrowRight size={16} /></Link></div></section>
    <section className="cta-band"><div className="container cta-inner"><div><h2>Un saludo desde Jucuapa.</h2><p>Nos encuentras en nuestras redes sociales.</p></div><OrderLink className="btn btn-dark" /></div></section>
  </main></>;
}

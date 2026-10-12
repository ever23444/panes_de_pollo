import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Instagram, Send } from 'lucide-react';
import Seo from '@/components/Seo';
import { siteConfig, whatsappUrl } from '@/data/siteConfig';

export default function Contacto() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const sendDraft = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !message.trim()) { setStatus('Completa tu nombre y mensaje antes de continuar.'); return; }
    if (!siteConfig.email) { setStatus('Aún no hay un correo de contacto configurado. Tu mensaje no se ha enviado. Puedes escribirnos por WhatsApp si está disponible o encontrarnos en nuestras redes sociales.'); return; }
    const subject = encodeURIComponent(`Consulta de ${name.trim()} — Panes con Pollo Ejemegsa`);
    const body = encodeURIComponent(`Hola, soy ${name.trim()}.\n\n${message.trim()}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus('Se preparó un borrador en tu aplicación de correo. Revísalo y envíalo desde allí; este sitio no envía el mensaje.');
  };
  const wa = whatsappUrl();
  return <><Seo title="Contacto y redes sociales" description="Conecta con Panes con Pollo Ejemegsa en Facebook, Instagram y TikTok. Consulta por nuestros canales; estamos en Jucuapa, El Salvador." /><main id="contenido" className="page-main">
    <header className="page-intro"><div className="container"><span className="eyebrow">Nos alegra encontrarte</span><h1>Hablemos de<br />buenos sabores.</h1><p>¿Tienes una consulta sobre nuestro pan con pollo? Escríbenos o acompáñanos en nuestras redes.</p></div></header>
    <section className="section"><div className="container contact-grid">
      <div className="contact-info"><span className="eyebrow">Ponte en contacto</span><h2>Desde Jucuapa,<br />con mucho gusto.</h2><p>Queremos que encuentres la forma más cómoda de acercarte. Visítanos en redes o déjanos un mensaje para preparar un borrador de correo.</p>
        <div className="social-row" style={{ marginTop: 25 }}>
          <a className="social-pill" href={siteConfig.social.facebook.url} target="_blank" rel="noopener noreferrer"><span className="social-icon">f</span><span>Facebook<br /><strong>{siteConfig.social.facebook.label}</strong></span><ArrowUpRight size={15} /></a>
          <a className="social-pill" href={siteConfig.social.instagram.url} target="_blank" rel="noopener noreferrer"><span className="social-icon">ig</span><span>Instagram<br /><strong>{siteConfig.social.instagram.label}</strong></span><ArrowUpRight size={15} /></a>
          <a className="social-pill" href={siteConfig.social.tiktok.url} target="_blank" rel="noopener noreferrer"><span className="social-icon">tk</span><span>TikTok<br /><strong>{siteConfig.social.tiktok.label}</strong></span><ArrowUpRight size={15} /></a>
        </div>
        {wa ? <a className="btn btn-primary" style={{ marginTop: 20 }} href={wa} target="_blank" rel="noopener noreferrer"><Send size={16} />Abrir WhatsApp</a> : <p className="form-status">WhatsApp estará disponible cuando se agregue el número de contacto confirmado.</p>}
        <p style={{ marginTop: 24, fontSize: '.86rem' }}>Ubicación de referencia: {siteConfig.location}</p>
      </div>
      <form className="contact-form" onSubmit={sendDraft} noValidate><h2>Déjanos un mensaje</h2><p>Los datos se usan únicamente para preparar un borrador de correo en tu dispositivo. No se envía nada desde esta página.</p>
        <div className="field"><label htmlFor="contact-name">Tu nombre</label><input id="contact-name" name="name" value={name} onChange={e => setName(e.target.value)} autoComplete="name" required data-testid="input-contact-name" /></div>
        <div className="field"><label htmlFor="contact-message">¿En qué podemos ayudarte?</label><textarea id="contact-message" name="message" value={message} onChange={e => setMessage(e.target.value)} required data-testid="input-contact-message" /></div>
        <button className="btn btn-primary" type="submit" data-testid="button-contact-draft">Preparar mensaje <ArrowUpRight size={16} /></button>
        {status && <p className="form-status" role="status" aria-live="polite" data-testid="status-contact-form">{status}</p>}
      </form>
    </div></section>
    <section className="cta-band"><div className="container cta-inner"><div><h2>Encuéntranos en las redes.</h2><p>Sigue a Ejemegsa y acompaña nuestra tradición.</p></div><a className="btn btn-dark" href={siteConfig.social.instagram.url} target="_blank" rel="noopener noreferrer"><Instagram size={17} />Instagram <ArrowUpRight size={15} /></a></div></section>
  </main></>;
}

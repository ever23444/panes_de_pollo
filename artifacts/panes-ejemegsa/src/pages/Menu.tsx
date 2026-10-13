import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import Seo from '@/components/Seo';
import OrderLink from '@/components/OrderLink';

const burgers = [
  {
    name: 'Pan Jucuapense',
    description: 'Pan suave relleno de pollo, vegetales frescos y salsa de la casa.',
    price: '3.50',
    image: 'https://cdn7.kiwilimon.com/recetaimagen/39534/640x640/51686.jpg.jpg',
  },
  {
    name: 'Pan Tradicional',
    description: 'Pan con pollo preparado al estilo tradicional, con repollo y aderezo.',
    price: '4.00',
    image: 'https://guanacos.com/wp-content/uploads/2021/12/Foto-1-5.jpg',
  },
  {
    name: 'Pan Campestre',
    description: 'Pan generoso con pollo, vegetales frescos y un toque de salsa especial.',
    price: '4.75',
    image: 'https://cdn.aarp.net/content/dam/aarp/food/recipes/2015-08/1140-tasty-chicken-recipes-pan-con-pollo-ESP.jpg',
  },
  {
    name: 'Pan Sabor de Abuela',
    description: 'Pollo sazonado servido en pan con repollo y nuestro aderezo cremoso.',
    price: '5.00',
    image: 'https://cdn-pro.elsalvador.com/wp-content/uploads/2025/12/Panes-Wendy.jpg',
  },
  {
    name: 'Pan Delicia Salvadoreña',
    description: 'Pan con pollo al estilo salvadoreño, lleno de sabor y tradición.',
    price: '5.50',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5xSKhPWEHJu_ejLNUddC09q7jbud2p_WlDOAdPItlyaTa74oOsJcUz9K&s=10',
  },
  {
    name: 'Pan Consentido',
    description: 'Nuestra combinación de pollo, vegetales frescos y salsa casera en pan.',
    price: '5.75',
    image: 'https://svelsalvador.com/wp-content/uploads/2024/05/panes-con-pollo-salvadorenos-el-.jpg',
  },
  {
    name: 'Pan Doradito',
    description: 'Pan relleno de pollo con repollo fresco y aderezo de la casa.',
    price: '5.50',
    image: 'https://alimentatedelobueno.com/storage/782/pan-pollo.png',
  },
  {
    name: 'Pan Familiar',
    description: 'Una opción para compartir: pan con pollo, vegetales y salsa especial.',
    price: '6.00',
    image: 'https://www.recetasnestlecam.com/sites/default/files/srh_recipes/6bca936cff866da0dd04503549f5abc2.jpg',
  },
  {
    name: 'Pan Fiesta',
    description: 'Pan estilo jucuapense con pollo sazonado y acompañamientos frescos.',
    price: '6.50',
    image: 'https://acomer.pe/wp-content/uploads/2016/08/sandwichdepolloweb.jpg',
  },
  {
    name: 'Pan Especial de la Casa',
    description: 'Nuestro pan con pollo especial, preparado con el sabor de Ejemegsa.',
    price: '7.00',
    image: 'https://comedera.com/wp-content/uploads/sites/9/2023/01/sandwich-de-pollo-empanado.jpg',
  },
];

export default function Menu() {
  return <>
    <Seo title="Menú | Pan con pollo y hamburguesas" description="Descubre el pan con pollo estilo jucuapense y nuestras hamburguesas con precios de $3.50 a $7.00. Consulta por nuestros canales de contacto." />
    <main id="contenido" className="page-main">
      <header className="page-intro">
        <div className="container">
          <span className="eyebrow">El protagonista de nuestra mesa</span>
          <h1>Pan con pollo,<br />a nuestra manera.</h1>
          <p>Un clásico salvadoreño con raíces jucuapenses: generoso, familiar y hecho para disfrutarlo en buena compañía.</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <article className="menu-product">
            <div className="menu-mark">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGpf7HhsXf6tshSyfocTaOvQsmSzGVjBfH2snJNyJEZIuUb1mgP_XunNy&s=10"
                alt="Pan con pollo estilo jucuapense de Ejemegsa"
                loading="lazy"
              />
            </div>
            <div className="menu-details">
              <span className="eyebrow">Nuestro producto</span>
              <h2>Pan con pollo<br />estilo jucuapense</h2>
              <p>El sabor de un platillo que acompaña reuniones, celebraciones y momentos de compartir. Esa combinación entrañable de pan, pollo y tradición salvadoreña que nos inspira todos los días.</p>
              <p>Cada negocio tiene su toque; el nuestro empieza con el orgullo de ser de Jucuapa.</p>
              <div className="menu-note">Para consultar disponibilidad, detalles o hacer una consulta, escríbenos directamente por nuestros canales.</div>
              <div style={{ marginTop: 25 }}><OrderLink /></div>
            </div>
          </article>
        </div>
      </section>
      <section className="section burger-section" id="hamburguesas">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Un antojo para cada gusto</span>
              <h2>Menú de hamburguesas</h2>
            </div>
            <p className="burger-intro">Elige tu favorita. Precios desde $3.50 hasta $7.00.</p>
          </div>
          <div className="burger-grid">
            {burgers.map(({ name, description, price, image }) => (
              <article className="burger-card" key={name}>
                <img className="burger-image" src={image} alt={name} loading="lazy" />
                <div className="burger-card-content">
                  <div className="burger-card-heading">
                    <h3>{name}</h3>
                    <span className="burger-price">${price}</span>
                  </div>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="burger-note">Precios e imágenes de referencia. Confirma productos disponibles y detalles al hacer tu pedido.</p>
          <div className="burger-order"><OrderLink>Consultar hamburguesas</OrderLink></div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container intro-grid">
          <div><span className="eyebrow">Un bocado con identidad</span><h2 className="intro-big">La tradición no se cuenta solo con palabras. También se <em>comparte.</em></h2></div>
          <div className="intro-copy">
            <p>En Jucuapa, el pan con pollo es parte de una cultura de encuentro: se disfruta en familia, se lleva a las reuniones y se comparte con quienes queremos.</p>
            <p>Nos enorgullece mantener viva esa costumbre desde nuestro pequeño emprendimiento.</p>
            <Link href="/nosotros" className="btn btn-outline">Conoce nuestra esencia <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container cta-inner"><div><h2>¿Quieres conversar sobre el menú?</h2><p>Contáctanos para hacer tu consulta.</p></div><OrderLink className="btn btn-dark" /></div>
      </section>
    </main>
  </>;
}

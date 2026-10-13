import { ArrowRight, Utensils } from 'lucide-react';
import { Link } from 'wouter';
import Seo from '@/components/Seo';
import OrderLink from '@/components/OrderLink';

const burgers = [
  {
    name: 'Clásica con queso',
    description: 'Carne a la plancha, queso fundido, lechuga, tomate y nuestra salsa de la casa.',
    price: '3.50',
    image: 'https://leitesculinaria.com/wp-content/uploads/2020/02/classic-cheeseburger-1200.jpg',
  },
  {
    name: 'Smash burger',
    description: 'Carne sellada al estilo smash, bordes dorados, queso y pepinillos.',
    price: '4.00',
    image: 'https://www.giallozafferano.com/images/346-34665/smash-burger_1200x800.jpg',
  },
  {
    name: 'BBQ con tocino',
    description: 'Carne jugosa, tocino crujiente, queso y salsa BBQ.',
    price: '4.75',
    image: 'https://blog-content.omahasteaks.com/wp-content/uploads/2022/06/blogwp_bbq-bacon-brisket-burger-with-candied-bacon-scaled-1.jpg',
  },
  {
    name: 'Champiñones y suizo',
    description: 'Champiñones salteados y queso suizo sobre carne a la plancha.',
    price: '5.00',
    image: 'https://whitneybond.com/wp-content/uploads/2023/05/mushroom-swiss-burger-14.jpeg',
  },
  {
    name: 'Tocino y queso azul',
    description: 'Tocino crujiente y queso azul para un sabor intenso.',
    price: '5.50',
    image: 'https://laurenslatest.com/wp-content/uploads/2021/07/bacon-blue-cheese-burger-1.jpg',
  },
  {
    name: 'Hamburguesa de la casa',
    description: 'Una combinación especial de carne, queso y vegetales frescos.',
    price: '5.75',
    image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2Farchive%2F9fbb73a7cba9b7b75c3d05484f6b6d087470641d',
  },
  {
    name: 'Pollo crujiente',
    description: 'Pollo empanizado y crujiente con vegetales frescos y salsa de la casa.',
    price: '5.50',
    image: 'https://thescranline.com/wp-content/uploads/2022/02/crispy-chicken-burger-WEB-01.jpg',
  },
  {
    name: 'Hawaiana',
    description: 'Carne a la plancha con piña dorada, queso y salsa especial.',
    price: '6.00',
    image: 'https://lifeloveandgoodfood.com/wp-content/uploads/2022/06/Hawaiian-Burger-11-1200x1200-1.jpg',
  },
  {
    name: 'Patty melt',
    description: 'Carne a la plancha, queso derretido y cebolla entre pan tostado.',
    price: '6.50',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Finished_patty_melt%2C_cut_open.jpg',
  },
  {
    name: 'Wagyu especial',
    description: 'Una hamburguesa especial preparada con carne Wagyu y acompañamientos.',
    price: '7.00',
    image: 'https://www.firstlight.farm/us/wp-content/uploads/2023/09/burger-wagyu-recipe-04-0-2200-0-1466-crop.jpg',
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
            <div className="menu-mark" aria-hidden="true"><span><Utensils size={66} strokeWidth={1.1} /></span></div>
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

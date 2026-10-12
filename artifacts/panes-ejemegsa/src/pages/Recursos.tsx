import { ArrowRight, BookOpen, ClipboardList, Coins, Megaphone, PackageCheck } from 'lucide-react';
import { Link } from 'wouter';
import Seo from '@/components/Seo';

const guides = [
  { icon: ClipboardList, number: '01', title: 'Empieza con una idea clara', body: 'Escribe qué ofreces, para quién y qué necesidad resuelve. Una explicación sencilla te ayuda a tomar mejores decisiones y a contar tu propuesta.', tag: 'Primeros pasos' },
  { icon: Coins, number: '02', title: 'Conoce tus costos', body: 'Anota cada ingrediente, empaque y gasto necesario para preparar tu producto. Revisa tus apuntes con frecuencia para entender cuánto cuesta producir.', tag: 'Organización' },
  { icon: PackageCheck, number: '03', title: 'Cuida la consistencia', body: 'Define pasos de preparación y porciones que puedas repetir. Una rutina clara ayuda a mantener una experiencia reconocible en cada pedido.', tag: 'Producto' },
  { icon: Megaphone, number: '04', title: 'Cuenta tu historia', body: 'Comparte de dónde viene tu idea, qué la hace propia y cómo se prepara. Una historia real ayuda a que las personas conecten con tu emprendimiento.', tag: 'Comunicación' },
  { icon: BookOpen, number: '05', title: 'Escucha y aprende', body: 'Registra las preguntas y comentarios que recibes. Busca patrones, agradece cada sugerencia y elige pequeños cambios que puedas evaluar.', tag: 'Mejora continua' },
  { icon: ClipboardList, number: '06', title: 'Ordena tus pedidos', body: 'Lleva un registro simple con fecha, producto, cantidad y estado de cada pedido. Tener la información reunida evita depender de la memoria.', tag: 'Organización' },
];

export default function Recursos() {
  return <><Seo title="Guías prácticas para emprender" description="Consejos breves y útiles para organizar un pequeño emprendimiento de alimentos: costos, consistencia, comunicación y atención a los pedidos." /><main id="contenido" className="page-main">
    <header className="page-intro"><div className="container"><span className="eyebrow">Ideas que ponen manos a la obra</span><h1>Pequeñas guías<br />para emprender.</h1><p>Apuntes sencillos para quienes están construyendo algo propio, una decisión cuidadosa a la vez.</p></div></header>
    <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">Para guardar y poner en práctica</span><h2>Un comienzo ordenado<br />hace diferencia.</h2></div></div><div className="guide-grid">{guides.map(({ icon: Icon, number, title, body, tag }) => <article className="guide-card" key={number} data-testid={`card-guia-${number}`}><Icon size={22} strokeWidth={1.7} color="#b94d28" aria-hidden="true" /><span className="guide-number">{number}</span><h2>{title}</h2><p>{body}</p><span className="guide-tag">{tag}</span></article>)}</div></div></section>
    <section className="manifesto"><div className="container manifesto-inner"><div className="seal">Paso a<br />paso<span>CON ORGULLO</span></div><div><span className="eyebrow">Una nota para seguir</span><h2>Lo importante es empezar con lo que tienes.</h2><p>Aprender haciendo, organizarse y apoyarse en la comunidad también forman parte de la tradición de emprender.</p></div></div></section>
    <section className="section"><div className="container cta-inner"><div><span className="eyebrow">La historia de Ejemegsa</span><h2>Un proyecto con identidad propia.</h2><p>Conoce nuestra misión y el orgullo detrás de cada bocado.</p></div><Link className="btn btn-outline" href="/nosotros">Ir a nosotros <ArrowRight size={16} /></Link></div></section>
  </main></>;
}

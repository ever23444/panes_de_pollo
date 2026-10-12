import Seo from '@/components/Seo';

const creatorsImage = 'https://drive.google.com/uc?export=view&id=1uMKGWkvQObuYqkx2w-lHGZoIk4A1FJmv';

const highlights = [
  {
    title: 'Tradición',
    text: 'Nacimos para mantener viva la esencia de Jucuapa en cada preparación.',
  },
  {
    title: 'Sabor',
    text: 'Cada pan se hace con receta casera, cariño y la mejor materia prima.',
  },
  {
    title: 'Pasión',
    text: 'Más que un negocio, somos una historia hecha para compartir con la comunidad.',
  },
];

export default function Creadores() {
  return (
    <main id="contenido" className="page-main">
      <Seo
        title="Creadores"
        description="Conoce a los creadores detrás del sabor tradicional de Panes con Pollo Ejemegsa."
      />

      <section
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '3.25rem 1.25rem 5rem',
        }}
      >
        <div
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(246, 235, 216, 0.88), rgba(255, 252, 247, 0.96))',
            border: '1px solid rgba(31, 58, 84, 0.08)',
            borderRadius: 34,
            overflow: 'hidden',
            boxShadow: '0 22px 55px rgba(23, 43, 70, 0.08)',
            padding: 'clamp(1.4rem, 3vw, 2.5rem)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.05fr',
              gap: '2.25rem',
              alignItems: 'center',
            }}
          >
            <div style={{ padding: '0.5rem 0.25rem' }}>
              <span className="eyebrow" style={{ marginBottom: 16 }}>Creadores</span>
              <h1
                style={{
                  margin: '0 0 1rem',
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontSize: 'clamp(2.6rem, 6vw, 5rem)',
                  lineHeight: 0.96,
                  letterSpacing: '-0.06em',
                  color: '#172b46',
                }}
              >
                Historia, sabor y amor<br />
                en cada pan.
              </h1>

              <p
                style={{
                  margin: 0,
                  maxWidth: 560,
                  fontSize: '1.06rem',
                  lineHeight: 1.8,
                  color: '#4d5d75',
                }}
              >
                Detrás de cada pan con pollo de Ejemegsa está una idea hecha de tradición,
                esfuerzo y cariño. Esta historia nació para compartir el sabor de Jucuapa con
                más gente, manteniendo la esencia de un platillo querido por la comunidad.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  marginTop: '1.6rem',
                }}
              >
                {['Hecho con tradición', 'Receta casera', 'Amor en cada bocado'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      border: '1px solid rgba(177, 79, 41, 0.18)',
                      background: 'rgba(255,255,255,0.5)',
                      color: '#7b3f2a',
                      borderRadius: 999,
                      padding: '0.55rem 0.9rem',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 560,
                  padding: '0.9rem',
                  borderRadius: 30,
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.7), rgba(243, 220, 179, 0.7))',
                  boxShadow: '0 18px 40px rgba(39, 48, 65, 0.12)',
                }}
              >
                <div
                  style={{
                    overflow: 'hidden',
                    borderRadius: 26,
                    border: '1px solid rgba(23, 43, 70, 0.08)',
                    background: '#efe0c8',
                  }}
                >
                  <img
                    src={creatorsImage}
                    alt="Creadores de Panes con Pollo Ejemegsa"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      minHeight: 450,
                      objectFit: 'cover',
                    }}
                  />
                </div>

                <div
                  style={{
                    position: 'absolute',
                    right: '1.3rem',
                    bottom: '1.2rem',
                    background: '#172b46',
                    color: '#fff7ea',
                    borderRadius: 18,
                    boxShadow: '0 12px 20px rgba(23, 43, 70, 0.18)',
                    padding: '0.9rem 1rem',
                    minWidth: 132,
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Fraunces, Georgia, serif',
                      fontSize: '1.7rem',
                      lineHeight: 1,
                    }}
                  >
                    2026
                  </div>
                  <div
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      opacity: 0.8,
                      marginTop: 5,
                    }}
                  >
                    El año
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1.2rem',
            marginTop: '2rem',
          }}
        >
          {highlights.map((item) => (
            <article
              key={item.title}
              style={{
                background: '#fffdf9',
                border: '1px solid rgba(32, 60, 87, 0.08)',
                borderRadius: 24,
                padding: '1.5rem 1.25rem',
                boxShadow: '0 14px 28px rgba(34, 51, 69, 0.06)',
              }}
            >
              <div
                style={{
                  width: '2.2rem',
                  height: '2.2rem',
                  display: 'grid',
                  placeItems: 'center',
                  borderRadius: '50%',
                  background: 'rgba(185, 77, 40, 0.12)',
                  color: '#b94d28',
                  fontWeight: 800,
                  marginBottom: '0.8rem',
                }}
              >
                •
              </div>
              <h2
                style={{
                  margin: '0 0 0.6rem',
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontSize: '1.6rem',
                  color: '#172b46',
                }}
              >
                {item.title}
              </h2>
              <p style={{ margin: 0, lineHeight: 1.7, color: '#50607a' }}>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

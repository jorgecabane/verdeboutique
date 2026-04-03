'use client'

import { getFeaturedPlants, mockPlants } from '@/infrastructure/mock/plants'
import { mockCategories } from '@/infrastructure/mock/categories'
import { formatPrice } from '@/lib/formatPrice'

const COLORS = {
  black: '#0a0a0a',
  white: '#FAFAFA',
  emerald: '#059669',
  gray: '#6b7280',
}

const FONTS = {
  heading: "'Space Grotesk', sans-serif",
  body: "'Inter', sans-serif",
}

export default function EditorialPage() {
  const featured = getFeaturedPlants()
  const allPlants = mockPlants.slice(0, 6)

  return (
    <div style={{ background: COLORS.white, fontFamily: FONTS.body, margin: 0, padding: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:ital,wght@0,400;0,500;1,400&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .editorial-category-band {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 32px 48px;
          border-bottom: 1px solid ${COLORS.black};
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          background: ${COLORS.white};
          color: ${COLORS.black};
        }

        .editorial-category-band:hover {
          background: ${COLORS.emerald};
          color: ${COLORS.white};
        }

        .editorial-category-band:hover .cat-count {
          color: ${COLORS.white};
        }

        .editorial-nav-link {
          font-family: ${FONTS.heading};
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: ${COLORS.black};
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .editorial-nav-link:hover {
          color: ${COLORS.emerald};
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 48px',
        borderBottom: `1px solid ${COLORS.black}`,
        background: COLORS.white,
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <span style={{
          fontFamily: FONTS.heading,
          fontWeight: 700,
          fontSize: '18px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: COLORS.black,
        }}>
          Verde Boutique
        </span>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <a href="#" className="editorial-nav-link">Shop</a>
          <a href="#" className="editorial-nav-link">About</a>
          <a href="#" style={{
            fontFamily: FONTS.heading,
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: COLORS.white,
            background: COLORS.emerald,
            padding: '10px 24px',
            textDecoration: 'none',
          }}>
            Cart (0)
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: COLORS.white, overflow: 'hidden' }}>
        <div style={{ padding: '60px 48px 0' }}>
          <h1 style={{
            fontFamily: FONTS.heading,
            fontWeight: 700,
            fontSize: 'clamp(64px, 10vw, 120px)',
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: COLORS.black,
            margin: 0,
          }}>
            Naturaleza
          </h1>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginTop: '16px',
            marginBottom: '-12px',
            position: 'relative',
            zIndex: 2,
          }}>
            <p style={{
              fontFamily: FONTS.body,
              fontStyle: 'italic',
              fontSize: 'clamp(18px, 2.5vw, 28px)',
              color: COLORS.black,
              fontWeight: 400,
            }}>
              en su forma más pura
            </p>
            <a href="#" style={{
              fontFamily: FONTS.heading,
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: COLORS.white,
              background: COLORS.black,
              padding: '14px 32px',
              textDecoration: 'none',
              display: 'inline-block',
            }}>
              Explorar Colección
            </a>
          </div>
        </div>
        <div style={{
          width: '100%',
          height: '60vh',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <img
            src="/images/plants/crystallinum.jpg"
            alt="Anthurium Crystallinum — planta de colección"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 30%',
              display: 'block',
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '32px',
            left: '48px',
            fontFamily: FONTS.heading,
            fontWeight: 700,
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: COLORS.white,
            background: COLORS.emerald,
            padding: '8px 16px',
          }}>
            Nueva Temporada 2025
          </div>
        </div>
      </section>

      {/* FEATURED GRID — Black section */}
      <section style={{ background: COLORS.black, padding: '80px 48px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: '64px',
          borderBottom: `1px solid #1a1a1a`,
          paddingBottom: '32px',
        }}>
          <h2 style={{
            fontFamily: FONTS.heading,
            fontWeight: 700,
            fontSize: 'clamp(48px, 7vw, 80px)',
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: COLORS.white,
            lineHeight: 1,
          }}>
            Colección
          </h2>
          <span style={{
            fontFamily: FONTS.body,
            fontSize: '13px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: COLORS.gray,
          }}>
            {allPlants.length} piezas seleccionadas
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {allPlants.map((plant, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={plant.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: isEven ? '1fr 1fr' : '1fr 1fr',
                  minHeight: '420px',
                  background: isEven ? '#0f0f0f' : '#050505',
                }}
              >
                {/* Image */}
                <div style={{
                  order: isEven ? 0 : 1,
                  overflow: 'hidden',
                }}>
                  <img
                    src={plant.images[0]}
                    alt={plant.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Text */}
                <div style={{
                  order: isEven ? 1 : 0,
                  padding: '48px 56px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderLeft: isEven ? `1px solid #1a1a1a` : 'none',
                  borderRight: isEven ? 'none' : `1px solid #1a1a1a`,
                }}>
                  <div>
                    <div style={{
                      fontFamily: FONTS.body,
                      fontSize: '11px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: COLORS.emerald,
                      marginBottom: '16px',
                    }}>
                      {plant.category} — {plant.rarity}
                    </div>
                    <h3 style={{
                      fontFamily: FONTS.heading,
                      fontWeight: 700,
                      fontSize: 'clamp(28px, 3vw, 44px)',
                      lineHeight: 1.05,
                      letterSpacing: '-0.02em',
                      color: COLORS.white,
                      marginBottom: '20px',
                      textTransform: 'uppercase',
                    }}>
                      {plant.name}
                    </h3>
                    <p style={{
                      fontFamily: FONTS.body,
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: '#9ca3af',
                      maxWidth: '380px',
                    }}>
                      {plant.description.slice(0, 160)}...
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '40px',
                    paddingTop: '24px',
                    borderTop: `1px solid #1a1a1a`,
                  }}>
                    <span style={{
                      fontFamily: FONTS.heading,
                      fontWeight: 700,
                      fontSize: '28px',
                      color: COLORS.emerald,
                      letterSpacing: '-0.01em',
                    }}>
                      {formatPrice(plant.price)}
                    </span>
                    <a
                      href="#"
                      style={{
                        fontFamily: FONTS.heading,
                        fontWeight: 700,
                        fontSize: '12px',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: plant.inStock ? COLORS.black : COLORS.gray,
                        background: plant.inStock ? COLORS.white : 'transparent',
                        border: plant.inStock ? 'none' : `1px solid #333`,
                        padding: '12px 24px',
                        textDecoration: 'none',
                        display: 'inline-block',
                      }}
                    >
                      {plant.inStock ? 'Agregar' : 'Sin stock'}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* QUOTE BREAK — White section */}
      <section style={{
        background: COLORS.white,
        padding: '100px 48px',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <div style={{
            height: '1px',
            background: COLORS.emerald,
            width: '80px',
            margin: '0 auto 40px',
          }} />
          <blockquote style={{
            fontFamily: FONTS.body,
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: 1.3,
            color: COLORS.black,
            letterSpacing: '-0.01em',
          }}>
            &ldquo;Cada hoja cuenta una historia&rdquo;
          </blockquote>
          <div style={{
            height: '1px',
            background: COLORS.emerald,
            width: '80px',
            margin: '40px auto 0',
          }} />
        </div>
      </section>

      {/* CATEGORIES — White section */}
      <section style={{ background: COLORS.white }}>
        <div style={{
          padding: '0 48px 40px',
          borderBottom: `1px solid ${COLORS.black}`,
          marginBottom: '0',
        }}>
          <h2 style={{
            fontFamily: FONTS.heading,
            fontWeight: 700,
            fontSize: 'clamp(14px, 1.5vw, 18px)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: COLORS.gray,
          }}>
            Categorías
          </h2>
        </div>

        <div>
          {mockCategories.map((cat) => (
            <a
              key={cat.id}
              href="#"
              className="editorial-category-band"
              style={{ textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px' }}>
                <span style={{
                  fontFamily: FONTS.heading,
                  fontWeight: 700,
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  textTransform: 'uppercase',
                }}>
                  {cat.name}
                </span>
                <span style={{
                  fontFamily: FONTS.body,
                  fontSize: '15px',
                  fontStyle: 'italic',
                  opacity: 0.6,
                }}>
                  {cat.description}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span
                  className="cat-count"
                  style={{
                    fontFamily: FONTS.heading,
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: COLORS.gray,
                  }}
                >
                  {cat.plantCount} plantas
                </span>
                <span style={{
                  fontFamily: FONTS.heading,
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: 1,
                }}>
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* EDITORIAL HIGHLIGHT STRIP */}
      <section style={{
        background: COLORS.emerald,
        padding: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '32px',
      }}>
        <p style={{
          fontFamily: FONTS.heading,
          fontWeight: 700,
          fontSize: 'clamp(20px, 3vw, 36px)',
          color: COLORS.white,
          letterSpacing: '-0.01em',
          lineHeight: 1.2,
          maxWidth: '600px',
        }}>
          Envío gratuito en pedidos sobre $150.000 CLP
        </p>
        <a href="#" style={{
          fontFamily: FONTS.heading,
          fontWeight: 700,
          fontSize: '13px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: COLORS.emerald,
          background: COLORS.white,
          padding: '16px 40px',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          Ver todo el shop
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: COLORS.black,
        padding: '72px 48px 48px',
        color: COLORS.white,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px',
          paddingBottom: '64px',
          borderBottom: '1px solid #1a1a1a',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: FONTS.heading,
              fontWeight: 700,
              fontSize: '32px',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: COLORS.white,
              marginBottom: '20px',
            }}>
              Verde<br />Boutique
            </div>
            <p style={{
              fontFamily: FONTS.body,
              fontSize: '14px',
              lineHeight: 1.7,
              color: '#6b7280',
              maxWidth: '280px',
            }}>
              Plantas raras y de colección para quienes aprecian la belleza botánica en su estado más puro.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div style={{
              fontFamily: FONTS.heading,
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: COLORS.emerald,
              marginBottom: '20px',
            }}>
              Shop
            </div>
            {['Anthuriums', 'Philodendros', 'Monstera', 'Exóticas'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  display: 'block',
                  fontFamily: FONTS.body,
                  fontSize: '14px',
                  color: '#9ca3af',
                  textDecoration: 'none',
                  marginBottom: '10px',
                  transition: 'color 0.15s',
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Info */}
          <div>
            <div style={{
              fontFamily: FONTS.heading,
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: COLORS.emerald,
              marginBottom: '20px',
            }}>
              Info
            </div>
            {['Cuidados', 'FAQ', 'Envíos', 'Contacto'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  display: 'block',
                  fontFamily: FONTS.body,
                  fontSize: '14px',
                  color: '#9ca3af',
                  textDecoration: 'none',
                  marginBottom: '10px',
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontFamily: FONTS.heading,
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: COLORS.emerald,
              marginBottom: '20px',
            }}>
              Contacto
            </div>
            <p style={{
              fontFamily: FONTS.body,
              fontSize: '14px',
              color: '#9ca3af',
              lineHeight: 1.7,
            }}>
              hola@verdeboutique.cl<br />
              Santiago, Chile<br />
              Lun–Vie 9–18h
            </p>
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '32px',
        }}>
          <span style={{
            fontFamily: FONTS.body,
            fontSize: '13px',
            color: '#4b5563',
          }}>
            © 2025 Verde Boutique. Todos los derechos reservados.
          </span>
          <span style={{
            fontFamily: FONTS.heading,
            fontWeight: 700,
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: COLORS.emerald,
          }}>
            Bold Editorial
          </span>
        </div>
      </footer>
    </div>
  )
}

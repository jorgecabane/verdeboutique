'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedPlants } from '@/infrastructure/mock/plants'
import { mockCategories } from '@/infrastructure/mock/categories'
import { formatPrice } from '@/lib/formatPrice'

// ─── Design tokens ────────────────────────────────────────────────────────────
const colors = {
  cream: '#FAFAF5',
  forestGreen: '#1a3a2a',
  warmGray: '#4a5548',
  accentGreen: '#3d7a4a',
  terracotta: '#c4705a',
  sage: '#e8f0e0',
  white: '#ffffff',
  shadowColor: 'rgba(26, 58, 42, 0.08)',
}

const fonts = {
  heading: "'DM Sans', sans-serif",
  body: "'Lora', serif",
}

// ─── Shared style objects ──────────────────────────────────────────────────────
const card: React.CSSProperties = {
  background: colors.white,
  borderRadius: 12,
  boxShadow: `0 2px 16px ${colors.shadowColor}`,
  overflow: 'hidden',
}

const ctaButton: React.CSSProperties = {
  display: 'inline-block',
  background: colors.accentGreen,
  color: colors.white,
  fontFamily: fonts.heading,
  fontWeight: 700,
  fontSize: '0.95rem',
  letterSpacing: '0.03em',
  padding: '14px 32px',
  borderRadius: 40,
  textDecoration: 'none',
  border: 'none',
  cursor: 'pointer',
  transition: 'background 200ms ease',
}

const sectionHeading: React.CSSProperties = {
  fontFamily: fonts.heading,
  fontWeight: 700,
  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
  color: colors.forestGreen,
  margin: 0,
}

const categoryImages: Record<string, string> = {
  anthuriums: '/images/plants/veitchii.jpg',
  philodendros: '/images/plants/gloriosum.jpg',
  monstera: '/images/plants/dragon-scale.jpg',
  exoticas: '/images/plants/warocqueanum.jpg',
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: colors.cream,
        borderBottom: `1px solid ${colors.sage}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(1.5rem, 5vw, 4rem)',
        height: 64,
      }}
    >
      <span
        style={{
          fontFamily: fonts.heading,
          fontWeight: 700,
          fontSize: '1.25rem',
          color: colors.forestGreen,
          letterSpacing: '-0.02em',
        }}
      >
        Verde Boutique
      </span>

      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {['Colección', 'Blog', 'Nosotros'].map((label) => (
          <Link
            key={label}
            href="#"
            style={{
              fontFamily: fonts.heading,
              fontWeight: 500,
              fontSize: '0.9rem',
              color: colors.warmGray,
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            {label}
          </Link>
        ))}

        <Link href="#" style={{ ...ctaButton, padding: '10px 22px', fontSize: '0.85rem' }}>
          Ver colección
        </Link>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section
      style={{
        background: colors.cream,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '88vh',
      }}
    >
      {/* Left: text */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(3rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)',
          gap: 28,
        }}
      >
        <p
          style={{
            fontFamily: fonts.body,
            fontStyle: 'italic',
            fontSize: '0.9rem',
            color: colors.terracotta,
            margin: 0,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Colección primavera 2026
        </p>

        <h1
          style={{
            fontFamily: fonts.heading,
            fontWeight: 700,
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            color: colors.forestGreen,
            lineHeight: 1.1,
            margin: 0,
            letterSpacing: '-0.03em',
          }}
        >
          Plantas que<br />
          <em
            style={{
              fontFamily: fonts.body,
              fontStyle: 'italic',
              fontWeight: 400,
              color: colors.accentGreen,
            }}
          >
            transforman
          </em>{' '}
          espacios
        </h1>

        <p
          style={{
            fontFamily: fonts.body,
            fontSize: '1.05rem',
            color: colors.warmGray,
            lineHeight: 1.75,
            margin: 0,
            maxWidth: 380,
          }}
        >
          Aroideas raras y coleccionables, seleccionadas con dedicación.
          Cada planta que llega a tus manos ha sido elegida con amor.
        </p>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="#" style={ctaButton}>
            Explorar colección
          </Link>
          <Link
            href="#"
            style={{
              fontFamily: fonts.heading,
              fontWeight: 500,
              fontSize: '0.9rem',
              color: colors.forestGreen,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            Nuestra historia →
          </Link>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 32,
            marginTop: 8,
            paddingTop: 28,
            borderTop: `1px solid ${colors.sage}`,
          }}
        >
          {[['+200', 'Plantas entregadas'], ['4.9★', 'Satisfacción'], ['48h', 'Envío express']].map(
            ([stat, label]) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    color: colors.forestGreen,
                    margin: 0,
                  }}
                >
                  {stat}
                </p>
                <p
                  style={{
                    fontFamily: fonts.body,
                    fontSize: '0.8rem',
                    color: colors.warmGray,
                    margin: 0,
                    marginTop: 2,
                  }}
                >
                  {label}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Right: photo */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: 480 }}>
        <Image
          src="/images/plants/crystallinum.jpg"
          alt="Anthurium Crystallinum"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          sizes="50vw"
        />
        {/* Soft left fade to blend into cream */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to right, ${colors.cream} 0%, transparent 18%)`,
            pointerEvents: 'none',
          }}
        />
      </div>
    </section>
  )
}

function FeaturedPlants() {
  const plants = getFeaturedPlants().slice(0, 4)

  return (
    <section
      style={{
        background: colors.cream,
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 40,
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div>
          <p
            style={{
              fontFamily: fonts.body,
              fontStyle: 'italic',
              fontSize: '0.85rem',
              color: colors.terracotta,
              margin: '0 0 8px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Destacadas
          </p>
          <h2 style={sectionHeading}>Nuestra Selección</h2>
        </div>
        <Link
          href="#"
          style={{
            fontFamily: fonts.heading,
            fontWeight: 500,
            fontSize: '0.9rem',
            color: colors.accentGreen,
            textDecoration: 'none',
          }}
        >
          Ver todas las plantas →
        </Link>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 24,
        }}
      >
        {plants.map((plant) => (
          <Link
            key={plant.id}
            href="#"
            style={{ ...card, textDecoration: 'none', display: 'block' }}
          >
            <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
              <Image
                src={plant.images[0]}
                alt={plant.name}
                fill
                style={{ objectFit: 'cover', transition: 'transform 400ms ease' }}
                sizes="(max-width: 768px) 90vw, 25vw"
              />
              {/* Category tag */}
              <span
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  background: 'rgba(250,250,245,0.9)',
                  backdropFilter: 'blur(4px)',
                  fontFamily: fonts.heading,
                  fontWeight: 500,
                  fontSize: '0.7rem',
                  color: colors.forestGreen,
                  padding: '4px 10px',
                  borderRadius: 20,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {plant.category}
              </span>
            </div>

            <div style={{ padding: '16px 18px 20px' }}>
              <h3
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: colors.forestGreen,
                  margin: '0 0 4px',
                }}
              >
                {plant.name}
              </h3>
              <p
                style={{
                  fontFamily: fonts.body,
                  fontStyle: 'italic',
                  fontSize: '0.8rem',
                  color: colors.warmGray,
                  margin: '0 0 12px',
                }}
              >
                {plant.species}
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: colors.accentGreen,
                  }}
                >
                  {formatPrice(plant.price)}
                </span>
                <span
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 500,
                    fontSize: '0.78rem',
                    color: colors.terracotta,
                    background: 'rgba(196,112,90,0.1)',
                    padding: '3px 10px',
                    borderRadius: 20,
                  }}
                >
                  {plant.rarity}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function AboutBanner() {
  return (
    <section
      style={{
        background: colors.sage,
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontFamily: fonts.body,
          fontStyle: 'italic',
          fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)',
          color: colors.forestGreen,
          lineHeight: 1.65,
          maxWidth: 700,
          margin: '0 auto',
          fontWeight: 400,
        }}
      >
        "Cada planta es seleccionada con el cuidado de quien entiende
        que la naturaleza es arte."
      </p>
      <div
        style={{
          width: 48,
          height: 2,
          background: colors.terracotta,
          margin: '28px auto 0',
          borderRadius: 2,
        }}
      />
    </section>
  )
}

function Categories() {
  return (
    <section
      style={{
        background: colors.cream,
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
      }}
    >
      <div style={{ marginBottom: 40 }}>
        <p
          style={{
            fontFamily: fonts.body,
            fontStyle: 'italic',
            fontSize: '0.85rem',
            color: colors.terracotta,
            margin: '0 0 8px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Explorar por familia
        </p>
        <h2 style={sectionHeading}>Categorías</h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
        }}
      >
        {mockCategories.map((cat) => (
          <Link
            key={cat.id}
            href="#"
            style={{
              ...card,
              position: 'relative',
              aspectRatio: '16/9',
              overflow: 'hidden',
              textDecoration: 'none',
              display: 'block',
            }}
          >
            <Image
              src={categoryImages[cat.id] ?? '/images/plants/veitchii.jpg'}
              alt={cat.name}
              fill
              style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
              sizes="(max-width: 768px) 90vw, 45vw"
            />
            {/* Gradient overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(26,58,42,0.75) 0%, rgba(26,58,42,0.1) 60%, transparent 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                padding: '20px 22px',
              }}
            >
              <h3
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: colors.white,
                  margin: '0 0 4px',
                }}
              >
                {cat.name}
              </h3>
              <p
                style={{
                  fontFamily: fonts.body,
                  fontStyle: 'italic',
                  fontSize: '0.82rem',
                  color: 'rgba(255,255,255,0.8)',
                  margin: '0 0 4px',
                }}
              >
                {cat.description}
              </p>
              <span
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 500,
                  fontSize: '0.72rem',
                  color: 'rgba(255,255,255,0.65)',
                  letterSpacing: '0.04em',
                }}
              >
                {cat.plantCount} plantas
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer
      style={{
        background: colors.cream,
        borderTop: `1px solid ${colors.sage}`,
        padding: 'clamp(3rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 32,
          marginBottom: 40,
        }}
      >
        <div style={{ maxWidth: 280 }}>
          <span
            style={{
              fontFamily: fonts.heading,
              fontWeight: 700,
              fontSize: '1.15rem',
              color: colors.forestGreen,
              display: 'block',
              marginBottom: 12,
            }}
          >
            Verde Boutique
          </span>
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: '0.88rem',
              color: colors.warmGray,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Tienda especializada en aroideas raras y plantas de colección.
            Desde Santiago para todo Chile.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {[
            { title: 'Tienda', links: ['Colección', 'Novedades', 'Ofertas'] },
            { title: 'Info', links: ['Blog', 'Nosotros', 'Contacto'] },
            { title: 'Legal', links: ['Privacidad', 'Términos'] },
          ].map(({ title, links }) => (
            <div key={title}>
              <p
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  color: colors.forestGreen,
                  margin: '0 0 12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {title}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    style={{
                      fontFamily: fonts.body,
                      fontSize: '0.88rem',
                      color: colors.warmGray,
                      textDecoration: 'none',
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          borderTop: `1px solid ${colors.sage}`,
          paddingTop: 20,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: '0.82rem',
            color: colors.warmGray,
            margin: 0,
          }}
        >
          © 2026 Mi Verde Boutique — Todos los derechos reservados
        </p>
        <p
          style={{
            fontFamily: fonts.body,
            fontStyle: 'italic',
            fontSize: '0.8rem',
            color: colors.warmGray,
            margin: 0,
          }}
        >
          Hecho con amor desde Santiago, Chile 🌿
        </p>
      </div>
    </footer>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function BotanicalPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');

        * { box-sizing: border-box; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .botanical-page section {
          animation: fadeInUp 0.6s ease both;
        }
      `}</style>

      <div
        className="botanical-page"
        style={{ background: colors.cream, minHeight: '100vh', fontFamily: fonts.body }}
      >
        <Nav />
        <Hero />
        <FeaturedPlants />
        <AboutBanner />
        <Categories />
        <Footer />
      </div>
    </>
  )
}

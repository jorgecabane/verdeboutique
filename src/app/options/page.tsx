'use client'

import Link from 'next/link'

const options = [
  {
    id: 'elegance',
    name: 'Refined Elegance',
    description: 'Oscuro y sofisticado. Planta 3D rotando en el hero, tipografía serif clásica, acentos dorados. Inspirado en galerías de arte y joyerías.',
    tags: ['Dark Mode', '3D Interactive', 'Serif', 'Gold Accents'],
    href: '/',
    gradient: 'linear-gradient(135deg, #0f0f0d, #1a1915)',
    textColor: '#f0ebe3',
    accentColor: '#b8956a',
  },
  {
    id: 'botanical',
    name: 'Botanical Garden',
    description: 'Luminoso y natural. Fondos crema, fotos grandes de plantas, tipografía limpia. Inspirado en tiendas boutique como Aesop y espacios de bienestar.',
    tags: ['Light Mode', 'Natural', 'Clean', 'Photography'],
    href: '/options/botanical',
    gradient: 'linear-gradient(135deg, #FAFAF5, #e8f0e0)',
    textColor: '#1a3a2a',
    accentColor: '#3d7a4a',
  },
  {
    id: 'editorial',
    name: 'Bold Editorial',
    description: 'Dramático y audaz. Tipografía gigante, alto contraste blanco/negro, layout tipo revista de moda. La planta como pieza de arte contemporáneo.',
    tags: ['High Contrast', 'Magazine', 'Bold Type', 'Minimal'],
    href: '/options/editorial',
    gradient: 'linear-gradient(135deg, #FAFAFA, #0a0a0a)',
    textColor: '#0a0a0a',
    accentColor: '#059669',
  },
]

export default function OptionsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Lora:ital@1&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0a0a; }
      `}</style>

      <div style={{
        minHeight: '100vh',
        fontFamily: "'DM Sans', system-ui, sans-serif",
        color: '#e0e0e0',
        padding: '0 24px',
      }}>
        {/* Header */}
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 0',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          maxWidth: 1200,
          margin: '0 auto',
        }}>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#666', textTransform: 'uppercase' }}>
            Showcase
          </div>
          <div style={{ fontSize: 13, color: '#888' }}>
            Mi Verde Boutique — Propuesta de Diseño
          </div>
        </header>

        {/* Hero */}
        <div style={{
          maxWidth: 800,
          margin: '0 auto',
          textAlign: 'center',
          padding: '80px 0 60px',
        }}>
          <p style={{
            fontSize: 11,
            letterSpacing: '0.3em',
            color: '#059669',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            3 Direcciones de Diseño
          </p>
          <h1 style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#f0f0f0',
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            ¿Cómo quieres que el mundo<br />vea tu marca?
          </h1>
          <p style={{
            fontSize: 15,
            color: '#888',
            lineHeight: 1.7,
            maxWidth: 500,
            margin: '0 auto',
          }}>
            Cada opción está diseñada para comunicar la esencia de Verde Boutique de una manera única. Explora las tres y elige la que más resuene contigo.
          </p>
        </div>

        {/* Options Grid */}
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 24,
          paddingBottom: 80,
        }}>
          {options.map((option) => (
            <Link
              key={option.id}
              href={option.href}
              style={{
                display: 'block',
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.3s ease',
                textDecoration: 'none',
                color: 'inherit',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = option.accentColor
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              }}
            >
              {/* Preview area */}
              <div style={{
                height: 280,
                background: option.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  textAlign: 'center',
                  zIndex: 1,
                }}>
                  <div style={{
                    fontSize: 10,
                    letterSpacing: '0.25em',
                    color: option.accentColor,
                    textTransform: 'uppercase',
                    marginBottom: 12,
                    opacity: 0.8,
                  }}>
                    Mi Verde
                  </div>
                  <div style={{
                    fontFamily: option.id === 'editorial' ? "'DM Sans', sans-serif" : "'Lora', serif",
                    fontSize: option.id === 'editorial' ? 36 : 32,
                    fontWeight: option.id === 'editorial' ? 700 : 400,
                    fontStyle: option.id === 'editorial' ? 'normal' : 'italic',
                    color: option.textColor,
                    letterSpacing: option.id === 'editorial' ? '0.1em' : '0.02em',
                    textTransform: option.id === 'editorial' ? 'uppercase' : 'none',
                  }}>
                    Boutique
                  </div>
                  <div style={{
                    width: 30,
                    height: 1,
                    background: option.accentColor,
                    margin: '12px auto 0',
                    opacity: 0.6,
                  }} />
                </div>
              </div>

              {/* Info */}
              <div style={{
                padding: '20px 24px 24px',
                background: '#111',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8,
                }}>
                  <h2 style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#f0f0f0',
                  }}>
                    {option.name}
                  </h2>
                  <span style={{
                    fontSize: 11,
                    color: option.accentColor,
                    letterSpacing: '0.1em',
                  }}>
                    VER →
                  </span>
                </div>

                <p style={{
                  fontSize: 13,
                  color: '#888',
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}>
                  {option.description}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 6,
                }}>
                  {option.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 10,
                        letterSpacing: '0.05em',
                        color: '#666',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 4,
                        padding: '3px 8px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          textAlign: 'center',
          padding: '24px 0 40px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <p style={{ fontSize: 12, color: '#555' }}>
            Diseñado para Mi Verde Boutique · 2026
          </p>
        </div>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container/Container'
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Nosotros',
}

export default function NosotrosPage() {
  return (
    <Container>
      <div className={styles.page}>
        <ScrollReveal>
          <div className={styles.intro}>
            <p className="label-text">Nuestra historia</p>
            <h1 className={styles.title}>Mi Verde Boutique</h1>
            <p className={styles.lead}>
              Somos una boutique virtual chilena especializada en plantas de colección. Nacimos del amor
              por las aroideas y la convicción de que las plantas más hermosas del mundo deberían estar
              al alcance de los coleccionistas chilenos.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Selección con cuidado</h2>
            <p className={styles.body}>
              Cada planta que ofrecemos es seleccionada personalmente. No trabajamos con intermediarios
              masivos ni con plantas producidas en condiciones deficientes. Nos tomamos el tiempo de
              conocer el origen de cada espécimen, verificar su salud y garantizar que llega a ti en las
              mejores condiciones posibles.
            </p>
            <p className={styles.body}>
              Nuestra especialidad son los Anthuriums velutinosos, los Philodendros raros y las Monsteras
              variegadas. Buscamos activamente ejemplares de alta calidad en colecciones privadas,
              productores de confianza y viveros especializados de Chile y el extranjero.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Comunidad</h2>
            <p className={styles.body}>
              Mi Verde Boutique es más que una tienda. Es parte de una comunidad creciente de amantes de
              las plantas exóticas en Chile. A través de nuestros live sales en Instagram y TikTok,
              nuestro blog y nuestras redes sociales, compartimos conocimiento, anunciamos novedades y
              conectamos a coleccionistas de todo el país.
            </p>
            <p className={styles.body}>
              Creemos que el conocimiento debe ser compartido. Por eso publicamos guías de cuidado
              detalladas, respondemos todas las preguntas de nuestra comunidad y organizamos eventos
              virtuales donde los coleccionistas pueden aprender juntos.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Envíos a todo Chile</h2>
            <p className={styles.body}>
              Enviamos a todo el territorio nacional con embalaje especializado para plantas vivas.
              Cada planta viaja en una caja diseñada para minimizar el estrés del transporte, con
              material amortiguador, soporte para la maceta y ventilación adecuada.
            </p>
            <p className={styles.body}>
              Los envíos se realizan los días lunes y martes para evitar que las plantas queden
              retenidas en bodegas durante el fin de semana. Ofrecemos envío gratuito en pedidos
              superiores a $80.000 CLP.
            </p>
          </section>
        </ScrollReveal>
      </div>
    </Container>
  )
}

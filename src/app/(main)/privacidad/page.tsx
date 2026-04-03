import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container/Container'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
}

export default function PrivacidadPage() {
  return (
    <Container>
      <article className={styles.article}>
        <h1 className={styles.title}>Política de Privacidad</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Información que recopilamos</h2>
          <p className={styles.body}>
            Recopilamos información que nos proporcionas directamente al realizar una compra, como
            nombre completo, dirección de correo electrónico, número de teléfono y dirección de envío.
            También podemos recopilar información técnica como dirección IP y datos de navegación para
            mejorar la experiencia del sitio.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Uso de la información</h2>
          <p className={styles.body}>
            Utilizamos tu información exclusivamente para procesar y gestionar tus pedidos, comunicarnos
            contigo sobre el estado de tu compra, y enviarte información relevante sobre nuevos productos
            y eventos si has dado tu consentimiento. Nunca vendemos ni compartimos tu información
            personal con terceros no autorizados.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Protección de datos</h2>
          <p className={styles.body}>
            Implementamos medidas de seguridad técnicas y organizativas para proteger tu información
            personal contra acceso no autorizado, alteración, divulgación o destrucción. Los datos de
            pago son procesados de forma segura a través de Mercado Pago y no almacenamos información
            de tarjetas de crédito o débito en nuestros sistemas.
          </p>
          <p className={styles.body}>
            De acuerdo con la Ley 19.628 de Protección de la Vida Privada de Chile, tienes derecho a
            acceder, rectificar y cancelar tus datos personales. Para ejercer estos derechos, contáctanos
            a través de nuestros canales oficiales.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Contacto</h2>
          <p className={styles.body}>
            Si tienes preguntas sobre esta política de privacidad o sobre el manejo de tus datos
            personales, puedes contactarnos a través de nuestro Instagram o por email. Responderemos
            tu consulta en un plazo máximo de 5 días hábiles.
          </p>
        </section>
      </article>
    </Container>
  )
}

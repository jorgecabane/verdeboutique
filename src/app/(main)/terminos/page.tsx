import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container/Container'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
}

export default function TerminosPage() {
  return (
    <Container>
      <article className={styles.article}>
        <h1 className={styles.title}>Términos y Condiciones</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Productos</h2>
          <p className={styles.body}>
            Todos los productos vendidos en Mi Verde Boutique son plantas vivas. Por la naturaleza de
            los seres vivos, pueden existir pequeñas variaciones entre la planta que ves en las
            fotografías y la que recibes. Nos comprometemos a enviarte siempre la planta de igual o
            mayor calidad a la mostrada.
          </p>
          <p className={styles.body}>
            Las plantas son seres vivos que requieren cuidados específicos. No nos hacemos responsables
            por daños o muerte de la planta causados por manejo incorrecto una vez entregada. Cada
            compra incluye una guía de cuidados específica para la especie adquirida.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Envíos</h2>
          <p className={styles.body}>
            Realizamos envíos a todo Chile a través de empresas de courier especializadas. Los envíos
            se realizan los días lunes y martes para minimizar el tiempo de tránsito y el estrés de
            las plantas. El tiempo de entrega es de 2 a 5 días hábiles dependiendo de la región.
          </p>
          <p className={styles.body}>
            El costo de envío es de $5.990 CLP para pedidos bajo $80.000 CLP. Los pedidos iguales o
            superiores a $80.000 CLP tienen envío gratuito a todo Chile continental. Para Región de
            Magallanes y zonas extremas, el costo puede variar.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Devoluciones</h2>
          <p className={styles.body}>
            Aceptamos devoluciones dentro de las 48 horas siguientes a la recepción del pedido,
            siempre que la planta llegue en condiciones notoriamente diferentes a las descritas o
            con daños causados por el transporte. Para iniciar una devolución, contáctanos a través
            de Instagram con fotografías del estado de la planta.
          </p>
          <p className={styles.body}>
            No aceptamos devoluciones por arrepentimiento o por daños causados por manejo incorrecto
            post-entrega. Las plantas vendidas como &ldquo;sin stock&rdquo; o en preventa no tienen derecho a
            devolución salvo defecto de origen.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Pagos</h2>
          <p className={styles.body}>
            Procesamos todos los pagos a través de Mercado Pago, plataforma segura que acepta
            tarjetas de crédito, débito y transferencias bancarias. Mi Verde Boutique no almacena
            información de pago en sus servidores.
          </p>
          <p className={styles.body}>
            Los precios están expresados en pesos chilenos (CLP) e incluyen IVA cuando corresponde.
            Nos reservamos el derecho de modificar los precios sin previo aviso, aunque siempre se
            respetará el precio pactado en el momento de la compra.
          </p>
        </section>
      </article>
    </Container>
  )
}

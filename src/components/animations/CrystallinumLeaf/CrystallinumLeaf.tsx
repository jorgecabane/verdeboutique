'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './CrystallinumLeaf.module.css'

export function CrystallinumLeaf() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const leafOpacity = useTransform(scrollYProgress, [0.2, 0.45, 0.7, 0.85], [0, 0.35, 0.35, 0])
  const leafScale = useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1])
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.45, 0.65, 0.8], [0, 1, 1, 0])
  const textY = useTransform(scrollYProgress, [0.3, 0.45], [20, 0])
  const lineScaleX = useTransform(scrollYProgress, [0.4, 0.55], [0, 1])

  return (
    <section ref={sectionRef} className={styles.section}>
      <motion.div className={styles.leafBg} style={{ opacity: leafOpacity, scale: leafScale }}>
        <img src="/images/crystallinum.svg" alt="" className={styles.leafSvg} aria-hidden="true" />
      </motion.div>

      <motion.div className={styles.caption} style={{ opacity: textOpacity, y: textY }}>
        <p className={styles.label}>Seleccionadas con cuidado</p>
        <h2 className={styles.title}>Cada hoja cuenta<br />una historia</h2>
        <motion.div className={styles.divider} style={{ scaleX: lineScaleX }} />
      </motion.div>
    </section>
  )
}

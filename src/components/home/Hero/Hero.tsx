'use client'

import { Suspense, Component, ReactNode } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/Button/Button'
import styles from './Hero.module.css'
import gradientStyles from './AnimatedGradient.module.css'

const PlantScene = dynamic(
  () => import('./PlantScene').then((mod) => ({ default: mod.PlantScene })),
  { ssr: false }
)

const ease = [0.23, 1, 0.32, 1] as [number, number, number, number]

const lineVariants = {
  hidden: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
  visible: (i: number) => ({
    opacity: 1,
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.6, ease, delay: 0.5 + i * 0.08 },
  }),
}

function ImageFallback() {
  return (
    <div className={styles.mobileBg}>
      <img src="/images/plants/crystallinum.jpg" alt="" className={styles.mobileBgImg} />
    </div>
  )
}

interface EBProps { children: ReactNode; fallback: ReactNode }
interface EBState { hasError: boolean }
class SceneErrorBoundary extends Component<EBProps, EBState> {
  state: EBState = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  render() { return this.state.hasError ? this.props.fallback : this.props.children }
}

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={gradientStyles.gradient} />

      {/* 3D on all devices — gradient shows while loading, image only on error */}
      <SceneErrorBoundary fallback={<ImageFallback />}>
        <Suspense fallback={null}>
          <PlantScene />
        </Suspense>
      </SceneErrorBoundary>

      <div className={styles.overlay}>
        <motion.p
          className={styles.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          Plantas de Colección
        </motion.p>

        <div className={styles.titleGroup}>
          <motion.h1 className={styles.title} custom={0} variants={lineVariants} initial="hidden" animate="visible">Naturaleza</motion.h1>
          <motion.h1 className={styles.title} custom={1} variants={lineVariants} initial="hidden" animate="visible">en su forma</motion.h1>
          <motion.h1 className={`${styles.title} ${styles.titleAccent}`} custom={2} variants={lineVariants} initial="hidden" animate="visible">más pura</motion.h1>
        </div>

        <motion.div
          className={styles.divider}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease, delay: 1.2 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <Link href="/catalogo">
            <Button variant="outline" size="medium">Explorar Colección</Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
      >
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  )
}

import { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import styles from './Container.module.css'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn(styles.container, className)}>{children}</div>
}

import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'small' | 'medium' | 'large'
}

export function Button({ variant = 'primary', size = 'medium', className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(styles.button, styles[variant], styles[size], className)} {...props}>
      {children}
    </button>
  )
}

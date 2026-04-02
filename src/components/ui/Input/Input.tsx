import { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Input({ label, id, className, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className={cn(styles.wrapper, className)}>
      <label htmlFor={inputId} className={styles.label}>{label}</label>
      <input id={inputId} className={styles.input} {...props} />
    </div>
  )
}

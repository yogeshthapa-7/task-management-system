import { forwardRef } from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={`flex h-10 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 placeholder:text-slate-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-50 dark:placeholder:text-slate-400 dark:focus-visible:ring-offset-slate-900 ${className || ''}`}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = 'Input'

export { Input }

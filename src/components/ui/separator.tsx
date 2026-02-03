import { forwardRef } from 'react'

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
}

const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', ...props }, ref) => (
    <div
      className={`shrink-0 bg-slate-200 dark:bg-slate-700 ${
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px'
      } ${className || ''}`}
      ref={ref}
      {...props}
    />
  )
)
Separator.displayName = 'Separator'

export { Separator }

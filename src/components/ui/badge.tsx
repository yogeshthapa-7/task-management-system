import { tv, type VariantProps } from 'tailwind-variants'
import { forwardRef } from 'react'

const badge = tv({
  base: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
  variants: {
    variant: {
      default: 'border border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-700 dark:bg-primary-900 dark:text-primary-100',
      secondary: 'border border-secondary-200 bg-secondary-50 text-secondary-700 dark:border-secondary-700 dark:bg-secondary-900 dark:text-secondary-100',
      success: 'border border-success-200 bg-success-50 text-success-700 dark:border-success-700 dark:bg-success-900 dark:text-success-100',
      warning: 'border border-warning-200 bg-warning-50 text-warning-700 dark:border-warning-700 dark:bg-warning-900 dark:text-warning-100',
      destructive: 'border border-accent-200 bg-accent-50 text-accent-700 dark:border-accent-700 dark:bg-accent-900 dark:text-accent-100',
      outline: 'border border-slate-300 text-slate-700 dark:border-slate-600 dark:text-slate-300',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badge> {}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      className={badge({ variant, className })}
      ref={ref}
      {...props}
    />
  )
)
Badge.displayName = 'Badge'

export { Badge, badge }

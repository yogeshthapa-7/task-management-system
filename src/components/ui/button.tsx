"use client"

import { tv, type VariantProps } from 'tailwind-variants'
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'

const button = tv({
  // ... base remains same
  base: 'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary: 'bg-primary-600 text-white shadow-sm hover:bg-primary-700 focus-visible:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600',
      secondary: 'bg-secondary-100 text-secondary-900 shadow-xs hover:bg-secondary-200 focus-visible:ring-secondary-500 dark:bg-secondary-900 dark:text-secondary-100 dark:hover:bg-secondary-800',
      success: 'bg-success-600 text-white shadow-sm hover:bg-success-700 focus-visible:ring-success-500',
      destructive: 'bg-accent-600 text-white shadow-sm hover:bg-accent-700 focus-visible:ring-accent-500',
      outline: 'border border-slate-300 bg-white text-slate-900 shadow-xs hover:bg-slate-50 focus-visible:ring-primary-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-50 dark:hover:bg-slate-800',
      ghost: 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800',
      link: 'text-primary-600 underline-offset-4 hover:underline dark:text-primary-400',
    },
    size: {
      xs: 'h-8 px-3 text-xs',
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-11 px-6 text-base',
      xl: 'h-12 px-8 text-base',
      icon: 'h-10 w-10 p-0',
      'icon-sm': 'h-8 w-8 p-0',
      'icon-lg': 'h-12 w-12 p-0',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={button({ variant, size, className })}
        disabled={isLoading || disabled}
        // @ts-ignore
        ref={ref}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {isLoading && (
              <svg
                className="h-4 w-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}
            {children}
          </>
        )}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, button }

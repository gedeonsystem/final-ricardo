import * as React from 'react'

import { cn } from '@/lib/utils'

type InputProps = React.ComponentProps<'input'> & {
  label?: string
  error?: string
  placeholder?: string
}

function Input({ className, type, label, ...props }: InputProps) {
  return (
    <div>
      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500',
          'sm:text-sm dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-700',
          className,
        )}
        {...props}
      />
      {props.error && (
        <p className="mt-2 text-sm text-red-600">{props.error}</p>
      )}
    </div>
  )
}

export { Input }

import * as React from 'react'
import { cn } from '@/lib/utils'

type SelectProps = React.ComponentProps<'select'> & {
  label?: string
  error?: string
  options: Array<{
    value: string
    label: string
  }>
}

function Select({ className, options, label, ...props }: SelectProps) {
  return (
    <div>
      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <select
        data-slot="select"
        className={cn(
          'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md',
          'shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',
          'dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-700',
          className,
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {props.error && (
        <p className="mt-2 text-sm text-red-600">{props.error}</p>
      )}
    </div>
  )
}

export { Select }

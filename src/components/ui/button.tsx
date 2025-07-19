import * as React from 'react'
import { cn } from '@/lib/utils'

type SubmitButtonProps = React.ComponentProps<'button'> & {
  text?: string
  loading?: boolean
}

const SubmitButton = (props: SubmitButtonProps) => {
  const { text, loading, className, ...rest } = props

  const loadingText = 'Cargando...'
  const buttonText = loading ? loadingText : text

  return (
    <button
      type="submit"
      data-slot="submit"
      className={cn(
        'mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600',
        className,
      )}
      {...rest}
    >
      {buttonText}
    </button>
  )
}

export default SubmitButton

import { createFormHook, createFormHookContexts } from '@tanstack/react-form'

import { Input } from '@/components/ui/input'
import SubmitButton from '@/components/ui/button'
import { Select } from '@/components/ui/select'

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts()

export const { useAppForm } = createFormHook({
  fieldComponents: {
    Input: Input,
    Select: Select,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
})

export default useAppForm

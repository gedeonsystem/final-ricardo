import { z } from 'zod'

const TransaccionSchema = z.object({
  id: z.string().uuid(),
  tipo: z.string(),
  fecha: z.string(),
  valor: z.number(),
})

export type TransaccionType = z.infer<typeof TransaccionSchema>

import { z } from 'zod'

const TransaccionSchema = z.object({
  id: z.string().uuid(),
  nombre: z.string(),
  descripcion: z.string(),
  fecha: z.string(),
  monto: z.number(),
  tipo: z.enum(['expense', 'income']),
  archivo: z.string(),
})

export type TransaccionType = z.infer<typeof TransaccionSchema>

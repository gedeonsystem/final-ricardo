import { z } from 'zod'

export const eventoSchema = z.object({
  id: z.string().uuid(),
  nombre: z.string(),
  descripcion: z.string(),
  fecha: z.string(),
  monto: z.number(),
  tipo: z.enum(['expense', 'income']),
  archivo: z.string(),
})

export type EventoType = z.infer<typeof eventoSchema>

export const CreateEventoSchema = eventoSchema.omit({ id: true })
export type CreateEventoType = z.infer<typeof CreateEventoSchema>

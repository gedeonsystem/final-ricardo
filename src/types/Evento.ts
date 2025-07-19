import * as z from 'zod'

export const eventoSchema = z.object({
  id: z.string().uuid(),
  nombre: z.string().min(0),
  descripcion: z.string().min(0),
  fecha: z.string().min(10),
  monto: z.number().int().gte(1),
  tipo: z.enum(['expense', 'income']),
  archivo: z.string(),
})

export type EventoType = z.infer<typeof eventoSchema>

export const CreateEventoSchema = eventoSchema.omit({ id: true })
export type CreateEventoType = z.infer<typeof CreateEventoSchema>

import { z } from 'zod'

const TotalSchema = z.object({
  id: z.string().uuid(),
  income: z.number(),
  Expense: z.number(),
  Monthly: z.number(),
  Global: z.number(),
})

export type TransaccionType = z.infer<typeof TotalSchema>

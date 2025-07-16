import type { TransaccionType } from '@/types/Transaccion'
import { cn } from '@/lib/utils'

type TransaccionProps = TransaccionType & {
  //children: React.ReactNode;
  className?: string
}

const Transaccion = (props: TransaccionProps) => {
  const { id, nombre, descripcion, fecha, monto, tipo, archivo } = props

  return (
    <div
      className={cn(
        'p-0.5 rounded-md flex justify-between gap-x-8 hover:bg-gray-100',
        'dark:hover:bg-zinc-700',
      )}
    >
      <div>
        <span></span>
        <span></span>
      </div>
      <div></div>
    </div>
  )
}
export default Transaccion

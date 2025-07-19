import type { EventoType } from '@/types/Evento'

type TransaccionProps = EventoType & {
  //children: React.ReactNode;
  className?: string
}

const Transaccion = (props: TransaccionProps) => {
  const { nombre, fecha, monto } = props

  return (
    <div className="p-0.5 rounded-md flex justify-between gap-x-8 hover:bg-gray-100 dark:hover:bg-zinc-700">
      <div className="flex flex-col text-base text-gray-700">
        <span className="text-sm text-gray-700 dark:text-gray-200">
          {nombre}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-300">
          {fecha}
        </span>
      </div>
      <div className="text-sm text-red-400 dark:text-red-300">${monto}</div>
    </div>
  )
}
export default Transaccion

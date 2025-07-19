import Transaccion from '@/components/Transaccion'
import Total from '@/components/Total'
import dayjs from 'dayjs'
import { cn } from '@/lib/utils'

type MesProps = {
  titulo: string
}

const Mes = (props: MesProps) => {
  const { titulo } = props

  return (
    <div
      className={cn(
        'rounded-md shadow-lg gap-y-1',
        'border border-gray-100 dark:border-zinc-700 bg-white',
        'flex flex-col justify-between',
      )}
    >
      <div className="flex flex-col gap-y-0.5">
        <section className="flex justify-between items-center px-1 py-0.5">
          <p className="text-lg font-semibold capitalize text-gray-800 dark:text-gray-200">
            {titulo}
          </p>
        </section>
        <div className="border-b border-gray-200 w-full h-1 mb-0.5 dark:border-zinc-500"></div>
        <section className="px-0.5">
          <Transaccion
            id="1"
            nombre="Goreceries"
            descripcion="Goreceries"
            fecha={dayjs(new Date()).format('YYYY-MM-DD')}
            monto={200}
            tipo="expense"
            archivo=""
          />

          <Total />
        </section>
      </div>
    </div>
  )
}
export default Mes

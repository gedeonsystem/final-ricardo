import { useState, useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import dayjs from 'dayjs'
import Mes from '@/components/Mes'
import type { EventoType } from '@/types/Evento'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  let lstEventos: EventoType[] = [
    {
      id: '1',
      nombre: 'Compra',
      descripcion: 'Compra de Dulces',
      fecha: '2025-01-01',
      monto: 100,
      tipo: 'expense',
      archivo: '',
    },
    {
      id: '2',
      nombre: 'Deposito',
      descripcion: 'Pago',
      fecha: '2025-02-01',
      monto: 1000,
      tipo: 'income',
      archivo: '',
    },
    {
      id: '3',
      nombre: 'Deposito',
      descripcion: 'Pago',
      fecha: '2025-02-01',
      monto: 1000,
      tipo: 'income',
      archivo: '',
    },
  ]

  const [items, setItems] = useState(lstEventos)

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  const nro = items.length
  const meses = 2

  return (
    <main className="w-full px-4 pt-6">
      <div className="mt-1">
        <div className="mb-4 flex justify-between items-end">
          <div className="flex items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Dinero inicial
              </label>
              <input
                type="number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-700"
                min="0"
                value="0"
              />
            </div>
            <button className="ml-4 py-0.5 px-1 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600">
              Calcular
            </button>
          </div>
          <Link
            className="py-0.5 px-1 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600"
            to="/form/$id"
            params={{ id: 'new' }}
          >
            Agregar Evento
          </Link>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Tu tienes {nro} eventos en {meses}
            </p>
          </div>
          <div className="flex flex-wrap flex-row">
            <article className="p-1 flex">
              <Mes titulo={dayjs(new Date()).format('MMM-YYYY')} />
            </article>
            <article className="p-1 flex">
              <Mes titulo={dayjs(new Date()).format('MMM-YYYY')} />
            </article>
          </div>
        </div>
      </div>
    </main>
  )
}

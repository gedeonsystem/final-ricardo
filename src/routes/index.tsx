import { createFileRoute } from '@tanstack/react-router'
import dayjs from 'dayjs'
import Mes from '@/components/Mes'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex flex-wrap flex-row">
      <article className="p-1 flex">
        <Mes titulo={dayjs(new Date()).format('MMM-YYYY')} />
      </article>
      <article className="p-1 flex">
        <Mes titulo={dayjs(new Date()).format('MMM-YYYY')} />
      </article>
    </div>
  )
}

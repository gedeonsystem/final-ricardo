import { createFileRoute } from '@tanstack/react-router'
import { useAppForm } from '@/hooks/form'
import { CreateEventoSchema, type CreateEventoType } from '@/types/Evento'

export const Route = createFileRoute('/form/$id')({
  component: RouteComponent,
})

const defaultValues: CreateEventoType = {
  nombre: '',
  descripcion: '',
  fecha: '',
  monto: 0,
  tipo: [],
  archivo: '',
}

function RouteComponent() {
  const { id } = Route.useParams()
  console.log(`id; ${id}`)
  const form = useAppForm({
    defaultValues,
    validators: {
      onSubmit: CreateEventoSchema,
    },
  })

  return (
    <main className="w-full px-4 pt-6">
      <div className="mt-4 flex flex-col gap-4 p-4 max-w-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            console.log('Guardar')
          }}
        >
          <form.AppField
            name="nombre"
            children={(field) => (
              <field.Input
                type="text"
                label="Nombre"
                placeholder="Ingresa un Nombre"
                className="w-full"
                error={field.state.meta.errors.map((e) => e?.message).join(',')}
                onChange={(e) => field.setValue(e.target.value)}
              />
            )}
          />

          <form.AppField
            name="descripcion"
            children={(field) => (
              <field.Input
                type="text"
                label="Descripcion"
                placeholder="Ingresa una Descripcion"
                className="w-full"
                error={field.state.meta.errors.map((e) => e?.message).join(',')}
                onChange={(e) => field.setValue(e.target.value)}
              />
            )}
          />

          <form.AppField
            name="fecha"
            children={(field) => (
              <field.Input
                type="text"
                label="Fecha"
                placeholder="dd/mm/aaaa"
                className="w-full"
                error={field.state.meta.errors.map((e) => e?.message).join(',')}
                onChange={(e) => field.setValue(e.target.value)}
              />
            )}
          />

          <form.AppField
            name="monto"
            children={(field) => (
              <field.Input
                type="text"
                label="Monto"
                placeholder="$0"
                className="w-full"
                error={field.state.meta.errors.map((e) => e?.message).join(',')}
                onChange={(e) => field.setValue(Number(e.target.value))}
              />
            )}
          />
          <form.AppField
            name="tipo"
            children={(field) => (
              <field.Select
                label="Tipo"
                className="w-full"
                error={field.state.meta.errors.map((e) => e?.message).join(',')}
                options={[
                  { value: 'income', label: 'income' },
                  { value: 'expense', label: 'expense' },
                ]}
                value={field.state.value}
                onChange={(e) =>
                  field.setValue(e.target.value as CreateEventoType['tipo'])
                }
              />
            )}
          />
          <form.AppForm>
            <form.SubmitButton text="Enviar" type="submit" />
          </form.AppForm>
        </form>
      </div>
    </main>
  )
}

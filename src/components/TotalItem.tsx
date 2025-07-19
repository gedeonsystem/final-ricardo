type ItemsProps = {
  nombre: string
  monto: number
}

const TotalItem = (props: ItemsProps) => {
  const { nombre, monto } = props

  return (
    <div className="flex text-sm flex-row justify-between">
      <p className="capitalize font-semibold text-gray-700 dark:text-gray-200">
        {nombre}
      </p>
      <p className="text-gray-700 dark:text-gray-200">${monto}</p>
    </div>
  )
}
export default TotalItem

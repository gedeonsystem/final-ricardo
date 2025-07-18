import React from 'react'
import TotalItem from './TotalItem'

type Props = {}

function Total({}: Props) {
  return (
    <div>
      <TotalItem nombre="income" monto="5000" />
      <TotalItem nombre="expense" monto="5000" />
      <TotalItem nombre="monthly" monto="5000" />
      <TotalItem nombre="global" monto="5000" />
    </div>
  )
}

export default Total

import React from 'react'

type Props = {}

function Total({}: Props) {
  return (
    <div>
      <div className="flex items-cemter justify-between">
        <span>income</span>
        <p>$5000</p>
      </div>
      <div className="flex items-cemter justify-between">
        <span>expense</span>
        <p>$1200</p>
      </div>
      <div className="flex items-cemter justify-between">
        <span>monthly</span>
        <p>$3800</p>
      </div>
      <div className="flex items-cemter justify-between">
        <span>global</span>
        <p>$3900</p>
      </div>
    </div>
  )
}

export default Total

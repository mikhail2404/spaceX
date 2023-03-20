import { useEffect, useState } from 'react'

import './shipmentCargoBays.css'

interface ShipmentCargoBaysProps {
  boxes: string
}
const ShipmentCargoBays = ({ boxes }: ShipmentCargoBaysProps) => {
  const [totalBays, setTotalBays] = useState<number>()

  const getTotalBays = () => {
    const boxesArray = boxes.split(',')
    const totalBoxes = boxesArray.reduce((acc, currentBox) => acc + +currentBox, 0)
    const bays = Math.ceil(totalBoxes / 10)

    setTotalBays(bays)
  }

  useEffect(() => {
    getTotalBays()
  }, [boxes])

  return (
    <div className="shipment-cargo-bays-container">
      <h2 className="shipment-cargo-bays-title">Number of required cargo bays</h2>
      <span className="shipment-cargo-bays-count">
        {totalBays || (totalBays === 0 ? '0' : 'Invalid boxes format')}
      </span>
    </div>
  )
}

export default ShipmentCargoBays

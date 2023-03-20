import React, { useEffect } from 'react'

import CustomInput from '../../../../ui/CustomInput/CustomInput'

import './shipmentCargoBoxes.css'

interface ShipmentCargoBoxesProps {
  boxes: string
  setBoxes: (boxes: string) => void
  initialBoxes: string
}
const ShipmentCargoBoxes = ({ boxes, setBoxes, initialBoxes }: ShipmentCargoBoxesProps) => {
  useEffect(() => {
    if (initialBoxes) {
      setBoxes(initialBoxes)
    } else {
      setBoxes('')
    }
  }, [initialBoxes])

  const boxesChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setBoxes(e.target.value)

  return (
    <div className="shipment-cargo-boxes-container">
      <h5 className="shipment-cargo-boxes-title">Cargo boxes</h5>
      <CustomInput onChange={boxesChangeHandler} type="text" value={boxes} />
    </div>
  )
}

export default ShipmentCargoBoxes

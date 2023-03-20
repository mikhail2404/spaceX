import { useState } from 'react'

import withFetchedShipments from '../../HOC/withFetchedShipments'
import { useGetSelectedShipment } from '../../hooks/useGetSelectedShipment'

import ShipmentCargoBays from './components/ShipmentCargoBays/ShipmentCargoBays'
import ShipmentCargoBoxes from './components/ShipmentCargoBoxes/ShipmentCargoBoxes'
import ShipmentOwnerDetails from './components/ShipmentOwnerDetails/ShipmentOwnerDetails'

import './shipmentDetails.css'

interface ShipmentDetailsProps {
  shipments: Shipment[]
}
const ShipmentDetails = ({ shipments }: ShipmentDetailsProps) => {
  const [boxes, setBoxes] = useState<string>('')

  const selectedShipment = useGetSelectedShipment(shipments)

  if (!selectedShipment) {
    return <p>Something went wrong</p>
  }

  return (
    <div className="shipment-details-container">
      <ShipmentOwnerDetails ownerName={selectedShipment.name} ownerEmail={selectedShipment.email} />
      <ShipmentCargoBoxes boxes={boxes} setBoxes={setBoxes} initialBoxes={selectedShipment.boxes} />
      <ShipmentCargoBays boxes={boxes} />
    </div>
  )
}

export default withFetchedShipments(ShipmentDetails)

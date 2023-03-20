import withFetchedShipments from '../../../../HOC/withFetchedShipments'
import { useGetSelectedShipment } from '../../../../hooks/useGetSelectedShipment'

import ShipmentListItem from './components/ShipmentListItem/ShipmentListItem'

import './shipmentList.css'

interface ShipmentListProps {
  shipments: Shipment[]
}
const ShipmentList = ({ shipments }: ShipmentListProps) => {
  const selectedShipment = useGetSelectedShipment(shipments)

  return (
    <ul className="shipment-list">
      {shipments.map((shipment: Shipment) => (
        <ShipmentListItem
          key={shipment.id}
          selectedShipmentId={selectedShipment?.id}
          shipment={shipment}
        />
      ))}
    </ul>
  )
}

export default withFetchedShipments(ShipmentList)

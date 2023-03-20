import { Link } from 'react-router-dom'

import './shipmentListItem.css'

interface ShipmentListItemProps {
  shipment: Shipment
  selectedShipmentId?: string
}

const ShipmentListItem = ({ shipment, selectedShipmentId }: ShipmentListItemProps) => {
  return (
    <li className={`shipment-item ${selectedShipmentId === shipment.id ? 'selected' : ''}`}>
      <Link to={`/${shipment.id}`}>{shipment.name}</Link>
    </li>
  )
}

export default ShipmentListItem

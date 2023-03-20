import ShipmentList from './components/ShipmentList/ShipmentList'

import './shipments.css'

const Shipments = () => {
  return (
    <div className="shipment-container">
      <h4 className="shipment-title">Shipment List</h4>
      <ShipmentList />
    </div>
  )
}

export default Shipments

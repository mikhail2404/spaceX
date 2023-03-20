import './shipmentOwnerDetails.css'

interface ShipmentOwnerDetailsProps {
  ownerName: string
  ownerEmail: string
}
const ShipmentOwnerDetails = ({ ownerName, ownerEmail }: ShipmentOwnerDetailsProps) => {
  return (
    <div className="shipment-owner-details-container">
      <h1 className="shipment-owner-name">{ownerName}</h1>
      <p>{ownerEmail}</p>
    </div>
  )
}

export default ShipmentOwnerDetails

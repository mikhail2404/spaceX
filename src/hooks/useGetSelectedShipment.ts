import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const useGetSelectedShipment = (shipments: Shipment[]) => {
  const [selectedShipment, setSelectedShipment] = useState<Shipment>()
  const { id } = useParams()

  useEffect(() => {
    if (shipments) {
      const currentShipment = shipments.find((shipment) => shipment.id === id)

      setSelectedShipment(currentShipment)
    }
  }, [id])

  return selectedShipment
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import withFetchedShipments from '../../../../HOC/withFetchedShipments'

import './searchResults.css'

interface SearchResultsProps {
  searchValue: string
  shipments: Shipment[]
}
const SearchResults = ({ searchValue, shipments }: SearchResultsProps) => {
  const [autoCompleteResults, setAutoCompleteResults] = useState<Shipment[]>(shipments)

  useEffect(() => {
    if (searchValue.trim().length) {
      const matchingShipments = shipments.filter((shipment) =>
        shipment.name.toLowerCase().includes(searchValue.toLowerCase()),
      )

      setAutoCompleteResults(matchingShipments)
    } else {
      setAutoCompleteResults(shipments)
    }
  }, [searchValue])

  return (
    <ul className="shipment-results">
      {autoCompleteResults.length ? (
        autoCompleteResults.map((shipment) => (
          <Link key={shipment.id} to={`/${shipment.id}`}>
            <li className="shipment-result">
              <h5 className="shipment-result-owner-name">{shipment.name}</h5>
              <p className="shipment-result-owner-email">{shipment.email}</p>
            </li>
          </Link>
        ))
      ) : (
        <li className="shipment-result">Nothing was found</li>
      )}
    </ul>
  )
}

export default withFetchedShipments(SearchResults)

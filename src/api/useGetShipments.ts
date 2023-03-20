import { useQuery } from 'react-query'
import axios from 'axios'

export const useGetShipments = () => {
  const checkAuth = async () => {
    const response = await axios.get<Shipment[]>(
      `https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json`,
    )

    return response.data
  }

  return useQuery('useGetShipments', checkAuth, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
}

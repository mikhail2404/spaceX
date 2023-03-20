import React from 'react'

import { useGetShipments } from '../api/useGetShipments'
import Loader from '../ui/Loader/Loader'

type Props = {
  [key: string]: any // Allows any props to be passed
}

function withFetchedShipments<P extends Props>(WrappedComponent: React.ComponentType<P>) {
  const WithFetchedShipments = (props: any) => {
    const { data: shipments, error, isLoading } = useGetShipments()

    if (isLoading) {
      return <Loader />
    }

    if (error) {
      return <p>Something went wrong</p>
    }

    return <WrappedComponent shipments={shipments} {...props} />
  }

  return WithFetchedShipments
}

export default withFetchedShipments

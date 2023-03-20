import React from 'react'

import { useWindowDimensions } from '../hooks/useWindowDimensions'

import MainLayout from './MainLayout'
import MobileLayout from './MobileLayout'

const Layout = () => {
  const { windowWidth } = useWindowDimensions()
  const mobile = windowWidth <= 375

  return <div className="app-container">{mobile ? <MobileLayout /> : <MainLayout />}</div>
}

export default Layout

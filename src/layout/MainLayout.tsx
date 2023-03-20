import React from 'react'
import { Outlet } from 'react-router-dom'

import Logo from '../components/Logo/Logo'
import Search from '../components/Search/Search'
import Shipments from '../components/Shipments/Shipments'

const Layout = () => {
  return (
    <>
      <Logo />
      <Shipments />
      <Search />
      <Outlet />
    </>
  )
}

export default Layout

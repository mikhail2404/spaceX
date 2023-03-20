import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Logo from '../components/Logo/Logo'
import Menu from '../components/Menu/Menu'
import Search from '../components/Search/Search'
import Shipments from '../components/Shipments/Shipments'

const MobileLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuToggler = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <Logo />
      <Menu isMenuOpen={isMenuOpen} handleMenuToggler={handleMenuToggler} />
      {isMenuOpen && <Shipments />}
      {!isMenuOpen && <Search />}
      {!isMenuOpen && <Outlet />}
    </>
  )
}

export default MobileLayout

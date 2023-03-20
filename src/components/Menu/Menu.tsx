import React from 'react'

import { ReactComponent as CancelIcon } from '../../assets/cancel.svg'
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'

import './menu.css'

interface MenuProps {
  isMenuOpen: boolean
  handleMenuToggler: () => void
}
const Menu = ({ isMenuOpen, handleMenuToggler }: MenuProps) => {
  return (
    <>
      <button onClick={handleMenuToggler} className="menu">
        {isMenuOpen ? <CancelIcon /> : <MenuIcon />}
      </button>
    </>
  )
}

export default Menu

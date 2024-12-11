import React from 'react'
import MV_MainLogo from './HeaderList/MobileView/MV_MainLogo'
import DrawerNavigation from './HeaderList/MobileView/DrawerNavigation'

const MobileHeader = () => {
  return (
    <div className="lg:hidden">
    <>
      <MV_MainLogo />
      <DrawerNavigation />
    </>
      
    </div>
  )
}

export default MobileHeader

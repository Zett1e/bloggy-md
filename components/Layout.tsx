import React, { ReactElement } from 'react'
import Header from './Header'
import Navbar from './Navbar'

const Layout = ({children}:{children: ReactElement}) => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default Layout
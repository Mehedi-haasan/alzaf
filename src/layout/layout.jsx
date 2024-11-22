import Header from '@/Shared/Header'
import TopHeader from '@/Shared/TopHeader'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <TopHeader />
      <Header />
      {children}
    </div>
  )
}

export default Layout
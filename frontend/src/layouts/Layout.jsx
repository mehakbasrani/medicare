import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Router from '../routes/Router'

const Layout = () => {
  return (
<>
    <Header/>
      <main>
        <Router />
     </main> 
     <Footer/>
</>
  )
}

export default Layout

import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import PropertyContent from './Components/PropertyContent'
import Propertyoverview from './Components/Propertyoverview'
import DownloadBrochure from './Components/DownloadBrochure'
// import CustomerForm from './Components/CustomerForm'


const App = () => {
  return (
    <div className='bg-gray-50' >
      <Navbar />
      <HeroSection />
      <PropertyContent />
      <Propertyoverview />
      <DownloadBrochure />
    </div>
  )
}

export default App
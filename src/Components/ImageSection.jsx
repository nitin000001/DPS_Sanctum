import React from 'react'

const ImageSection = () => {
  return (
    <div className='mt-4 bg-[#615C57]/30 backdrop-blur-lg shadow-lg flex md:flex-row sm:flex-col '>
        <div className="relative flex">
          <img 
            src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="" 
            className="w-full sm:w-auto sm:h-auto"
          />
          {/* Left and right blur effects */}
          <div className="absolute inset-0 left-0 right-0 top-0 bottom-0 bg-gradient-to-r from-transparent to-[#000000]/40 sm:hidden"></div>
        </div>
        <div className="sm:mt-4">
            <img 
              src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600"  
              alt="second image"
              className="w-full sm:w-auto sm:h-auto"
            />
            <img 
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"  
              alt="third image"
              className="w-full sm:w-auto sm:h-auto"
            />
        </div>
    </div>
  )
}

export default ImageSection

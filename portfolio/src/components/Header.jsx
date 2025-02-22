import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed flex items-center justify-end right-10 z-20 top-10 hover:scale-103 '>
      <button className='bg-black text-lg text-white py-0.5 px-3 border-gray-400  border-4 rounded-4xl hover:bg-gray-600'>hire me</button>
      <i className="ri-more-2-fill text-black text-lg ml-3"></i>
    </div>
  )
}

export default Header 

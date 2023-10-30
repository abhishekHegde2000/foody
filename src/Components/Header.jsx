import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between bg-red-200 border border-black'>
        <img className='w-12 h-12 ml-4 m-4' src="https://dynamic.brandcrowd.com/asset/logo/e76a6d2e-2a33-4b38-8ea3-07bd07e9763c/logo-search-grid-1x?logoTemplateVersion=1&v=638175786200400000" alt="food logo" />
        <div className='flex'>
            <ul className='flex space-x-2 m-2 items-center'>
                <li>About</li>
                <li>Home</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>

    </div>
  )
}

export default Header
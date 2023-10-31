import React, { useState } from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'

const Header = () => {

    const [btnName, setBtnName] = useState('Login')


  return (
    <div className='flex justify-between bg-red-200 border border-black'>
        <img className='w-12 h-12 ml-4 m-4' src={LOGO_URL} alt="food logo" />
        <div className='flex'>
            <ul className='flex space-x-2 m-2 items-center'>
               <Link to="/">
               <li>home</li> 
               </Link> 
               <Link to="/about">
               <li>About</li> 
               </Link> 
               <Link to="/Contact">
               <li>contact</li> 
               </Link> 
               <Link to="/cart">
               <li>cart</li> 
               </Link>

                <button 
                onClick={ 
                    ()=> {
                        if (btnName === 'Login') {
                            setBtnName('Logout')
                        } else {
                            setBtnName('Login')
                        }
                    }
                }
                className='border border-black rounded-xl p-2'>{btnName}</button>
            </ul>
        </div>

    </div>
  )
}

export default Header
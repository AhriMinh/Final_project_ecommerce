import React from 'react'
import { shoppingLogo } from '../assets/index'
import {TfiShoppingCartFull } from "react-icons/tfi"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  console.log(productData);
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
          <Link to="/">
            <div>
                <img className='w-52' src={shoppingLogo} alt="shoppingLogo" />
            </div>
          </Link>

            <div className='flex items-center gap-8'>
              <ul className='flex items-center gap-8'>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
              </ul>
              <Link to="/cart">
                <div className='relative'>
                  <TfiShoppingCartFull className='text-3xl'/>
                  <span className='absolute w-6 bottom-5 left-5 bg-emerald-500 rounded-full text-white text-sm flex items-center justify-center font-semibold'>{productData.length}</span>
                </div>
              </Link>
              <Link to="/login">
                <img className='w-10 h-10  border-double border-2 border-black object-cover rounded-full' src={userInfo?userInfo.image : "https://i.ytimg.com/vi/X2oeNmslUck/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgXig8MA8=&rs=AOn4CLB2mpMmieaOWERNngn1PTzvhY3I8g"}/>
              </Link>
              {
                userInfo && <p className='text-base font-titleFont font-semibold underline underline-offset-2'>{userInfo.name}</p>
              }
              
          </div>
        </div>
        
    </div>
  )
}

export default Header
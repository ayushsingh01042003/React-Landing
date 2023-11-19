import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='text-white h-auto flex justify-between items-center p-4 max-w-screen-lg mx-auto'>
        <h1 className=" w-full text-green-300 font-bold text-3xl">REACT.</h1>
        <ul className='hidden md:flex w-full'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Account</li>
            <li className='p-4'>Sign In</li>
            <li className='p-4 bg-white text-black rounded-lg'>Get Started</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            { nav ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div className={nav ? 'fixed h-full left-0 top-0 w-1/2 border-r border-r-gray-100 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className=" w-full text-green-300 font-bold text-3xl p-4">REACT.</h1>
            <ul className='uppercase p-4'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Account</li>
                <li className='p-4'>Sign In</li>
                <li className='p-4'>Get Started</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
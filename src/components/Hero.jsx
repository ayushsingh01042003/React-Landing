import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[70vw] mt-[-96p] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-green-300 font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='font-bold md:text-6xl text-3xl p-6'>Grow with data</h1>
            <div>
                <p className='md:text-4xl text-xl font-bold'>Fast, Flexible financing for BTB</p>
                <p className='md:text-xl font-bold text-gray-600 p-4'>Monitor your data analytics to increase revenue for BTB, BTC & SAAS</p>
            </div>
            <button className='bg-green-300 py-3 w-[200px] mx-auto h- rounded-lg text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero 
import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <>
    <div className='w-full mt-16 flex flex-col lg:flex-row'>
        <div className='flex-1'>
          <img src={Laptop} alt="/" className='h-full w-full'/>
        </div>
        <div className='text-black flex-1 text-center'>
          <p className='capitalize font-bold text-green-300 text-xl p-4'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='font-bold xl:text-5xl lg:text-3xl text-2xl p-10'>Manage Data Analytics Centrally</h1>
          <p className='p-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad nesciunt doloremque facere ullam in. Ratione accusamus sunt qui ipsa, corporis similique sequi, beatae minima omnis officiis minus voluptatum provident quisquam culpa molestias soluta ipsum asperiores quos vel officia voluptatibus, dolorum modi nam? Obcaecati magnam nihil deserunt cumque saepe debitis eos!</p>
          <button className='text-white bg-black p-4 rounded-md m-6'>Get Started</button>
        </div>
    </div>
    </>
  )
}


export default Analytics
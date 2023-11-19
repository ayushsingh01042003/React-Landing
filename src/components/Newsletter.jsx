import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-black text-white w-full flex flex-col lg:flex-row py-16'>
      <div className='flex-1 text-center p-8'>
        <p className='font-bold lg:text-3xl text-2xl p-4'>Want tips & tricks to optimize your flow?</p>
        <p>Sign up to out newsletter and stay up to date.</p>
      </div>
      <div className='flex-1 text-center p-8'>
        <div className='flex justify-center flex-col lg:flex-row'>
          <div className='p-4'>
            <input type="text" placeholder='Enter your email' className='p-4 rounded-md'/>
          </div>
          <div className='p-4'>
            <button className='bg-green-300 p-4 text-black rounded-md'>
              Notify me
            </button>
          </div>
        </div>
        <p>We care about the protection of your data. Read our</p>  
        <a href="/" className='text-green-300 underline'>Privacy Policy</a>
      </div>
    </div>
  )
}

export default Newsletter
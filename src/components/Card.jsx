import React from 'react'

const Card = ({ title, cost, storage, usersAllowed, maxStorage, image, btnColor, textColor }) => {
  return (
    <div className='flex-1 m-10 text-center p-8 border-solid border-2 border-gray-200 shadow-lg hover:scale-105 duration-300'>
        <img src={image} alt="/" className='w-1/2 mx-auto'/>
        <h1 className='font-bold text-3xl p-4 m-4'>{title}</h1>
        <h1 className='font-bold text-3xl p-4 m-4'>{cost}</h1>
        <div className='text-xl p-6 space-y-4'>
            <p className='border-b-2 border-gray-200'>{storage}</p>
            <p className='border-b-2 border-gray-200'>{usersAllowed}</p>
            <p className='border-b-2 border-gray-200'>{maxStorage}</p>
        </div>
        <button className={`py-4 px-16 font-semibold rounded-md ${textColor} ${btnColor}`}>
            Start Trial
        </button>
    </div>
  )
}

export default Card
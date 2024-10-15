import React from 'react'
import { useState } from 'react'
const Home = () => {

    const [bgColor, setBgColor] = useState('bg-white');

    const handleFocus = () => {
        setBgColor('bg-background')
    }

    const handleOnBlur = () => {
        setBgColor('bg-background')
    }
  return (
    <>
      <div className='bg-background h-screen flex items-center justify-center cursor-pointer font-sans'>
        <div className='bg-primary flex flex-col max-w-full p-8 rounded gap-8'>
            <h2 className='font-bold font-sans leading-loose text-2xl text-background'>Enter your name to begin </h2>
            <input
             type="text" 
             name="name" 
             placeholder='Type your name here' 
             className=' text-center font-sans text-gray-700 p-2 rounded-full focus:outline-none border border-gray-300' 
             onFocus={handleFocus}   
             onBlur={handleOnBlur}
             />
            <div className='flex justify-center '>
                <button className='bg-background py-2 px-8 text-white font-sans font-bold text-lg rounded'>Start Playing</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home

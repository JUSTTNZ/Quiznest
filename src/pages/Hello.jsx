import React, {useContext, useState} from 'react'
import { NameContext } from '../Context/NameContext'
const Hello = () => {
  const {name} = useContext(NameContext)
  return (
    <>
       <div className=' flex flex-col justify-center gap-4 px-2 bg-background w-full h-[200px] text-white text-2xl '>
        <p className=''>Hello {name.toUpperCase()}👋</p>
        <p>Please select a category you would like to play</p>
      </div>
    </>
  )
}

export default Hello

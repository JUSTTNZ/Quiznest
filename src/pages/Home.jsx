import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const [bgColor, setBgColor] = useState('bg-white');
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false)
    
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
      setError(false)
    }

    const handleSubmit = () => {
      
    }

    const handleFocus = () => {
        setBgColor('bg-background')
    }

    const handleOnBlur = () => {
        setBgColor('bg-background')
    }

    const navigate = useNavigate();

    const navigateToSubjectPage = () => {
      if(inputValue.trim() === '') {
        setError(true)
      }
      else {
        alert(`welcome ${inputValue.toUpperCase}`)
      }

      navigate('/subject')
    }
  return (
    <>
      <div className='bg-background h-screen flex items-center justify-center cursor-pointer font-sans'>
        <div className='bg-primary flex flex-col max-w-full p-8 rounded gap-8'>
            <h2 className='font-bold font-sans leading-loose text-2xl text-background'>Enter your name to begin </h2>
            <input
             type="text" 
             name="name" 
             value={inputValue}
             onChange={handleInputChange}
             placeholder='Type your name here' 
             className=' text-center font-sans text-gray-700 p-2 rounded-full focus:outline-none border border-gray-300' 
             onFocus={handleFocus}   
             onBlur={handleOnBlur}
             />
            {error && <p className='text-red-500 mt-2'>Name cannot be empty!</p>} 
            <div className='flex justify-center '>
                <button  
                onClick={navigateToSubjectPage}
                disabled={inputValue.trim() === ''}
                className='bg-background py-2 px-8 text-white font-sans font-bold text-lg rounded transition transform duration-300 active:bg-yellow-700 active:scale-95'>Start Playing</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home

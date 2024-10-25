/* eslint-disable no-unused-vars */
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NameContext } from '../Context/NameContext';

const Login = () => {
  const [bgColor, setBgColor] = useState('bg-white');
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const [errorTimerMessage, setErrorTimeMessage] = useState('');
  const [showError, setShowError] = useState(false);

  const { setName } = useContext(NameContext);


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError(false);
    setErrorTimeMessage('');
    setShowError(false);
  };

  const handleFocus = () => {
    setBgColor('bg-background');
  };

  const handleOnBlur = () => {
    setBgColor('bg-background');
  };

  const displaySequentialErrorMessages = () => {
    setShowError(true);
    setErrorTimeMessage('Name cannot be empty! 😁');
    setTimeout(() => {
      setShowError(false);
      setTimeout(() => {
        setShowError(true);
        setErrorTimeMessage('This field is required!');
        setTimeout(() => {
          setShowError(false);
        }, 3000);
      }, 500);
    }, 3000);
  };

  const navigate = useNavigate();

  const navigateToSubjectPage = () => {
    if (inputValue.trim() === '') {
      setError(true);
      displaySequentialErrorMessages();
      console.log("Error: Name cannot be empty!");
    } else {
      alert(`Welcome ${inputValue.toUpperCase()}`);
      setName(inputValue)
      navigate('/home');
    }
  };

  return (
    <>
      <div className='bg-background h-screen flex items-center justify-center cursor-pointer font-sans'>
      <span className='absolute top-4 left-12 text-4xl text-white font-bold'>QUIZNEST.</span>
        <div className='bg-primary flex flex-col max-w-full mx-4 p-8 rounded gap-8'>
          <h2 className='font-semibold font-poppins leading-loose text-xl text-background'>
            Enter your name to begin
          </h2>
          <input
            type="text"
            name="name"
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Type your name here'
            className='text-center font-poppins font-semibold text-gray-700 p-2 rounded-full focus:outline-none border border-gray-300'
            onFocus={handleFocus}
            onBlur={handleOnBlur}
          />
          <div className='mb-4'>
            <p
              className={`text-red-500 flex justify-center transition-opacity duration-1000 ease-in-out ${
                showError ? 'opacity-100 ' : 'opacity-0  mb-0'
              }`}
            >
              {errorTimerMessage}
            </p>
          </div>
          
          <div className='flex justify-center mt-[-40px]'>
            <button
              onClick={navigateToSubjectPage}
              className='bg-background py-2 px-8 font-poppins text-white  font-semibold text-lg rounded transition transform duration-300 active:bg-yellow-700 active:scale-95'>
              Start Playing
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

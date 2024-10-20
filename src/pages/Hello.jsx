import  { useContext, useEffect, useState } from 'react';
import { NameContext } from '../Context/NameContext';

const Hello = () => {
  const { name } = useContext(NameContext);
  const [scale, setScale] = useState(0); 

  

  useEffect(() => {
    const timer = setTimeout(() => {
      setScale(1); // 
    }, 100); // 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes moveBlob {
            0% {
              left: -3rem; /* Start off-screen */
            }
            50% {
              left: calc(100% + 3rem); /* End position (off-screen right) */
            }
            100% {
              left: -3rem; /* Start again */
            }
          }

          .animate-moveBlob {
            animation: moveBlob 10s linear infinite;
          }

          .blob {
            transform: scale(${scale});
            transition: transform 0.8s ease-in-out; /* Smooth scaling effect */
          }
        `}
      </style>
      <div className='relative flex md:pl-[30px] flex-col justify-center gap-4 px-2 bg-background w-full h-[200px] text-white text-2xl overflow-hidden'>
        <p className={`text font-semibold font-poppins ${scale === 0 ? 'opacity-0' : 'opacity-100'}`}>Hello {name.toUpperCase()}👋</p>
        <p className={`text font-semibold font-poppins ${scale === 0 ? 'opacity-0' : 'opacity-100'}`}>Please select a category you would like to play</p>
        <div
          className={`absolute left-0 transform -translate-y-1/2 w-[150px] h-[150px] rounded-full animate-moveBlob z-0 blob`}
          style={{
            background: `linear-gradient(to right, rgba(42, 115, 122, 0.3), rgba(255, 255, 255, 0.3))`
          }}
        ></div>
      </div>
    </>
  );
}

export default Hello;


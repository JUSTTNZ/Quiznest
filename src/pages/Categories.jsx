import {  useNavigate } from "react-router-dom"
import { setAddition, setDivision, setMultiplication, setSubtraction } from "../action";
import { useDispatch } from "react-redux";
export const Categories = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const startAdditionQuiz = () => {
  navigate('/home/add')
    dispatch(setDivision(false));
    dispatch(setMultiplication(false))
    dispatch(setSubtraction(false));
    dispatch(setAddition(true));
    
    
  
};
  const startSubtractionQuiz = () => {
    navigate('/home/subtraction')
      dispatch(setAddition(false));
      dispatch(setDivision(false));
      dispatch(setMultiplication(false))
      dispatch(setSubtraction(true));
      
      
    
  };
  const startDivisionQuiz = () => {
    navigate('/home/division')
      dispatch(setAddition(false));
      dispatch(setMultiplication(false))
      dispatch(setSubtraction(false));
      dispatch(setDivision(true));
      
    
  };
  const startMultiplicationQuiz = () => {
    navigate('/home/multiplication')
      dispatch(setAddition(false));
      dispatch(setSubtraction(false));
      dispatch(setDivision(false));
      dispatch(setMultiplication(true))
      
    
  };
  
  
    return(
        <div className='  bg-[#dbf5ff] w-full  md:h-[430px] h-screen '>
            <div className="container mx-auto ">
                <div className="flex pl-3 md:pl-0 lg:pl-0 xl-0 md:justify-center  items-center ">
                <h3 className="text-black text-center text-2xl md:text-2xl lg:text-2xl font-poppins font-semibold py-3 ">Categories</h3>
    
                </div>
              
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 md:p-[50px]" >
                    <div className="flex flex-col items-center ">
                    <div className="rounded-full bg-red-orange shadow-orange-shadow  w-40 h-40 flex justify-center items-center  text-4xl text-white font-semibold font-poppins cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 " onClick={startAdditionQuiz}>
                  2+2
                  </div>
                  <p className="text-2xl font-semibold mt-2 ml-8">Addition</p>
                  </div>

                    <div className="flex flex-col items-center" > 
                    <div className="rounded-full bg-custom-blue w-40 h-40 flex justify-center items-center  text-4xl text-white font-semibold font-poppins cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" onClick={startSubtractionQuiz}>
                  2-2
                  </div>
                  <p className="text-2xl font-semibold mt-2 ml-4">subtraction</p>
                  </div>
                    <div className="flex flex-col items-center">
                    <div className="rounded-full bg-green-bg w-40 h-40 flex justify-center items-center  text-4xl text-white font-semibold font-poppins cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" onClick={startDivisionQuiz}>
                  12/2
                  </div>
                  <p className="text-2xl font-semibold mt-2 ml-8">Division</p>
                  </div>
                    <div className="flex flex-col items-center">
                    <div className="rounded-full bg-pinks w-40 h-40 flex justify-center items-center  text-4xl text-white font-semibold font-poppins cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" onClick={startMultiplicationQuiz}>
                  2X2
                  </div>
                  <p className="text-2xl font-semibold mt-2 ml-4">multiplication</p>
                  </div>
                </div>
            </div>
       
      </div>
    )
}
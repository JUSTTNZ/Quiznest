import { Addition } from "./Addition"
import { useNavigate } from "react-router-dom"
export const Categories = () => {
    const navigate = useNavigate()
    const addition = () => {
        console.log('yes')
       navigate('add')
       
    }
    return(
        <div className='  bg-[#dbf5ff] w-full h-auto md:h-[359px] '>
            <div className="container mx-auto ">
                <div className="flex pl-3 md:pl-0 lg:pl-0 xl-0 md:justify-center  items-center ">
                <h3 className="text-black text-center text-2xl md:text-2xl lg:text-2xl font-black py-3 ">Categories</h3>
    
                </div>
              
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 md:p-[50px]" >
                    <div className="flex flex-col items-center">
                    <div className="rounded-full bg-blue-700 w-40 h-40 flex justify-center items-center  text-4xl text-white" onClick={addition}>
                  2+2
                  </div>
                  <p className="text-2xl font-semibold mt-2">Addition</p>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="rounded-full bg-blue-700 w-40 h-40 flex justify-center items-center  text-4xl text-white">
                  2-2
                  </div>
                  <p className="text-2xl font-semibold mt-2">subtraction</p>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="rounded-full bg-blue-700 w-40 h-40 flex justify-center items-center  text-4xl text-white">
                  12/2
                  </div>
                  <p className="text-2xl font-semibold mt-2">Division</p>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="rounded-full bg-blue-700 w-40 h-40 flex justify-center items-center  text-4xl text-white">
                  2X2
                  </div>
                  <p className="text-2xl font-semibold mt-2">multiplication</p>
                    </div>
                </div>
            </div>
       
      </div>
    )
}
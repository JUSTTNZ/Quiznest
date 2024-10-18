import { Link } from "react-router-dom"
export const Categories = () => {
    return(
        <div className='  bg-[#dbf5ff] w-full md:h-[359px] '>
            <div className="container mx-auto ">
                <div className="flex pl-3 md:pl-0 lg:pl-0 xl-0 md:justify-center  items-center ">
                <h3 className="text-black text-center text-2xl md:text-2xl lg:text-2xl font-black py-3 ">Categories</h3>
    
                </div>
              
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 md:p-[50px]" >
                    <div className="flex flex-col items-center "><Link to="/home/add">
                    <div className="rounded-full bg-red-orange shadow-orange-shadow  w-40 h-40 flex justify-center items-center  text-4xl text-white font-semibold font-poppins">
                  2+2
                  </div>
                  <p className="text-2xl font-semibold mt-2 ml-8">Addition</p>
                  </Link></div>
                    <div className="flex flex-col items-center"><Link to="/home/subtraction">
                    <div className="rounded-full bg-blue-700 w-40 h-40 flex justify-center items-center  text-4xl text-white transition duration-300 ease-in-out transform hover:bg-yellow-500 active:scale-95">
                  2-2
                  </div>
                  <p className="text-2xl font-semibold mt-2 ml-4">subtraction</p>
                  </Link></div>
                    <div className="flex flex-col items-center"><Link to="/home/division">
                    <div className="rounded-full bg-blue-700 w-40 h-40 flex justify-center items-center  text-4xl text-white transition duration-300 ease-in-out transform hover:bg-yellow-500 active:scale-95">
                  12/2
                  </div>
                  <p className="text-2xl font-semibold mt-2 ml-8">Division</p>
                  </Link></div>
                    <div className="flex flex-col items-center"><Link to="/home/multiplication">
                    <div className="rounded-full bg-blue-700 w-40 h-40 flex justify-center items-center  text-4xl text-white transition duration-300 ease-in-out transform hover:bg-yellow-500 active:scale-95">
                  2X2
                  </div>
                  <p className="text-2xl font-semibold mt-2 ml-4">multiplication</p>
                  </Link></div>
                </div>
            </div>
       
      </div>
    )
}
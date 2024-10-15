import { CloseCircle } from 'iconsax-react';
export const Addition = () => {
    return(
        <div className="h-auto bg-[#BF5700]">
            <div className="container mx-auto p-12">
                <div className="flex pl-6 ">
                <CloseCircle size="32" color="#FF8A65"/>
                </div>
                <div className='container py-[100px] flex flex-col justify-center items-center'>
                    <p className='text center'>
                        Question 1 of 5
                    </p>
                   <h2 className='text-8xl tracking-tight mb-5'>
                    19+7=?
                   </h2>
                   <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 py-5 mb-4'>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center rounded-full bg-gray-700 w-24 h-24 text-4xl text-white'>
                            26
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center rounded-full bg-gray-700 w-24 h-24 text-4xl text-white'>
                            26
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center rounded-full bg-gray-700 w-24 h-24 text-4xl text-white'>
                            26
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center rounded-full bg-gray-700 w-24 h-24 text-4xl text-white'>
                            26
                        </div>
                    </div>
                   </div>
                   <div className='bg-gray-700 py-2 px-2 mt-3 text-white'>
                    Next Question
                   </div>
                </div>

            </div>

        </div>
    )
}
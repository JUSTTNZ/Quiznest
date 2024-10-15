import { CloseCircle } from 'iconsax-react';
import { AdditionQuestion } from '../components/Addarray';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Addition = () => {
   const navigate = useNavigate()
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const questions = Object.values(AdditionQuestion)

    const NextQuestion = () => {
        if (currentQuestion < questions.length -1){
            setCurrentQuestion(
                currentQuestion + 1
            )
        }else{
            navigate('/score')
        }
     
    }
    return(
        <div className="h-auto bg-[#BF5700]">
            <div className="container mx-auto p-12">
                <div className="flex pl-6 ">
                <CloseCircle size="32" color="#FF8A65"/>
                </div>
                <div  >
                {questions.map((problem, index)=> (
                     <div key={index}
                     className={`container py-[100px] flex flex-col justify-center items-center
                      ${index === currentQuestion ? 'block': 'hidden'}
                     
                     `} >
                        <p className='text center' >
                            Question {currentQuestion + 1} of {questions.length}
                        </p>
                       <h2 className='text-8xl tracking-tight mb-5'>
                        {problem.question}
                       </h2>
                       <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 py-5 mb-4'>
                        {problem.options.map((Option,optionindex) => (
 <div className='flex justify-center items-center' key={optionindex}>
 <div className='flex justify-center items-center rounded-full bg-gray-700 w-24 h-24 text-4xl text-white'>
     {Option}
 </div>
</div>
                        ))}
                       


                       </div>
                       
                       <div className='bg-gray-700 py-2 px-2 mt-3 text-white'
                       
                       onClick={NextQuestion}
                       aria-disabled={currentQuestion >= questions.length-1}
                       disabled={currentQuestion >= questions.length - 1}
                       >
                                Next Question
                       </div>
                    </div>
                ))}

                </div>
               

            </div>

        </div>
    )
}
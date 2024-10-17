import { CloseCircle } from 'iconsax-react';
import { AdditionQuestion } from '../components/Addarray';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Addition = () => {
   const navigate = useNavigate()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [activeOption, setActiveOption] = useState(null)
    const [selectanswer, setselectedanswer] = useState(null)
    const [isCorrect, setIsCorrect] = useState(null);
    const questions = Object.values(AdditionQuestion)
    const HandleAnswer = (answer) => {
        setselectedanswer(answer)
        const correctanswer = questions[currentQuestion].answer
        if (answer === correctanswer){
            setIsCorrect(true)
        }else{
            setIsCorrect(false)
        }
        console.log('clicked')
    }
    const NextQuestion = () => {
        if (selectanswer !== null && currentQuestion < questions.length -1 ){
            setCurrentQuestion(
                currentQuestion + 1
            )
            setselectedanswer(null)
            console.log('moving')
        }else
            if(currentQuestion >= questions.length -1){
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
                       <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 py-5 mb-4'>
                        {problem.options.map((Option, optionIndex) => (
                            <div className='flex justify-center items-center' key={optionIndex}>
                            <div
                                className={`flex justify-center items-center rounded-full w-20 h-20 md:w-24 md:h-24 text-3xl md:text-4xl text-white cursor-pointer transition duration-300 ease-in-out transform 
                                ${activeOption === Option ? 'bg-yellow-500' : 'bg-gray-700'} 
                                hover:bg-yellow-500 active:scale-95`}
                                onClick={() => HandleAnswer(Option)}
                            >
                                {Option}
                            </div>
                            </div>
                        ))}
                        </div>

                        <button
                        className={`bg-gray-700 py-2 px-2 mt-3 text-white cursor-pointer 
                            ${selectanswer === null ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-500'}
                        `}
                        onClick={() => {
                            NextQuestion();
                            setselectedanswer(null); // Clear selected answer when moving to the next question
                        }}
                        disabled={selectanswer === null || currentQuestion >= questions.length - 1}
                        aria-disabled={selectanswer === null || currentQuestion >= questions.length - 1}
                        >
                        Next Question
                        </button>

                     
                    </div>
                ))}

                </div>
               

            </div>

        </div>
    )
}
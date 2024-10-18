import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SubtractionQuestion } from '../components/SubtractionArray'; 
import { CloseCircle } from 'iconsax-react';
const Subtraction = () => {

    const navigate = useNavigate()
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [isCorrect, setIsCorrect] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const questions = Object.values(SubtractionQuestion)

    const HandleAnswer = (answer) => {
        setSelectedAnswer(answer)
        const correctAnswer = questions[currentQuestion].answer
        if(answer == correctAnswer) {
            setIsCorrect(true)
        }
        else{
            setIsCorrect(false)
        }
        console.log('clicked')
    }

    const NextQuestion = () => {
        if(selectedAnswer !== null && currentQuestion < questions.length -1) {
            setCurrentQuestion(currentQuestion + 1)

            setSelectedAnswer(null)
            console.log('moving')
        }
        else 
            if(currentQuestion >= questions.length -1 ) {
                navigate('/score')
            }
    }



  return (
    <>
      <div className="h-auto bg-[#33ffd5]">
            <div className="container mx-auto p-12">
                <div className="flex pl-6 ">
                <CloseCircle size="32" color="#FF8A65"/>
                </div>
                <div  >
                {questions.map((problem, index)=> (
                     <div key={index}
                     className={`container py-[100px] h-screen flex flex-col justify-center items-center
                      ${index === currentQuestion ? 'block': 'hidden'}
                     
                     `} >
                        <p className='text center' >
                            Question {currentQuestion + 1} of {questions.length}
                        </p>
                       <h2 className='text-7xl text-center tracking-tight mb-5'>
                        {problem.question}
                       </h2>
                       <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 py-5 mb-4' >
                        {problem.options.map((Option,optionindex) => (
                        <div className='flex justify-center items-center' key={optionindex}>
                        <div className='flex justify-center items-center rounded-full bg-gray-700 w-24 h-24 text-4xl text-white cursor-pointer'onClick={()=> HandleAnswer(Option)} >
                            {Option}
                        </div>
                        </div>
                        ))}
                       </div>
                 
                       <button className={`bg-gray-700 py-2 px-2 mt-3 text-white cursor-pointer 
                         ${selectedAnswer === null ? 'cursor-not-allowed':''}
                       `}
                       onClick={NextQuestion}
                       aria-disabled={currentQuestion >= questions.length-1}
                       disabled={currentQuestion >= questions.length - 1}
                       >Next Question</button>
                    </div>
                    ))}
                </div>
               

            </div>

        </div>
    </>
  )
}

export default Subtraction

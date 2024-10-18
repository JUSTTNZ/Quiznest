import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { SubtractionQuestion } from '../components/SubtractionArray'; 
import { CloseCircle } from 'iconsax-react';
import { setScore } from '../action.jsx';
import { Modal } from '../components/modal';

const Subtraction = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const score = useSelector((state) => {state.score})
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [activeOption, setActiveOption] = useState(null)
    const [previousAnswer, setPreviousAnswer] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const questions = Object.values(SubtractionQuestion)

    const HandleAnswer = (answer) => {
        const MainAnswer = questions[currentQuestion].answer;
        if(selectedAnswer === answer)  return;
       
        const wasCorrect = selectedAnswer === MainAnswer;
        const currentAnswer = answer === MainAnswer;
        setSelectedAnswer(answer)

        if(currentAnswer) {
            dispatch(setScore(score + 1))
        
        }

        else if(wasCorrect) {
            dispatch(setScore(score - 1))
        }

        setPreviousAnswer(selectedAnswer);
    }

    const moveToTheNextQuestion = () => {
        if(currentQuestion === questions.length - 1) {
            navigate('/score')
        }

        else {
            setCurrentQuestion(currentQuestion + 1)
            setSelectedAnswer(null);
            setPreviousAnswer(null);
        }
    }



    const NextQuestion = () => {
       const MainAnswer = questions[currentQuestion].answer;
        if(selectedAnswer !== MainAnswer) {
            setShowModal(true)
            return;
        }

        if(selectedAnswer !== null) {
            moveToTheNextQuestion()
        }
    }

    const CloseModal = () => {
        setShowModal(false)
        moveToTheNextQuestion()
    }


    const MainAnswer = questions[currentQuestion].answer;
    return (
        <>
        <div className="h-auto bg-gradient-to-r from-[#005c97] via-[#363795] to-[#005c97]">
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
                            <div className={`flex justify-center items-center rounded-full bg-[#00b09b] shadow-[#96c93d] shadow-[12rem] border-[10px] border-[#00b09b] border w-24 h-24 text-4xl text-white cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110
                            ${selectedAnswer === Option ? 'bg-[#00b09b80]':''}
                            `}
                            
                            onClick={()=> HandleAnswer(Option)} >
                                {Option}
                            </div>
                            </div>                  
                        ))}
                       </div>


                            <button
                            className={`bg-gray-700 py-2 px-2 mt-3 text-white cursor-pointer 
                                ${selectedAnswer === null ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-500'}
                            `}
                            onClick={NextQuestion}>
                            Next Question
                            </button>

                        </div>
                        ))}
                    </div>
                </div>
                <Modal isOpen={showModal} CloseModal={CloseModal} questions={questions} currentQuestion={questions[currentQuestion].question.replace('= ?', '')} MainAnswer={MainAnswer} />
            </div>
        </>
    )
}


export default Subtraction
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { MultiplicationQuestion } from '../components/MultiplicationArray'; 
import { CloseCircle } from 'iconsax-react';
import { setScore } from '../action.jsx';
import { Modal } from '../components/modal';

const Multiplication = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const score = useSelector((state) => state.score)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [activeOption, setActiveOption] = useState(null)
    const [previousAnswer, setPreviousAnswer] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const questions = Object.values(MultiplicationQuestion)

    const HandleAnswer = (answer) => {
        const MainAnswer = questions[currentQuestion].answer;
        if(selectedAnswer === answer)  return;
       
        const wasCorrect = selectedAnswer === MainAnswer;
        const currentAnswer = answer === MainAnswer;
        setSelectedAnswer(answer)

        if(currentAnswer) {
            dispatch(setScore(score + 1))
            console.log('score', score)
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
        <div className="h-auto bg-gradient-to-r from-[#7f00ff] to-[#e100ff]">
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
                            <div className={`flex justify-center items-center rounded-full bg-[#7f00ff] shadow-[#7f00ff] shadow-[12rem] border-[10px] border-[#7f00ff] border w-24 h-24 text-4xl text-white cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110
                            ${selectedAnswer === Option ? 'bg-[#e100ff]':''}
                            `}
                            
                            onClick={()=> HandleAnswer(Option)} >
                                {Option}
                            </div>
                            </div>                  
                        ))}
                       </div>


                            <button className={`bg-[#FFE5DB] text-[#751F00] shadow-[#0000004d] font-semibold font-poppins  text-[1.2rem] py-2 px-5 rounded-[8px]  mt-3  cursor-pointer 
                         ${selectedAnswer === null ? 'cursor-not-allowed':''}
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

export default  Multiplication

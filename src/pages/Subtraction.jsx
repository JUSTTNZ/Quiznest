/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { SubtractionQuestion, getRandomQuestions } from '../components/SubtractionArray'; 
import { CloseCircle } from 'iconsax-react';
import { resetScore, setHighScore, setScore } from '../action.jsx';
import { Modal } from '../components/modal';

export const selectedQuestions = getRandomQuestions(SubtractionQuestion, 10);

const Subtraction = () => {

    const isSubtraction = useSelector((state) => state.isSubtraction);

    const bgColor = isSubtraction ? 'bg-blue-wrong-answer-popup' : '';
    const btnColor = isSubtraction ? 'text-blue-text bg-pink-button':''
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const score = useSelector((state) => state.score)
    const highscore = useSelector((state) => state.HighScore)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [previousAnswer, setPreviousAnswer] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const questions = selectedQuestions;

    useEffect(() => {
        dispatch(resetScore())
    },[dispatch])
    const HandleAnswer = (answer) => {
        const MainAnswer = Object.values(questions[currentQuestion])[0].answer;
        if(selectedAnswer === answer)  return;
       
        const wasCorrect = selectedAnswer === MainAnswer;
        const currentAnswer = answer === MainAnswer;
        setSelectedAnswer(answer)
        let newscore = score

        if(currentAnswer) {
         newscore += 10
            console.log('score', score)
        }

        else if(wasCorrect) {
            newscore -= 10
        }
         dispatch(setScore(newscore))
         if(newscore> highscore){
            dispatch(setHighScore(newscore))
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
       const MainAnswer = Object.values(questions[currentQuestion])[0].answer;
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
    const LeaveGame = () => {
        if (confirm("Are you sure you want to leave the game?")) {
          navigate('/home')
        } 
      }

    return (
        <>
         <div className="h-auto bg-custom-blue-dark ">
            <div className="container mx-auto p-12">
                <div className="flex pl-6 ">
                <CloseCircle size="32" color="#FFF"  onClick={LeaveGame}/>
                </div>
                <div  >
                {questions && questions.length > 0 && questions.map((question, index)=> (
                     <div key={index}
                     className={`container py-[80px] flex flex-col justify-center items-center
                      ${index === currentQuestion ? 'block': 'hidden'}
                     
                     `} >
                        <p className='text center text-white font-poppins' >
                         
                            Question {currentQuestion + 1} of {questions.length}
                        </p>
                       <h2 className=' text-[5rem] font-semibold tracking-tight mb-5 text-white font-poppins'>
                        {Object.values(question)[0].question}
                       </h2>

                       <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 py-5 mb-4' >
                        {Object.values(question)[0].options.map((Option,optionindex) => (
                            <div className='flex justify-center items-center' key={optionindex}>
                            <div className={`flex justify-center items-center rounded-full bg-blue-answers-bg shadow-blue-answers-shadow shadow-[12rem] border-[10px] border-blue-answers-border border w-28 h-28 text-[3rem] font-semibold text-white cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110
                            ${selectedAnswer === Option ? 'bg-blue-wrong-answer-popup':''}
                            `}
                            
                            onClick={()=> HandleAnswer(Option)} >
                                {Option}
                            </div>
                            </div>                  
                        ))}
                       </div>
                       <button className={`bg-custom-blue text-blue-text shadow-[#0000004d] font-semibold font-poppins  text-[1.2rem] py-2 px-5 rounded-[8px]  mt-3  cursor-pointer 
                         ${selectedAnswer === null ? 'cursor-not-allowed':''}
                       `}
                       
                       onClick={NextQuestion}>
                                Next Question
                       </button>
                    </div>
                ))}
                </div>
            </div>
            <Modal 
                isOpen={showModal} 
                CloseModal={CloseModal} 
                questions={questions}
                currentQuestion={Object.values(questions[currentQuestion])[0].question.replace('= ?', '')} // removes "= ?" from question
                MainAnswer={Object.values(questions[currentQuestion])[0].answer} // the correct answer
                bgColor={bgColor} 
                btnColor={btnColor}
            />
        </div>
        </>
    )
}

export default  Subtraction

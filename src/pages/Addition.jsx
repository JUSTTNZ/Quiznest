/* eslint-disable no-unused-vars */
import { CloseCircle } from 'iconsax-react';
import { AdditionQuestion } from '../components/Addarray';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetScore, setHighScore, setScore } from '../action';
import { Modal } from '../components/modal';
export const Addition = () => {
    const isAddition = useSelector((state) => state.isAddition);
    // const isAddition = true; 
    const bgColor = isAddition ? 'bg-red-orange' : '';
    const btnColor = isAddition ? 'bg-orange-btn text-orange-btn-text ':'';
   const navigate = useNavigate()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectanswer, setselectedanswer] = useState(null)
    const [previousAnswer, setPreviousAnswer] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const score = useSelector((state) => state.score)
    const highscore = useSelector((state) => state.HighScore)
    const questions = Object.values(AdditionQuestion)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(resetScore())
    },[dispatch])
    const HandleAnswer = (answer) => {
        const MainAnswer = questions[currentQuestion].answer;
        
        if (selectanswer === answer) return;
        // Track the previous answer before updating
        const wasCorrect = selectanswer === MainAnswer; 
        setselectedanswer(answer)
        // Score calculation based on the current answer

        let newscore = score

        if (answer === MainAnswer) {
            newscore += 10
            console.log('score', score)

        } else if (wasCorrect) {
           newscore -= 10
        }
        dispatch(setScore(newscore))

        if(newscore > highscore){
            dispatch(setHighScore(newscore))
        }
      
        // Update previous answer
        setPreviousAnswer(selectanswer);
    };
    
    
    const NextQuestion = () => {

        const MainAnswer = questions[currentQuestion].answer;
        if (selectanswer !== MainAnswer){
         setShowModal(true);
         return;
        } else{

        if (selectanswer !== null) {
        

            if (currentQuestion === questions.length - 1) {
                navigate('/score');
            }
            
            else {
                
                setCurrentQuestion(currentQuestion + 1);
                setselectedanswer(null);
                setPreviousAnswer(null)
            }
        }
    }
    };
    const CloseModal = () => {
        if (selectanswer !== null) {
            setShowModal(false);

            if (currentQuestion === questions.length - 1) {
                navigate('/score');
            }
            
            else {
                
                setCurrentQuestion(currentQuestion + 1);
                setselectedanswer(null);
                setPreviousAnswer(null)
            }
        }
        
    };

    const LeaveGame = () => {
        if (confirm("Are you sure you want to leave the game?")) {
          navigate('/home')
        } 
      }
    const MainAnswer = questions[currentQuestion].answer;
    return(
        <div className="h-auto bg-red-orange ">
            <div className="container mx-auto p-12">
                <div className="flex pl-6 ">
                <CloseCircle size="32" color="#FFF"  onClick={LeaveGame}/>
                </div>
                <div  >
                {questions.map((problem, index)=> (
                     <div key={index}
                     className={`container py-[80px] flex flex-col justify-center items-center
                      ${index === currentQuestion ? 'block': 'hidden'}
                     
                     `} >
                        <p className='text center text-white font-poppins' >
                         
                            Question {currentQuestion + 1} of {questions.length}
                        </p>
                       <h2 className=' text-[5rem] font-semibold tracking-tight mb-5 text-white font-poppins'>
                        {problem.question}
                       </h2>

                       <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 py-5 mb-4' >
                        {problem.options.map((Option,optionindex) => (
                            <div className='flex justify-center items-center' key={optionindex}>
                            <div className={`flex justify-center items-center rounded-full bg-[#EA8B69] shadow-[#a82d0080] shadow-[12rem] border-[10px] border-[hsl(16,95%,62%)] border w-28 h-28 text-[3rem] font-semibold text-white cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110
                            ${selectanswer === Option ? 'bg-[hsl(16,100%,53%)]':''}
                            `}
                            
                            onClick={()=> HandleAnswer(Option)} >
                                {Option}
                            </div>
                            </div>                  
                        ))}
                       </div>
                       <button className={`bg-[#FFE5DB] text-[#751F00] shadow-[#0000004d] font-semibold font-poppins  text-[1.2rem] py-2 px-5 rounded-[8px]  mt-3  cursor-pointer 
                         ${selectanswer === null ? 'cursor-not-allowed':''}
                       `}
                       
                       onClick={NextQuestion}>
                                Next Question
                       </button>
                    </div>
                ))}
                </div>
            </div>
            <Modal isOpen={showModal} CloseModal={CloseModal} questions={questions} currentQuestion={questions[currentQuestion].question.replace('= ?', '')} MainAnswer={MainAnswer}
            bgColor={bgColor} btnColor={btnColor}
            />
        </div>
    )
}




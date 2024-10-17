import { CloseCircle } from 'iconsax-react';
import { AdditionQuestion } from '../components/Addarray';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setScore } from '../action';
import { Modal } from '../components/modal';
export const Addition = () => {
   const navigate = useNavigate()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectanswer, setselectedanswer] = useState(null)
    const [previousAnswer, setPreviousAnswer] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const score = useSelector((state) => state.score)
    const questions = Object.values(AdditionQuestion)
    const dispatch = useDispatch()
    const HandleAnswer = (answer) => {
        const MainAnswer = questions[currentQuestion].answer;
        if (selectanswer === answer) return;
        // Track the previous answer before updating
        const wasCorrect = selectanswer === MainAnswer; 
        setselectedanswer(answer)
        // Score calculation based on the current answer
        if (answer === MainAnswer) {
            dispatch(setScore(score + 1));
            console.log('score', score)
        } else if (wasCorrect) {
            dispatch(setScore(score - 1));
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
    const MainAnswer = questions[currentQuestion].answer;
    return(
        <div className="h-auto bg-[#BF5700] bg-[#FF7544, #DB3A00] ">
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

                       <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 py-5 mb-4' >
                        {problem.options.map((Option,optionindex) => (
 <div className='flex justify-center items-center' key={optionindex}>
 <div className={`flex justify-center items-center rounded-full bg-[#EA8B69] shadow-[#a82d0080] shadow-[12rem] border-[10px] border-[hsl(16,95%,62%)] border w-24 h-24 text-4xl text-white cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110
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
                       
                       onClick={NextQuestion}
                       
                       >
                                Next Question
                       </button>
                    

                     
                    </div>
                ))}

                </div>
               

            </div>
<Modal isOpen={showModal} CloseModal={CloseModal} questions={questions} currentQuestion={questions[currentQuestion].question.replace('= ?', '')} MainAnswer={MainAnswer} />
        </div>
    )
}




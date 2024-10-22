/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DivisionQuestion} from '../components/Divisionarray.jsx';
import { CloseCircle } from 'iconsax-react';
import { resetScore, setHighScore, setScore } from '../action.jsx';
import { Modal } from '../components/modal';
import { GetRandomQuestions } from '../components/random.jsx';

// Use the selected questions

const Division = () => {
    const isDivision = useSelector((state) => state.isDivision);
    const bgColor = isDivision ? 'bg-green-wrong-answer-popup' : '';
    const btnColor = isDivision ? 'text-green-text bg-green-button' : '';
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const score = useSelector((state) => state.score);
    const highscore = useSelector((state) => state.highScore);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [previousAnswer, setPreviousAnswer] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questionsrandom, setQuestionsrandom] = useState([]); 
    

    useEffect(() => {
        dispatch(resetScore())
        const selectedShuffledQuestions = GetRandomQuestions(DivisionQuestion, 10);
        setQuestionsrandom(selectedShuffledQuestions); // make question shuffle only when components mounts
    },[dispatch])
  // Ensure that questions are loaded before accessing them
  if (questionsrandom.length === 0) {
    return 
}
const questions = Object.values(questionsrandom)
    const handleAnswer = (answer) => {
        const mainAnswer = questions[currentQuestion].answer;
        if (selectedAnswer === answer) return;

        const wasCorrect = selectedAnswer === mainAnswer;
        const currentAnswer = answer === mainAnswer;
        setSelectedAnswer(answer);

        let newScore = score;
        if (currentAnswer) {
            newScore += 10;
            console.log('Correct answer. Score:', newScore);
        } else if (wasCorrect) {
            newScore -= 10;
        }

        dispatch(setScore(newScore));
        if (newScore > highscore) {
            dispatch(setHighScore(newScore));
        }
        setPreviousAnswer(selectedAnswer);
    };

    const moveToTheNextQuestion = () => {
        if (currentQuestion === questions.length - 1) {
            navigate('/score');
        } else {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setPreviousAnswer(null);
        }
    };

    const nextQuestion = () => {
        const mainAnswer = questions[currentQuestion].answer;
        if (selectedAnswer !== mainAnswer) {
            setShowModal(true);
            return;
        }

        if (selectedAnswer !== null) {
            moveToTheNextQuestion();
        }
    };

    const CloseModal = () => {
        setShowModal(false);
        moveToTheNextQuestion();
    };

    const leaveGame = () => {
        if (confirm("Are you sure you want to leave the game?")) {
            navigate('/home');
        }
    };
    const MainAnswer = questions[currentQuestion].answer;
    return (
        <>
            <div className="h-auto bg-green-bg">
                <div className="container mx-auto p-12">
                    <div className="flex pl-6">
                        <CloseCircle size="32" color="#FFF" onClick={leaveGame} />
                    </div>
                    <div>
                        {questions.map((question, index) => (
                            <div key={index}
                                className={`container py-[80px] flex flex-col justify-center items-center
                                    ${index === currentQuestion ? 'block' : 'hidden'}
                                `}>
                                <p className='text-center text-white font-poppins'>
                                    Question {currentQuestion + 1} of {questions.length}
                                </p>

                                <h2 className='text-[5rem] font-semibold tracking-tight mb-5 text-white font-poppins'>
                                    {question.question}
                                </h2>

                                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 py-5 mb-4'>
                                    {question.options.map((option, optionIndex) => (
                                        <div className='flex justify-center items-center' key={optionIndex}>
                                            <div className={`flex justify-center items-center rounded-full bg-green-answers-bg shadow-green-answers-shadow shadow-[12rem] border-[10px] border-green-answers-border w-28 h-28 text-[3rem] font-semibold text-white cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110
                                                ${selectedAnswer === option ? 'bg-green-wrong-answer-popup' : ''}
                                            `}
                                                onClick={() => handleAnswer(option)}>
                                                {option}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button className={`bg-green-button text-green-text shadow-[#0000004d] font-semibold font-poppins text-[1.2rem] py-2 px-5 rounded-[8px] mt-3 cursor-pointer 
                                    ${selectedAnswer === null ? 'cursor-not-allowed' : ''}
                                `}
                                    onClick={nextQuestion}
                                    disabled={selectedAnswer === null}>
                                    Next Question
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Modal isOpen={showModal}
             CloseModal={CloseModal} 
             questions={questions}
            currentQuestion={questions[currentQuestion].question.replace('= ?', '')} 
            MainAnswer={MainAnswer}
            bgColor={bgColor}
             btnColor={btnColor}
            />
        </>
    );
};

export default Division;

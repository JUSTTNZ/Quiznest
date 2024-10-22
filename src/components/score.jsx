import { useSelector } from "react-redux";
import { useContext } from "react";
import { NameContext } from "../Context/NameContext";
import { useNavigate } from "react-router-dom";


export const Score = () => {
  const isAddition = useSelector((state) => state.isAddition);
  const isSubtraction = useSelector((state) => state.isSubtraction);
  const isDivision = useSelector((state) => state.isDivision);
  const isMuliplication = useSelector((state) => state.isMuliplication);
  const navigate = useNavigate()
  const btncolor = isAddition ? 'bg-orange-btn text-orange-btn-text': isSubtraction ?'text-blue-text bg-custom-blue':isDivision? 'text-green-text bg-green-button': isMuliplication? 'text-pink-text bg-pink-button':''
    const bgcolor = isAddition ? 'bg-red-orange': isSubtraction ?'bg-custom-blue-dark':isDivision? 'bg-green-bg ': isMuliplication? 'bg-pinks ':''
  const PlayAgain = () => {
    if(isAddition){
      navigate('/home/add')
    } else if (isSubtraction){
      
      navigate('/home/subtraction')
    } else if (isDivision){
      navigate('/home/division')
    } else if(isMuliplication){
      navigate('/home/multiplication')
    }


  }
  const Mainmenu = () => {
    navigate('/home')

  }
  const { name } = useContext(NameContext)
  const score = useSelector((state) => state.score)
  const highscore = useSelector((state) => state.HighScore)
    return (
      <div className={` h-screen w-full  ${bgcolor}`}>
        <div className=" container mx-auto p-12 flex justify-center items-center">
          <div className="max-w-md">
          <h4 className="text-center text-white font-poppins font-semibold text-[2rem]  md:text-[4rem]">Congratulations</h4>
          <p className="text-center text-white text-[1rem] md:text-[1.2rem]">Weldone {name}, you just finished the addition category! 🚀</p>
          <div className="grid grid-cols-2 gap-4 py-12">
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-white text-[1.1rem] font-poppins">Score</h4>
           
              <p className="text-white text-[4rem] font-semibold font-poppins">{score}</p>
            </div>
           
            <div className="flex flex-col  items-center justify-center">
              <p className="text-white text-[1.1rem] font-poppins">Highscore</p>
              <p className="text-white text-[4rem] font-poppins font-semibold">{highscore}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center justify-center">
              <button onClick={PlayAgain} className={`font-semibold text-[1.1rem] md:text-[1.4rem]  font-poppins py-2 px-4 rounded ${btncolor}`}>
                Play Again
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button onClick={Mainmenu} className={`font-semibold text-[1.1rem] md:text-[1.4rem] font-poppins py-2 px-4 rounded ${btncolor}`}>
                Main menu
              </button>
            </div>
          </div>
          </div>
       
        </div>
      </div>
    );
  };
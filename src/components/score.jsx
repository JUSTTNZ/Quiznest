import { useSelector } from "react-redux";
import { useContext } from "react";
import { NameContext } from "../Context/NameContext";
import { useNavigate } from "react-router-dom";
import { setAddition } from "../action";

export const Score = () => {
  const isAddition = useSelector((state) => state.isAddition);
  const isSubtraction = useSelector((state) => state.isSubtraction);
  const isDivision = useSelector((state) => state.isDivision);
  const isMuliplication = useSelector((state) => state.isMuliplication);
  const navigate = useNavigate()
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
      <div className="container h-screen mx-auto p-12 flex justify-center items-center bg-orange-500">
        <div className="max-w-md  p-6 ">
          <h4 className="text-center">Congratulations</h4>
          <p className="text-center">Weldone {name}, you just finished the addition category! 🚀</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center">
              <h4>Score</h4>
           
              <p>{score}</p>
            </div>
           
            <div className="flex flex-col items-center justify-center">
              <p>Highscore</p>
              <p>{highscore}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center justify-center">
              <button onClick={PlayAgain} className="bg-orange-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Play Again
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button onClick={Mainmenu} className="bg-orange-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Main menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
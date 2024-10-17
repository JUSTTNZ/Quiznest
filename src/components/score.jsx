import { useSelector } from "react-redux";

export const Score = () => {
  const score = useSelector((state) => state.score)
    return (
      <div className="container h-screen mx-auto p-12 flex justify-center items-center bg-orange-500">
        <div className="max-w-md  p-6 ">
          <h4 className="text-center">Congratulations</h4>
          <p className="text-center">Weldone name, you just finished the addition category! 🚀</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center">
              <h4>Score</h4>
           
              <p>{score}</p>
            </div>
           
            <div className="flex flex-col items-center justify-center">
              <p>Highscore</p>
              <p>60</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center justify-center">
              <button className="bg-orange-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Play Again
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-orange-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Main menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
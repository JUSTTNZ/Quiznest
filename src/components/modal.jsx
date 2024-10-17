export const Modal = ({ isOpen,CloseModal, currentQuestion, MainAnswer }) => {
    if (!isOpen) return null; 
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-red-orange shadow-[#0000003a] rounded-lg shadow-lg p-6 max-w-md w-full">
          <p className="mt-4 text-white">
          Oops, that's not the right answer, {currentQuestion} is  actually <span className='text-lg'>{MainAnswer}</span>
          </p>
          <div className="mt-6 flex justify-center">
            <button onClick={CloseModal}
              className="bg-[#FFE5DB] text-[#751F00] shadow-[#0000004d] font-semibold font-poppins  text-[1rem] py-2 px-5 rounded-[8px]  mt-3  cursor-pointer ">
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  };
  
import { CurrentGameDataWithReset } from '../interfaces/interfaces';

const GameResult = ({
  currentGameData,
  resetFunction,
}: CurrentGameDataWithReset) => {
  return (
    <div>
      <div className='bg-slate-50 flex justify-center items-center p-10'>
        <div className=' bg-white shadow-md rounded-3xl px-8 pt-4 pb-8 mb-2'>
          <h3 className=' flex justify-center items-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500 mb-4'>
            Well done!
          </h3>
          <p className=' mb-2'>
            You got {currentGameData.userScore} points! <br /> Your current high
            score is {currentGameData.topScore}
          </p>
          <div className='px-2 flex justify-center items-center'>
            <div className='flex rounded-full border  mx-auto bg-gradient-to-tr from-blue-200 via-blue-400 to-blue-600 p-1 shadow-lg leading-tight focus:outline-none focus:shadow-outline transform transition-transform duration-300 hover:scale-105 '>
              <button
                onClick={() => resetFunction()}
                className='flex font-bold rounded-full px-3 py-2 text-black bg-white disabled:opacity-80 '
              >
                Try again?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameResult;

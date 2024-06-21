import { CurrentGameData } from '../interfaces/interfaces';

const GameResult = ({ currentGameDataProps }: CurrentGameData) => {
  return (
    <div>
      <div className=' min-h-screen bg-slate-50 flex justify-center items-center'>
        <div className=' bg-white shadow-md rounded-3xl px-8 pt-4 pb-8 mb-4'>
          <h3 className=' flex justify-center items-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500 mb-4'>
            Game Over!!!
          </h3>
          <p>
            You got {currentGameDataProps.userScore} points! <br /> Your current
            high score is {currentGameDataProps.topScore}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameResult;

import { useState } from 'react';
import GameResult from './GameResult';
import { GameState } from '../interfaces/interfaces';
import GameSelectionNavbar from './GameSelectionNavbar';
import { useAuth0 } from '@auth0/auth0-react';

const MinimalPairs = () => {
  const { user } = useAuth0();
  const email = user?.email as string;

  const arrayOfPairs = [
    ['Bar', 'Pa'],
    ['Bear', 'Pear'],
    ['Bill', 'Pill'],
    ['Cub', 'Cup'],
    ['Tab', 'Tap'],
  ];

  const arrayOfMinimalPairChoices = [
    ['/b/ & /p/'],
    ['/i:/ & /ɪ/'],
    ['/ɪ/  & /ɪə/'],
  ];

  const [currentGameData, setCurrentGameData] = useState<GameState>({
    userEmail: email,
    userScore: 0,
    topScore: 0,
    clicks: 0,
    answerArray: arrayOfPairs.map((pair) => pair[flipACoin()]),
    buttonDisabler: arrayOfPairs.map(() => false),
  });

  function flipACoin() {
    return Math.floor(Math.random() * 2);
  }

  function resetGame() {
    setCurrentGameData((prevState) => {
      const resetScore = 0;
      const resetClicks = 0;
      const newAnswers = arrayOfPairs.map((pair) => pair[flipACoin()]);
      const resetButtons = arrayOfPairs.map(() => false);
      return {
        ...prevState,
        userScore: resetScore,
        clicks: resetClicks,
        answerArray: newAnswers,
        buttonDisabler: resetButtons,
      };
    });
  }

  function playWord(word: string) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
  }

  function answerCheck(selectedAnswer: string, index: number) {
    setCurrentGameData((prevState) => {
      const newButtonDisabler = [...prevState.buttonDisabler];
      newButtonDisabler[index] = true;

      let newUserScore = prevState.userScore;
      let clickCount = prevState.clicks;
      if (selectedAnswer === prevState.answerArray[index]) {
        newUserScore += 1;
      }

      let newTopScore = prevState.topScore;
      if (newUserScore > prevState.topScore) {
        newTopScore = newUserScore;
      }
      clickCount += 1;
      return {
        ...prevState,
        userScore: newUserScore,
        topScore: newTopScore,
        clicks: clickCount,
        buttonDisabler: newButtonDisabler,
      };
    });
  }
  return (
    <>
      <GameSelectionNavbar />
      <div className='flex '></div>
      {currentGameData.clicks !== arrayOfPairs.length ? (
        <div className='min-h-screen bg-slate-50 flex justify-center items-center'>
          <div className='bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4'>
            <div>
              <h3 className='flex justify-center items-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500 mb-4'>
                Minimal Pairs
              </h3>
            </div>
            <label
              htmlFor='minimalPairs'
              className=' text-center block mb-2 text-sm font-medium text-gray-900'
            >
              Which pair will you practice?
            </label>
            <select
              className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3'
              name=''
              id='minimalPairs'
            >
              <option value=''>Please choose a pair to practice</option>
              {arrayOfMinimalPairChoices.map((item, index) => {
                return (
                  <option value='' key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
            <table className='w-full'>
              <tbody>
                {arrayOfPairs.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className='flex justify-start items-center mb-4'
                    >
                      <td className='px-2'>
                        <button
                          className='bg-gradient-to-r from-blue-500 to-purple-600 border-none rounded-full py-2 px-4 shadow-lg mr-2 text-white font-bold leading-tight focus:outline-none focus:shadow-outline transform transition-transform duration-300 hover:scale-105 '
                          onClick={() => {
                            playWord(currentGameData.answerArray[index]);
                          }}
                        >
                          Play
                        </button>
                      </td>
                      <td className='px-2 flex justify-center items-center'>
                        <div className='flex rounded-full border  mx-auto bg-gradient-to-tr from-blue-200 via-blue-400 to-blue-600 p-1 shadow-lg leading-tight focus:outline-none focus:shadow-outline transform transition-transform duration-300 hover:scale-105'>
                          <button
                            onClick={() => {
                              answerCheck(item[0], index);
                            }}
                            className='flex font-bold rounded-full px-3 py-2 text-black bg-white disabled:opacity-80 '
                            disabled={currentGameData.buttonDisabler[index]}
                          >
                            {item[0]}
                          </button>
                        </div>
                      </td>
                      <td className='px-2 flex justify-center items-center'>
                        <div className='flex rounded-full border  mx-auto bg-gradient-to-tr from-blue-200 via-blue-400 to-blue-600 p-1 shadow-lg leading-tight focus:outline-none focus:shadow-outline transform transition-transform duration-300 hover:scale-105 '>
                          <button
                            onClick={() => {
                              answerCheck(item[1], index);
                            }}
                            className='flex font-bold rounded-full px-3 py-2 text-black bg-white disabled:opacity-80 '
                            disabled={currentGameData.buttonDisabler[index]}
                          >
                            {item[1]}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div>
              <h4 className='flex justify-center items-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500 mb-4'>
                Score {currentGameData.userScore}
              </h4>
            </div>
          </div>
        </div>
      ) : (
        <GameResult
          currentGameData={currentGameData}
          resetFunction={resetGame}
        />
      )}
    </>
  );
};

MinimalPairs.propTypes = {};

export default MinimalPairs;

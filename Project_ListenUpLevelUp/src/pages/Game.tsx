import { useEffect, useState } from 'react';

function Game() {
  const arrayOfPairs = [
    ['Bar', 'Pa'],
    ['Bear', 'Pear'],
    ['Bill', 'Pill'],
    ['Cub', 'Cup'],
  ];

  const [answers, setAnswers] = useState({
    answerOne: 0,
    answerTwo: 0,
    answerThree: 0,
    answerFour: 0,
  });

  const answerArray = [
    answers.answerOne,
    answers.answerTwo,
    answers.answerThree,
    answers.answerFour,
  ];

  function flipACoin() {
    return Math.floor(Math.random() * 2);
  }

  function playWord(word: string) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
  }

  useEffect(() => {
    setAnswers((prevState) => ({
      ...prevState,
      answerOne: flipACoin(),
      answerTwo: flipACoin(),
      answerThree: flipACoin(),
      answerFour: flipACoin(),
    }));
  }, []);

  return (
    <>
      <div className='min-h-screen bg-slate-50 flex justify-center items-center'>
        <div className='bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4'>
          <div>
            <h3 className='flex justify-center items-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500 mb-4'>
              Game Page
            </h3>
          </div>
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
                          playWord(item[answerArray[index]]);
                        }}
                      >
                        Play
                      </button>
                    </td>
                    <td className='px-2 flex justify-center items-center'>
                      <div className='flex rounded-full border  mx-auto bg-gradient-to-tr from-blue-200 via-blue-400 to-blue-600 p-1 shadow-lg leading-tight focus:outline-none focus:shadow-outline transform transition-transform duration-300 hover:scale-105'>
                        <button className='flex font-bold rounded-full px-3 py-2 text-black bg-white '>
                          {item[0]}
                        </button>
                      </div>
                    </td>
                    <td className='px-2 flex justify-center items-center'>
                      <div className='flex rounded-full border  mx-auto bg-gradient-to-tr from-blue-200 via-blue-400 to-blue-600 p-1 shadow-lg leading-tight focus:outline-none focus:shadow-outline transform transition-transform duration-300 hover:scale-105'>
                        <button className='flex font-bold rounded-full px-3 py-2 text-black bg-white'>
                          {item[1]}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Game;

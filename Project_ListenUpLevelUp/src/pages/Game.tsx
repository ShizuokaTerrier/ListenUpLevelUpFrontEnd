import { index } from '@material-tailwind/react/types/components/select';
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
      <body className='min-h-screen bg-slate-50 flex justify-center items-center '>
        <div className='bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4'>
          <div>
            <h3 className='p-5 text-center sm:text-left font-extrabold'>
              Game Page
            </h3>
          </div>
          <tbody className=''>
            {arrayOfPairs.map((item: string[], index: index) => {
              return (
                <tr key={index}>
                  <div className='flex justify-start'>
                    <button
                      className=' bg-blue-500 border rounded-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
                      onClick={() => {
                        playWord(item[answerArray[index]]);
                      }}
                    >
                      Play
                    </button>
                    <button className=' p-2'>{item[0]}</button>
                    <button className=' p-2'>{item[1]}</button>
                  </div>
                </tr>
              );
            })}
          </tbody>
        </div>
      </body>
    </>
  );
}

export default Game;

import { index } from '@material-tailwind/react/types/components/select';
import React, { useEffect, useState } from 'react';

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

  function flipACoin() {
    return Math.floor(Math.random() * 2);
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

  const answerArray = [
    answers.answerOne,
    answers.answerTwo,
    answers.answerThree,
    answers.answerFour,
  ];

  return (
    <>
      <div>
        <h1>Game Page</h1>
      </div>
      <tbody>
        {arrayOfPairs.map((item: string[], index: index) => {
          return (
            <tr key={index}>
              <div>
                <button>Play</button>
                <button>{item[0]}</button>
                <button>{item[1]}</button>
              </div>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}

export default Game;

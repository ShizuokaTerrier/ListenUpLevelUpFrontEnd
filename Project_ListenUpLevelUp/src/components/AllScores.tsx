import { useEffect, useState } from 'react';
import useAccessToken from '../custom_hooks/useAccessToken';
import {
  AllScoresObjectInterface,
  CurrentGameData,
} from '../interfaces/interfaces';
import { useAuth0 } from '@auth0/auth0-react';

function AllScores({ currentGameData }: CurrentGameData) {
  const accessToken = useAccessToken();
  const { user } = useAuth0();
  const userId = user?.sub as string;

  const [topScores, setTopScores] = useState<AllScoresObjectInterface[]>([]);

  useEffect(() => {
    const updateScores = async () => {
      if (accessToken) {
        try {
          const body = {
            value: currentGameData.userScore,
            gameId: 1,
            userId: userId,
          };
          console.log('This is the body', body);
          const response = await fetch(
            `${import.meta.env.VITE_APP_API_SERVER_URL}scores`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
              },
              body: JSON.stringify(body),
            }
          );
          if (!response.ok) {
            console.error(`${response.status}`);
          } else {
            console.log('Successfully updates scores');
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    const handleScores = async () => {
      try {
        const checkAllScores = await fetch(
          `${import.meta.env.VITE_APP_API_SERVER_URL}scores`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const data = await checkAllScores.json();
        setTopScores(data);
        console.log('Got the scores', data);
      } catch (error) {
        console.log('Could not fetch scores');
      }
    };

    if (accessToken) {
      updateScores().then(handleScores);
    }
  }, [accessToken, userId, currentGameData.userScore]);
  console.log(topScores);
  return (
    <div className='bg-slate-50 flex justify-center items-center p-10'>
      <div className='flex-col bg-white shadow-md rounded-3xl px-8 pt-4 pb-8 mb-2'>
        <h3 className=' flex justify-center items-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500 mb-4'>
          All Time Top Scores
        </h3>
        <table>
          <tbody>
            <tr>
              <th className='m-2 px-3 py-4 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500'>
                Value
              </th>
              <th className='m-2 px-3 py-4 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500'>
                userId
              </th>
              <th className='m-2 px-3 py-4 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500'>
                Date
              </th>
            </tr>
            {topScores.map((item) => {
              return (
                <tr>
                  <td className='m-2 px-3 font-semibold'>{item.value}</td>
                  <td className='m-2 px-3 font-semibold'>{item.userId}</td>
                  <td className='m-2 px-3 font-semibold'>{item.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllScores;

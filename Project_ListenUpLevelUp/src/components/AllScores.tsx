import { useEffect } from 'react';
import useAccessToken from '../custom_hooks/useAccessToken';

function AllScores() {
  const accessToken = useAccessToken();

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
      console.log('Got the scores', data);
    } catch (error) {
      console.log('Could not fetch scores');
    }
  };

  useEffect(() => {
    handleScores();
  }, []);
  console.log(accessToken);
  console.log(import.meta.env.VITE_APP_API_SERVER_URL);
  return <div>AllScores</div>;
}

export default AllScores;

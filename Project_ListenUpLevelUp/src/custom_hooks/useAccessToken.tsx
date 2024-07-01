import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const useAccessToken = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const fetchAccessToken = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();
          setAccessToken(token);
        } catch (error) {
          console.error('Failed to fetch access token:', error);
        }
      }
    };

    fetchAccessToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  return accessToken;
};

export default useAccessToken;

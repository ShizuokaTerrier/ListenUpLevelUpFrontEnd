import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const handleLogin = async () => {
    await loginWithRedirect();
  };
  return (
    !isAuthenticated && (
      <button
        className='bg-gradient-to-r from-blue-500 to-purple-600 border-none rounded-full py-2 px-4 shadow-lg mr-2 text-white font-bold leading-tight focus:outline-none focus:shadow-outline transform transition-transform duration-300 hover:scale-105 '
        onClick={handleLogin}
      >
        Log In
      </button>
    )
  );
}

export default LoginButton;

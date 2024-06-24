import { useAuth0 } from '@auth0/auth0-react';

function SignUpButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      authorizationParams: { screen_hint: 'signup' },
    });
  };
  return (
    !isAuthenticated && (
      <button
        className='bg-gradient-to-r from-blue-500 to-purple-600 border-none rounded-full py-2 px-4 shadow-lg mr-2 text-white font-bold leading-tight focus:outline-none focus:shadow-outline transform transition-transform duration-300 hover:scale-105 '
        onClick={handleSignUp}
      >
        Sign up
      </button>
    )
  );
}

export default SignUpButton;

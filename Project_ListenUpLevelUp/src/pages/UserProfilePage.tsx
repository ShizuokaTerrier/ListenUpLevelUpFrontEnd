import { useAuth0 } from '@auth0/auth0-react';

function UserProfilePage() {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <body className='min-h-screen bg-slate-100 flex justify-center items-center'>
      <div className=' bg-white shadow-md rounded-xl px-8 pt-4 m-20'>
        <div>
          <h1 className=' text-center p-5 sm:text-left font-extrabold'>
            Hello {user.given_name} {user.family_name}
          </h1>
        </div>
        <div className='flex m-6 justify-center '>
          <img src={user.picture} alt='' />
        </div>
        <div className='flex m-6 justify-center '>
          <p>Thanks for being a LULU英語 user!</p>
        </div>
      </div>
    </body>
  );
}

export default UserProfilePage;

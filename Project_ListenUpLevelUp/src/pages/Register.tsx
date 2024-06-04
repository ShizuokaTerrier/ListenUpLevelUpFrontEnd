import { useState } from 'react';

function Register() {
  // Register a new account

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // handler functions for inputs

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <body className='min-h-screen bg-slate-50 flex justify-center items-center'>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div>
            <h3 className='p-5 text-center sm:text-left font-extrabold'>
              Create an Account
            </h3>
          </div>
          <div className=''>
            <form action=''>
              <div className=' mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor=''
                >
                  Username
                </label>
                <input
                  onChange={handleUsername}
                  value={username}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
                  name=''
                  id=''
                />
              </div>
              <div className=' mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor=''
                >
                  Email
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
                  name=''
                  id=''
                />
              </div>
              <div className=' mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor=''
                >
                  Password
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
                  name=''
                  id=''
                />
              </div>
              <div className='flex justify-center'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}

export default Register;

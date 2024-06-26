import { ChangeEvent, FormEvent, useState } from 'react';
import { FormData } from '../interfaces/interfaces';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log('Form Submitted', formData);
    try {
      const registerNewUser = await fetch('http://localhost:8000/user', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!registerNewUser.ok) {
        throw new Error('Attempt to register a new user was unsuccessful');
      }
      const data = await registerNewUser.json();
      console.log('User registered successfuly', data);
      navigate('/');
    } catch (error) {
      console.error('Error registering new user', error);
    }
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
            <form onSubmit={handleSubmit}>
              <div className=' mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor=''
                >
                  Username
                </label>
                <input
                  onChange={handleChange}
                  value={formData.username}
                  name='username'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
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
                  onChange={handleChange}
                  value={formData.email}
                  name='email'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
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
                  onChange={handleChange}
                  value={formData.password}
                  name='password'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='password'
                  id=''
                />
              </div>
              <div className='flex justify-center'>
                <button
                  type='submit'
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
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

import { useState, ChangeEvent, FormEvent } from 'react';
import { FormData } from '../interfaces/interfaces';
import { useNavigate } from 'react-router-dom';
import LoginButton from '../components/LoginButton';

function Login() {
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
      const registerNewUser = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!registerNewUser.ok) {
        throw new Error('Attempt to log in user was unsuccessful');
      }
      const data = await registerNewUser.json();
      console.log('User logged in successfuly', data);
      navigate('/');
    } catch (error) {
      console.error('Error logging in', error);
    }
  };
  return (
    <>
      <LoginButton />
      <body className='min-h-screen bg-slate-50 flex justify-center items-center'>
        <div className='bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4'>
          <div>
            <h3 className='p-5 text-center sm:text-left font-extrabold'>
              Login
            </h3>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className=' mb-4'>
                <label
                  className=' block text-gray-700 text-sm font-bold mb-2'
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
                />
              </div>
              <div className=' mb-4'>
                <label
                  className=' block text-gray-700 text-sm font-bold mb-2'
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
                />
              </div>
              <div className='flex justify-center'>
                <button
                  type='submit'
                  className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}

export default Login;

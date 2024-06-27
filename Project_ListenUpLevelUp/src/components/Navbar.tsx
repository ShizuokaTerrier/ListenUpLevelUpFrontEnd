import { Link } from 'react-router-dom';
import '../App.css';
import mainImage from '../assets/listening.png';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  return (
    <div>
      <nav className='p-5 bg-white shadow'>
        <ul className='flex justify-between items-center'>
          <Link to='/'>
            <span>
              <img className='h-10 inline' src={mainImage} alt='' />
            </span>
          </Link>
          <li>
            <Link className='text-xl hover:text-cyan-500 duration-500' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link
              className='text-xl hover:text-cyan-500 duration-500'
              to='/about'
            >
              About
            </Link>
          </li>
          <li>
            {isAuthenticated && (
              <Link
                className='text-xl hover:text-cyan-500 duration-500'
                to='/profile'
              >
                Profile
              </Link>
            )}
          </li>
          <li>
            {!isAuthenticated && (
              <>
                <SignUpButton />
              </>
            )}
          </li>
          <li>
            {!isAuthenticated && (
              <>
                <LoginButton />
              </>
            )}
          </li>
          <li>
            {isAuthenticated && (
              <>
                <LogoutButton />
              </>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

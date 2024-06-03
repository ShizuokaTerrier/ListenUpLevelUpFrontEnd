import { Link } from 'react-router-dom';
import '../App.css';
import mainImage from '../assets/listening.png';

function Navbar() {
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
            <Link
              className='text-xl hover:text-cyan-500 duration-500'
              to='/register'
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              className='text-xl hover:text-cyan-500 duration-500'
              to='/login'
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

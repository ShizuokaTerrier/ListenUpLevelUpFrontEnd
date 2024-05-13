import { Link } from 'react-router-dom';
import '../App.css';
import mainImage from '../assets/listening.png';

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <ul>
          <img className='logo' src={mainImage} alt='' />
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

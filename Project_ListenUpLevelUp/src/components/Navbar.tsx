import '../App.css';
import mainImage from '../assets/listening.png';

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <ul>
          <img className='logo' src={mainImage} alt='' />
          <li>Home</li>
          <li>About</li>
          <li>Register/Login</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

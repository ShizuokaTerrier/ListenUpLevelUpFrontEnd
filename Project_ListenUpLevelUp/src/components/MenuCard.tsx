import { MenuCardProps } from '../interfaces/interfaces';
import { Link } from 'react-router-dom';

const MenuCard = ({ menuCardProps }: MenuCardProps) => {
  return (
    <div>
      <div className=' max-w-sm rounded-3xl overflow-hidden shadow-lg m-2 hover:scale-105 hover:text-cyan-500 duration-500 hover:shadow-lg'>
        <img src='' alt='' />
        <div className='px-6 py-4'>
          <Link to={menuCardProps.link}>
            <h3 className=' font-bold text-xl mb-2 text-center'>
              {menuCardProps.header}
            </h3>
          </Link>
          <p className=' text-gray-700 text-base text-center'>
            {menuCardProps.lineOne} <br /> {menuCardProps.lineTwo}
          </p>
        </div>
        <div className='px-6 pt-4 pb-2 '>
          <span className=' inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #Listening
          </span>
          <span className=' inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #Pronunciation
          </span>
          <span className=' inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #Pronunciation Awareness
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

import { MenuCardProps } from '../interfaces/interfaces';

const MenuCard: React.FC<{ menuCardProps: MenuCardProps }> = ({
  menuCardProps,
}) => {
  return (
    <div>
      <div className=' max-w-sm rounded overflow-hidden shadow-lg m-2'>
        <img src='' alt='' />
        <div className='px-6 py-4'>
          <h3 className=' font-bold text-xl mb-2 text-center'>
            {menuCardProps.header}
          </h3>
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

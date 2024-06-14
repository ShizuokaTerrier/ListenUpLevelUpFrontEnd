function Home() {
  return (
    <body className='min-h-screen bg-slate-50 flex justify-center items-start'>
      <div>
        <h1 className='text-center sm:text-left text-3xl font font-medium p-5'>
          Listen Up Level Up
        </h1>
        <p className='p-5'>
          Listen Up Level Up is a web app on a mission to boost your English
          listening skills by honing your ability to recognize and understand
          specific English sounds.
        </p>
        <div className='max-w-sm rounded overflow-hidden shadow-lg lg:flex '>
          <img src='' alt='' />
          <div className='px-6 py -4 items-center'>
            <h3 className=' font-bold text-xl mb-2 text-center'>
              Minimal Pairs Games
            </h3>
            <p className=' text-gray-700 text-base text-center'>
              Two words that differ by one sound only. <br /> Can you tell the
              difference?
            </p>
          </div>
          <div className='px-6 pt-4 pb-2'>
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
    </body>
  );
}

export default Home;

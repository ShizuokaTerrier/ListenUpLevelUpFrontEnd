import GameMenu from '../components/GameMenu';

function Home() {
  return (
    <body className='min-h-screen bg-slate-50'>
      <div>
        <h1 className='text-center sm:text-left text-3xl font font-medium p-5'>
          Listen Up Level Up
        </h1>
        <p className='p-5 text-center'>
          Listen Up Level Up is a web app on a mission to boost your English
          listening skills <br /> Hone your ability to recognize and understand
          specific English sounds.
        </p>
      </div>
      <GameMenu />
    </body>
  );
}

export default Home;

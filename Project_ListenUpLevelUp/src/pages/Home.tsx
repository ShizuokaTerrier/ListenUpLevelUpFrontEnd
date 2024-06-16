import MenuCard from '../components/MenuCard';

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
      <div className='flex mb-4 justify-center flex-wrap'>
        <MenuCard
          menuCardProps={{
            header: 'Minimal Pairs Game',
            lineOne: 'Two words that differ by one word only.',
            lineTwo: 'Can you tell the difference?',
          }}
        />
        <MenuCard
          menuCardProps={{
            header: 'Dictation Machine',
            lineOne: 'Dictation challenges',
            lineTwo: 'Can you catch what the computer is saying?',
          }}
        />
        <MenuCard
          menuCardProps={{
            header: 'Syllable Session',
            lineOne: 'Surely syllables are simple, right?',
            lineTwo: 'Count them and see!',
          }}
        />
        <MenuCard
          menuCardProps={{
            header: 'IPA Drill',
            lineOne: 'Learn all the IPA symbols',
            lineTwo: 'Just listen and click!',
          }}
        />
        <MenuCard
          menuCardProps={{
            header: 'Minimal Pairs Journey',
            lineOne: 'Listen to the words.',
            lineTwo: 'Follow them to the end of the road!',
          }}
        />
        <MenuCard
          menuCardProps={{
            header: 'IPA to English',
            lineOne: 'Read the IPA',
            lineTwo: 'Then write the word!',
          }}
        />
      </div>
    </body>
  );
}

export default Home;

import MinimalPairs from '../components/MinimalPairs';
import { useState } from 'react';

const gamesSelection = {
  minamalPairs: <MinimalPairs />,
};

function Game() {
  const [view, setView] = useState(gamesSelection.minamalPairs);

  return <>{view}</>;
}

export default Game;

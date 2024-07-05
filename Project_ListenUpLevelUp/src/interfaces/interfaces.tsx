import { ReactNode } from 'react';

export interface FormData {
  username: string;
  email: string;
  password: string;
}

export interface MenuCardProps {
  menuCardProps: {
    header: string;
    lineOne: string;
    lineTwo: string;
    link: string;
  };
}

export interface GameState {
  userEmail: string;
  userScore: number;
  topScore: number;
  clicks: number;
  answerArray: string[];
  buttonDisabler: boolean[];
}

export interface CurrentGameData {
  currentGameData: GameState;
  resetFunction: () => void;
}

export interface AllScoresObjectInterface {
  id: number;
  value: number;
  gameId: number;
  userId: string;
  createdAt: string;
}

export interface AuthProviderWithNavigateProps {
  children: ReactNode;
}

export interface AuthenticationGuardProps {
  component: React.ComponentType<object>;
}

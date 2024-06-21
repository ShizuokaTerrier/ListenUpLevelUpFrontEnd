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

export interface CurrentGameData {
  currentGameDataProps: {
    userScore: number;
    topScore: number;
  };
}

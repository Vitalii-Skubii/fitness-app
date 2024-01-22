import { IState } from './stateTypes';

export interface CardProps {
  pic: string;
  option: string;
  onChooseClick: (option: string) => void;
  state: IState;
}

export interface  GoalCardProps extends Omit<CardProps,'state'>{}
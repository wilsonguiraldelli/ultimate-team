import { GameDay } from 'game-day/types';
import { createReducer } from 'typesafe-actions';

type State = Readonly<{
  isLoading: boolean,
  days: GameDay[],
}>;

const INITIAL_STATE: State = {
  isLoading: false,
  days: [],
};

const reducer: any = createReducer(INITIAL_STATE);

export { reducer };

import { GameDay } from 'game-days/types';
import { createReducer } from 'typesafe-actions';

import * as actions from './actions';

type State = Readonly<{
  isLoading: boolean,
  days: GameDay[],
  current: GameDay | undefined | null,
}>;

const INITIAL_STATE: State = {
  isLoading: false,
  days: [],
  current: undefined,
};

const reducer: any = createReducer(INITIAL_STATE)
  .handleAction(actions.create, (state: State, { payload }: any) => ({
    ...state,
    days: [payload, ...state.days],
    current: payload,
  }))

export { reducer };

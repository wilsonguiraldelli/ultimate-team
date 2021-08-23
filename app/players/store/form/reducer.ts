import { PlayerProps } from 'players/types';
import { createReducer } from 'typesafe-actions';

import * as actions from './actions';

type State = Readonly<{
  current?: PlayerProps,
}>;

const INITIAL_STATE: State = {
  current: undefined,
};

const reducer: any = createReducer(INITIAL_STATE)
  .handleAction(actions.setCurrent, (state: State, { payload }: any) => ({
    ...state,
    current: {
      ...payload.player,
      order: payload.index,
    },
  }))

export { reducer };

import { SaturdayProps } from 'saturday/types';
import { createReducer } from 'typesafe-actions';

import * as actions from './actions';

type State = Readonly<{
  data: SaturdayProps[],
  current: SaturdayProps | undefined | null,
}>;

const INITIAL_STATE: State = {
  data: [],
  current: undefined,
};

const reducer: any = createReducer(INITIAL_STATE)
  .handleAction(actions.create, (state: State, { payload }: any) => ({
    ...state,
    data: [{
      ...payload,
      players: [],
    },
    ...state.data],
    current: payload.id,
  }))

  .handleAction(actions.update, (state: State, { payload }: any) => ({
    ...state,
    data: payload,
  }))

  .handleAction(actions.select, (state: State, { payload }: any) => ({
    ...state,
    current: payload,
  }))

  .handleAction(actions.addPlayer, (state: State, { payload }: any) => ({
    ...state,
    data: state.data.map(saturday => {
      if (saturday.id === payload.saturday_id) {
        return ({
          ...saturday,
          players: payload.players,
        })
      }

      return saturday;
    })
  }))

export { reducer };

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
    data: [payload, ...state.data],
    current: payload,
  }))
  .handleAction(actions.select, (state: State, { payload }: any) => ({
    ...state,
    current: payload,
  }))

export { reducer };

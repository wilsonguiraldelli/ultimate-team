import { Player } from 'players/types';
import { createReducer } from 'typesafe-actions';
import uuid from 'react-native-uuid';

import * as actions from './actions';

type State = Readonly<{
  isLoading: boolean,
  data: Player[],
}>;

const INITIAL_STATE: State = {
  isLoading: false,
  data: [],
};

const reducer: any = createReducer(INITIAL_STATE)
  .handleAction(actions.add, (state: State, { payload }: any) => ({
    ...state,
    data: state.data.push({
      ...payload,
      id: uuid.v4(),
    }),
  }));

export { reducer };

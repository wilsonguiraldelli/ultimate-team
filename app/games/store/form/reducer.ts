import { createReducer } from 'typesafe-actions';

type State = Readonly<{
  isLoading: boolean,
}>;

const INITIAL_STATE: State = {
  isLoading: false,
};

const reducer: any = createReducer(INITIAL_STATE);

export { reducer };

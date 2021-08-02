import { combineReducers } from 'redux';
import {reducer as players} from 'players/store/reducer';

const reducer = combineReducers({
    players,
});

export { reducer };

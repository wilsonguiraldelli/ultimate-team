import { reducer as players } from 'players/store/reducer';
import { reducer as saturday } from 'saturday/store/reducer';
import { reducer as games } from 'games/store/reducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    saturday,
    players,
    games,
});

export { reducer };

import { reducer as players } from 'players/store/reducer';
import { reducer as gameDays } from 'game-days/store/reducer';
import { reducer as games } from 'games/store/reducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    gameDays,
    players,
    games,
});

export { reducer };

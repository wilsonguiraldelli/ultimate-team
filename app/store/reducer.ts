import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

import { reducer as players } from 'players/store/reducer';
import { reducer as gameDay } from 'game-day/store/reducer';
import { reducer as games } from 'games/store/reducer';
import { combineReducers } from 'redux';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const reducer = combineReducers({
    gameDay: persistReducer(persistConfig, gameDay),
    players: persistReducer(persistConfig, players),
    games: persistReducer(persistConfig, games),
});

export { reducer };

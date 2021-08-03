import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistCombineReducers } from 'redux-persist';
import { reducer as players } from 'players/store/reducer';

const reducer = persistCombineReducers({ storage: AsyncStorage, key: 'root' }, {
    players,
});

export { reducer };

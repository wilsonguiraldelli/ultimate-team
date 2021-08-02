import * as React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Navigator from 'services/navigator';

import { ListContainer as PlayersListContainer } from 'players/containers';

const Stack = createStackNavigator();

const Router: React.FC = () => (
  <React.Fragment>
    <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
    <NavigationContainer
      ref={Navigator.setContainer}
      onStateChange={(state) => {
        const currentScreen = Navigator.getRouteNameFromState(state);
        console.log(`[NAVIGATOR] navigated to ${currentScreen}.`);
      }}
    >
      <Stack.Navigator initialRouteName="players-list" headerMode="none">
        <Stack.Screen name="players-list" component={PlayersListContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  </React.Fragment>
);

export default Router;

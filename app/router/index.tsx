import * as React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Navigator from 'services/navigator';

import { ListContainer as SaturdayListContainer } from 'saturday/containers';
import { TabsStack } from './stacks/tabs';

const Stack = createStackNavigator();


const SaturdayStack = () => (
  <Stack.Navigator initialRouteName="saturday-list" headerMode="none">
    <Stack.Screen name="saturday-list" component={SaturdayListContainer} />
  </Stack.Navigator>
)

const Router: React.FC = () => {
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <NavigationContainer
        ref={Navigator.setContainer}
        onStateChange={(state) => {
          const currentScreen = Navigator.getRouteNameFromState(state);
          console.log(`[NAVIGATOR] navigated to ${currentScreen}.`);
        }}
      >
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={SaturdayStack} />
          <Stack.Screen name="Tabs" component={TabsStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};

export default Router;

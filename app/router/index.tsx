import * as React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'native-base';
import * as Navigator from 'services/navigator';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { ListContainer as PlayersListContainer } from 'players/containers';
import { ListContainer as GamesListContainer } from 'games/containers';

const Stack = createStackNavigator();
const Tabl = createBottomTabNavigator();

const PlayerStack = () => (
  <Stack.Navigator initialRouteName="players-list" headerMode="none">
    <Stack.Screen name="players-list" component={PlayersListContainer} />
  </Stack.Navigator>
);

const GamesStack = () => (
  <Stack.Navigator initialRouteName="games-list" headerMode="none">
    <Stack.Screen name="games-list" component={GamesListContainer} />
  </Stack.Navigator>
);


const Router: React.FC = () => {

  const { colors } = useTheme();

  console.log('COLORS', colors);

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
        <Tabl.Navigator
          initialRouteName="player"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let icon;

              if (route.name === 'Jogadores') {
                icon = focused
                  ? 'people'
                  : 'people-outline';
              } else {
                icon = focused
                  ? 'football'
                  : 'football-outline';
              }

              return <Ionicons name={icon} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: colors.primary[500],
          }}
        >
          <Tabl.Screen
            name="Jogadores"
            component={PlayerStack}
          />
          <Tabl.Screen
            name="Jogos"
            component={GamesStack}
          />
        </Tabl.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};

export default Router;

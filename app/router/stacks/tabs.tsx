import * as React from 'react';

import { Platform } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  ListContainer as PlayersListContainer,
  AddContainer as PlayersAddContainer,
  EditContainer as PlayersEditContainer,
  AnalyticsContainer as PlayersAnalyticsContainer
} from 'players/containers';

import { ListContainer as GamesListContainer } from 'games/containers';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const PlayerStack = () => (
  <Stack.Navigator initialRouteName="players-list" headerMode="none">
    <Stack.Screen name="players-list" component={PlayersListContainer} />
    <Stack.Screen
      name="players-add"
      component={PlayersAddContainer}
      options={Platform.OS === 'ios'
        ? {
          gestureEnabled: true,
          gestureDirection: 'vertical',
          cardStyleInterpolator: CardStyleInterpolators
            .forModalPresentationIOS,
        }
        : {}}
    />
    <Stack.Screen
      name="players-edit"
      component={PlayersEditContainer}
      options={Platform.OS === 'ios'
        ? {
          gestureEnabled: true,
          gestureDirection: 'vertical',
          cardStyleInterpolator: CardStyleInterpolators
            .forModalPresentationIOS,
        }
        : {}}
    />
    <Stack.Screen
      name="players-analytics"
      component={PlayersAnalyticsContainer}
      options={Platform.OS === 'ios'
        ? {
          gestureEnabled: true,
          gestureDirection: 'vertical',
          cardStyleInterpolator: CardStyleInterpolators
            .forModalPresentationIOS,
        }
        : {}}
    />
  </Stack.Navigator>
);

const GamesStack = () => (
  <Stack.Navigator initialRouteName="games-list" headerMode="none">
    <Stack.Screen name="games-list" component={GamesListContainer} />
  </Stack.Navigator>
);

const getCurrentRoute = ({ routes }: any) => {
  // Getting when open page is players-add to not show tab bar
  return routes?.[0]?.state?.index;
};

export const TabsStack: React.FC = () => {

  const { colors } = useTheme();

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="player"
        screenOptions={({ route, navigation }) => ({
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
          tabBarVisible: !getCurrentRoute(navigation.dangerouslyGetState()),
        })}
        tabBarOptions={{
          activeTintColor: colors.primary[500],
        }}
      >
        <Tab.Screen
          name="Jogadores"
          component={PlayerStack}
        />
        <Tab.Screen
          name="Jogos"
          component={GamesStack}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
};
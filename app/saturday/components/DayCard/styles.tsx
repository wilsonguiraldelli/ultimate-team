import { StyleSheet } from 'react-native';
import {theme} from 'native-base';

export function getStyles(_theme?: any) {
  return StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
    },

    editContainer: {
      width: 70,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.gray[400],
      borderTopLeftRadius: 6,
    },

    deleteContainer: {
      width: 70,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.red[700],
    }
  });
}


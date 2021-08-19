import { StyleSheet } from 'react-native';
import {theme} from 'native-base';

export function getStyles(_theme?: any) {
  return StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
    },

    deleteContainer: {
      width: 70,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.red[700],
      paddingLeft: 4,
      borderTopLeftRadius: 3,
    }
  });
}


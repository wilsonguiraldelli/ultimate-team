import { StyleSheet } from 'react-native';
import { theme } from 'native-base';

export function getStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: 6,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      backgroundColor: '#FFFF',
      marginVertical: 4,
      minHeight: 200,
    },

    playerContainer: {
      width: '100%',
      paddingHorizontal: 8,
      borderBottomWidth: 0.5,
      borderBottomColor: theme.colors.gray[200],
    }

  });
}


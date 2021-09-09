import { StyleSheet } from 'react-native';
import { theme } from 'native-base';

export function getStyles() {
  return StyleSheet.create({
    container: {
      height: 50,
      minWidth: 120,
      borderRadius: 60,
      paddingVertical: 8,
      paddingHorizontal: 12,
      margin: 4,
      backgroundColor: theme.colors.gray[100],
    },

    text: {
      color: theme.colors.gray[500],
    },

    positionContainer: {
      borderRadius: 50,
      padding: 4,
    },

    ZAG: {
      color: theme.colors.blue[400],
    },

    LT: {
      color: theme.colors.purple[400],
    },

    MC: {
      color: theme.colors.green[400],
    },

    VOL: {
      color: theme.colors.orange[400],
    },

    ATA: {
      color: theme.colors.red[400],
    },

  });
}


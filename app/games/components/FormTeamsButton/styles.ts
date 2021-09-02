import { StyleSheet } from 'react-native';

export function getStyles(theme: any) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary[500],
      padding: 16,
      borderRadius: 30,
      width: 300,
    },
  });
}


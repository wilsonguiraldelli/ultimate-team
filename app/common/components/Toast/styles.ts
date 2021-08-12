import { theme } from 'native-base';
import { StyleSheet } from 'react-native';

export function getStyles(_theme?: any) {
    return StyleSheet.create({
        container: {
            padding: 16,
            justifyContent: 'flex-start',
            flex: 1,
            borderRadius: 6,
        },

        row: {
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        text: {
            color: theme.colors.white,
        }
    });
}


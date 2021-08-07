import { StyleSheet } from 'react-native';

export function getStyles(_theme?: any) {
    return StyleSheet.create({
        container : {
            marginBottom: 16,
        },

        row: {
            padding: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        titleRow: {
            alignItems: 'center',
        },

        leftIcon: {
            marginRight: 8,
            borderRadius: 50,
        },

        rightIcon: {
            borderRadius: 50,
        },
    });
}

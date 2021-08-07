import { StyleSheet } from 'react-native';

export function getStyles(_theme?: any) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#FFF',
        },

        content: {
            flex: 1,
            padding: 16,
        },
    });
}


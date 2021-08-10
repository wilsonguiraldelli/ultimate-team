import { StyleSheet } from 'react-native';

export function getStyles(theme?: any) {
    return StyleSheet.create({
        modalContent: {
            marginBottom: 0,
            marginTop: 'auto',
            padding: 16,
        },

        placeholder: {
            fontSize: 12,
            color: theme.colors.gray[400],
        },

        icon: {
            borderRadius: 50,
        },

        headerRow: {
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    });
}


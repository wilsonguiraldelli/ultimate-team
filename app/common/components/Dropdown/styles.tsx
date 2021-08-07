import { StyleSheet } from 'react-native';

export function getStyles(theme?: any) {
    return StyleSheet.create({
        container: {
            backgroundColor: theme.colors.gray[50],
            padding: 16,
            borderRadius: 6,
            width: '100%',
        },

        label: {
            color: theme.colors.primary[500],
            fontSize: 12,
        },

        modalContent: {
            marginBottom: 0,
            marginTop: 'auto',
            padding: 16,
        },

        headerRow: {
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        icon: {
            borderRadius: 50,
        },

        placeholder: {
            fontSize: 12,
            color: theme.colors.gray[400],
        },

        value: {
            fontSize: 12,
        },

        errorText: {
            fontSize: 12,
            color: theme.colors.error[600],
        },
    });
}


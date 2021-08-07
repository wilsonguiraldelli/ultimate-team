import { StyleSheet } from 'react-native';

export function getStyles(theme?: any) {
    return StyleSheet.create({
        container: {
            backgroundColor: theme.colors.gray[50],
                padding: 16,
                borderRadius: 6,
        },

        label: {
            color: theme.colors.primary[500],
            fontSize: 12,
        },

        errorText: {
            fontSize: 12,
            color: theme.colors.error[600],
        },
    });
}


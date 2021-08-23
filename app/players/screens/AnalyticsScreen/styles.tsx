import { StyleSheet } from 'react-native';
import { theme } from 'native-base';

export function getStyles(_theme?: any) {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#FFF',
		},

		paying: {
			borderBottomWidth: 2,
			borderBottomColor: theme.colors.gray[300],
		},

		money: {
			borderBottomWidth: 2,
			borderBottomColor: theme.colors.green[300],
		},

		pix: {
			borderBottomWidth: 2,
			borderBottomColor: theme.colors.purple[300],
		},

		left: {
			borderBottomWidth: 2,
			borderBottomColor: theme.colors.red[300],
		},
	});
}


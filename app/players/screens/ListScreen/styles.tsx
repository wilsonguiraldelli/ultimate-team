import { StyleSheet } from 'react-native';

export function getStyles(_theme?: any) {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#FFF',
		},

		floatingButton: {
			position: 'absolute',
			bottom: 16,
			right: 16,
			borderRadius: 50,
			padding: 8,
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.25,
			shadowRadius: 3.84,

			elevation: 5,
		}
	});
}

